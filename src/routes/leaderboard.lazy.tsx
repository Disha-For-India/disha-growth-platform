import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Info,
  TrendingUp,
  TrendingDown,
  Minus,
  Clock,
  ArrowRight,
  Filter,
  SlidersHorizontal,
  Compass,
  Lock,
  Unlock,
  GraduationCap,
  Users,
  CheckCircle2,
  AlertTriangle,
  Award,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BookOpen,
  Heart,
  HeartHandshake,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";

import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  getLeaderboardStats,
  getLeaderboardData,
  type VolunteerImpact,
} from "@/lib/api/leaderboard.functions";
import { cn } from "@/lib/utils";

import { Helmet } from "react-helmet-async";

export const Route = createLazyFileRoute("/leaderboard")({
  component: LeaderboardPage,
});

// Achievement Milestones
const MILESTONES = [
  { id: "m1", title: "National Inspiration", rank: "Top 3", desc: "Highest tier of volunteer dedication.", icon: Sparkles },
  { id: "m2", title: "State Leader", rank: "Top 10", desc: "Recognized leading force in the state.", icon: Award },
  { id: "m3", title: "Mentor", rank: "Top 20", desc: "Guiding the next wave of changemakers.", icon: Users },
  { id: "m4", title: "Local Impact Maker", rank: "Top 50", desc: "Directly transforming local communities.", icon: Compass },
  { id: "m5", title: "Community Contributor", rank: "Top 100", desc: "Solid, regular support to programs.", icon: CheckCircle2 },
];

