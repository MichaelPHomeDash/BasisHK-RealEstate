import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "wouter";
import SEO from "@/components/SEO";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Building2, 
  Mail, 
  Phone, 
  MessageSquare, 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  Sparkles,
  Video,
  Bot,
  Target,
  Clock,
  Send
} from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  agency: string;
  email: string;
  phone: string;
  budget: string;
  services: string[];
  message: string;
}

const services = [
  { id: 'video', icon: Video, labelKey: 'contact.service.video', descKey: 'contact.service.video.desc' },
  { id: 'bot', icon: Bot, labelKey: 'contact.service.bot', descKey: 'contact.service.bot.desc' },
  { id: 'targeting', icon: Target, labelKey: 'contact.service.targeting', descKey: 'contact.service.targeting.desc' },
  { id: 'consultation', icon: Sparkles, labelKey: 'contact.service.consultation', descKey: 'contact.service.consultation.desc' },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { t, language } = useLanguage();
  const [, setLocation] = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    agency: '',
    email: '',
    phone: '',
    budget: '',
    services: [],
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const toggleService = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = t('contact.error.required');
      if (!formData.lastName.trim()) newErrors.lastName = t('contact.error.required');
      if (!formData.agency.trim()) newErrors.agency = t('contact.error.required');
    }

    if (step === 2) {
      if (!formData.email.trim()) {
        newErrors.email = t('contact.error.required');
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = t('contact.error.email');
      }
      if (!formData.phone.trim()) newErrors.phone = t('contact.error.required');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/pangmichael29@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          services: formData.services.join(', '),
          _subject: "New Lead from BasisHK Website",
          _captcha: "false",
          _template: "table"
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: t('contact.toast.title'),
          description: t('contact.toast.desc'),
        });
        setTimeout(() => {
          setIsSuccess(false);
          setLocation("/thank-you");
        }, 1500);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setDirection(1);
  }, [currentStep]);

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-8">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center">
          <motion.div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
              step < currentStep
                ? 'bg-primary text-primary-foreground'
                : step === currentStep
                ? 'bg-primary text-primary-foreground ring-4 ring-primary/20'
                : 'bg-muted text-muted-foreground'
            }`}
            initial={false}
            animate={{
              scale: step === currentStep ? 1.1 : 1,
            }}
          >
            {step < currentStep ? <Check className="w-5 h-5" /> : step}
          </motion.div>
          {step < 3 && (
            <div className={`w-12 md:w-20 h-1 mx-2 rounded-full transition-colors duration-300 ${
              step < currentStep ? 'bg-primary' : 'bg-muted'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <motion.div
      key="step1"
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
          {t('contact.step1.title')}
        </h2>
        <p className="text-muted-foreground">
          {t('contact.step1.desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-sm font-medium text-foreground flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            {t('contact.form.firstName')}
          </Label>
          <Input 
            id="firstName" 
            value={formData.firstName}
            onChange={(e) => updateFormData('firstName', e.target.value)}
            className={`bg-background h-12 ${errors.firstName ? 'border-destructive' : ''}`}
            placeholder="John"
          />
          {errors.firstName && (
            <p className="text-destructive text-xs">{errors.firstName}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-sm font-medium text-foreground flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            {t('contact.form.lastName')}
          </Label>
          <Input 
            id="lastName" 
            value={formData.lastName}
            onChange={(e) => updateFormData('lastName', e.target.value)}
            className={`bg-background h-12 ${errors.lastName ? 'border-destructive' : ''}`}
            placeholder="Doe"
          />
          {errors.lastName && (
            <p className="text-destructive text-xs">{errors.lastName}</p>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="agency" className="text-sm font-medium text-foreground flex items-center gap-2">
          <Building2 className="w-4 h-4 text-primary" />
          {t('contact.form.agency')}
        </Label>
        <Input 
          id="agency" 
          value={formData.agency}
          onChange={(e) => updateFormData('agency', e.target.value)}
          className={`bg-background h-12 ${errors.agency ? 'border-destructive' : ''}`}
          placeholder="Company Name"
        />
        {errors.agency && (
          <p className="text-destructive text-xs">{errors.agency}</p>
        )}
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      key="step2"
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
          {t('contact.step2.title')}
        </h2>
        <p className="text-muted-foreground">
          {t('contact.step2.desc')}
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
          <Mail className="w-4 h-4 text-primary" />
          {t('contact.form.email')}
        </Label>
        <Input 
          id="email" 
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData('email', e.target.value)}
          className={`bg-background h-12 ${errors.email ? 'border-destructive' : ''}`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="text-destructive text-xs">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-medium text-foreground flex items-center gap-2">
          <Phone className="w-4 h-4 text-primary" />
          {t('contact.form.phone')}
        </Label>
        <Input 
          id="phone" 
          type="tel"
          value={formData.phone}
          onChange={(e) => updateFormData('phone', e.target.value)}
          className={`bg-background h-12 ${errors.phone ? 'border-destructive' : ''}`}
          placeholder="+852 9XXX XXXX"
        />
        {errors.phone && (
          <p className="text-destructive text-xs">{errors.phone}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="budget" className="text-sm font-medium text-foreground flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          {t('contact.form.budget')}
        </Label>
        <Select value={formData.budget} onValueChange={(value) => updateFormData('budget', value)}>
          <SelectTrigger className="bg-background h-12">
            <SelectValue placeholder={t('contact.form.budget.placeholder')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5k-10k">HK$5,000 - HK$10,000</SelectItem>
            <SelectItem value="10k-30k">HK$10,000 - HK$30,000</SelectItem>
            <SelectItem value="30k+">HK$30,000+</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      key="step3"
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
          {t('contact.step3.title')}
        </h2>
        <p className="text-muted-foreground">
          {t('contact.step3.desc')}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {services.map((service) => {
          const Icon = service.icon;
          const isSelected = formData.services.includes(service.id);
          return (
            <motion.button
              key={service.id}
              type="button"
              onClick={() => toggleService(service.id)}
              className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                isSelected
                  ? 'border-primary bg-primary/5 shadow-md'
                  : 'border-border hover:border-primary/50 hover:bg-muted/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-semibold text-sm ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                    {t(service.labelKey)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {t(service.descKey)}
                  </p>
                </div>
              </div>
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-2 right-2"
                >
                  <Check className="w-4 h-4 text-primary" />
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-primary" />
          {t('contact.form.message')}
        </Label>
        <Textarea 
          id="message" 
          value={formData.message}
          onChange={(e) => updateFormData('message', e.target.value)}
          className="bg-background min-h-[120px] resize-none"
          placeholder={t('contact.form.message.placeholder')}
        />
      </div>
    </motion.div>
  );

  return (
    <Layout>
      <SEO 
        title={t('contact.title')}
        description={t('contact.desc')}
        url="/contact"
      />
      <div className="min-h-screen bg-background py-12 md:py-20 px-4">
        <div className="w-full max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('contact.desc')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Contact Info Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-6 md:p-8 border border-primary/10">
                <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                  {t('contact.info.title')}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{t('contact.hours.title')}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{t('contact.hours.desc')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{t('contact.email.title')}</h4>
                      <a href="mailto:contact@basishk.com" className="text-primary text-sm mt-1 hover:underline">
                        contact@basishk.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{t('contact.phone.title')}</h4>
                      <p className="text-muted-foreground text-sm mt-1">+852 XXXX XXXX</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-primary/10">
                  <p className="text-sm text-muted-foreground">
                    {t('contact.response.time')}
                  </p>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="hidden lg:block bg-card rounded-2xl p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-4">{t('contact.trust.title')}</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{t('contact.trust.1')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{t('contact.trust.2')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" />
                    <span>{t('contact.trust.3')}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-2xl shadow-lg border border-border p-6 md:p-8">
                {renderStepIndicator()}
                
                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait" custom={direction}>
                    {currentStep === 1 && renderStep1()}
                    {currentStep === 2 && renderStep2()}
                    {currentStep === 3 && renderStep3()}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t border-border">
                    {currentStep > 1 ? (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        className="h-12 px-6"
                      >
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        {t('contact.form.back')}
                      </Button>
                    ) : (
                      <div />
                    )}

                    {currentStep < totalSteps ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="h-12 px-8"
                      >
                        {t('contact.form.next')}
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button 
                        type="submit" 
                        disabled={isSubmitting || isSuccess} 
                        className={`h-12 px-8 transition-all duration-500 ${
                          isSuccess 
                            ? "bg-green-600 hover:bg-green-700 text-white" 
                            : "bg-primary text-primary-foreground hover:bg-primary/90"
                        }`}
                      >
                        {isSuccess ? (
                          <span className="flex items-center gap-2">
                            <Check className="w-5 h-5 animate-in zoom-in duration-300" />
                            {t('contact.form.success')}
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                            {!isSubmitting && <Send className="w-4 h-4" />}
                          </span>
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
