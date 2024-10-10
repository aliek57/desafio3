import { createContext, ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export type AuthContextData = {
    userProvider: UserProps | undefined;
    isAuthenticated: boolean;
    loading: boolean;
    signOut: () => void;
};

type UserProps = {
    id: string;
    name: string;
    email: string;
};

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [userProvider, setUserProvider] = useState<UserProps | undefined>();
    const [loading, setLoading] = useState(true);
    const isAuthenticated = !!userProvider;
    const navigate = useNavigate();
    const [redirectPath, setRedirectPath] = useState<string | null>(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserProvider({
                    id: user.uid,
                    name: user.displayName || "",
                    email: user.email || "",
                })
                if (redirectPath) {
                    navigate(redirectPath);
                    setRedirectPath(null);
                } else {
                    navigate("/");
                }
            } else {
                setUserProvider(undefined);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!loading) {
            if(!isAuthenticated && (window.location.pathname === "/tours" || window.location.pathname.startsWith("/tours/"))){
                navigate("/login");
            }
        }
    }, [isAuthenticated, loading, navigate]);

    const signOut = async () => {
        const auth = getAuth();
        try {
           await auth.signOut().then(() => {
               setUserProvider(undefined);
               navigate("/");
           })
        } catch (error) {
            console.error("Error during sign out:", error);
        }
    };

    return (
        <AuthContext.Provider
            value={{ userProvider, isAuthenticated, loading, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );
}