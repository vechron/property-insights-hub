import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Eye, EyeOff, FileText, Building, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Role = "agent" | "developer" | null;

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [selectedRole, setSelectedRole] = useState<Role>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up
    console.log("Sign up:", { email, password, fullName, role: selectedRole });
  };

  return (
    <Layout showFooter={false}>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-lg">
          {/* Logo */}
          <div className="text-center mb-8 animate-fade-in">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center shadow-card">
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-2xl font-semibold text-foreground">
                PropIntel
              </span>
            </Link>
          </div>

          <Card className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Create your account</CardTitle>
              <CardDescription>
                Choose your role to get started with the right tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Role Selection */}
                <div className="space-y-3">
                  <Label>I am a...</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setSelectedRole("agent")}
                      className={cn(
                        "relative p-4 rounded-xl border-2 text-left transition-all duration-300",
                        selectedRole === "agent"
                          ? "border-primary bg-primary/5 shadow-card"
                          : "border-border hover:border-primary/30 hover:bg-muted/50"
                      )}
                    >
                      {selectedRole === "agent" && (
                        <CheckCircle2 className="absolute top-3 right-3 w-5 h-5 text-primary" />
                      )}
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        Real Estate Agent
                      </h3>
                      <p className="text-xs text-muted-foreground font-body">
                        Create seller reports & pricing analysis
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedRole("developer")}
                      className={cn(
                        "relative p-4 rounded-xl border-2 text-left transition-all duration-300",
                        selectedRole === "developer"
                          ? "border-accent bg-accent/5 shadow-card"
                          : "border-border hover:border-accent/30 hover:bg-muted/50"
                      )}
                    >
                      {selectedRole === "developer" && (
                        <CheckCircle2 className="absolute top-3 right-3 w-5 h-5 text-accent" />
                      )}
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                        <Building className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        Developer
                      </h3>
                      <p className="text-xs text-muted-foreground font-body">
                        Generate deal memos & zoning analysis
                      </p>
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground font-body">
                    Must be at least 8 characters
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={!selectedRole}
                  variant={selectedRole === "developer" ? "gold" : "default"}
                >
                  Create Account
                </Button>

                <p className="text-xs text-center text-muted-foreground font-body">
                  By signing up, you agree to our{" "}
                  <Link to="/terms" className="text-accent hover:underline">Terms of Service</Link>
                  {" "}and{" "}
                  <Link to="/privacy" className="text-accent hover:underline">Privacy Policy</Link>
                </p>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground font-body">
                  Already have an account?{" "}
                  <Link to="/auth/sign-in" className="text-accent hover:underline font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
