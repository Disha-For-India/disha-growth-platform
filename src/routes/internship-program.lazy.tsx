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
  Quote, Award, Briefcase, GraduationCap, Star,
  Folder, TrendingUp, Sparkles
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

const BENEFITS = [
  { name: "Real Project Experience", icon: <Briefcase strokeWidth={1.5} className="h-7 w-7" />, desc: "Work on meaningful initiatives that address real community needs while gaining practical experience." },
  { name: "Learn from Mentors", icon: <GraduationCap strokeWidth={1.5} className="h-7 w-7" />, desc: "Collaborate with experienced mentors who guide you throughout your learning journey." },
  { name: "Build Your Portfolio", icon: <Folder strokeWidth={1.5} className="h-7 w-7" />, desc: "Create meaningful work and projects that showcase your skills and growth." },
  { name: "Strengthen Your Skills", icon: <TrendingUp strokeWidth={1.5} className="h-7 w-7" />, desc: "Develop communication, teamwork, leadership, problem-solving, and professional confidence." },
  { name: "Expand Your Network", icon: <Globe strokeWidth={1.5} className="h-7 w-7" />, desc: "Connect with passionate students, volunteers, mentors, and professionals from different backgrounds." },
  { name: "Create Real Impact", icon: <Sparkles strokeWidth={1.5} className="h-7 w-7" />, desc: "Contribute your time, ideas, and skills to initiatives that positively impact communities." },
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

      {/* Hero Section */}
      <section className="relative pt-8 lg:pt-10 pb-16 px-5 bg-background-soft flex items-center overflow-hidden">
        {/* Soft Background Decorations */}
        <div className="absolute inset-0 bg-grid opacity-50 -z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-white to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-12 items-center w-full z-10">
          {/* Left Column */}
          <div className="flex flex-col items-start text-left pt-10 lg:pt-0">
            <Reveal>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold font-display text-heading leading-[1.05] tracking-tight">
                Work on Real Projects.<br/>Build Real Skills.<br/>Create <span className="text-primary relative inline-block">Real Impact.<svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/30" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7C49.5 2 122.5 1 198 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg></span>
              </h1>
              
              <p className="mt-4 text-base lg:text-lg text-foreground max-w-xl leading-relaxed">
                Join a purpose-driven community to collaborate with passionate peers, receive mentorship, and apply skills to drive social change.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {[
                "Live Project Experience",
                "Industry Mentorship",
                "Portfolio Development",
                "Community Impact"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-heading font-medium text-sm lg:text-base">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-success-soft flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 lg:w-4 lg:h-4 text-success" />
                  </div>
                  {benefit}
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.2} className="mt-6 flex flex-wrap items-center gap-4 w-full">
              <Button size="lg" className="h-12 lg:h-14 px-6 lg:px-8 rounded-full text-sm lg:text-base font-bold shadow-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300" asChild>
                <a href="https://app-disha-for-indiaa.vercel.app/">
                  <Rocket className="mr-2 h-4 w-4 lg:h-5 lg:w-5" /> Apply to Join Disha
                </a>
              </Button>
              <button className="group flex items-center gap-3 font-semibold text-heading text-sm lg:text-base hover:text-primary transition-colors">
                <span className="flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-white shadow-soft group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-3 w-3 lg:h-4 lg:w-4 ml-0.5 text-primary" fill="currentColor" />
                </span>
                Explore the Journey
              </button>
            </Reveal>

          </div>

          {/* Right Column: Visual Collage */}
          <Reveal delay={0.2} className="relative h-[320px] lg:h-[400px] w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto mt-10 lg:mt-0">
            {/* Background Shape */}
            <div className="absolute inset-4 bg-primary/5 rounded-[3rem] -z-10 rotate-3 transition-transform duration-700 hover:rotate-6" />
            
            {/* Main Image */}
            <div className="absolute top-0 right-0 w-[75%] h-[70%] rounded-[2rem] overflow-hidden shadow-2xl z-10 border-4 border-white bg-muted">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000" alt="Students collaborating and learning" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            
            {/* Secondary Image */}
            <div className="absolute bottom-4 left-0 w-[60%] h-[55%] rounded-[2rem] overflow-hidden shadow-2xl z-20 border-4 border-white bg-muted">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" alt="Community service and mentorship" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            
            {/* Floating Card 1 */}
            <div className="absolute top-[10%] -left-6 lg:-left-12 bg-white/80 backdrop-blur-md p-3 lg:p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-30 flex items-center gap-3 lg:gap-4 border border-white/50 animate-bounce-slow">
              <div className="bg-primary/10 p-2 lg:p-3 rounded-xl text-primary shrink-0">
                <Award strokeWidth={2} className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-heading leading-tight">Certificate of Completion</p>
                <p className="text-xs text-muted-foreground font-medium mt-0.5 hidden sm:block">Recognizing your contribution</p>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-[15%] -right-6 lg:-right-10 bg-white/80 backdrop-blur-md p-3 lg:p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-30 flex items-center gap-3 lg:gap-4 border border-white/50 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
              <div className="bg-accent/10 p-2 lg:p-3 rounded-xl text-accent shrink-0">
                <Briefcase strokeWidth={2} className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-heading leading-tight">Live NGO Projects</p>
                <p className="text-xs text-muted-foreground font-medium mt-0.5 hidden sm:block">Work on meaningful initiatives</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Floating Features Bar */}
      <section className="relative z-20 px-5 pt-8 pb-16">
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

      {/* What You'll Gain */}
      <section className="py-32 px-5 bg-background-soft border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionHeading 
              title="What You'll Gain at Disha For India" 
              description="Joining Disha For India is more than participating in projects—it's an opportunity to grow personally, professionally, and socially while creating meaningful impact."
              align="center"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit, i) => (
              <Reveal key={i} delay={i * 0.05} className="group">
                <div className="h-full flex flex-col rounded-[2rem] border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-card hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-background-soft shadow-sm flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold font-display text-heading mb-3">{benefit.name}</h4>
                  <p className="text-muted-foreground flex-1 leading-relaxed">{benefit.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Journey (Timeline) */}
      <section className="py-32 px-5 md:px-10 lg:px-12 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-24 lg:mb-28">
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-heading mb-4">
              Simple Steps. <span className="text-primary">Meaningful</span> Journey.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your journey to become a member and start making an impact.
            </p>
          </div>

          <div className="relative w-full">
            {/* Connecting Line for desktop */}
            <div className="hidden lg:block absolute top-[3.25rem] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-border" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10 w-full">
              {JOURNEY_STEPS.map((step, i) => (
                <Reveal key={i} delay={i * 0.1} className={cn("relative flex flex-col items-center text-center group", i === JOURNEY_STEPS.length - 1 ? "md:col-span-2 lg:col-span-1" : "col-span-1")}>
                  {/* Circle number */}
                  <div className="w-10 h-10 rounded-full bg-accent text-ink font-bold flex items-center justify-center absolute -top-12 lg:-top-14 shadow-sm z-20 group-hover:scale-110 transition-transform duration-300">
                    {step.num}
                  </div>
                  {/* Card */}
                  <div className="bg-card rounded-[2rem] px-5 py-6 shadow-soft border border-border flex-1 w-full flex flex-col items-center hover:shadow-card hover:-translate-y-1.5 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-background-soft text-foreground flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {step.icon}
                    </div>
                    <h4 className="font-bold text-heading text-lg mb-2 leading-tight">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
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
