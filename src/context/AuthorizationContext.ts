import type { User } from "firebase/auth";
import { createContext } from "react";

export type AuthCredentials = {
    email: string;
    password: string;
    username: string;
    copyPassword: string;
};
export type repoDataType = {
    id: number;
    name: string;
    description: string;
    avatar: string;
    userName: string;
    language: string;
    userLink: string;
    link: string;
    date: string;
    stars: number;
    views: number;
    topics: string[];
};
export interface GitHubRepoItem {
    name: string;
    description: string | null;
    owner: {
        avatar_url: string;
        login: string;
        html_url: string;
    };
    created_at: string;
    topics: string[];
    stargazers_count: number;
    watchers_count: number;
    language: string | null;
    html_url: string;
    id: number;
}
interface AppContextType {
    repo: repoDataType | null;
    setRepo: (value: repoDataType | null) => void;
    reposArray: repoDataType[];
    setReposArray: (value: repoDataType[]) => void;
    error: string;
    setError: (value: string) => void;
    isAuthReady: boolean;
    user: User | null;
    setUser: (value: User | null) => void;
    signUpWithCredentials: (userData: AuthCredentials) => void;
    signInWithCredentials: (userData: AuthCredentials) => void;
    signInWithGoogle: () => void;
    signInWithGitHub: () => void;
    logout: () => void;
}

export const AuthorizationContext = createContext<AppContextType | null>(null);
