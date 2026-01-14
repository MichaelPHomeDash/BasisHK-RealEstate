import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Inquiry Received",
        description: "Thank you for contacting AuraRealtyHK. A representative will respond to your inquiry within 24 hours.",
      });
    }, 1500);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-16 items-start">
          
          {/* Text Content */}
          <div className="space-y-8 sticky top-24">
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Interested in our services? Please fill out the form to schedule a consultation with our marketing team. We look forward to discussing how we can assist in growing your real estate business.
            </p>
            
            <div className="space-y-6 pt-8 border-t border-border">
              <div>
                <h3 className="font-bold text-foreground mb-2">Office Hours</h3>
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">contact@aurarealtyhk.com</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-lg shadow-sm border border-border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</Label>
                  <Input id="firstName" required className="bg-background" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</Label>
                  <Input id="lastName" required className="bg-background" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="agency" className="text-sm font-medium text-foreground">Real Estate Agency</Label>
                <Input id="agency" required className="bg-background" placeholder="Company Name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</Label>
                <Input id="email" type="email" required className="bg-background" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</Label>
                <Input id="phone" type="tel" required className="bg-background" placeholder="+852" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="text-sm font-medium text-foreground">Marketing Budget (Monthly)</Label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5k-10k">HK$5,000 - HK$10,000</SelectItem>
                    <SelectItem value="10k-30k">HK$10,000 - HK$30,000</SelectItem>
                    <SelectItem value="30k+">HK$30,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-foreground">Message</Label>
                <Textarea id="message" className="bg-background min-h-[120px]" placeholder="Please describe your current marketing challenges..." />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full font-semibold h-12 bg-primary text-primary-foreground hover:bg-primary/90">
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
