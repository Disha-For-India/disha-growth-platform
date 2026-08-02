import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Briefcase, Calendar, Compass, Gift, GraduationCap, Heart, HeartHandshake, Sparkles, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, lazy, Suspense } from "react";
import { images } from "@/lib/images";
import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SkeletonSection } from "@/components/shared/SkeletonSection";
import { ProgramCard, BlogCard, StoryCard } from "@/components/cards";
import {
  PROGRAMS,
  BLOGS,
  STORIES,
  TESTIMONIALS,
} from "@/lib/site-data";

const MarketplaceShowcase = lazy(() => import("@/components/home/MarketplaceShowcase").then(m => ({ default: m.MarketplaceShowcase })));
const HowDishaHelps = lazy(() => import("@/components/home/HowDishaHelps").then(m => ({ default: m.HowDishaHelps })));
const OurApproach = lazy(() => import("@/components/home/OurApproach").then(m => ({ default: m.OurApproach })));
const FaqSection = lazy(() => import("@/components/home/FaqSection").then(m => ({ default: m.FaqSection })));

const HERO_SLIDES = [
  {
    headline: "Find Your Purpose. Make a Real Difference.",
    description: "Join a welcoming community of volunteers, professionals, and NGOs working together to create lasting social impact. Your time and skills have the power to change lives.",
    primaryCta: { label: "Become a Volunteer", href: "https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard" },
    image: images.hero.home[0],
    alt: "Volunteers and community members collaborating",
  },
  {
    headline: "Turn Your Passion Into Purposeful Action.",
    description: "Whether you're a student, a working professional, or a retiree, Disha provides meaningful volunteering opportunities where your contribution truly matters.",
    primaryCta: { label: "Start Making an Impact", href: "https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard" },
    image: images.gallery[0],
    alt: "A community celebrating meaningful achievements",
  },
  {
    headline: "Volunteer Opportunities That Match Your Skills.",
    description: "From on-the-ground community service to skill-based digital volunteering, discover opportunities that fit your schedule and expertise.",
    primaryCta: { label: "Explore Opportunities", href: "/programs" },
    image: images.gallery[2],
    alt: "Community members engaging in learning programs",
  },
  {
    headline: "Building a Stronger, More Connected India.",
    description: "When you volunteer with Disha For India, you don't just give time—you become part of a community dedicated to shaping a better tomorrow.",
    primaryCta: { label: "Join the Community", href: "/volunteer" },
    image: images.gallery[1],
    alt: "A diverse group of people celebrating success",
  }
];

function FullWidthHeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  useEffect(() => {
    if (isHovered || !HERO_SLIDES?.length) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleTouchStart = (e: any) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e: any) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    setTouchStart(null);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  return (
    <section
      className="group relative w-full overflow-hidden bg-gradient-hero"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Hero Carousel"
      aria-live="polite"
    >
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />

      {/* Main Layout Container with CSS Grid Stacking */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-10 pb-16 lg:pt-16 lg:pb-24 grid grid-cols-1">

        {/* Dynamic Slides stacked in same grid cell */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="col-start-1 row-start-1 z-20 flex items-center"
          >
            <div className="mx-auto w-full grid items-center gap-10 lg:grid-cols-2">

              {/* Dynamic Heading Column */}
              <div className="flex flex-col justify-center pointer-events-auto">
                <h1 className="mb-5 [text-wrap:balance]">
                  {HERO_SLIDES[currentSlide].headline}
                </h1>
                <p className="mb-7 max-w-xl [text-wrap:balance]">
                  {HERO_SLIDES[currentSlide].description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {HERO_SLIDES[currentSlide].primaryCta.href.startsWith("#") ? (
                    <Button
                      size="lg"
                      className="w-full sm:w-auto h-12 px-7 text-base shadow-md rounded-[14px] bg-[#0B4DA2] text-white hover:bg-[#083C84] transition-colors border-none"
                      onClick={() => scrollToSection(HERO_SLIDES[currentSlide].primaryCta.href.substring(1))}
                    >
                      {HERO_SLIDES[currentSlide].primaryCta.label} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : HERO_SLIDES[currentSlide].primaryCta.href.startsWith("/") ? (
                    <Button asChild size="lg" className="w-full sm:w-auto h-12 px-7 text-base shadow-md rounded-[14px] bg-[#0B4DA2] text-white hover:bg-[#083C84] transition-colors border-none">
                      <Link to={HERO_SLIDES[currentSlide].primaryCta.href}>
                        {HERO_SLIDES[currentSlide].primaryCta.label} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <Button asChild size="lg" className="w-full sm:w-auto h-12 px-7 text-base shadow-md rounded-[14px] bg-[#0B4DA2] text-white hover:bg-[#083C84] transition-colors border-none">
                      <a href={HERO_SLIDES[currentSlide].primaryCta.href}>
                        {HERO_SLIDES[currentSlide].primaryCta.label} <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>
                    <strong className="font-semibold text-foreground">Established in 2017</strong> — Empowering volunteers to create real-world impact.
                  </span>
                </div>
              </div>

              {/* Dynamic Image Column */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[380px] overflow-hidden rounded-[2rem] border border-border shadow-card bg-muted/20 pointer-events-auto">
                <OptimizedImage
                  src={HERO_SLIDES[currentSlide].image}
                  alt={HERO_SLIDES[currentSlide].alt}
                  width={1200}
                  height={800}
                  loading={currentSlide === 0 ? "eager" : "lazy"}
                  fetchPriority={currentSlide === 0 ? "high" : "auto"}
                  wrapperClassName="absolute inset-0 h-full w-full"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[10s] hover:scale-105"
                />
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-3 rounded-full bg-background/80 px-4 py-2.5 backdrop-blur-md border border-border shadow-sm">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"
              }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
          />
        ))}
      </div>

      {/* Manual Navigation Controls */}
      <div className="absolute bottom-5 left-5 md:bottom-[30px] md:left-[30px] lg:bottom-[40px] lg:left-[40px] z-50 flex gap-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white border border-gray-200 shadow-sm text-foreground flex items-center justify-center hover:bg-gray-50 transition"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white border border-gray-200 shadow-sm text-foreground flex items-center justify-center hover:bg-gray-50 transition"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>
      </div>
    </section>
  );
}

export const Route = createFileRoute("/")({
  component: Home,
});

import { Helmet } from "react-helmet-async";

function Home() {
  const featuredBlogs = BLOGS.filter((b) => b.featured).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Disha For India empowers communities by connecting people with opportunities, volunteering initiatives, and meaningful ways to create social impact." />
        <link rel="canonical" href="https://dishaforindia.org/" />
        <meta property="og:title" content="Disha For India — Empowering Communities Through Opportunities" />
        <meta property="og:description" content="Disha For India empowers communities by connecting people with opportunities, volunteering initiatives, and meaningful ways to create social impact." />
        <meta property="og:url" content="https://dishaforindia.org/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Disha For India",
              "url": "https://dishaforindia.org/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://dishaforindia.org/programs?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
      </Helmet>

      {/* SECTION 1 — Hero */}
      <FullWidthHeroCarousel />

      {/* SECTION 2 — LAZY LOADED CONTENT */}
      <Suspense fallback={<SkeletonSection />}>
        {/* SECTION 2 — Marketplace Summary */}
        <MarketplaceShowcase />

        {/* SECTION 3 — The Problem/Solution (How Disha Helps) */}
        <HowDishaHelps />

        {/* SECTION 4 — Overview of Key Programs */}
        <section className="py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHeading
              align="center"
              title="Where your time creates real impact"
              description="From hands-on community service to specialized support, explore structured volunteering programs designed to empower individuals and uplift communities."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {PROGRAMS.slice(0, 3).map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.05} className="h-full">
                  <ProgramCard program={p} />
                </Reveal>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/programs">Browse Volunteer Programs</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 5 — Volunteer & Support Call-to-Action */}
        <section className="border-y border-border bg-gradient-section py-12 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Your skills can change a life"
                description="We rely on passionate individuals to support our communities. You don't need a background in social work—just a willingness to help."
              />
              <ul className="mt-8 space-y-4">
                {[
                  { icon: Gift, text: "Use your professional skills for good" },
                  { icon: Heart, text: "Participate in local community initiatives" },
                  { icon: Sparkles, text: "Lead and support outreach programs" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <Reveal delay={i * 0.05} className="flex items-center gap-4">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft text-primary">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <span className="font-medium text-foreground">{item.text}</span>
                    </Reveal>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-[#F4B400] hover:bg-[#D99B00] text-white rounded-full px-7 h-12 text-base font-semibold shadow-sm transition-all border-none">
                  <a href="https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard" className="inline-flex items-center gap-2">
                    <HeartHandshake className="h-5 w-5 text-white" />
                    <span>Be a Volunteer</span>
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <Reveal delay={0.2}>
              <OptimizedImage
                src={images.gallery[5]}
                alt="Volunteers interacting with students"
                width={800}
                height={600}
                loading="lazy"
                className="w-full rounded-3xl border border-border object-cover shadow-card"
              />
            </Reveal>
          </div>
        </section>

        {/* SECTION 6 — Our Core Approach */}
        <OurApproach />



        {/* SECTION 8 — Success Stories Highlights */}
        <section className="border-y border-border bg-card py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHeading
              align="center"
              title="Stories of transformation"
              description="Real stories from the volunteers, NGOs, and communities who make our movement possible. See the difference a single connection can make."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {STORIES.slice(0, 3).map((s, i) => (
                <Reveal key={s.id} delay={i * 0.05} className="h-full">
                  <StoryCard story={s} />
                </Reveal>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/success-stories">Read Community Stories</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 9 — Latest Insights (Blog) */}
        <section className="py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHeading
              align="center"
              title="Insights, news & resources"
              description="Stay updated with our latest thoughts on community development, volunteering, and youth empowerment."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {featuredBlogs.map((b, i) => (
                <Reveal key={b.slug} delay={i * 0.06} className="h-full">
                  <BlogCard blog={b} />
                </Reveal>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/blogs">Visit Our Blog</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 10 — Testimonials Carousel */}
        <section className="border-y border-border bg-gradient-section py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHeading
              title="Community Voices"
              description="Hear from the volunteers, partners, and community leaders who make our movement possible."
              align="center"
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.06}>
                  <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft">
                    <div className="flex gap-0.5 text-primary">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      "{t.quote}"
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-4 border-t border-border pt-4">
                      <OptimizedImage
                        src={t.photo}
                        alt={t.name}
                        loading="lazy"
                        width={44}
                        height={44}
                        className="h-11 w-11 rounded-full object-cover"
                      />
                      <div>
                        <p >{t.name}</p>
                        <p >{t.role}</p>
                      </div>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 12 — FAQ */}
        <FaqSection />

        {/* SECTION 13 — Volunteer CTA */}
        <section className="py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-5">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-hero px-6 py-10 lg:py-16 text-center text-foreground sm:px-12 border border-border">
                <div className="relative mx-auto max-w-2xl">
                  <Compass className="mx-auto h-10 w-10 text-primary" />
                  <h2 className="mt-5 text-ink">
                    Ready to Make Your Mark?
                  </h2>
                  <p className="mt-5 ">
                    Join thousands of changemakers who are already using their time, skills, and passion to build a stronger India. There is a place for you here.
                  </p>
                  <div className="mt-8 flex justify-center gap-4">
                    <Button asChild size="lg" className="rounded-full px-8">
                      <a href="https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard">Join as a Volunteer</a>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </Suspense>

      {/* Final Spacer for Footer spacing if needed */}
      <div className="h-12 bg-background"></div>
    </>
  );
}
