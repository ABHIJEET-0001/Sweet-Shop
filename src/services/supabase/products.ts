import { createContext, useContext, useState, ReactNode } from "react";
import API from "@/api";

interface AuthContextType {
  user: any;
  loading: boolean;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      const res = await API.post("/auth/register", {
        name: fullName,
        email,
        password
      });
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      return { error: null };
    } catch (err: any) {
      return { error: err.response?.data || err };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      return { error: null };
    } catch (err: any) {
      return { error: err.response?.data || err };
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext)!;
}
