import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isAgentSection = location.pathname.startsWith('/agents');
  const isDeveloperSection = location.pathname.startsWith('/developers');
  const isAuthPage = location.pathname.startsWith('/auth');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-hero flex items-center justify-center shadow-card group-hover:shadow-card-hover transition-shadow duration-300">
              <Building2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-semibold text-foreground">
              PropIntel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link to="/agents">
              <Button 
                variant={isAgentSection ? "default" : "ghost"} 
                size="sm"
              >
                For Agents
              </Button>
            </Link>
            <Link to="/developers">
              <Button 
                variant={isDeveloperSection ? "gold" : "ghost"} 
                size="sm"
              >
                For Developers
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="ghost" size="sm">
                Pricing
              </Button>
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {!isAuthPage && (
              <>
                <Link to="/auth/sign-in">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth/sign-up">
                  <Button variant="default" size="sm">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col gap-2">
              <Link to="/agents" onClick={() => setMobileMenuOpen(false)}>
                <Button variant={isAgentSection ? "default" : "ghost"} className="w-full justify-start">
                  For Agents
                </Button>
              </Link>
              <Link to="/developers" onClick={() => setMobileMenuOpen(false)}>
                <Button variant={isDeveloperSection ? "gold" : "ghost"} className="w-full justify-start">
                  For Developers
                </Button>
              </Link>
              <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Pricing
                </Button>
              </Link>
              <div className="h-px bg-border my-2" />
              <Link to="/auth/sign-in" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Sign In
                </Button>
              </Link>
              <Link to="/auth/sign-up" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="default" className="w-full">
                  Get Started
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
