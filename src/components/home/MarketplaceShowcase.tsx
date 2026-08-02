import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Gift, Award, Briefcase, Ticket, Library, Target, ArrowRight, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { OptimizedImage } from "@/components/shared/OptimizedImage";

const CATEGORIES = [
  { icon: GraduationCap, label: "Scholarships", color: "text-blue-500", bg: "bg-blue-50" },
  { icon: BookOpen, label: "Learning Resources", color: "text-emerald-500", bg: "bg-emerald-50" },
  { icon: Gift, label: "Disha Merchandise", color: "text-purple-500", bg: "bg-purple-50" },
  { icon: Award, label: "Certificates", color: "text-amber-500", bg: "bg-amber-50" },
  { icon: Briefcase, label: "Career Support", color: "text-indigo-500", bg: "bg-indigo-50" },
  { icon: Ticket, label: "Gift Vouchers", color: "text-rose-500", bg: "bg-rose-50" },
  { icon: Library, label: "Online Courses", color: "text-cyan-500", bg: "bg-cyan-50" },
  { icon: Target, label: "Exclusive Rewards", color: "text-pink-500", bg: "bg-pink-50" },
];

export function MarketplaceShowcase() {
  return (
    <section id="marketplace" className="scroll-mt-[100px] relative overflow-hidden bg-background pt-16 pb-4 lg:pt-28 lg:pb-8">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary/5 blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-blue-400/5 blur-[120px] pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">


            <Reveal delay={0.1}>
              <h2 className=" mb-4">
                Recognizing <span className="text-primary">Every Contribution</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className=" mb-10 max-w-xl">
                Your efforts, skills, and participation deserve recognition. Disha provides opportunities to learn, contribute, and celebrate meaningful achievements through <strong className="text-foreground">Community Impact Credits (Disha Coins)</strong>.
              </p>
            </Reveal>

            {/* Categories */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-3 mb-10">
                {CATEGORIES.map((cat, i) => {
                  const Icon = cat.icon;
                  return (
                    <motion.div
                      key={cat.label}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:border-primary/20 hover:shadow-md"
                    >
                      <div className={`flex h-6 w-6 items-center justify-center rounded-full ${cat.bg}`}>
                        <Icon className={`h-3.5 w-3.5 ${cat.color}`} />
                      </div>
                      <span className="text-foreground/90">{cat.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-6">
                <Button asChild size="lg" className="h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all">
                  <a href="https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard">
                    Discover Opportunities <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <div className="flex flex-col text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Official Changemaker Hub</span>
                  <span>Recognizing individuals for learning, volunteering, and making an impact.</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Side Browser Mockup — Unified Wall Hanging Assembly */}
          <div className="relative order-1 lg:order-2 pt-2 lg:pt-4 pb-4">
            <Reveal delay={0.3}>
              {/* Entire Hanging Assembly (Logo Anchor + Lines + Card) moves together as one unit */}
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [-0.6, 0.6, -0.6] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.015, rotate: 0 }}
                style={{ transformOrigin: "top center" }}
                className="relative w-full max-w-[540px] mx-auto pt-10"
              >
                {/* 3-Part Header Banner directly above Marketplace Card (Exact Match to User Screenshot) */}
                <div className="relative w-full mb-3">
                  {/* Orange Dashed Arching SVG Line */}
                  <svg className="absolute top-1/2 left-0 w-full h-10 -translate-y-1/2 pointer-events-none z-10" viewBox="0 0 400 40" fill="none">
                    <path d="M 95 30 C 160 8, 240 8, 305 30" stroke="#ea580c" strokeWidth="2" strokeDasharray="5 4" />
                  </svg>

                  <div className="relative z-20 flex items-center justify-between gap-1.5 max-w-lg mx-auto px-1">
                    
                    {/* Left Pill Card: Earn Disha Coins */}
                    <motion.div
                      whileHover={{ scale: 1.04, rotate: 0 }}
                      className="flex items-center gap-2.5 rounded-2xl bg-card border border-border/80 px-3.5 py-2 shadow-md -rotate-2 transform transition-all"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-amber-500 font-bold text-base shadow-xs">
                        🪙
                      </div>
                      <div className="flex flex-col text-xs leading-tight">
                        <span className="font-bold text-heading whitespace-nowrap">Earn Disha Coins</span>
                        <span className="text-muted-foreground text-[11px] whitespace-nowrap">for your impact</span>
                      </div>
                    </motion.div>

                    {/* Center Logo Badge */}
                    <div className="h-12 w-12 shrink-0 rounded-full bg-white p-1 shadow-lg border border-border flex items-center justify-center ring-4 ring-background z-30">
                      <img src="/logo.png" alt="Disha For India Logo" className="h-full w-full object-contain" />
                    </div>

                    {/* Right Pill Card: Redeem Rewards */}
                    <motion.div
                      whileHover={{ scale: 1.04, rotate: 0 }}
                      className="flex items-center gap-2.5 rounded-2xl bg-purple-50/80 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-900/60 px-3.5 py-2 shadow-md rotate-2 transform transition-all"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-400 font-bold text-base shadow-xs">
                        🏆
                      </div>
                      <div className="flex flex-col text-xs leading-tight">
                        <span className="font-bold text-heading whitespace-nowrap">Redeem Rewards</span>
                        <span className="text-purple-600/80 dark:text-purple-400/80 text-[11px] whitespace-nowrap">that empower you</span>
                      </div>
                    </motion.div>

                  </div>
                </div>

                {/* Marketplace Browser Frame Mockup */}
                <div className="relative z-20 mt-3 rounded-2xl border border-border bg-card shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] overflow-hidden">
                  {/* macOS Browser Header */}
                  <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2.5 backdrop-blur-md">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-rose-400" />
                      <div className="h-3 w-3 rounded-full bg-amber-400" />
                      <div className="h-3 w-3 rounded-full bg-emerald-400" />
                    </div>
                    <div className="flex h-6 px-4 items-center justify-center rounded-full bg-background/80 text-[11px] text-muted-foreground border border-border/60 font-mono">
                      app-disha-for-indiaa.vercel.app
                    </div>
                    <div className="w-10" />
                  </div>

                  {/* Browser Content */}
                  <div className="relative bg-background overflow-hidden p-1">
                    <OptimizedImage
                      src="/optimized/gallery/marketplace.webp"
                      alt="Disha Changemaker Hub Dashboard"
                      className="w-full h-auto object-cover rounded-xl border border-border/40"
                    />

                    {/* Subtle glare effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none rounded-xl" />
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
