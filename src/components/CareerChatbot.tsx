import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  RefreshCw,
  ExternalLink,
  ArrowRight,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  findChatbotResponse,
  TOTAL_UNIQUE_QUESTIONS,
  type ActionButton,
} from "@/lib/chatbot-data";

type Message = {
  id: string;
  role: "user" | "bot";
  text: string;
  timestamp: string;
  actions?: ActionButton[];
  suggestions?: string[];
  matchedTitle?: string;
};

// Quick Category Prompts shown to the user
const QUICK_CATEGORIES = [
  { label: "🎓 Internships", prompt: "How to apply for Disha Internship?" },
  { label: "🤝 Volunteering", prompt: "How to volunteer at Disha For India?" },
  { label: "💡 Startups", prompt: "How to validate a startup idea as a student?" },
  { label: "🧘 Exam Stress", prompt: "How to handle exam stress and study anxiety?" },
  { label: "🏛️ PM Mudra", prompt: "What is PM Mudra Yojana loan scheme?" },
  { label: "🇮🇳 Govt Schemes", prompt: "Which government schemes support student startups & scholarships?" },
  { label: "🏆 Leaderboard", prompt: "How does Disha Leaderboard and impact points work?" },
  { label: "📞 Contact Us", prompt: "What is Disha For India phone number and email?" },
];

export function CareerChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "bot",
      text: `Hi there! 👋 Welcome to Disha Assistant.\n\nI'm your guide for internships, volunteer opportunities, student startup advice, and government schemes. How can I help you today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      suggestions: [
        "Tell me about Disha Internships",
        "How to volunteer?",
        "PM Mudra loan details",
        "How to handle exam stress?"
      ]
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, open]);

  const handleSend = (text: string) => {
    const value = text.trim();
    if (!value || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: value,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = findChatbotResponse(value);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        text: response.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        actions: response.actions,
        suggestions: response.suggestions,
        matchedTitle: response.matchedTitle
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 250);
  };

  const resetChat = () => {
    setMessages([
      {
        id: "welcome-reset",
        role: "bot",
        text: `Chat reset! I'm here to help answer your questions. What would you like to know?`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        suggestions: [
          "Tell me about Disha Internships",
          "How to volunteer?",
          "PM Mudra loan details"
        ]
      }
    ]);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open Disha Assistant Chatbot"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-card transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Main Chat Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-22 right-4 z-50 flex h-[540px] w-[92vw] max-w-md flex-col overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-2xl sm:right-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-primary px-4 py-3.5 text-primary-foreground">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white shadow-inner">
                  <Bot className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-sm leading-tight flex items-center gap-1.5">
                    Disha Assistant
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold">
                      <Sparkles className="h-3 w-3" /> 1,000+ Qs
                    </span>
                  </h3>
                  <p className="text-xs text-primary-foreground/80 flex items-center gap-1.5 mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                    Here to help
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={resetChat}
                  title="Reset conversation"
                  className="rounded-full p-1.5 text-primary-foreground/80 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  title="Close chat"
                  className="rounded-full p-1.5 text-primary-foreground/80 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Quick Category Chips Header */}
            <div className="flex gap-2 overflow-x-auto border-b border-border bg-muted/40 px-3 py-2 scrollbar-none">
              {QUICK_CATEGORIES.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => handleSend(cat.prompt)}
                  className="shrink-0 rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground transition-all hover:border-primary hover:bg-primary-soft hover:text-primary"
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Messages Area */}
            <div className="flex-1 space-y-4 overflow-y-auto p-4 bg-gradient-to-b from-card via-background to-secondary/30">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={cn(
                    "flex flex-col gap-1",
                    m.role === "user" ? "items-end" : "items-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[88%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-sm",
                      m.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-none font-medium"
                        : "border border-border bg-card text-foreground rounded-bl-none"
                    )}
                  >
                    {m.matchedTitle && (
                      <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-2.5 py-0.5 text-[11px] font-bold text-primary">
                        <BookOpen className="h-3 w-3" /> {m.matchedTitle}
                      </span>
                    )}

                    <div className="text-foreground/90 font-normal leading-relaxed">{m.text}</div>

                    {/* Interactive Action Buttons */}
                    {m.actions && m.actions.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2 pt-2 border-t border-border/60">
                        {m.actions.map((act, idx) => (
                          <a
                            key={idx}
                            href={act.url}
                            target={act.isExternal ? "_blank" : "_self"}
                            rel={act.isExternal ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                          >
                            {act.label}
                            {act.isExternal ? <ExternalLink className="h-3 w-3" /> : <ArrowRight className="h-3 w-3" />}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  <span className="px-1 text-[10px] text-muted-foreground">
                    {m.timestamp}
                  </span>

                  {/* Follow-up Suggestion Chips */}
                  {m.suggestions && m.suggestions.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-1.5 max-w-[92%]">
                      {m.suggestions.map((sug, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSend(sug)}
                          className="rounded-full border border-border bg-card/80 px-2.5 py-1 text-xs text-muted-foreground hover:border-primary hover:text-primary transition-all"
                        >
                          💬 {sug}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 rounded-2xl border border-border bg-card p-3 text-xs text-muted-foreground w-fit rounded-bl-none">
                  <Bot className="h-4 w-4 text-primary animate-spin" />
                  <span>Disha Assistant is typing…</span>
                </div>
              )}

              <div ref={endRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex items-center gap-2 border-t border-border bg-card p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything (e.g. Mudra loan, internship, stress)..."
                className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-xs sm:text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all"
              />
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim() || isTyping}
                className="h-10 w-10 shrink-0 rounded-full shadow-card hover:scale-105 transition-transform"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
