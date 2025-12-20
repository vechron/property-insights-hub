import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  TrendingUp, 
  Building, 
  MapPin, 
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-hero opacity-[0.02]" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a2744' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium font-body">AI-Powered Real Estate Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Transform Property Data Into
              <span className="text-gradient block mt-2">Actionable Insights</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Generate professional, branded reports in minutes. Whether you're helping sellers price their home or analyzing development potential, PropIntel has you covered.
            </p>
          </div>

          {/* Split CTAs */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Agent Card */}
            <Card className="group relative overflow-hidden border-2 hover:border-primary/20 hover:shadow-xl transition-all duration-500 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <CardContent className="p-8 relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                
                <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
                  For Real Estate Agents
                </h2>
                <p className="text-muted-foreground font-body mb-6">
                  Create stunning seller reports with pricing scenarios, market signals, and talking points. Impress clients with data-driven insights.
                </p>
                
                <ul className="space-y-2.5 mb-8">
                  {["Pricing scenario analysis", "Comp-based recommendations", "Branded PDF reports"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-body text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Link to="/agents">
                  <Button variant="agent" size="lg" className="w-full group/btn">
                    Explore Agent Reports
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Developer Card */}
            <Card className="group relative overflow-hidden border-2 hover:border-accent/30 hover:shadow-xl transition-all duration-500 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <CardContent className="p-8 relative">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-7 h-7 text-accent" />
                </div>
                
                <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
                  For Developers
                </h2>
                <p className="text-muted-foreground font-body mb-6">
                  Generate deal memos with zoning analysis, HBU options, quick financial models, and due diligence checklists.
                </p>
                
                <ul className="space-y-2.5 mb-8">
                  {["Zoning & entitlement analysis", "Quick pro forma modeling", "Risk & DD checklists"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-body text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Link to="/developers">
                  <Button variant="developer" size="lg" className="w-full group/btn">
                    Explore Developer Memos
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-cream-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground font-body">
              From address to actionable report in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: MapPin,
                step: "01",
                title: "Enter Address & Details",
                description: "Input the property address, paste comps or zoning info, and add any relevant notes."
              },
              {
                icon: Sparkles,
                step: "02",
                title: "AI Analyzes Data",
                description: "Our AI processes your inputs to generate insights, scenarios, and recommendations."
              },
              {
                icon: FileText,
                step: "03",
                title: "Download Branded PDF",
                description: "Get a professionally formatted report ready to share with clients or stakeholders."
              }
            ].map((feature, i) => (
              <div key={i} className="relative group">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="font-display text-sm font-semibold text-accent">{feature.step}</span>
                </div>
                <Card className="h-full pt-8 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <CardContent className="relative p-8 md:p-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-primary-foreground/80 font-body max-w-xl mx-auto mb-8">
                Join real estate professionals who are saving hours on every listing and deal analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/auth/sign-up">
                  <Button variant="hero" size="xl">
                    Create Free Account
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="hero-outline" size="xl">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-muted-foreground font-body max-w-3xl mx-auto">
            <strong>Disclaimer:</strong> AI-generated summary. Verify zoning, regulations, and all data with local authorities. 
            Not legal or financial advice. Always conduct independent due diligence.
          </p>
        </div>
      </section>
    </Layout>
  );
}
