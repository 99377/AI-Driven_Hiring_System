
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started with AI-powered hiring.",
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        "Up to 10 open positions",
        "50 interview sessions per month",
        "AI resume screening",
        "Basic interview templates",
        "Email support",
        "7-day data retention"
      ],
      tooltip: "Best for teams of 1-5 people hiring occasionally"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with regular hiring needs.",
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        "Up to 25 open positions",
        "200 interview sessions per month",
        "Advanced resume analysis",
        "Custom interview templates",
        "Voice interview capability",
        "Priority email support",
        "30-day data retention"
      ],
      tooltip: "Best for teams of 5-20 people with dedicated HR",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with extensive hiring requirements.",
      monthlyPrice: 399,
      annualPrice: 319,
      features: [
        "Unlimited open positions",
        "Unlimited interview sessions",
        "Advanced analytics & reporting",
        "AI-driven candidate matching",
        "Team collaboration tools",
        "API access & integrations",
        "Dedicated account manager",
        "90-day data retention"
      ],
      tooltip: "Best for larger companies with high-volume hiring needs"
    }
  ];

  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Choose the plan that fits your hiring needs. Save 20% with annual billing.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <div className="bg-secondary/30 p-1 rounded-lg inline-flex">
              <button
                className={`px-4 py-2 rounded-md transition-all ${
                  billingCycle === "monthly"
                    ? "bg-background shadow-sm"
                    : "text-muted-foreground"
                }`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-md transition-all ${
                  billingCycle === "annual"
                    ? "bg-background shadow-sm"
                    : "text-muted-foreground"
                }`}
                onClick={() => setBillingCycle("annual")}
              >
                Annual <span className="text-xs text-primary">Save 20%</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`border ${plan.popular ? "border-primary shadow-md relative" : "border-border/50"}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/3">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="h-5 w-5 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-64">{plan.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    ${billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                  </span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/signup" className="w-full">
                  <Button variant={plan.popular ? "default" : "outline"} className="w-full">
                    Get Started
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Need a custom solution?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Contact our team for tailored pricing and features designed specifically for your organization's unique hiring requirements.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg">Contact Sales</Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
