
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const featuresList = [
    {
      title: "AI Resume Analysis",
      description: "Our AI scans and evaluates resumes to identify top candidates based on skills, experience, and job requirements.",
      benefits: [
        "Save 80% of time spent reviewing resumes",
        "Rank candidates by match percentage",
        "Identify skill gaps and strengths",
        "Reduce unconscious bias in screening"
      ],
    },
    {
      title: "Virtual Interviews",
      description: "Conduct automated text or voice interviews that adapt to candidate responses in real-time.",
      benefits: [
        "Evaluate technical and soft skills",
        "Standardized questions for fair comparison",
        "24/7 interview availability",
        "Candidate-friendly experience"
      ],
    },
    {
      title: "Performance Analytics",
      description: "Get comprehensive reports on candidate performance with detailed insights and recommendations.",
      benefits: [
        "Objective scoring across key competencies",
        "Side-by-side candidate comparisons",
        "Customizable assessment criteria",
        "Decision-supporting insights"
      ],
    },
    {
      title: "Team Collaboration",
      description: "Share results, collaborate on evaluations, and streamline the hiring process across your team.",
      benefits: [
        "Role-based access controls",
        "Collaborative feedback tools",
        "Centralized communication",
        "Hiring pipeline visualization"
      ],
    },
  ];

  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful <span className="gradient-text">AI-Driven</span> Features
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            Our platform combines cutting-edge AI technology with intuitive design to 
            streamline your hiring process from start to finish.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {featuresList.map((feature, index) => (
            <Card key={index} className="border border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/signup">
            <Button size="lg" className="mr-4">Start Free Trial</Button>
          </Link>
          <Link to="/pricing">
            <Button size="lg" variant="outline">View Pricing</Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Features;
