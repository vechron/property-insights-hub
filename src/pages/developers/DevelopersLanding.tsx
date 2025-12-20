import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building, 
  Scale, 
  Calculator, 
  AlertTriangle,
  ClipboardCheck,
  Download,
  ArrowRight,
  FileSpreadsheet,
  MapPin,
  Layers
} from "lucide-react";

export default function DevelopersLanding() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-accent/[0.03]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent mb-6 animate-fade-in">
              <Building className="w-4 h-4" />
              <span className="text-sm font-medium font-body">For Developers</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Analyze Deals Faster With
              <span className="block mt-2 text-gradient">AI-Powered Insights</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Generate comprehensive deal memos with zoning analysis, HBU options, quick pro formas, and due diligence checklists.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/developers/new">
                <Button variant="developer" size="xl" className="group">
                  Create Your First Memo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/auth/sign-up">
                <Button variant="outline" size="xl">
                  Sign Up Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-cream-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need for Deal Analysis
            </h2>
            <p className="text-muted-foreground font-body">
              From zoning to financial modeling, get the insights that matter
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Scale,
                title: "Zoning Summary",
                description: "Understand allowed uses, density, height limits, and setbacks from pasted zoning text."
              },
              {
                icon: Layers,
                title: "HBU Options",
                description: "Get highest and best use recommendations with potential blockers for each."
              },
              {
                icon: Calculator,
                title: "Quick Pro Forma",
                description: "Rough NOI, value estimates, and profit ranges based on your assumptions."
              },
              {
                icon: AlertTriangle,
                title: "Deal Killers",
                description: "Identify potential showstoppers before you invest more time and money."
              },
              {
                icon: ClipboardCheck,
                title: "DD Checklist",
                description: "Comprehensive due diligence items to verify with city and consultants."
              },
              {
                icon: Download,
                title: "Professional PDFs",
                description: "Download polished memos ready for investors and partners."
              }
            ].map((feature, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              From Address to Analysis
            </h2>
            <p className="text-muted-foreground font-body">
              Generate a comprehensive deal memo in under 10 minutes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Enter Site Details",
                  description: "Address, parcel notes, and any known site constraints."
                },
                {
                  step: "2",
                  title: "Paste Zoning Info",
                  description: "Copy zoning text, setbacks, and use restrictions from city docs."
                },
                {
                  step: "3",
                  title: "Set Assumptions",
                  description: "Unit counts, rents, cap rates, and cost assumptions for modeling."
                }
              ].map((item, i) => (
                <div key={i} className="relative">
                  {i < 2 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                  )}
                  <div className="relative text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-gold text-accent-foreground flex items-center justify-center mx-auto mb-4 font-display text-2xl font-bold shadow-gold">
                      {item.step}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-gold text-accent-foreground max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Analyze Your Next Deal?
              </h2>
              <p className="text-accent-foreground/80 font-body max-w-xl mx-auto mb-8">
                Create your first AI-powered deal memo today. No credit card required.
              </p>
              <Link to="/developers/new">
                <Button variant="hero" size="xl" className="group bg-foreground text-background hover:bg-foreground/90">
                  Create Memo Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-muted-foreground font-body max-w-3xl mx-auto">
            <strong>Disclaimer:</strong> AI-generated summary based on provided inputs. Verify zoning, regulations, and all data with local authorities. 
            Not legal or financial advice. Always conduct independent due diligence.
          </p>
        </div>
      </section>
    </Layout>
  );
}
