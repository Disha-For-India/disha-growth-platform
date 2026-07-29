import { createLazyFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  HeartHandshake, BookOpen, Users, Globe, Rocket, ShieldCheck,
  CheckCircle2, ArrowRight, Laptop, Building, Play,
  Target, Lightbulb, PenTool, BarChart, MessageSquare, Code, UserPlus,
  Quote
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createLazyFileRoute("/internship-program")({
  component: InternshipProgram,
});

const FLOATING_FEATURES = [
  { icon: <HeartHandshake strokeWidth={1.5} className="w-7 h-7" />, title: "Purpose-Driven", desc: "Every effort here contributes to meaningful social change." },
  { icon: <BookOpen strokeWidth={1.5} className="w-7 h-7" />, title: "Learn & Grow", desc: "Build real-world skills, gain mentorship and grow every day." },
  { icon: <Users strokeWidth={1.5} className="w-7 h-7" />, title: "Make an Impact", desc: "Work on initiatives that solve real problems in communities." },
  { icon: <Target strokeWidth={1.5} className="w-7 h-7" />, title: "Belong & Connect", desc: "Be part of a supportive community that feels like family." },
  { icon: <Rocket strokeWidth={1.5} className="w-7 h-7" />, title: "Lead the Change", desc: "Take ownership, lead projects and inspire others around you." },
];

const PURPOSE_FEATURES = [
  { icon: <Globe strokeWidth={1.5} className="w-5 h-5" />, text: "Work on real initiatives across India" },
  { icon: <Users strokeWidth={1.5} className="w-5 h-5" />, text: "Learn from mentors and experts" },
  { icon: <BarChart strokeWidth={1.5} className="w-5 h-5" />, text: "Build skills that shape your future" },
  { icon: <HeartHandshake strokeWidth={1.5} className="w-5 h-5" />, text: "Create lasting impact in communities" },
];

const JOURNEY_STEPS = [
  { num: "01", icon: <PenTool strokeWidth={1.5} className="w-8 h-8" />, title: "Fill the Application", desc: "Share your details, interests and what motivates you to join." },
  { num: "02", icon: <UserPlus strokeWidth={1.5} className="w-8 h-8" />, title: "Application Review", desc: "Our team carefully reviews your profile to understand your goals." },
  { num: "03", icon: <Users strokeWidth={1.5} className="w-8 h-8" />, title: "Selection Round", desc: "Shortlisted candidates are invited for an interaction." },
  { num: "04", icon: <Target strokeWidth={1.5} className="w-8 h-8" />, title: "Final Selection", desc: "We look for commitment, curiosity and the spirit to help." },
  { num: "05", icon: <HeartHandshake strokeWidth={1.5} className="w-8 h-8" />, title: "Welcome to Disha!", desc: "Once selected, you'll be onboarded and start your journey." },
];

const DOMAINS = [
  { name: "Frontend Development", icon: <Code strokeWidth={1.5} className="h-7 w-7" />, desc: "Build responsive, accessible user interfaces using React and modern web technologies." },
  { name: "Backend Development", icon: <Laptop strokeWidth={1.5} className="h-7 w-7" />, desc: "Develop robust APIs and manage data using scalable architectures." },
  { name: "UI/UX Design", icon: <PenTool strokeWidth={1.5} className="h-7 w-7" />, desc: "Create intuitive, beautiful experiences that solve real user problems." },
  { name: "Content & Marketing", icon: <MessageSquare strokeWidth={1.5} className="h-7 w-7" />, desc: "Craft compelling narratives that amplify our message and reach." },
  { name: "Data & Analytics", icon: <BarChart strokeWidth={1.5} className="h-7 w-7" />, desc: "Analyze impact metrics to help us make data-driven decisions." },
  { name: "Operations", icon: <Globe strokeWidth={1.5} className="h-7 w-7" />, desc: "Ensure smooth execution of programs and community initiatives." },
];

const FAQS = [
  { q: "Who can apply?", a: "We welcome college students, fresh graduates, career switchers, and self-learners who are passionate about using their skills for social impact." },
  { q: "Do I need prior experience?", a: "While basic knowledge in your chosen domain is helpful, we prioritize passion, willingness to learn, and a commitment to our mission." },
  { q: "How much time is expected?", a: "The commitment varies by project, but we generally expect 10-15 hours per week. We offer flexible schedules to accommodate your studies." },
  { q: "Will I work on live projects?", a: "Yes. All our internship projects directly contribute to Disha For India's actual operations and community initiatives." },
  { q: "How is mentorship provided?", a: "You will collaborate closely with experienced mentors through regular feedback sessions, code reviews, and team meetings." },
];

function InternshipProgram() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Helmet>
        <title>Internship Program</title>
        <meta name="description" content="Learn through real impact. Join Disha For India's Internship Program to build skills, work on real projects, and contribute to society." />
      </Helmet>

      {/* Hero Section (Split Layout) */}
      <section className="relative pt-16 lg:pt-28 pb-48 px-5 bg-background-soft">
        <div className="absolute inset-0 bg-grid opacity-50 -z-10" />
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-white to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-soft text-primary font-medium text-sm mb-6 shadow-soft">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Applications Open
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-display text-heading leading-[1.1] tracking-tight">
              Ready to create impact with <span className="text-primary block mt-2">Disha for India?</span>
            </h1>
            <p className="mt-8 text-xl text-foreground max-w-lg leading-relaxed">
              Be part of a community that learns, contributes, grows and creates real impact together. Experience not just an internship, but a purpose.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Button size="lg" className="h-14 px-8 rounded-full text-base font-semibold shadow-card hover:-translate-y-1 transition-all duration-300" asChild>
                <a href="https://app-disha-for-indiaa.vercel.app/">
                  I want to Join Disha <ArrowRight strokeWidth={2.5} className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <button className="flex items-center gap-4 font-semibold text-heading hover:text-primary transition-colors group">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-card group-hover:scale-105 transition-transform duration-300">
                  <Play className="h-5 w-5 ml-1 text-primary" fill="currentColor" />
                </span>
                See How<br/>We Make Impact
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="relative h-[450px] lg:h-[550px] w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto">
            {/* Main Image */}
            <div className="absolute top-0 right-0 w-[80%] h-[80%] rounded-[2rem] overflow-hidden shadow-2xl z-10 border-[6px] border-white bg-muted">
              <img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=1000" alt="Students collaborating" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            {/* Secondary Image */}
            <div className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-[2rem] overflow-hidden shadow-2xl z-20 border-[6px] border-white bg-muted">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" alt="Community service" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute top-[60%] -right-4 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] z-30 flex items-center gap-4 max-w-[280px] border border-border/50 animate-bounce-slow">
              <div className="bg-primary-soft p-3 rounded-xl text-primary">
                <Users strokeWidth={2} className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-heading leading-tight">Thousands of changemakers building India</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Floating Features Bar */}
      <section className="relative z-20 -mt-24 px-5">
        <div className="max-w-7xl mx-auto bg-card rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border p-8 lg:p-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {FLOATING_FEATURES.map((feat, i) => (
              <Reveal key={i} delay={i * 0.1} className="text-center group flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-background-soft text-foreground mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                  {feat.icon}
                </div>
                <h4 className="font-bold text-heading text-lg mb-2">{feat.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">{feat.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-32 px-5 bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal className="rounded-[2.5rem] overflow-hidden shadow-card h-[500px] lg:h-[650px] relative group">
             <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
             <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200" alt="Volunteers working together" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </Reveal>
          <div>
            <Reveal>
              <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">You & Your Impact</h3>
              <h2 className="text-4xl lg:text-5xl font-bold font-display text-heading leading-tight">
                When you grow, <br/> society grows. <span className="text-accent inline-block animate-pulse">♡</span>
              </h2>
              <p className="mt-6 text-lg text-foreground leading-relaxed max-w-lg">
                At Disha for India, you don't just join — you belong. You'll work on real projects, learn from experienced mentors, collaborate with passionate peers and create impact that truly matters.
              </p>
            </Reveal>

            <div className="mt-12 space-y-6">
              {PURPOSE_FEATURES.map((feat, i) => (
                <Reveal key={i} delay={i * 0.1} className="flex items-center gap-5 p-4 rounded-2xl hover:bg-background-soft transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center text-primary shrink-0 shadow-sm">
                    {feat.icon}
                  </div>
                  <p className="text-lg font-medium text-heading">{feat.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Work On */}
      <section className="py-32 px-5 bg-background-soft border-y border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Meaningful Projects, Real Experience." 
            description="Contribute your skills to initiatives that drive our mission forward. This is not a classroom—it's a professional environment."
            align="center"
          />
          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DOMAINS.map((domain, i) => (
              <Reveal key={i} delay={i * 0.05} className="group">
                <div className="h-full flex flex-col rounded-[2rem] border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-card hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-background-soft shadow-sm flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {domain.icon}
                  </div>
                  <h4 className="text-xl font-bold font-display text-heading mb-3">{domain.name}</h4>
                  <p className="text-muted-foreground flex-1 leading-relaxed">{domain.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Journey (Timeline) */}
      <section className="py-32 px-5 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-primary/30" />
              Your Journey to Become a Member
              <span className="w-12 h-px bg-primary/30" />
            </h3>
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-heading">
              Simple Steps. <span className="text-primary">Meaningful</span> Journey.
            </h2>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Connecting Line for desktop */}
            <div className="hidden lg:block absolute top-[5.5rem] left-[5%] right-[15%] h-[2px] border-t-2 border-dashed border-border" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 relative z-10">
              {JOURNEY_STEPS.map((step, i) => (
                <Reveal key={i} delay={i * 0.1} className={cn("relative flex flex-col items-center text-center group", i === JOURNEY_STEPS.length - 1 ? "lg:col-span-2" : "col-span-1")}>
                  {/* Circle number */}
                  <div className="w-10 h-10 rounded-full bg-accent text-ink font-bold flex items-center justify-center absolute -top-12 lg:-top-[3.5rem] shadow-sm z-20 group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                  {/* Card */}
                  <div className="bg-card rounded-[2rem] p-6 shadow-soft border border-border flex-1 w-full flex flex-col items-center hover:shadow-card transition-shadow duration-300 pt-8 lg:pt-6">
                    <div className="w-16 h-16 rounded-full bg-background-soft text-foreground flex items-center justify-center mb-5 group-hover:text-primary transition-colors">
                      {step.icon}
                    </div>
                    <h4 className="font-bold text-heading text-lg mb-3">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
              
              {/* Final circular CTA in timeline */}
              <Reveal delay={0.6} className="hidden lg:flex relative flex-col items-center justify-center col-span-1 mt-4">
                <div className="w-32 h-32 rounded-full bg-primary text-white flex flex-col items-center justify-center shadow-card p-4 text-center transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <Users className="w-8 h-8 mb-2 opacity-90" />
                  <span className="font-bold text-sm leading-tight">Work with<br/>Disha for India</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* For Educational Institutions */}
      <section className="py-32 px-5 bg-background-soft border-y border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold font-display text-heading leading-tight mb-6">
                Partnering with Educational Institutions
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-8 max-w-xl">
                We collaborate with colleges and placement cells to offer students a platform for practical, project-based learning. Our approach emphasizes comprehensive student development over commercial models.
              </p>
            </Reveal>
            <div className="space-y-5 mb-10">
              {[
                "Practical exposure to real-world workflows",
                "Mentorship from experienced professionals",
                "Opportunities to lead impactful initiatives",
                "Building a portfolio that stands out"
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.1} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-success-soft flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 strokeWidth={2.5} className="w-4 h-4 text-success" />
                  </div>
                  <span className="text-heading font-medium">{item}</span>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.4}>
              <Button size="lg" className="h-14 px-8 rounded-full text-base font-semibold shadow-soft hover:-translate-y-1 transition-all" asChild>
                <a href="mailto:info@dishaforindia.org">Collaborate With Us</a>
              </Button>
            </Reveal>
          </div>
          <Reveal className="rounded-[2.5rem] overflow-hidden shadow-card h-[450px] lg:h-[600px] border border-border">
             <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200" alt="Students in a classroom workshop" className="w-full h-full object-cover" />
          </Reveal>
        </div>
      </section>



      {/* Trust Badges */}
      <section className="py-16 px-5 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 group">
               <div className="bg-background-soft p-3.5 rounded-2xl text-foreground group-hover:bg-primary-soft group-hover:text-primary transition-colors">
                 <ShieldCheck strokeWidth={1.5} className="w-6 h-6" />
               </div>
               <div>
                 <h5 className="font-bold font-display text-heading text-lg">100% Transparent</h5>
                 <p className="text-sm text-muted-foreground mt-1">We are a non-profit committed to social good.</p>
               </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 group">
               <div className="bg-background-soft p-3.5 rounded-2xl text-foreground group-hover:bg-primary-soft group-hover:text-primary transition-colors">
                 <HeartHandshake strokeWidth={1.5} className="w-6 h-6" />
               </div>
               <div>
                 <h5 className="font-bold font-display text-heading text-lg">Safe & Inclusive</h5>
                 <p className="text-sm text-muted-foreground mt-1">A respectful and inclusive space for everyone.</p>
               </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 group">
               <div className="bg-background-soft p-3.5 rounded-2xl text-foreground group-hover:bg-primary-soft group-hover:text-primary transition-colors">
                 <Target strokeWidth={1.5} className="w-6 h-6" />
               </div>
               <div>
                 <h5 className="font-bold font-display text-heading text-lg">Impact First</h5>
                 <p className="text-sm text-muted-foreground mt-1">Your time and talent go where it creates maximum good.</p>
               </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 group">
               <div className="bg-background-soft p-3.5 rounded-2xl text-foreground group-hover:bg-primary-soft group-hover:text-primary transition-colors">
                 <Globe strokeWidth={1.5} className="w-6 h-6" />
               </div>
               <div>
                 <h5 className="font-bold font-display text-heading text-lg">Together, We Build</h5>
                 <p className="text-sm text-muted-foreground mt-1">Join thousands of young people driving change.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-32 pb-40 px-5 bg-background-soft">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="Frequently Asked Questions" align="center" />
          <div className="mt-16">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-border/50 bg-card px-6 py-3 shadow-soft hover:shadow-card transition-shadow duration-300">
                  <AccordionTrigger className="text-left font-bold font-display text-lg text-heading hover:no-underline hover:text-primary py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground text-base leading-relaxed pb-6 pt-2">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

    </main>
  );
}
