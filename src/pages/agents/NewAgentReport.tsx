import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Home, 
  DollarSign, 
  User, 
  Building2,
  FileText,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function NewAgentReport() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <Layout>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium font-body">New Seller Report</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Create Your Seller Report
            </h1>
            <p className="text-muted-foreground font-body">
              Enter property details and comps to generate a comprehensive pricing analysis
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {/* Property Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Property Details
                  </CardTitle>
                  <CardDescription>
                    Enter the subject property information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="address">Property Address *</Label>
                    <Input 
                      id="address" 
                      placeholder="123 Main Street, City, State 12345" 
                      required 
                    />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="propertyType">Property Type *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single_family">Single Family</SelectItem>
                          <SelectItem value="condo">Condo</SelectItem>
                          <SelectItem value="townhouse">Townhouse</SelectItem>
                          <SelectItem value="multi_family">Multi-Family</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="beds">Beds</Label>
                      <Input id="beds" type="number" placeholder="3" min="0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="baths">Baths</Label>
                      <Input id="baths" type="number" placeholder="2" min="0" step="0.5" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sqft">Sqft</Label>
                      <Input id="sqft" type="number" placeholder="1,800" min="0" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="desiredPrice">Desired Listing Price</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input 
                          id="desiredPrice" 
                          type="number" 
                          placeholder="500,000" 
                          className="pl-8"
                          min="0" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Seller Timeline</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="30days">30 Days</SelectItem>
                          <SelectItem value="60-90days">60-90 Days</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comps */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-primary" />
                    Comparable Sales
                  </CardTitle>
                  <CardDescription>
                    Paste comparable sales data from your MLS or research
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="comps">Comps Summary *</Label>
                    <Textarea 
                      id="comps" 
                      placeholder="Paste your comparable sales here. Include address, sale price, beds, baths, sqft, and sale date for each comp..."
                      className="min-h-[180px]"
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      Tip: Include 3-6 recent comparable sales for best results
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea 
                      id="notes" 
                      placeholder="Any special features, recent renovations, or market conditions to consider..."
                      className="min-h-[100px]"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Agent Branding */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Your Branding
                  </CardTitle>
                  <CardDescription>
                    This information will appear on your branded PDF report
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="agentName">Your Name *</Label>
                      <Input id="agentName" placeholder="Jane Smith" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brokerage">Brokerage</Label>
                      <Input id="brokerage" placeholder="ABC Realty" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="agentEmail">Email</Label>
                      <Input id="agentEmail" type="email" placeholder="jane@abcrealty.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="agentPhone">Phone</Label>
                      <Input id="agentPhone" type="tel" placeholder="(555) 123-4567" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Button type="button" variant="outline" size="lg">
                  Save as Draft
                </Button>
                <Button 
                  type="submit" 
                  variant="agent" 
                  size="lg" 
                  disabled={isGenerating}
                  className="group"
                >
                  {isGenerating ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-pulse" />
                      Generating Report...
                    </>
                  ) : (
                    <>
                      Generate Report
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-muted-foreground font-body text-center">
                <strong>Disclaimer:</strong> AI-generated summary based on comps provided. Verify all data independently. Not legal or financial advice.
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
