import { Compass, Sparkles, Users, Briefcase, HeartHandshake, Trophy } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const FEATURES = [
  {
    icon: Compass,
    title: "Unlocking Human Potential",
    description: "Helping people unlock their potential and create meaningful change.",
    accent: "text-primary bg-primary-soft",
  },
  {
    icon: Sparkles,
    title: "Developing Changemakers",
    description: "We empower people to lead by example, inspire others, and create lasting impact through service.",
    accent: "text-green bg-green-soft",
  },
  {
    icon: Briefcase,
    title: "Creating Equal Opportunities",
    description: "We connect people with meaningful opportunities to learn, contribute, and grow—regardless of their background.",
    accent: "text-primary bg-primary-soft",
  },
  {
    icon: HeartHandshake,
    title: "Building a Culture of Giving",
    description: "We inspire people to give back through kindness, service, and meaningful action that strengthens communities.",
    accent: "text-green bg-green-soft",
  },
  {
    icon: Trophy,
    title: "Celebrating Changemakers",
    description: "We recognize individuals whose dedication and service inspire stronger communities and lasting impact.",
    accent: "text-primary bg-primary-soft",
  },
  {
    icon: Users,
    title: "Building a Legacy of Change",
    description: "Every contribution inspires others to step forward, creating a ripple effect that strengthens communities for generations.",
    accent: "text-green bg-green-soft",
  },
];

export function HowDishaHelps() {
  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          title="The Change We Stand For."
          description="Inspiring people to come together, give back, and create lasting social impact."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={index * 0.08}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${feature.accent}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
