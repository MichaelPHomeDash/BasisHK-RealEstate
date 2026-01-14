import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "The Signal",
      subtitle: "Hyper-Targeted Lead Gen",
      desc: "Algorithmic ad campaigns on Facebook and Instagram designed to extract high-intent buyers from the noise. We track the digital footprints of property investors and put your listing in their feed at the exact moment of decision.",
      image: "/images/lead-generation-network.jpg",
      align: "right"
    },
    {
      id: "02",
      title: "The Icon",
      subtitle: "Personal Brand Architecture",
      desc: "You are the asset. We build a social media presence that positions you not just as an agent, but as a market authority. Curated feeds, thought leadership, and a 'Neo-Noir' aesthetic that commands respect.",
      image: "/images/agent-portrait.jpg",
      align: "left"
    },
    {
      id: "03",
      title: "The Access",
      subtitle: "The 'Velvet Rope' Funnel",
      desc: "Exclusive private traffic pools on WhatsApp and WeChat. We turn public interest into private conversations, nurturing leads in closed loops where trust is built and deals are closed.",
      image: "/images/mobile-marketing.jpg",
      align: "right"
    }
  ];

  return (
    <Layout>
      <div className="pt-20 pb-12 bg-background">
        <div className="container text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter mb-6">
            OUR <span className="text-primary">ARSENAL</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Precision tools for the modern agent.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service) => (
            <section key={service.id} className="container">
              <div className={`flex flex-col md:flex-row gap-12 items-center ${service.align === 'left' ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-6">
                  <div className="text-8xl font-heading font-bold text-border/30 leading-none select-none">
                    {service.id}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-wide">
                    {service.title}
                  </h2>
                  <h3 className="text-2xl text-primary font-heading uppercase tracking-widest">
                    {service.subtitle}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                    {service.desc}
                  </p>
                  <div className="pt-4">
                    <Link href="/contact">
                      <Button variant="outline" className="font-heading font-bold uppercase tracking-wider rounded-none border-primary/50 hover:border-primary hover:bg-primary/10">
                        Deploy Strategy
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] group overflow-hidden border border-border/50">
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500" />
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="container mt-32 text-center">
          <div className="bg-card border border-border p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 relative z-10">
              READY TO UPGRADE YOUR SYSTEM?
            </h2>
            <Link href="/contact">
              <Button size="lg" className="font-heading font-bold uppercase tracking-widest rounded-none bg-primary text-primary-foreground hover:bg-primary/90 relative z-10">
                Start Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
