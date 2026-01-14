import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t('contact.toast.title'),
        description: t('contact.toast.desc'),
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
              {t('contact.title')}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('contact.desc')}
            </p>
            
            <div className="space-y-6 pt-8 border-t border-border">
              <div>
                <h3 className="font-bold text-foreground mb-2">{t('contact.hours.title')}</h3>
                <p className="text-muted-foreground">{t('contact.hours.desc')}</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">{t('contact.email.title')}</h3>
                <p className="text-muted-foreground">contact@basishk.com</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-lg shadow-sm border border-border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium text-foreground">{t('contact.form.firstName')}</Label>
                  <Input id="firstName" required className="bg-background" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium text-foreground">{t('contact.form.lastName')}</Label>
                  <Input id="lastName" required className="bg-background" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="agency" className="text-sm font-medium text-foreground">{t('contact.form.agency')}</Label>
                <Input id="agency" required className="bg-background" placeholder="Company Name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">{t('contact.form.email')}</Label>
                <Input id="email" type="email" required className="bg-background" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-foreground">{t('contact.form.phone')}</Label>
                <Input id="phone" type="tel" required className="bg-background" placeholder="+852" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="text-sm font-medium text-foreground">{t('contact.form.budget')}</Label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder={t('contact.form.budget.placeholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5k-10k">HK$5,000 - HK$10,000</SelectItem>
                    <SelectItem value="10k-30k">HK$10,000 - HK$30,000</SelectItem>
                    <SelectItem value="30k+">HK$30,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-foreground">{t('contact.form.message')}</Label>
                <Textarea id="message" className="bg-background min-h-[120px]" placeholder={t('contact.form.message.placeholder')} />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full font-semibold h-12 bg-primary text-primary-foreground hover:bg-primary/90">
                {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
