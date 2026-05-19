import { useState, type ReactNode, useEffect } from "react";
import {
    AuthorizationContext,
    type AuthCredentials,
    type GitHubRepoItem,
    type repoDataType,
    type SortType,
} from "./AuthorizationContext";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    type User,
} from "firebase/auth";
import { auth, githubProvider, signInWithGooglePopup } from "../services/firebase/firebase";
import { useNavigate } from "react-router";

interface AppContextProps {
    children: ReactNode;
}

export function AuthorizationContextProvider({ children }: AppContextProps) {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState("");
    const [isAuthReady, setIsAuthReady] = useState(false);
    const [searchItem, setSearchItem] = useState("");
    const [searchBy, setSeacrhBy] = useState("title");
    const [isActive, setIsActive] = useState(false);
    const [filter, setFilter] = useState<SortType[]>([]);

    const navigate = useNavigate();

    const token = import.meta.env.VITE_GITHUB_TOKEN;

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsAuthReady(true);
        });
        return () => unsubscribe();
    }, []);

    function signUpWithCredentials(userData: AuthCredentials): void {
        if (userData.password !== userData.copyPassword) {
            setError("Your passwords do not match.");
            return;
        }
        createUserWithEmailAndPassword(auth, userData.email, userData.password)
            .then((user) => {
                setError("");
                if (user.user) {
                    setUser(user.user);
                }
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                setError("Unexpected error ocured");
            });
    }

    function signInWithCredentials(userData: AuthCredentials) {
        signInWithEmailAndPassword(auth, userData.email, userData.password)
            .then((user) => {
                setError("");

                if (user.user) {
                    setUser(user.user);
                }

                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                setError("Unexpected error ocured");
            });
    }

    const signInWithGoogle = async () => {
        try {
            const responce = await signInWithGooglePopup();
            if (responce.user) {
                setUser(responce.user);
            }
        } catch (error) {
            console.error(error);
            console.log("Unexpected error ocured");
        }
        await navigate("/");
    };

    const signInWithGitHub = async () => {
        try {
            const responce = await signInWithPopup(auth, githubProvider);
            if (responce.user) {
                setUser(responce.user);
            }
            navigate("/");
        } catch (error) {
            console.error(error);
            setError("Unexpected error ocured");
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            navigate("/auth");
        } catch (error) {
            console.error("Ошибка при выходе:", error);
        }
    };

    const fetchPopularRepo = async (): Promise<repoDataType[] | undefined> => {
        try {
            const response = await fetch(
                "https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc&per_page=10",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: "application/vnd.github+json",
                    },
                },
            );
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            return data.items.map((item: GitHubRepoItem) => ({
                id: item.id,
                name: item.name,
                description: item.description,
                avatar: item.owner.avatar_url,
                userName: item.owner.login,
                userLink: item.owner.html_url,
                date: item.created_at,
                stars: item.stargazers_count,
                views: item.watchers_count,
                topics: item.topics,
                language: item.language,
                link: item.html_url,
                last_update: item.pushed_at,
                license: item.license,
                owner: item.owner.type,
                wiki: item.has_wiki,
            }));
        } catch (err) {
            console.error(err);
            return [];
        }
    };

    const fetchRepos = async (searchTerm: string): Promise<repoDataType[] | undefined> => {
        if (!searchTerm) return [];

        let fetchUrl: string = "";

        if (searchBy === "title") {
            fetchUrl = `https://api.github.com/search/repositories?q=${searchTerm}`;
        }
        if (searchBy === "author") {
            fetchUrl = `https://api.github.com/search/repositories?q=user:${searchTerm}`;
        }
        if (searchBy === "stack") {
            fetchUrl = `https://api.github.com/search/repositories?q=topic:${searchTerm}`;
        }
        const response = await fetch(fetchUrl);

        if (!response.ok) throw new Error("Ошибка при загрузке");

        const data = await response.json();
        console.log(data);

        return data.items.map((item: GitHubRepoItem) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            avatar: item.owner.avatar_url,
            userName: item.owner.login,
            userLink: item.owner.html_url,
            date: item.created_at,
            stars: item.stargazers_count,
            views: item.watchers_count,
            topics: item.topics,
            language: item.language,
            link: item.html_url,
            last_update: item.pushed_at,
            license: item.license,
            owner: item.owner.type,
            wiki: item.has_wiki,
        }));
    };

    const value = {
        filter,
        setFilter,
        isActive,
        setIsActive,
        searchBy,
        setSeacrhBy,
        searchItem,
        setSearchItem,
        error,
        fetchPopularRepo,
        fetchRepos,
        setError,
        isAuthReady,
        user,
        setUser,
        signUpWithCredentials,
        signInWithCredentials,
        signInWithGoogle,
        signInWithGitHub,
        logout,
    };
    return <AuthorizationContext.Provider value={value}>{children}</AuthorizationContext.Provider>;
}
