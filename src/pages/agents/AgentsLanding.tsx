import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  TrendingUp, 
  MessageSquare, 
  Download,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  BarChart3
} from "lucide-react";

export default function AgentsLanding() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-primary/[0.02]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium font-body">For Real Estate Agents</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Win More Listings With
              <span className="block mt-2 text-primary">Data-Driven Insights</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Generate professional seller reports that showcase your expertise. Turn comps into compelling pricing scenarios and talking points.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/agents/new">
                <Button variant="agent" size="xl" className="group">
                  Create Your First Report
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
              Everything You Need to Impress Sellers
            </h2>
            <p className="text-muted-foreground font-body">
              Generate comprehensive reports that help you win listings and serve clients better
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: "Pricing Scenarios",
                description: "Get multiple pricing strategies with rationale and expected days on market for each."
              },
              {
                icon: BarChart3,
                title: "Market Signals",
                description: "Understand current market conditions based on the comps you provide."
              },
              {
                icon: MessageSquare,
                title: "Seller Talking Points",
                description: "Ready-to-use conversation starters to discuss pricing with sellers."
              },
              {
                icon: Clock,
                title: "Timeline Recommendations",
                description: "Smart suggestions based on seller goals and market conditions."
              },
              {
                icon: Users,
                title: "Branded Reports",
                description: "Professional PDFs with your name, brokerage, and contact info."
              },
              {
                icon: Download,
                title: "Instant Downloads",
                description: "Generate and download polished PDF reports in minutes."
              }
            ].map((feature, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
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
              Simple, Fast, Professional
            </h2>
            <p className="text-muted-foreground font-body">
              Create a stunning seller report in under 5 minutes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Enter Property Details",
                  description: "Address, beds, baths, sqft, and your desired price range."
                },
                {
                  step: "2",
                  title: "Paste Your Comps",
                  description: "Copy comparable sales data from your MLS or research."
                },
                {
                  step: "3",
                  title: "Download Report",
                  description: "Get a branded PDF with scenarios and talking points."
                }
              ].map((item, i) => (
                <div key={i} className="relative">
                  {i < 2 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                  )}
                  <div className="relative text-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-display text-2xl font-bold shadow-card">
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
          <Card className="bg-gradient-hero text-primary-foreground max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Impress Your Next Seller?
              </h2>
              <p className="text-primary-foreground/80 font-body max-w-xl mx-auto mb-8">
                Create your first AI-powered seller report today. No credit card required.
              </p>
              <Link to="/agents/new">
                <Button variant="hero" size="xl" className="group">
                  Create Report Now
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
            <strong>Disclaimer:</strong> AI-generated summary based on comps provided. Verify all data independently. 
            Not legal or financial advice. Always conduct your own market analysis.
          </p>
        </div>
      </section>
    </Layout>
  );
}
