import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/internship-program")({
  head: () => ({
    meta: [
      { title: "Internship Program — Disha For India" },
      { name: "description", content: "Join the Disha For India Internship Program. Learn through real impact, build practical skills, and contribute to meaningful projects." },
      { property: "og:title", content: "Internship Program — Disha For India" },
      { property: "og:description", content: "Learn through real impact and build practical skills with Disha For India's Internship Program." },
      { property: "og:url", content: "/internship-program" },
    ],
    links: [{ rel: "canonical", href: "/internship-program" }],
  }),
});
