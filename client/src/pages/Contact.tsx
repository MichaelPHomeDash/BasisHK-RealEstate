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
        title: "Sequence Initiated",
        description: "Our strategists will intercept your signal shortly.",
      });
    }, 1500);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter leading-none">
              READY TO <br />
              <span className="text-primary">ASCEND?</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
              Access is limited. We only partner with agents ready to handle the volume. If you're ready to dominate your market, initiate the sequence below.
            </p>
            
            <div className="space-y-4 pt-8 border-t border-border/30">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-heading uppercase tracking-widest text-sm text-muted-foreground">System Status: Online</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="font-heading uppercase tracking-widest text-sm text-muted-foreground">Slots Available: Limited</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-500" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-heading uppercase tracking-wider text-xs text-muted-foreground">Agent Name</Label>
                <Input id="name" required className="bg-background/50 border-border/50 focus:border-primary rounded-none h-12" placeholder="Enter your name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="agency" className="font-heading uppercase tracking-wider text-xs text-muted-foreground">Agency</Label>
                <Input id="agency" required className="bg-background/50 border-border/50 focus:border-primary rounded-none h-12" placeholder="e.g. Midland, Centaline" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="font-heading uppercase tracking-wider text-xs text-muted-foreground">WhatsApp Number</Label>
                <Input id="whatsapp" type="tel" required className="bg-background/50 border-border/50 focus:border-primary rounded-none h-12" placeholder="+852" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="font-heading uppercase tracking-wider text-xs text-muted-foreground">Monthly Ad Budget (HKD)</Label>
                <Select>
                  <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary rounded-none h-12">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10k-30k">$10,000 - $30,000</SelectItem>
                    <SelectItem value="30k+">$30,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-heading uppercase tracking-wider text-xs text-muted-foreground">Mission Brief (Optional)</Label>
                <Textarea id="message" className="bg-background/50 border-border/50 focus:border-primary rounded-none min-h-[100px]" placeholder="Tell us about your current challenges..." />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full font-heading font-bold uppercase tracking-widest rounded-none h-14 text-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300">
                {isSubmitting ? "Processing..." : "Initiate Sequence"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
