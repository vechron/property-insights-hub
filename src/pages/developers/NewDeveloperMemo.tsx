import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { 
  MapPin, 
  Scale, 
  Calculator, 
  DollarSign,
  Building,
  Sparkles,
  ArrowRight,
  Percent
} from "lucide-react";

export default function NewDeveloperMemo() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [capRate, setCapRate] = useState([5.5]);
  const [softCostPct, setSoftCostPct] = useState([20]);
  const [contingencyPct, setContingencyPct] = useState([10]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent mb-4">
              <Building className="w-4 h-4" />
              <span className="text-sm font-medium font-body">New Deal Memo</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Create Your Deal Memo
            </h1>
            <p className="text-muted-foreground font-body">
              Enter site details and zoning info to generate a comprehensive development analysis
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {/* Site Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    Site Details
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

                  <div className="space-y-2">
                    <Label htmlFor="parcelNotes">Parcel Notes</Label>
                    <Textarea 
                      id="parcelNotes" 
                      placeholder="Lot size, current use, topography, access, utilities..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="targetUse">Target Use</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select intended development type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="multifamily">Multifamily</SelectItem>
                        <SelectItem value="townhomes">Townhomes</SelectItem>
                        <SelectItem value="mixed-use">Mixed-Use</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="office">Office</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Zoning Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-5 h-5 text-accent" />
                    Zoning & Entitlements
                  </CardTitle>
                  <CardDescription>
                    Paste zoning information from city/county documents
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="zoningText">Zoning Code & Allowed Uses *</Label>
                    <Textarea 
                      id="zoningText" 
                      placeholder="Paste zoning code, allowed uses, density limits, FAR, etc..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="constraintsText">Development Standards & Constraints</Label>
                    <Textarea 
                      id="constraintsText" 
                      placeholder="Setbacks, height limits, parking requirements, open space, etc..."
                      className="min-h-[120px]"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Financial Assumptions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-accent" />
                    Financial Assumptions
                  </CardTitle>
                  <CardDescription>
                    Set your baseline assumptions for the quick pro forma
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="unitCount">Target Unit Count</Label>
                      <Input id="unitCount" type="number" placeholder="50" min="1" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="avgRent">Average Monthly Rent</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input id="avgRent" type="number" placeholder="2,500" className="pl-8" min="0" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label>Cap Rate</Label>
                        <span className="text-sm font-medium text-accent">{capRate[0]}%</span>
                      </div>
                      <Slider
                        value={capRate}
                        onValueChange={setCapRate}
                        min={3}
                        max={10}
                        step={0.25}
                        className="py-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="hardCost">Hard Cost per SF</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input id="hardCost" type="number" placeholder="250" className="pl-8" min="0" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label>Soft Cost %</Label>
                          <span className="text-sm font-medium text-accent">{softCostPct[0]}%</span>
                        </div>
                        <Slider
                          value={softCostPct}
                          onValueChange={setSoftCostPct}
                          min={10}
                          max={40}
                          step={1}
                          className="py-2"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label>Contingency %</Label>
                        <span className="text-sm font-medium text-accent">{contingencyPct[0]}%</span>
                      </div>
                      <Slider
                        value={contingencyPct}
                        onValueChange={setContingencyPct}
                        min={5}
                        max={20}
                        step={1}
                        className="py-2"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Context */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-accent" />
                    Additional Context
                  </CardTitle>
                  <CardDescription>
                    Optional information to improve analysis quality
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="compsText">Comparable Developments</Label>
                    <Textarea 
                      id="compsText" 
                      placeholder="Recent comparable developments in the area, including rents, sale prices, absorption..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="risksText">Known Risks & Concerns</Label>
                    <Textarea 
                      id="risksText" 
                      placeholder="Environmental issues, traffic concerns, community opposition, entitlement risks..."
                      className="min-h-[100px]"
                    />
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
                  variant="developer" 
                  size="lg" 
                  disabled={isGenerating}
                  className="group"
                >
                  {isGenerating ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-pulse" />
                      Generating Memo...
                    </>
                  ) : (
                    <>
                      Generate Memo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-muted-foreground font-body text-center">
                <strong>Disclaimer:</strong> AI-generated summary. Verify zoning/regs with local authorities. Not legal/financial advice.
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
