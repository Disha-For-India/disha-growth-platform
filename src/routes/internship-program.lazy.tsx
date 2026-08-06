import { createLazyFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Users, Globe, Rocket, ShieldCheck, CheckCircle2, Laptop, 
  Target, PenTool, BarChart, MessageSquare, Code, UserPlus, 
  Award, Briefcase, GraduationCap, Star, Folder, TrendingUp, 
  Layout, Palette, Megaphone, FileText, Settings, Bot, 
  Clock, MapPin, Calendar, HeartHandshake, BookOpen, Layers,
  Mail, Video, Camera, Mic, Search, Scale, Calculator, Share2,
  PieChart, Lightbulb, Quote
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createLazyFileRoute("/internship-program")({
  component: InternshipProgram,
});

const HIGHLIGHTS = [
  { icon: <Layers strokeWidth={1.5} className="w-7 h-7" />, title: "Practical Experience", desc: "Gain hands-on experience by working on real-world challenges." },
  { icon: <GraduationCap strokeWidth={1.5} className="w-7 h-7" />, title: "Mentorship", desc: "Learn directly from experienced industry professionals." },
  { icon: <Briefcase strokeWidth={1.5} className="w-7 h-7" />, title: "Industry Exposure", desc: "Understand organizational workflows and professional standards." },
  { icon: <Users strokeWidth={1.5} className="w-7 h-7" />, title: "Professional Networking", desc: "Connect with multidisciplinary peers and leaders." },
  { icon: <FileText strokeWidth={1.5} className="w-7 h-7" />, title: "Resume Building", desc: "Add impactful experiences to strengthen your profile." },
  { icon: <Award strokeWidth={1.5} className="w-7 h-7" />, title: "Internship Certificate", desc: "Earn verified credentials upon successful completion." },
  { icon: <Folder strokeWidth={1.5} className="w-7 h-7" />, title: "Portfolio Development", desc: "Showcase tangible projects and campaigns." },
  { icon: <Target strokeWidth={1.5} className="w-7 h-7" />, title: "Leadership Skills", desc: "Take ownership of initiatives and lead multidisciplinary teams." },
  { icon: <MessageSquare strokeWidth={1.5} className="w-7 h-7" />, title: "Communication Skills", desc: "Enhance your ability to articulate ideas and collaborate." },
  { icon: <HeartHandshake strokeWidth={1.5} className="w-7 h-7" />, title: "Team Collaboration", desc: "Work closely with diverse talents across all streams." },
];

const INTERNSHIP_DOMAINS = [
  { icon: <Code strokeWidth={1.5} className="w-6 h-6" />, title: "Web Development", desc: "Build scalable web applications and platforms.", skills: ["React", "Node.js", "Full-stack"] },
  { icon: <Layout strokeWidth={1.5} className="w-6 h-6" />, title: "UI/UX Design", desc: "Design intuitive interfaces and user experiences.", skills: ["Figma", "Prototyping", "Research"] },
  { icon: <Palette strokeWidth={1.5} className="w-6 h-6" />, title: "Graphic Design", desc: "Create visually stunning digital and print assets.", skills: ["Illustrator", "Photoshop", "Branding"] },
  { icon: <Share2 strokeWidth={1.5} className="w-6 h-6" />, title: "Social Media", desc: "Manage presence across social platforms and build communities.", skills: ["Strategy", "Content Calendar", "Engagement"] },
  { icon: <Megaphone strokeWidth={1.5} className="w-6 h-6" />, title: "Digital Marketing", desc: "Drive growth through SEO, social media, and campaigns.", skills: ["SEO", "Campaigns", "Analytics"] },
  { icon: <FileText strokeWidth={1.5} className="w-6 h-6" />, title: "Content Writing", desc: "Craft compelling narratives and educational content.", skills: ["Copywriting", "Blogging", "SEO Writing"] },
  { icon: <Search strokeWidth={1.5} className="w-6 h-6" />, title: "Research", desc: "Conduct qualitative and quantitative research studies.", skills: ["Data Collection", "Analysis", "Reporting"] },
  { icon: <Users strokeWidth={1.5} className="w-6 h-6" />, title: "Human Resources", desc: "Manage talent, recruitment, and organizational culture.", skills: ["Recruitment", "Onboarding", "Policy"] },
  { icon: <BarChart strokeWidth={1.5} className="w-6 h-6" />, title: "Data Analytics", desc: "Transform complex data into actionable insights.", skills: ["Data Viz", "SQL", "Dashboarding"] },
  { icon: <TrendingUp strokeWidth={1.5} className="w-6 h-6" />, title: "Business Dev", desc: "Identify partnerships and growth opportunities.", skills: ["Sales", "Strategy", "Partnerships"] },
  { icon: <Settings strokeWidth={1.5} className="w-6 h-6" />, title: "Operations", desc: "Streamline processes and project management.", skills: ["Management", "Logistics", "Efficiency"] },
  { icon: <Video strokeWidth={1.5} className="w-6 h-6" />, title: "Video Editing", desc: "Produce and edit compelling visual stories.", skills: ["Premiere Pro", "Storyboarding", "Motion Graphics"] },
  { icon: <Camera strokeWidth={1.5} className="w-6 h-6" />, title: "Photography & Media", desc: "Capture impact through visual documentation.", skills: ["Photography", "Editing", "Visual Storytelling"] },
  { icon: <Mic strokeWidth={1.5} className="w-6 h-6" />, title: "Public Relations", desc: "Manage communications and media relations.", skills: ["Press Releases", "Outreach", "Communication"] },
  { icon: <BookOpen strokeWidth={1.5} className="w-6 h-6" />, title: "Education & Training", desc: "Develop and deliver educational workshops.", skills: ["Curriculum", "Facilitation", "Instruction"] },
  { icon: <Scale strokeWidth={1.5} className="w-6 h-6" />, title: "Law & Policy Research", desc: "Analyze legal frameworks and social policies.", skills: ["Policy Analysis", "Legal Drafting", "Advocacy"] },
  { icon: <Calculator strokeWidth={1.5} className="w-6 h-6" />, title: "Finance & Accounts", desc: "Manage budgets, reporting, and financial planning.", skills: ["Accounting", "Budgeting", "Financial Modeling"] },
  { icon: <HeartHandshake strokeWidth={1.5} className="w-6 h-6" />, title: "Community Outreach", desc: "Mobilize volunteers and engage with local communities.", skills: ["Mobilization", "Event Planning", "Empathy"] },
  { icon: <Bot strokeWidth={1.5} className="w-6 h-6" />, title: "AI & Automation", desc: "Implement intelligent solutions and workflows.", skills: ["Python", "Automation", "AI Tools"] },
];

const JOURNEY_STEPS = [
  { num: "01", icon: <PenTool strokeWidth={1.5} className="w-6 h-6" />, title: "Application", desc: "Submit your profile and interests." },
  { num: "02", icon: <UserPlus strokeWidth={1.5} className="w-6 h-6" />, title: "Shortlisting", desc: "We review your potential." },
  { num: "03", icon: <MessageSquare strokeWidth={1.5} className="w-6 h-6" />, title: "Interview", desc: "A brief goal alignment interaction." },
  { num: "04", icon: <CheckCircle2 strokeWidth={1.5} className="w-6 h-6" />, title: "Selection", desc: "Welcome to the program!" },
  { num: "05", icon: <Globe strokeWidth={1.5} className="w-6 h-6" />, title: "Orientation", desc: "Introduction to our workflows." },
  { num: "06", icon: <BookOpen strokeWidth={1.5} className="w-6 h-6" />, title: "Training", desc: "Upskill through modules." },
  { num: "07", icon: <Users strokeWidth={1.5} className="w-6 h-6" />, title: "Mentor Assigned", desc: "Get paired with an expert." },
  { num: "08", icon: <Laptop strokeWidth={1.5} className="w-6 h-6" />, title: "Live Projects", desc: "Apply skills to real tasks." },
  { num: "09", icon: <Target strokeWidth={1.5} className="w-6 h-6" />, title: "Weekly Reviews", desc: "Get feedback and iterate." },
  { num: "10", icon: <BarChart strokeWidth={1.5} className="w-6 h-6" />, title: "Evaluation", desc: "Showcase your impact." },
  { num: "11", icon: <Award strokeWidth={1.5} className="w-6 h-6" />, title: "Certificate", desc: "Receive verified credentials." },
];

const WHAT_YOU_RECEIVE = [
  { name: "Verified Internship Certificate", icon: <Award strokeWidth={1.5} className="h-7 w-7" />, desc: "Official verification of your successful completion." },
  { name: "Experience Letter", icon: <FileText strokeWidth={1.5} className="h-7 w-7" />, desc: "Documented proof of your practical roles." },
  { name: "Portfolio Projects", icon: <Folder strokeWidth={1.5} className="h-7 w-7" />, desc: "Real-world projects to showcase in your portfolio." },
  { name: "Letter of Recommendation", icon: <Star strokeWidth={1.5} className="h-7 w-7" />, desc: "Performance-based recommendation for employers." },
  { name: "LinkedIn Endorsement", icon: <Briefcase strokeWidth={1.5} className="h-7 w-7" />, desc: "Professional recommendations on your profile." },
  { name: "Performance Badge", icon: <ShieldCheck strokeWidth={1.5} className="h-7 w-7" />, desc: "Digital badges highlighting your exceptional work." },
];

const FAQS = [
  { q: "Who can apply for the internship?", a: "We welcome students and graduates from ALL academic streams, including Engineering, Commerce, Arts, Management, Science, Law, and Design. If you are eager to learn, there is a role for you." },
  { q: "Is prior experience required?", a: "No prior professional experience is required. We look for passion, a willingness to learn, and basic foundational knowledge in your chosen domain." },
  { q: "Is the internship remote?", a: "Yes, our internships are fully remote, offering you the flexibility to work and learn from anywhere." },
  { q: "Will I receive a certificate?", a: "Yes, upon successful completion of the internship program, you will receive a verified Internship Certificate and an Experience Letter." },
  { q: "How much time is required?", a: "Interns are typically expected to commit 10-15 hours per week. The flexible schedule allows you to balance this with your academic or other commitments." },
  { q: "What kind of projects will I work on?", a: "You will work on live, multidisciplinary projects such as social media campaigns, policy research, community outreach plans, analytics dashboards, and web platforms." },
  { q: "How is mentorship provided?", a: "Mentorship is provided through weekly review sessions, domain-specific guidance, peer collaboration, and career advice from experienced industry professionals." },
];

const ELIGIBILITY_BADGES = [
  "Engineering", "Commerce", "Management", "Arts", "Science", 
  "Design", "Law", "Education", "Social Work", "Humanities"
];

function InternshipProgram() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Helmet>
        <title>Internship Program | Disha For India</title>
        <meta name="description" content="A multidisciplinary internship program where students from all backgrounds can learn, contribute, and grow professionally." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-8 lg:pt-10 pb-12 lg:pb-16 px-5 bg-background-soft overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 -z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-white to-transparent -z-10" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[45fr_55fr] gap-10 lg:gap-12 items-center w-full z-10 min-h-[75vh]">
          <div className="flex flex-col items-start text-left pt-6 lg:pt-0">
            <Reveal>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold font-display text-heading leading-[1.1] tracking-tight w-full">
                Launch Your Career <br className="hidden sm:block" />
                with <span className="text-primary">Disha For India</span> <br />
                <span className="text-primary relative inline-block mt-1">
                  Internship Program
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/30" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7C49.5 2 122.5 1 198 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                </span>
              </h1>
              <p className="mt-5 text-base lg:text-lg text-foreground max-w-[90%] leading-relaxed">
                A multidisciplinary internship program where students and graduates from <span className="font-bold text-heading">all academic backgrounds</span> can learn, collaborate, and grow professionally while creating meaningful social impact.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 w-full max-w-lg">
              {[
                "Live Projects",
                "Internship Certificate",
                "Industry Mentorship",
                "Flexible Remote",
                "Portfolio Building",
                "Multidisciplinary Teams"
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-heading font-medium text-sm lg:text-[15px]">
                  <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                  </div>
                  {highlight}
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.2} className="mt-8 flex flex-col sm:flex-row items-center gap-4 lg:gap-5 w-full">
              <a 
                href="https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard" 
                className="group relative flex items-center justify-center h-[58px] px-10 rounded-full bg-blue-700 text-white font-bold text-base shadow-[0_8px_20px_rgba(29,78,216,0.3)] hover:shadow-[0_12px_25px_rgba(29,78,216,0.4)] hover:-translate-y-[3px] hover:scale-[1.02] hover:bg-blue-800 active:scale-[0.98] transition-all duration-300 w-full sm:w-auto overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Apply for Internship
                  <Rocket className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </a>
              
              <a 
                href="#domains" 
                className="group flex items-center justify-center h-[58px] px-10 rounded-full bg-white border border-blue-200 text-slate-800 font-bold text-base shadow-sm hover:shadow-md hover:border-blue-500 hover:bg-blue-50 hover:-translate-y-[2px] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
              >
                Explore Domains
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative h-[300px] lg:h-[420px] w-full mx-auto lg:mx-0 mt-8 lg:mt-0">
            <div className="absolute inset-4 bg-primary/5 rounded-[3rem] -z-10 rotate-3 transition-transform duration-700 hover:rotate-6" />
            
            <div className="absolute top-0 right-0 w-[80%] h-[75%] rounded-[1.5rem] overflow-hidden shadow-2xl z-10 border-4 border-white bg-muted">
              <img src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80&w=1000" alt="Multidisciplinary team brainstorming and planning" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            <div className="absolute bottom-4 left-0 w-[55%] h-[50%] rounded-[1.5rem] overflow-hidden shadow-2xl z-20 border-4 border-white bg-muted">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Creative workshop and presentations" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            <div className="absolute top-[10%] -left-6 lg:-left-12 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-30 flex items-center gap-3 border border-white/50 animate-bounce-slow">
              <div className="bg-primary/10 p-2.5 rounded-xl text-primary shrink-0">
                <Award strokeWidth={2} className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-heading leading-tight">Verified Certificate</p>
                <p className="text-[11px] text-muted-foreground font-medium mt-0.5 hidden sm:block">Industry recognized</p>
              </div>
            </div>

            <div className="absolute bottom-[15%] -right-6 lg:-right-10 bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-30 flex items-center gap-3 border border-white/50 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
              <div className="bg-accent/10 p-2.5 rounded-xl text-accent shrink-0">
                <Lightbulb strokeWidth={2} className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-heading leading-tight">Diverse Roles</p>
                <p className="text-[11px] text-muted-foreground font-medium mt-0.5 hidden sm:block">For all backgrounds</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Multidisciplinary Message */}
      <section className="py-12 px-5 bg-primary/5 border-y border-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <Quote className="w-10 h-10 text-primary/30 mx-auto mb-4" />
            <p className="text-xl md:text-2xl font-display font-medium text-heading leading-relaxed">
              This internship program welcomes students and graduates from <span className="text-primary font-bold">all academic backgrounds</span>. Whether your interest is technology, design, marketing, research, management, education, law, finance, or community development, <span className="underline decoration-accent decoration-4 underline-offset-4">there is a place for you at Disha For India.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Internship Highlights */}
      <section className="relative z-20 px-5 pt-16 pb-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <SectionHeading
              title="Benefits For Everyone"
              description="A rewarding experience designed to foster professional and personal growth for students of all disciplines."
              align="center"
            />
          </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-6">
            {HIGHLIGHTS.map((feat, i) => (
              <Reveal key={i} delay={i * 0.05} className="group flex flex-col items-center text-center bg-card rounded-[2rem] border border-border p-6 hover:shadow-card hover:border-primary/30 hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-background-soft text-foreground mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                  {feat.icon}
                </div>
                <h4 className="font-bold text-heading text-base mb-2">{feat.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Internship */}
      <section className="py-16 lg:py-24 px-5 bg-background-soft border-y border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal className="rounded-[2.5rem] overflow-hidden shadow-card h-[450px] lg:h-[600px] relative group order-2 lg:order-1 border-4 border-white bg-muted">
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" alt="Diverse professionals collaborating in a multidisciplinary team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-heading leading-tight">
                Learn practical skills in multidisciplinary teams.
              </h2>
              <p className="mt-6 text-lg text-foreground leading-relaxed">
                Step outside the classroom and work alongside peers from diverse academic streams. By combining different perspectives—from design and law to tech and management—you will build robust solutions that create meaningful social impact.
              </p>
            </Reveal>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {[
                { title: "Develop practical skills", icon: <Layers className="w-5 h-5 text-primary" /> },
                { title: "Work on real-world projects", icon: <Briefcase className="w-5 h-5 text-primary" /> },
                { title: "Gain professional experience", icon: <GraduationCap className="w-5 h-5 text-primary" /> },
                { title: "Build your resume", icon: <FileText className="w-5 h-5 text-primary" /> },
                { title: "Multidisciplinary collaboration", icon: <Users className="w-5 h-5 text-primary" /> },
                { title: "Create meaningful impact", icon: <HeartHandshake className="w-5 h-5 text-primary" /> },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.1} className="flex items-center gap-4 bg-white px-5 py-4 rounded-2xl shadow-sm border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-heading">{item.title}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Details */}
      <section className="py-16 lg:py-24 px-5 bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16">
          <Reveal>
            <h3 className="text-3xl font-bold font-display text-heading mb-6">Who Can Apply?</h3>
            <p className="text-lg text-foreground mb-8">Students from <span className="font-bold text-primary">ANY stream</span> can apply, including but not limited to:</p>
            
            <div className="bg-card border border-border rounded-[2.5rem] p-8 lg:p-10 shadow-sm h-auto">
              <div className="flex flex-wrap gap-3 mb-8">
                {ELIGIBILITY_BADGES.map((badge, idx) => (
                  <span key={idx} className="inline-flex items-center px-4 py-2 bg-background-soft border border-border/50 text-foreground font-semibold rounded-full text-sm shadow-sm hover:border-primary/40 hover:bg-primary/5 transition-colors">
                    {badge}
                  </span>
                ))}
              </div>
              <div className="space-y-4 border-t border-border pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-success-soft flex items-center justify-center shrink-0">
                    <CheckCircle2 strokeWidth={2.5} className="w-4 h-4 text-success" />
                  </div>
                  <span className="text-base font-semibold text-heading">Recent Graduates</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-success-soft flex items-center justify-center shrink-0">
                    <CheckCircle2 strokeWidth={2.5} className="w-4 h-4 text-success" />
                  </div>
                  <span className="text-base font-semibold text-heading">Anyone passionate about learning and creating impact</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="text-3xl font-bold font-display text-heading mb-6">Internship Details</h3>
            <p className="text-lg text-transparent select-none mb-8">Spacer</p>
            <div className="bg-card border border-border rounded-[2.5rem] p-8 lg:p-10 shadow-sm grid sm:grid-cols-2 gap-10 h-auto content-start">
              <div>
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Duration</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-soft text-primary flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-semibold text-heading">Flexible (1-6 Months)</span>
                </div>
              </div>
              <div>
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Mode</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-soft text-primary flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-semibold text-heading">100% Remote / Hybrid</span>
                </div>
              </div>
              <div>
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Commitment</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-soft text-primary flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-semibold text-heading">10-15 Hours / Week</span>
                </div>
              </div>
              <div>
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Mentorship</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-soft text-primary flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-semibold text-heading">Weekly Guidance</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Internship Domains Grid */}
      <section id="domains" className="py-16 lg:py-24 px-5 bg-background-soft border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionHeading
              title="Explore Internship Domains"
              description="Discover a diverse range of specialized roles tailored to your academic background and career aspirations."
              align="center"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {INTERNSHIP_DOMAINS.map((domain, i) => (
              <Reveal key={i} delay={(i % 4) * 0.05} className="group h-full">
                <div className="flex flex-col h-full rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-card hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary-soft text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                      {domain.icon}
                    </div>
                    <h4 className="text-lg font-bold font-display text-heading leading-tight">{domain.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">{domain.desc}</p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {domain.skills.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="inline-flex px-2 py-1 bg-background-soft rounded-md text-[10px] font-semibold text-foreground border border-border/50 uppercase tracking-wider">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-16 lg:py-24 px-5 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-heading mb-6">
              Your Internship <span className="text-primary">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured path designed to maximize your learning and professional development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-6 gap-y-12 lg:gap-y-16">
            {JOURNEY_STEPS.map((step, i) => (
              <Reveal key={i} delay={i * 0.05} className="relative flex flex-col items-center text-center group">
                <div className="w-8 h-8 rounded-full bg-accent text-ink text-sm font-bold flex items-center justify-center mb-5 shadow-sm z-20 group-hover:scale-110 transition-transform duration-300">
                  {step.num}
                </div>
                <div className="w-16 h-16 rounded-[1.25rem] bg-white shadow-soft text-foreground flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300 border border-border">
                  {step.icon}
                </div>
                <h4 className="font-bold text-heading text-base mb-2 leading-tight">{step.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed px-2">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="py-16 lg:py-24 px-5 bg-[#0F172A] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-8 border border-white/20">
                <Users className="w-4 h-4" /> Expert Guidance
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold font-display leading-tight mb-6">
                Industry Mentorship
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl">
                We believe that learning accelerates when guided by experts. Our mentorship program bridges the gap between academic theory and industry reality across all disciplines.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Weekly Mentor Sessions", desc: "1-on-1 and group syncs to track progress." },
                { title: "Project & Task Reviews", desc: "Constructive feedback on your deliverables." },
                { title: "Career Advice", desc: "Guidance on resume building and interviews." },
                { title: "Soft Skill Development", desc: "Improve leadership and communication." }
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors h-full flex flex-col justify-center">
                    <h5 className="font-bold text-lg mb-2 text-white">{item.title}</h5>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="rounded-[3rem] overflow-hidden shadow-2xl h-[450px] lg:h-[650px] border-4 border-white/10">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000" alt="Group discussion and mentorship" className="w-full h-full object-cover" />
          </Reveal>
        </div>
      </section>

      {/* What You Will Receive */}
      <section className="py-16 lg:py-24 px-5 bg-background-soft border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionHeading
              title="What You Will Receive"
              description="We reward dedication and hard work with professional credentials that boost your career."
              align="center"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHAT_YOU_RECEIVE.map((item, i) => (
              <Reveal key={i} delay={i * 0.05} className="group">
                <div className="flex flex-col rounded-[2.5rem] border border-border bg-card p-8 lg:p-10 transition-all duration-300 hover:border-primary/30 hover:shadow-card hover:-translate-y-2 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-background-soft shadow-sm flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-display text-heading mb-3">{item.name}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 px-5 bg-background">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="Frequently Asked Questions" align="center" />
          <div className="mt-10 lg:mt-12">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="rounded-[1.5rem] border border-border/50 bg-card px-6 lg:px-8 py-3 shadow-soft hover:shadow-card transition-shadow duration-300">
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

      {/* Final CTA */}
      <section className="py-20 lg:py-32 px-5 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:32px_32px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
        
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight">
              Ready to Start Your <br/>Internship Journey?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Take the next step in your career by joining the Disha For India Internship Program. Apply your skills, collaborate with peers from all disciplines, and create meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Button size="lg" className="h-14 lg:h-16 px-8 lg:px-10 rounded-full text-base lg:text-lg font-bold bg-white text-primary hover:bg-white/90 shadow-card hover:-translate-y-1 transition-all w-full sm:w-auto" asChild>
                <a href="https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard">
                  Apply for Internship
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 lg:h-16 px-8 lg:px-10 rounded-full text-base lg:text-lg font-bold bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white shadow-none transition-all w-full sm:w-auto" asChild>
                <a href="mailto:info@dishaforindia.org" className="inline-flex items-center gap-2">
                  <Mail className="w-5 h-5" /> Contact Us
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
