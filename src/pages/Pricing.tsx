import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, FileText, Building, Sparkles } from "lucide-react";

export default function Pricing() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground font-body">
              Choose the plan that fits your needs. Start free, upgrade when you're ready.
            </p>
          </div>

          {/* Agent Pricing */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">For Agents</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {/* Starter */}
              <Card className="relative">
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect for trying it out</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-display font-bold text-foreground">Free</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {[
                      "3 reports per month",
                      "Basic branding",
                      "PDF downloads",
                      "Email support"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-body">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/auth/sign-up">
                    <Button variant="outline" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Pro */}
              <Card className="relative border-primary shadow-lg">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For active agents</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-display font-bold text-foreground">$29</span>
                    <span className="text-muted-foreground font-body">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Unlimited reports",
                      "Custom branding & logo",
                      "Priority generation",
                      "Report history & templates",
                      "Priority support"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-body">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/auth/sign-up">
                    <Button variant="agent" className="w-full">
                      Start Pro Trial
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Developer Pricing */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Building className="w-5 h-5 text-accent" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">For Developers</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {/* Per Memo */}
              <Card>
                <CardHeader>
                  <CardTitle>Per Memo</CardTitle>
                  <CardDescription>Pay as you go</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-display font-bold text-foreground">$49</span>
                    <span className="text-muted-foreground font-body">/memo</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Full deal memo",
                      "Zoning analysis",
                      "Quick pro forma",
                      "DD checklist",
                      "PDF download"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-body">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/auth/sign-up">
                    <Button variant="outline" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Retainer */}
              <Card className="relative border-accent shadow-lg">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    Best Value
                  </span>
                </div>
                <CardHeader>
                  <CardTitle>Retainer</CardTitle>
                  <CardDescription>For active dealmakers</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-display font-bold text-foreground">$199</span>
                    <span className="text-muted-foreground font-body">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {[
                      "10 memos included",
                      "Priority generation",
                      "Memo history & templates",
                      "Team collaboration",
                      "Dedicated support",
                      "Additional memos at $35"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-body">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/auth/sign-up">
                    <Button variant="developer" className="w-full">
                      Start Retainer
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-cream-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "Can I try before I buy?",
                  a: "Yes! Agents get 3 free reports per month on the Starter plan. Developers can sign up and explore the platform before purchasing memos."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards through our secure payment processor."
                },
                {
                  q: "Can I cancel anytime?",
                  a: "Absolutely. Pro and Retainer subscriptions can be cancelled anytime. You'll retain access until the end of your billing period."
                },
                {
                  q: "Is my data secure?",
                  a: "Yes. All data is encrypted in transit and at rest. We never share your information with third parties."
                }
              ].map((faq, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <h3 className="font-display font-semibold text-foreground mb-2">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground font-body">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