function LeaderboardPage() {
  // Query Filters State
  const [search, setSearch] = useState("");
  const [selectedState, setSelectedState] = useState("All");
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedCollege, setSelectedCollege] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [timeframe, setTimeframe] = useState<"monthly" | "yearly" | "alltime">("alltime");
  const [page, setPage] = useState(1);
  const limit = 10;

  // React Query Fetching Stats
  const { data: stats, isLoading: statsLoading, isError: statsError } = useQuery({
    queryKey: ["leaderboardStats"],
    queryFn: () => getLeaderboardStats(),
  });

  // React Query Fetching List Data
  const { data: listResult, isLoading: listLoading, isError: listError } = useQuery({
    queryKey: ["leaderboardData", search, selectedState, selectedCity, selectedCollege, selectedCategory, timeframe, page],
    queryFn: async () => {
      try {
        return await getLeaderboardData({
          search: search || undefined,
          state: selectedState === "All" ? undefined : selectedState,
          city: selectedCity === "All" ? undefined : selectedCity,
          college: selectedCollege === "All" ? undefined : selectedCollege,
          category: selectedCategory === "All" ? undefined : selectedCategory,
          timeframe,
          page,
          limit,
        });
      } catch (err) {
        console.error("React Query - Leaderboard Data Error:", err);
        throw err;
      }
    },
  });

  // Mock logged-in user profile (for badge/milestones display evaluation)
  const myProfile = useMemo(() => {
    return {
      rank: 147,
      allTimeScore: 2150,
      programsCompleted: 5,
      hours: 80,
      name: "Your Contributor Dashboard",
    };
  }, []);

  // Compute available filters from data list mapping
  const states = ["All", "Punjab", "Maharashtra", "Delhi", "Karnataka", "West Bengal", "Tamil Nadu", "Gujarat", "Kerala", "Telangana"];
  const categories = ["All", "Financial Literacy", "Entrepreneurship", "Wellness", "Clean & Green", "Education", "Community Development"];
  const cities = ["All", "Ludhiana", "Mumbai", "New Delhi", "Bangalore", "Kolkata", "Chennai", "Amritsar", "Pune", "Ahmedabad", "Kochi", "Hyderabad", "Chandigarh"];
  const colleges = [
    "All",
    "Punjab Agricultural University",
    "St. Xavier's College",
    "Delhi Technological University",
    "REVA University",
    "Jadavpur University",
    "Madras Christian College",
    "Guru Nanak Dev University",
    "Symbiosis International",
    "Nirma University",
    "Panjab University",
    "Cochin University",
    "Osmania University",
    "NMIMS University",
    "LPU University",
  ];

  // Determine milestone unlock status for My Profile (rank 147)
  const unlockedMilestoneIds = useMemo(() => {
    const ids: string[] = [];
    if (myProfile.rank <= 100) ids.push("m5"); // Top 100
    if (myProfile.rank <= 50) ids.push("m4");  // Top 50
    if (myProfile.rank <= 20) ids.push("m3");  // Top 20
    if (myProfile.rank <= 10) ids.push("m2");  // Top 10
    if (myProfile.rank <= 3) ids.push("m1");   // Top 3
    return ids;
  }, [myProfile.rank]);

  // Fetching Top 3 featured volunteers from the search results
  const topThree = useMemo(() => {
    if (!listResult?.data) return [];
    return listResult.data.slice(0, 3);
  }, [listResult?.data]);

  const handleResetFilters = () => {
    setSearch("");
    setSelectedState("All");
    setSelectedCity("All");
    setSelectedCollege("All");
    setSelectedCategory("All");
    setPage(1);
  };

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Community Leaderboard | Disha For India</title>
        <meta name="description" content="Recognizing the top volunteers and contributors making meaningful changes across communities with Disha For India." />
        <link rel="canonical" href="https://dishaforindia.org/leaderboard" />
      </Helmet>

      {/* 1. PAGE HEADER */}
      <section className="relative overflow-hidden bg-white pt-12 pb-10 lg:pt-16 lg:pb-14 border-b border-[#E5E7EB]">
        {/* Subtle decorative background gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#F8FAFC,rgba(0,86,214,0.03))] pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-5 text-center">
          <Reveal>

            <h1 className="mb-3 lg:mb-4">
              Community Leaderboard
            </h1>
            <p className="mx-auto max-w-2xl">
              Celebrate the volunteers making a meaningful difference across our community.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="pt-12 pb-12 lg:pt-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-5">

          {/* 2. TOP 3 VOLUNTEERS */}
          {listLoading ? (
            <div className="mb-16 grid gap-6 sm:grid-cols-3 items-end">
              <div className="h-64 animate-pulse rounded-xl bg-slate-50 order-2 sm:order-1" />
              <div className="h-80 animate-pulse rounded-xl bg-slate-50 order-1 sm:order-2" />
              <div className="h-64 animate-pulse rounded-xl bg-slate-50 order-3 sm:order-3" />
            </div>
          ) : topThree.length >= 3 ? (
            <div className="mb-10 lg:mb-16">
              <h2 className="mb-6 lg:mb-8 text-center">
                Top Volunteers
              </h2>

              <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-6 sm:gap-4 lg:gap-8">
                {/* 2nd Place */}
                <TopVolunteerCard volunteer={topThree[1]} rank={2} />
                {/* 1st Place */}
                <TopVolunteerCard volunteer={topThree[0]} rank={1} isFirst />
                {/* 3rd Place */}
                <TopVolunteerCard volunteer={topThree[2]} rank={3} />
              </div>
            </div>
          ) : null}

          {/* 4. FILTERS */}
          <div className="mb-8 rounded-xl bg-white p-4 shadow-soft border border-[#E5E7EB]">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              {/* Timeframe Toggles */}
              <div className="flex w-full lg:w-auto gap-2 rounded-lg bg-slate-50 p-1 border border-[#E5E7EB]">
                {[
                  { id: "alltime", label: "All Time" },
                  { id: "monthly", label: "This Month" },
                  { id: "yearly", label: "This Year" },
                ].map((tf) => (
                  <button
                    key={tf.id}
                    onClick={() => {
                      setTimeframe(tf.id as any);
                      setPage(1);
                    }}
                    className={cn(
                      "flex-1 lg:flex-none rounded-md px-4 py-2 text-sm font-medium transition-all",
                      timeframe === tf.id
                        ? "bg-white text-[#0056D6] shadow-sm ring-1 ring-black/5"
                        : "text-[#5B6475] hover:text-[#1E2F50]"
                    )}
                  >
                    {tf.label}
                  </button>
                ))}
              </div>

              {/* Advanced Filters */}
              <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                <div className="relative flex-1 lg:w-56">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6475]" />
                  <Input
                    placeholder="Search Volunteer..."
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setPage(1);
                    }}
                    className="pl-9 h-10 rounded-lg border-[#E5E7EB] bg-white text-[#1E2F50] placeholder:text-[#5B6475]/60 focus-visible:ring-[#0056D6]"
                  />
                </div>

                <Select value={selectedCategory} onValueChange={(val) => { setSelectedCategory(val); setPage(1); }}>
                  <SelectTrigger className="flex-1 lg:w-[160px] h-10 rounded-lg border-[#E5E7EB] bg-white text-[#1E2F50] focus:ring-[#0056D6]">
                    <SelectValue placeholder="Program Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat === "All" ? "All Programs" : cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Reset Trigger */}
                {(search || selectedState !== "All" || selectedCity !== "All" || selectedCollege !== "All" || selectedCategory !== "All") && (
                  <Button variant="ghost" size="sm" onClick={handleResetFilters} className="h-10 text-[#5B6475] hover:text-[#1E2F50]">
                    Reset
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* 3. LEADERBOARD TABLE */}
          <div className="overflow-hidden rounded-xl bg-white shadow-soft border border-[#E5E7EB]">
            {listLoading ? (
              <div className="space-y-4 p-8">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-12 w-full animate-pulse rounded-lg bg-slate-50" />
                ))}
              </div>
            ) : listError ? (
              <div className="py-12 text-center text-sm text-red-500">
                <AlertTriangle className="mx-auto h-8 w-8 mb-2" />
                Failed to fetch leaderboard data.
              </div>
            ) : !listResult?.data || listResult.data.length === 0 ? (
              <div className="py-16 text-center max-w-sm mx-auto">
                <Compass className="mx-auto h-12 w-12 text-[#5B6475] mb-4 opacity-50" />
                <h4 className="text-xl font-bold text-heading">No volunteers found</h4>
                <p className="mt-2 text-muted-foreground">
                  Try refining your search query or filters.
                </p>
                <Button variant="outline" className="mt-5 border-[#E5E7EB] text-[#0056D6] hover:bg-[#EAF3FF] hover:text-[#0056D6]" onClick={handleResetFilters}>
                  Clear all filters
                </Button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-slate-50/50">
                    <TableRow className="border-[#E5E7EB] hover:bg-transparent">
                      <TableHead className="w-20 text-[#5B6475] font-semibold text-center">Rank</TableHead>
                      <TableHead className="text-[#5B6475] font-semibold">Volunteer</TableHead>
                      <TableHead className="text-right text-[#5B6475] font-semibold">Points</TableHead>
                      <TableHead className="text-center text-[#5B6475] font-semibold">Hours</TableHead>
                      <TableHead className="text-center text-[#5B6475] font-semibold">Programs</TableHead>
                      <TableHead className="text-center text-[#5B6475] font-semibold">Impact Badge</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <AnimatePresence mode="popLayout">
                      {listResult.data.map((v) => (
                        <motion.tr
                          key={v.id}
                          layoutId={`row-${v.id}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="border-[#E5E7EB] transition-colors hover:bg-slate-50/80 group"
                        >
                          <TableCell className="text-center font-bold text-[#1E2F50]">
                            {v.rank <= 3 ? (
                              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF8E6] text-sm font-bold text-[#F4B400]">
                                {v.rank}
                              </span>
                            ) : (
                              <span>#{v.rank}</span>
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <LeaderboardAvatar
                                src={v.photo}
                                name={v.name}
                                sizeClass="h-14 w-14"
                                isTop={false}
                              />
                              <div>
                                <span className="block font-medium text-[#1E2F50]">{v.name}</span>
                                <span className="block text-xs text-[#5B6475]">{v.city}</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="text-right font-semibold text-[#0056D6]">
                            {timeframe === "monthly" ? v.monthlyScore : timeframe === "yearly" ? v.yearlyScore : v.allTimeScore}
                          </TableCell>
                          <TableCell className="text-center font-medium text-[#5B6475]">
                            {v.hours}
                          </TableCell>
                          <TableCell className="text-center font-medium text-[#5B6475]">
                            {v.programsCompleted}
                          </TableCell>
                          <TableCell className="text-center">
                            <span className={cn(
                              "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap",
                              v.badge === "National Inspiration" && "bg-[#FFF8E6] text-[#F4B400]",
                              v.badge === "State Leader" && "bg-[#EAF3FF] text-[#0056D6]",
                              v.badge === "Mentor" && "bg-slate-100 text-slate-600",
                              v.badge === "Local Impact Maker" && "bg-[#FFF8E6] text-[#F4B400]",
                              v.badge === "Community Contributor" && "bg-[#EAF3FF] text-[#0056D6]"
                            )}>
                              {getBadgeIcon(v.badge)} <span className="ml-1.5">{v.badge}</span>
                            </span>
                          </TableCell>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </TableBody>
                </Table>

                {listResult.totalPages > 1 && (
                  <div className="flex items-center justify-between border-t border-[#E5E7EB] bg-white px-6 py-4">
                    <p className="text-sm text-muted-foreground">
                      Showing page <span className="font-medium text-[#1E2F50]">{listResult.currentPage}</span> of <span className="font-medium text-[#1E2F50]">{listResult.totalPages}</span>
                    </p>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={page === 1}
                        onClick={() => setPage((p) => p - 1)}
                        className="border-[#E5E7EB] text-[#5B6475] hover:bg-slate-50 hover:text-[#1E2F50]"
                      >
                        <ChevronLeft className="h-4 w-4 mr-1" /> Previous
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={page === listResult.totalPages}
                        onClick={() => setPage((p) => p + 1)}
                        className="border-[#E5E7EB] text-[#5B6475] hover:bg-slate-50 hover:text-[#1E2F50]"
                      >
                        Next <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. MOTIVATIONAL SECTION */}
      <section className="bg-[#F8FAFC] py-16 lg:py-24 border-t border-[#E5E7EB]">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF8E6] text-[#F4B400]">
              <Heart className="h-8 w-8" />
            </div>
            <h2 className="mb-4">
              Every Contribution Matters
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Whether you've volunteered for one hour or one hundred, every act of service creates positive change. Thank you for helping build a stronger community.
            </p>
            <Button asChild size="lg" className="bg-[#F4B400] hover:bg-[#D99B00] text-white rounded-full px-8 font-semibold shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all">
              <a href="https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard" className="inline-flex items-center gap-2">
                <HeartHandshake className="h-5 w-5" />
                <span>Be a Volunteer</span>
              </a>
            </Button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

// Helper for top volunteer cards
function TopVolunteerCard({ volunteer, rank, isFirst = false }: { volunteer: any, rank: number, isFirst?: boolean }) {
  if (!volunteer) return null;
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={cn(
        "relative flex w-full max-w-sm flex-col items-center rounded-2xl bg-white p-6 shadow-soft border border-[#E5E7EB] transition-shadow hover:shadow-card order-2 sm:order-none",
        isFirst ? "sm:-translate-y-4 sm:scale-105 z-10 border-[#F4B400]/30 shadow-[0_8px_30px_rgb(0,0,0,0.08)] order-1 sm:order-none" : "z-0",
        rank === 3 && "order-3 sm:order-none"
      )}
    >
      <div className="absolute -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF8E6] font-bold text-[#F4B400] shadow-sm border border-[#F4B400]/20">
        #{rank}
      </div>

      <LeaderboardAvatar
        src={volunteer.photo}
        name={volunteer.name}
        sizeClass="h-24 w-24 mb-4"
        isTop={true}
      />

      <h4 className={cn("text-xl font-bold text-heading text-center", isFirst ? "text-2xl" : "")}>
        {volunteer.name}
      </h4>

      <span className="mt-2 inline-flex items-center rounded-full bg-[#EAF3FF] px-2.5 py-1 text-[11px] font-semibold text-[#0056D6]">
        {getBadgeIcon(volunteer.badge)} <span className="ml-1.5">{volunteer.badge}</span>
      </span>

      <div className="mt-6 w-full grid grid-cols-2 gap-4 border-t border-[#E5E7EB] pt-4">
        <div className="text-center">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Points</p>
          <p className="mt-1 text-lg font-bold text-[#0056D6]">{volunteer.allTimeScore}</p>
        </div>
        <div className="text-center">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Hours</p>
          <p className="mt-1 text-lg font-bold text-heading">{volunteer.hours}h</p>
        </div>
      </div>
    </motion.div>
  );
}

// Helper to get an icon based on badge text
function getBadgeIcon(badge: string) {
  if (badge.includes("Inspiration") || badge.includes("Champion")) return "🌟";
  if (badge.includes("Leader")) return "🔥";
  if (badge.includes("Mentor")) return "💡";
  if (badge.includes("Impact")) return "🚀";
  return "💙";
}


// Helper to render modern avatars with initials fallback
function LeaderboardAvatar({
  src,
  name,
  sizeClass = "h-14 w-14",
  isTop = false
}: {
  src: string;
  name: string;
  sizeClass?: string;
  isTop?: boolean;
}) {
  const isDefault = !src || src.includes('dicebear.com');
  const size = isTop ? 96 : 56;

  const getInitials = (n: string) => {
    const parts = n.trim().split(' ').filter(Boolean);
    if (parts.length === 0) return 'V';
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const getBgColor = (n: string) => {
    const colors = [
      'bg-blue-500', 'bg-teal-500', 'bg-purple-500', 'bg-indigo-500',
      'bg-rose-500', 'bg-amber-500', 'bg-emerald-500'
    ];
    let hash = 0;
    for (let i = 0; i < n.length; i++) {
      hash = n.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  const initials = getInitials(name);
  const bgColor = getBgColor(name);

  const containerClasses = cn(
    "rounded-full flex items-center justify-center font-bold text-white shadow-md border-[3px] border-white transition-transform duration-200 hover:scale-[1.03] overflow-hidden flex-shrink-0",
    sizeClass,
    isDefault ? bgColor : "bg-slate-100"
  );

  if (isDefault) {
    return (
      <div className={containerClasses} title={name}>
        <span className={isTop ? "text-3xl" : "text-lg font-semibold tracking-wide"}>{initials}</span>
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      <OptimizedImage
        src={src}
        alt={name}
        width={size}
        height={size}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
