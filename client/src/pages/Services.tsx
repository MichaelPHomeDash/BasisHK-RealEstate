import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Strategic Lead Generation",
      subtitle: "Targeted Acquisition",
      desc: "We utilize advanced targeting algorithms on Meta platforms (Facebook & Instagram) to identify potential property buyers based on behavior, interests, and demographics. Our campaigns are optimized for conversion, ensuring you receive high-quality leads.",
      image: "/images/team-collaboration.jpg",
      align: "right"
    },
    {
      id: "02",
      title: "Brand Development",
      subtitle: "Authority Positioning",
      desc: "In a competitive market, trust is paramount. We help you build a professional personal brand that establishes you as a thought leader. From visual identity to content strategy, we ensure your digital presence reflects your expertise.",
      image: "/images/agent-meeting-warm.jpg",
      align: "left"
    },
    {
      id: "03",
      title: "Private Traffic Management",
      subtitle: "Lead Nurturing",
      desc: "Generating a lead is just the first step. We implement systems to nurture prospects through private channels like WhatsApp and WeChat, fostering relationships and guiding them through the sales funnel until they are ready to transact.",
      image: "/images/luxury-interior-day.jpg",
      align: "right"
    }
  ];

  return (
    <Layout>
      <div className="pt-20 pb-12 bg-background">
        <div className="container text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground">
            Professional marketing solutions tailored for Hong Kong real estate agents.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service) => (
            <section key={service.id} className="container">
              <div className={`flex flex-col md:flex-row gap-12 items-center ${service.align === 'left' ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-6">
                  <div className="text-sm font-bold text-primary tracking-widest uppercase">
                    Service {service.id}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                    {service.title}
                  </h2>
                  <h3 className="text-xl text-muted-foreground font-medium">
                    {service.subtitle}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                    {service.desc}
                  </p>
                  <div className="pt-4">
                    <Link href="/contact">
                      <Button variant="outline" className="font-heading font-medium px-8 border-primary/20 hover:border-primary hover:bg-primary/5">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md border border-border">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="container mt-32 text-center">
          <div className="bg-secondary/50 rounded-xl p-12 border border-border">
            <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">
              Partner with PropelHK
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the next step in growing your real estate business with data-driven marketing.
            </p>
            <Link href="/contact">
              <Button size="lg" className="font-heading font-semibold px-10 bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
