
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Jennifer Chen",
      role: "CEO & Co-founder",
      bio: "Former HR Tech executive with 15+ years experience in talent acquisition.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-founder",
      bio: "AI researcher with background in NLP and machine learning applications.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&auto=format&fit=crop&q=80"
    },
    {
      name: "Sarah Williams",
      role: "Head of Product",
      bio: "Product leader specialized in HR tech and SaaS platforms.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&auto=format&fit=crop&q=80"
    },
    {
      name: "David Park",
      role: "Head of AI Research",
      bio: "PhD in Computer Science with focus on conversational AI systems.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">SavvyHire</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
            We're on a mission to transform the hiring process with AI technology that makes recruitment more efficient, effective, and fair for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2023, SavvyHire emerged from our founders' firsthand experiences with the challenges of traditional hiring processes. After years in HR technology and AI research, Jennifer and Michael saw an opportunity to combine their expertise to create a solution that addresses the common pain points in recruitment.
            </p>
            <p className="text-muted-foreground mb-4">
              What began as a prototype for automating technical interviews quickly evolved into a comprehensive platform designed to transform the entire hiring journey – from resume screening to final candidate selection.
            </p>
            <p className="text-muted-foreground">
              Today, SavvyHire serves hundreds of companies across industries, helping them find better talent faster while reducing bias and improving candidate experience.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              We believe that hiring should be based on skills and potential, not connections or unconscious bias. Our mission is to democratize access to opportunities by creating technology that evaluates candidates fairly and efficiently.
            </p>
            <p className="text-muted-foreground mb-4">
              Through our AI-powered platform, we aim to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Save time for hiring teams so they can focus on meaningful candidate interactions</li>
              <li>Create standardized, fair assessment processes that minimize bias</li>
              <li>Improve candidate experience through responsive, intelligent interviews</li>
              <li>Provide data-driven insights that lead to better hiring decisions</li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden border-none shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <CardContent className="pt-4">
                  <h3 className="font-bold text-xl">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="mt-2 text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-secondary/30 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We're always looking for talented individuals who are passionate about transforming recruitment with AI. Check out our open positions or get in touch to learn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/careers">
              <Button size="lg">View Careers</Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
