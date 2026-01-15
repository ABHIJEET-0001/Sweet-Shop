import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Mail, Lock, User, Loader2 } from "lucide-react";
import { z } from "zod";
import API from "@/api";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const signupSchema = loginSchema.extend({
  fullName: z.string().min(2),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords don't match",
});

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [errors, setErrors] = useState<any>({});

  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) navigate("/");
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    try {
      if (isLogin) {
        loginSchema.parse({ email, password });

        const res = await API.post("/auth/login", { email, password });

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        toast({ title: "Login Successful", description: "Welcome to Shiv Sweet" });
        navigate("/");
      } else {
        signupSchema.parse({ email, password, confirmPassword, fullName });

        const res = await API.post("/auth/register", {
          name: fullName,
          email,
          password,
          phone: "9999999999",
        });

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        toast({ title: "Account Created", description: "Welcome to Shiv Sweet" });
        navigate("/");
      }
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.response?.data?.message || "Invalid credentials",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{isLogin ? "Login" : "Sign Up"} - Shiv Sweet</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-xl">
          <h2 className="text-2xl text-center mb-4">
            {isLogin ? "Login" : "Create Account"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <Input
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            )}

            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {!isLogin && (
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            )}

            <Button className="w-full" disabled={isLoading}>
              {isLoading ? <Loader2 className="animate-spin" /> : isLogin ? "Login" : "Sign Up"}
            </Button>
          </form>

          <p className="text-center mt-4">
            {isLogin ? "No account?" : "Already have an account?"}{" "}
            <button className="text-blue-600" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Sign up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Auth;
