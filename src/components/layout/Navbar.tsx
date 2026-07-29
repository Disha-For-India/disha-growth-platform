import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/use-auth";

const TOOLS = [
  { to: "/opportunity-hub", label: "Opportunity Hub" },
  { to: "/leaderboard", label: "Leaderboard" },
] as const;

const ABOUT = [
  { to: "/about", label: "About Disha" },
  { to: "/vision-mission", label: "Vision & Mission" },
  { to: "/programs", label: "Programs" },
  { to: "/success-stories", label: "Success Stories" },
] as const;

const MAIN = [
  { to: "/events", label: "Events" },
  { to: "/blogs", label: "Blogs" },
  { to: "/gallery", label: "Gallery" },

] as const;

function TopContactBar() {
  return (
    <div className="bg-[#0B3D91] text-white h-10 md:h-11 flex items-center">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 text-[14px]">
        <div className="flex items-center gap-4">
          <a href="mailto:info@dishaforindia.org" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
            <Mail className="h-4 w-4" /> <span className="hidden sm:inline">info@dishaforindia.org</span>
          </a>
          <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
            <Phone className="h-4 w-4" /> <span className="hidden sm:inline">+91 98765 43210</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-white/90 mr-1">Follow Us:</span>
          <a href="#" aria-label="Facebook" className="hover:text-white/80 transition-colors"><Facebook className="h-4 w-4" /></a>
          <a href="#" aria-label="Instagram" className="hover:text-white/80 transition-colors"><Instagram className="h-4 w-4" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white/80 transition-colors"><Linkedin className="h-4 w-4" /></a>
          <a href="#" aria-label="Twitter" className="hover:text-white/80 transition-colors"><Twitter className="h-4 w-4" /></a>
        </div>
      </div>
    </div>
  );
}

export function Logo({ isScrolled }: { isScrolled?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-6 group py-2">
      <img src="/logo.png" alt="Disha For India Icon" width={128} height={128} loading="eager" fetchPriority="high" className="h-11 md:h-[52px] w-auto object-contain transition-transform group-hover:scale-105" />
      <span className="flex flex-col leading-none gap-0 justify-center">
        <span className="font-display text-xl font-bold tracking-tight transition-colors text-[#000000] pb-0.5">
          Disha <span className="text-[#000000]">For India</span>
        </span>
        <span className="text-[10.5px] font-bold uppercase tracking-widest transition-colors text-[#1E3A5F]">
          WE EMPOWER | WE MAKE THE DIFFERENCE
        </span>
      </span>
    </Link>
  );
}

function NavDropdown({
  label,
  items,
  isScrolled,
}: {
  label: string;
  items: readonly { to: string; label: string }[];
  isScrolled: boolean;
}) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 rounded-md px-3 py-2 text-base font-semibold transition-colors duration-200 text-nav hover:text-nav-hover">
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 w-60 translate-y-1 rounded-2xl border border-nav-border bg-white p-2 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {items.map((it) => (
          <Link
            key={it.to}
            to={it.to}
            className="block rounded-lg px-3 py-2 text-base font-semibold text-nav transition-colors duration-200 hover:bg-gray-50 hover:text-nav-hover"
            activeProps={{ className: "text-nav-hover font-semibold" }}
          >
            {it.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function VolunteerAuthLink({ isScrolled }: { isScrolled: boolean }) {
  const { user, logout } = useAuth();

  if (user) {
    return (
      <div className="group relative">
        <button className="flex items-center gap-1 rounded-md px-3 py-2 text-base font-semibold transition-colors duration-200 text-nav hover:text-nav-hover">
          {user.name}
          <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
        </button>
        <div className="invisible absolute right-0 top-full z-50 w-48 translate-y-1 rounded-2xl border border-nav-border bg-white p-2 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          <div className="px-3 py-2 text-sm font-semibold text-nav border-b border-nav-border mb-1">
            {user.name}
          </div>
          <button
            onClick={logout}
            className="w-full text-left block rounded-lg px-3 py-2 text-base font-semibold text-nav transition-colors duration-200 hover:bg-gray-50 hover:text-nav-hover"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return null;
}



function MobileVolunteerAuthLink() {
  const { user, logout } = useAuth();

  if (user) {
    return (
      <div className="mt-4 border-t border-nav-border pt-4">
        <div className="px-3 mb-2 text-sm font-semibold text-nav">
          {user.name}
        </div>
        <SheetClose asChild>
          <button
            onClick={logout}
            className="w-full text-left block rounded-lg px-3 py-2.5 text-base font-semibold text-nav transition-colors duration-200 hover:bg-gray-50 hover:text-nav-hover"
          >
            Logout
          </button>
        </SheetClose>
      </div>
    );
  }

  return null;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopContactBar />
      <header className="sticky top-0 z-50 w-full bg-white border-b border-nav-border shadow-sm">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Logo isScrolled={isScrolled} />

        <div className="hidden items-center gap-8 lg:flex">
          <NavDropdown label="About" items={ABOUT} isScrolled={isScrolled} />
          <NavDropdown label="Community Hub" items={TOOLS} isScrolled={isScrolled} />
          {MAIN.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="rounded-md px-3 py-2 text-base font-semibold transition-colors duration-200 text-nav hover:text-nav-hover"
              activeProps={{ className: "text-nav-hover font-semibold" }}
            >
              {it.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <VolunteerAuthLink isScrolled={isScrolled} />
          <a href="https://app-disha-for-indiaa.vercel.app" className="rounded-[14px] bg-dash-btn text-white px-6 py-2.5 text-base font-semibold transition-all duration-200 hover:bg-dash-hover hover:scale-[1.02] shadow-sm inline-flex items-center justify-center border-none">Dashboard</a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Open menu" className="lg:hidden h-11 w-11 border-transparent bg-transparent hover:bg-gray-50 text-nav">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" hideClose className="w-[88vw] max-w-sm overflow-y-auto p-0 bg-white border-l border-nav-border shadow-2xl">
            <div className="flex items-center justify-between border-b border-nav-border px-5 py-4 bg-white">
              <Logo isScrolled={true} />
              <SheetClose asChild>
                <Button variant="ghost" size="icon" aria-label="Close menu" className="h-11 w-11 text-nav hover:bg-gray-50 hover:text-nav-hover">
                  <X className="h-6 w-6" />
                </Button>
              </SheetClose>
            </div>
            <div className="px-5 py-4 bg-white min-h-full">
              {[...ABOUT, ...TOOLS, ...MAIN].map((it) => (
                <SheetClose asChild key={it.to}>
                  <Link
                    to={it.to}
                    className="block rounded-lg px-3 py-2.5 text-base font-semibold text-nav transition-colors duration-200 hover:bg-gray-50 hover:text-nav-hover"
                    activeProps={{ className: "text-nav-hover font-semibold" }}
                  >
                    {it.label}
                  </Link>
                </SheetClose>
              ))}

              <MobileVolunteerAuthLink />

              <SheetClose asChild>
                <a href="https://app-disha-for-indiaa.vercel.app" className="rounded-[14px] bg-dash-btn text-white px-6 py-2.5 text-base font-semibold transition-all duration-200 hover:bg-dash-hover hover:scale-[1.02] shadow-sm inline-flex items-center justify-center w-full mt-4 border-none">
                  Dashboard
                </a>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
    </>
  );
}


