import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold">
                PropIntel
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm font-body">
              AI-powered real estate intelligence for agents and developers.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-primary-foreground/90">
              Products
            </h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <Link to="/agents" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Agent Reports
                </Link>
              </li>
              <li>
                <Link to="/developers" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Developer Memos
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-primary-foreground/90">
              Company
            </h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-primary-foreground/90">
              Legal
            </h4>
            <ul className="space-y-2 text-sm font-body">
              <li>
                <Link to="/privacy" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm font-body">
            © {new Date().getFullYear()} PropIntel. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-xs font-body text-center sm:text-right max-w-md">
            AI-generated summaries. Verify zoning/regs with local authorities. Not legal/financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
