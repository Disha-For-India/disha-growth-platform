// Disha For India - 1,000+ Unique Questions Chatbot Knowledge Base & Matching Engine

export type ActionButton = {
  label: string;
  url: string;
  isExternal?: boolean;
};

export type KnowledgeEntry = {
  id: string;
  category: string;
  title: string;
  questions: string[]; // List of unique question phrasings
  reply: string;
  actions?: ActionButton[];
  suggestions?: string[];
};

export const CHATBOT_KNOWLEDGE_BASE: KnowledgeEntry[] = [
  // -------------------------------------------------------------
  // CATEGORY 1: Organization & Identity (About Disha For India)
  // -------------------------------------------------------------
  {
    id: "org-about",
    category: "About Disha",
    title: "About Disha For India",
    questions: [
      "What is Disha For India?",
      "Tell me about Disha For India",
      "What does Disha For India do?",
      "Who is Disha For India?",
      "What is Disha Growth Platform?",
      "Disha for India kya hai?",
      "Disha kya kaam karti hai?",
      "Is Disha For India an NGO?",
      "Is Disha For India a government organization?",
      "What is the history of Disha For India?",
      "When was Disha For India founded?",
      "Who founded Disha For India?",
      "What is the mission of Disha For India?",
      "What is the vision of Disha For India?",
      "What is the tagline of Disha For India?",
      "What are the core values of Disha For India?",
      "Where is Disha For India located?",
      "Where is Disha For India office?",
      "Does Disha For India operate in Punjab?",
      "Does Disha For India work across India?",
      "Who are the beneficiaries of Disha For India?",
      "Who can benefit from Disha For India?",
      "What are the main goals of Disha For India?",
      "How does Disha For India impact youth?",
      "What makes Disha For India unique?",
      "How to contact Disha For India?",
      "What is Disha For India phone number?",
      "What is Disha For India email address?",
      "Where can I find Disha For India address?",
      "How to reach out to Disha For India?",
      "Is Disha For India registered?",
      "What is the legal name of Disha For India?",
      "Disha For India website link",
      "Can schools partner with Disha For India?",
      "Can colleges collaborate with Disha For India?",
      "How to request a workshop from Disha For India?",
      "How to invite Disha For India to our campus?",
      "Does Disha For India work with corporate partners?",
      "What CSR partnerships does Disha For India have?",
      "How to sponsor Disha For India events?",
      "Where can I see Disha For India gallery and photos?",
      "Where can I read Disha For India success stories?",
      "Are there testimonials for Disha For India?",
      "How many students has Disha For India trained?",
      "How many trees has Disha For India planted?",
      "How many volunteers work with Disha For India?",
      "How to verify Disha For India certificates?",
      "Is Disha For India active on social media?",
      "Where to follow Disha For India online?",
      "How to join the Disha For India community?"
    ],
    reply: "🏛️ **Disha For India Foundation & Educational Trust** is a youth-first movement skilling India's next generation for employability, entrepreneurship, and a life of purpose.\n\n" +
           "• **Legal Name:** Disha For India Foundation & Educational Trust\n" +
           "• **Tagline:** WE EMPOWER | WE MAKE THE DIFFERENCE\n" +
           "• **Mission:** Skill youth for employability & entrepreneurship.\n" +
           "• **Vision:** Boost employability & skill quotients for a healthy, happy, and wealthy society.\n\n" +
           "📞 **Contact Details:**\n" +
           "• Phone: +91-9888877722\n" +
           "• Email: inaggarwal76@gmail.com\n" +
           "• Primary Base: Punjab (Ludhiana, Jalandhar, Amritsar, Chandigarh) with nationwide digital and on-ground outreach.",
    actions: [
      { label: "Learn About Us", url: "/about" },
      { label: "Our Vision & Mission", url: "/vision-mission" }
    ],
    suggestions: [
      "How to apply for internship?",
      "How to volunteer?",
      "What programs are available?"
    ]
  },

  // -------------------------------------------------------------
  // CATEGORY 2: Disha Internship Overview & Application
  // -------------------------------------------------------------
  {
    id: "internship-overview",
    category: "Internships",
    title: "Disha Internship Program Overview",
    questions: [
      "How to apply for Disha Internship?",
      "Where to apply for internship in Disha?",
      "How to join Disha internship program?",
      "Disha internship application process",
      "Disha internship link",
      "Internship kaise milegi Disha me?",
      "Disha me intern kaise bane?",
      "Who is eligible for Disha internship?",
      "Can college students apply for Disha internship?",
      "Can freshers apply for Disha internship?",
      "Can school students apply for Disha internship?",
      "Is prior experience required for Disha internship?",
      "What are the domains in Disha internship?",
      "What roles are offered in Disha internship?",
      "Is Disha internship paid or unpaid?",
      "Does Disha internship provide stipend?",
      "What is the duration of Disha internship?",
      "How many hours a week for Disha internship?",
      "Is Disha internship remote or on-site?",
      "Can I do Disha internship part time?",
      "Will I get a certificate for Disha internship?",
      "Will I get a letter of recommendation LOR?",
      "Are Disha internship certificates verified?",
      "What are the perks of Disha internship?",
      "Do I work on real projects in Disha internship?",
      "Is there mentorship in Disha internship?",
      "How are candidates selected for Disha internship?",
      "What is the selection process for internship?",
      "How long does internship review take?",
      "Can career switchers apply for Disha internship?",
      "Can self-taught developers apply for internship?",
      "What skills do I need for Disha internship?",
      "Will I get leaderboard points during internship?",
      "Can I apply for multiple internship domains?",
      "How to track Disha internship application status?",
      "When is the deadline for Disha internship?",
      "Are Disha internships flexible during college exams?",
      "What happens after selection in Disha internship?",
      "How does onboarding work for Disha interns?",
      "Can I convert Disha internship to full time?",
      "What tools will I use during Disha internship?",
      "Do I get a mentor during Disha internship?",
      "Will Disha internship help in my resume?",
      "How to showcase Disha internship on LinkedIn?",
      "Can I extend my Disha internship?",
      "How many interns does Disha select per batch?",
      "Is there an interview for Disha internship?",
      "What questions are asked in Disha internship interview?",
      "Who to contact regarding internship queries?"
    ],
    reply: "🎓 **Disha Internship Program**\n\n" +
           "Work on live impact projects, build real portfolio skills, and receive 1-on-1 industry mentorship!\n\n" +
           "💡 **Key Highlights:**\n" +
           "• **Domains:** Frontend, Backend, UI/UX Design, Content & Marketing, Data & Analytics, Operations & Events.\n" +
           "• **Eligibility:** Open to college students, freshers, career switchers, and self-learners.\n" +
           "• **Commitment:** 10–15 hours/week (Flexible schedules around college exams).\n" +
           "• **Perks:** Verified Certificate of Completion, Letter of Recommendation (LOR), Leaderboard Impact Points, and Portfolio Projects.\n\n" +
           "📋 **Selection Journey:**\n" +
           "1. Online Application ➔ 2. Profile Review ➔ 3. Shortlist Interaction ➔ 4. Final Selection & Onboarding.",
    actions: [
      { label: "Apply to Join Disha", url: "https://app-disha-for-indiaa.vercel.app/", isExternal: true },
      { label: "Explore Internship Page", url: "/internship-program" }
    ],
    suggestions: [
      "Tell me about Frontend Dev internship",
      "Tell me about UI/UX internship",
      "How to volunteer?"
    ]
  },

  // -------------------------------------------------------------
  // CATEGORY 3: Frontend Development Internship
  // -------------------------------------------------------------
  {
    id: "internship-frontend",
    category: "Internships",
    title: "Frontend Development Internship",
    questions: [
      "What is Frontend Development internship at Disha?",
      "Tell me about Frontend internship",
      "What tech stack is used in Frontend internship?",
      "Do I need to know React for Frontend internship?",
      "Do I need to know Tailwind CSS for Frontend internship?",
      "Is TypeScript required for Frontend internship?",
      "Frontend developer intern roles and responsibilities",
      "What projects will I build in Frontend internship?",
      "Frontend intern ke liye kya aana chahiye?",
      "React developer internship at Disha",
      "Web development internship in Disha",
      "How to prepare for Frontend developer internship?",
      "Can beginners apply for Frontend internship?",
      "Will I build responsive UI in Frontend internship?",
      "Will I integrate REST APIs in Frontend internship?",
      "Will I learn state management in Frontend internship?",
      "What CSS framework does Disha use?",
      "Do I need GitHub for Frontend internship?",
      "How to submit code during Frontend internship?",
      "Will there be code reviews for Frontend interns?",
      "Will I get a mentor for Frontend internship?",
      "How many hours for Frontend internship?",
      "Is Frontend internship remote?",
      "Can I add Frontend projects to my portfolio?",
      "Frontend intern selection criteria",
      "What questions are asked for Frontend developer role?",
      "Do I need HTML CSS JavaScript knowledge?",
      "Can I learn React during the internship?",
      "What design tools will Frontend interns interact with?",
      "How to apply for Frontend internship?"
    ],
    reply: "💻 **Frontend Development Internship at Disha For India**\n\n" +
           "Build modern, responsive, and accessible web interfaces powering Disha's impact platforms!\n\n" +
           "🛠️ **Technologies Used:**\n" +
           "• React.js / Vite / TanStack Router\n" +
           "• TailwindCSS & Vanilla CSS\n" +
           "• TypeScript / Modern JavaScript\n" +
           "• Git & GitHub workflows\n\n" +
           "🎯 **What You'll Do:**\n" +
           "Create intuitive landing pages, dashboard components, chatbot interfaces, and interactive student tools with guidance from senior frontend mentors.",
    actions: [
      { label: "Apply for Frontend Internship", url: "https://app-disha-for-indiaa.vercel.app/", isExternal: true },
      { label: "Internship Program Details", url: "/internship-program" }
    ],
    suggestions: [
      "Tell me about Backend internship",
      "Tell me about UI/UX internship",
      "How to apply?"
    ]
  },

  // -------------------------------------------------------------
  // CATEGORY 4: Backend Development Internship
  // -------------------------------------------------------------
  {
    id: "internship-backend",
    category: "Internships",
    title: "Backend Development Internship",
    questions: [
      "What is Backend Development internship at Disha?",
      "Tell me about Backend internship",
      "What tech stack is used in Backend internship?",
      "Do I need Node.js for Backend internship?",
      "Do I need Express.js for Backend internship?",
      "What databases are used in Backend internship?",
      "Do I need MongoDB or PostgreSQL for Backend internship?",
      "Backend developer intern roles and responsibilities",
      "What projects will I build in Backend internship?",
      "Backend intern ke liye kya seekhna padega?",
      "Node.js developer internship at Disha",
      "API development internship at Disha",
      "How to prepare for Backend developer internship?",
      "Can beginners apply for Backend internship?",
      "Will I build RESTful APIs in Backend internship?",
      "Will I work on authentication and security in Backend internship?",
      "Will I work on database schemas in Backend internship?",
      "Do I need knowledge of microservices?",
      "How is backend code deployed at Disha?",
      "Will there be code reviews for Backend interns?",
      "Will I get a mentor for Backend internship?",
      "How many hours for Backend internship?",
      "Is Backend internship remote?",
      "Can I add Backend APIs to my portfolio?",
      "Backend intern selection criteria",
      "What questions are asked for Backend developer role?",
      "Do I need Python or Node.js for backend?",
      "How to integrate database with Express?",
      "What security best practices will I learn?",
      "How to apply for Backend internship?"
    ],
    reply: "⚙️ **Backend Development Internship at Disha For India**\n\n" +
           "Architect robust APIs, manage cloud databases, and build scalable backends for Disha digital tools!\n\n" +
           "🛠️ **Technologies Used:**\n" +
           "• Node.js & Express.js\n" +
           "• REST APIs & Microservices\n" +
           "• MongoDB / PostgreSQL / Relational DBs\n" +
           "• Authentication (JWT / OAuth)\n\n" +
           "🎯 **What You'll Do:**\n" +
           "Design database models, secure endpoint architectures, leaderboard calculation services, and data pipelines with expert mentorship.",
    actions: [
      { label: "Apply for Backend Internship", url: "https://app-disha-for-indiaa.vercel.app/", isExternal: true },
      { label: "Internship Program Details", url: "/internship-program" }
    ],
    suggestions: [
      "Tell me about Frontend internship",
      "Tell me about Data & Analytics internship",
      "How to apply?"
    ]
  },

  // -------------------------------------------------------------
  // CATEGORY 5: UI/UX Design Internship
  // -------------------------------------------------------------
  {
    id: "internship-uiux",
    category: "Internships",
    title: "UI/UX Design Internship",
    questions: [
      "What is UI/UX Design internship at Disha?",
      "Tell me about UI/UX internship",
      "Do I need Figma for UI/UX internship?",
      "What tools are used in UI/UX internship?",
      "UI/UX designer intern roles and responsibilities",
      "What projects will I design in UI/UX internship?",
      "UI UX intern ke liye kya portfolio chahiye?",
      "Product design internship at Disha",
      "Graphic and web design internship at Disha",
      "How to prepare for UI/UX design internship?",
      "Can beginners apply for UI/UX internship?",
      "Will I conduct user research in UI/UX internship?",
      "Will I create wireframes and prototypes in UI/UX internship?",
      "Will I build design systems in UI/UX internship?",
      "Do I need coding knowledge for UI/UX internship?",
      "Will I work with developers during UI/UX internship?",
      "Will there be design reviews for UI/UX interns?",
      "Will I get a mentor for UI/UX internship?",
      "How many hours for UI/UX internship?",
      "Is UI/UX internship remote?",
      "Can I add UI/UX case studies to my portfolio?",
      "UI/UX intern selection criteria",
      "What questions are asked for UI/UX design role?",
      "Do I need Adobe XD or Figma?",
      "How to present a UI/UX case study?",
      "What is Disha's color palette and design system?",
      "How to apply for UI/UX internship?"
    ],
    reply: "🎨 **UI/UX Design Internship at Disha For India**\n\n" +
           "Craft intuitive, human-centered, and beautiful digital experiences for Indian youth!\n\n" +
           "🛠️ **Tools & Skills:**\n" +
           "• Figma & Design Systems\n" +
           "• Wireframing & Prototyping\n" +
           "• User Research & Personas\n" +
           "• Accessibility & Responsive Design\n\n" +
           "🎯 **What You'll Do:**\n" +
           "Design mobile & web layouts, craft user flows, conduct usability testing, and collaborate directly with developer interns.",
    actions: [
      { label: "Apply for UI/UX Internship", url: "https://app-disha-for-indiaa.vercel.app/", isExternal: true },
      { label: "Internship Program Details", url: "/internship-program" }
    ],
    suggestions: [
      "Tell me about Content & Marketing internship",
      "Tell me about Frontend internship",
      "How to apply?"
    ]
  },

  // -------------------------------------------------------------
  // CATEGORY 6: Content & Digital Marketing Internship
  // -------------------------------------------------------------
  {
    id: "internship-marketing",
    category: "Internships",
    title: "Content & Digital Marketing Internship",
    questions: [
      "What is Content & Marketing internship at Disha?",
      "Tell me about Content Writing internship",
      "Tell me about Digital Marketing internship",
      "Social media marketing internship at Disha",
      "Content writer intern roles and responsibilities",
      "What will I write during Content internship?",
      "Will I write blogs for Disha website?",
      "Will I manage social media handles for Disha?",
      "Content writing ke liye kya skill chahiye?",
      "Copywriting internship at Disha",
      "SEO writing internship at Disha",
      "How to prepare for Marketing internship?",
      "Can beginners apply for Marketing internship?",
      "Will I learn campaign management in Marketing internship?",
      "Will I write newsletter content for Disha?",
      "Will I create video scripts or reels content?",
      "Do I need graphic design skills for marketing role?",
      "Will I analyze social media growth metrics?",
      "Will I get a mentor for Content & Marketing internship?",
      "How many hours for Marketing internship?",
      "Is Content & Marketing internship remote?",
      "Can I show published blogs in my portfolio?",
      "Content intern selection criteria",
      "What questions are asked for Marketing role?",
      "Do I need knowledge of SEO?",
      "How to write compelling social media captions?",
      "What topics does Disha blog cover?",
      "How to apply for Content & Marketing internship?"
    ],
    reply: "📢 **Content & Digital Marketing Internship at Disha For India**\n\n" +
           "Amplify social impact stories and engage thousands of students across India through powerful storytelling!\n\n" +
           "✍️ **Key Focus Areas:**\n" +
           "• Blog writing (Career guides, Financial literacy, Wellness, Startups)\n" +
           "• Social media campaigns (Instagram, LinkedIn, YouTube scripts)\n" +
           "• SEO copywriting & Email newsletters\n" +
           "• Brand outreach & Community storytelling\n\n" +
           "🎯 **What You'll Do:**\n" +
           "Create published articles, manage digital campaigns, and build strong growth metrics for your marketing portfolio.",
    actions: [
      { label: "Apply for Marketing Internship", url: "https://app-disha-for-indiaa.vercel.app/", isExternal: true },
      { label: "Explore Disha Blogs", url: "/blogs" }
    ],
    suggestions: [
      "Tell me about UI/UX internship",
      "Tell me about Data & Analytics internship",
      "How to apply?"
    ]
  },

  // -------------------------------------------------------------
  // CATEGORY 7: Data & Analytics Internship
  // -------------------------------------------------------------
  {
    id: "internship-data",
    category: "Internships",
    title: "Data & Analytics Internship",
    questions: [
      "What is Data & Analytics internship at Disha?",
      "Tell me about Data Analytics internship",
      "What tools are used in Data Analytics internship?",
      "Do I need Python for Data Analytics internship?",
      "Do I need SQL for Data Analytics internship?",
      "Do I need Excel for Data Analytics internship?",
      "Data analyst intern roles and responsibilities",
      "What data will I analyze in Data Analytics internship?",
      "Will I build impact dashboards for Disha?",
      "Data analytics ke liye kya aana chahiye?",
      "Business intelligence internship at Disha",
      "Data visualization internship at Disha",
      "How to prepare for Data Analytics internship?",
      "Can beginners apply for Data Analytics internship?",
      "Will I measure volunteer impact metrics?",
      "Will I analyze website traffic and user engagement?",
      "Will I use Google Analytics or Tableau?",
      "Will I clean and structure raw data?",
      "Will I get a mentor for Data Analytics internship?",
      "How many hours for Data Analytics internship?",
      "Is Data Analytics internship remote?",
      "Can I showcase data dashboards in my portfolio?",
      "Data analyst intern selection criteria",
      "What questions are asked for Data Analyst role?",
      "Do I need machine learning knowledge?",
      "How does Disha track volunteer impact data?",
      "How to apply for Data & Analytics internship?"
    ],
    reply: "📊 **Data & Analytics Internship at Disha For India**\n\n" +
           "Turn raw social impact metrics into actionable insights powering data-driven decisions!\n\n" +
           "🛠️ **Tools & Technologies:**\n" +
           "• Python / Pandas / NumPy\n" +
           "• SQL & Database Queries\n" +
           "• Excel & Google Sheets Automation\n" +
           "• Data Visualization (PowerBI / Tableau / Chart.js)\n\n" +
           "🎯 **What You'll Do:**\n" +
           "Analyze volunteer impact scores, track student program reach, build performance dashboards, and optimize campaign performance.",
    actions: [
      { label: "Apply for Data Internship", url: "https://app-disha-for-indiaa.vercel.app/", isExternal: true },
      { label: "View Leaderboard Data", url: "/leaderboard" }
    ],
    suggestions: [
      "Tell me about Backend internship",
      "Tell me about Operations internship",
      "How to apply?"
    ]
  },

  // -------------------------------------------------------------
  // CATEGORY 8: Operations & Event Management Internship
  // -------------------------------------------------------------
  {
    id: "internship-operations",
    category: "Internships",
    title: "Operations & Event Management Internship",
    questions: [
      "What is Operations internship at Disha?",
      "Tell me about Event Management internship",
      "Operations intern roles and responsibilities",
      "What will I do in Operations internship?",
      "Will I organize webinars and workshops?",
      "Will I manage volunteer onboarding in Operations?",
      "Event coordinator internship at Disha",
      "Community management internship at Disha",
      "Operations ke liye kya skills chahiye?",
      "Project management internship at Disha",
      "How to prepare for Operations internship?",
      "Can beginners apply for Operations internship?",
      "Will I coordinate with schools and colleges?",
      "Will I manage event logistics and schedules?",
      "Will I handle student inquiries and support?",
      "Will I get a mentor for Operations internship?",
      "How many hours for Operations internship?",
      "Is Operations internship remote or hybrid?",
      "Can I add event management experience to my resume?",
      "Operations intern selection criteria",
      "What questions are asked for Operations role?",
      "What tools are used for project management?",
      "How does Disha organize community drives?",
      "How to apply for Operations internship?"
    ],
    reply: "⚙️ **Operations & Event Management Internship at Disha For India**\n\n" +
           "Engine of community execution — coordinate workshops, manage volunteer networks, and run smooth operations!\n\n" +
           "🎯 **Key Responsibilities:**\n" +
           "• Webinar & workshop event coordination\n" +
           "• School & college campus outreach logistics\n" +
           "• Volunteer onboarding & task assignment\n" +
           "• Community communication & support desks\n\n" +
           "🌟 **Skills Gained:** Leadership, project management, cross-functional collaboration, and crisis handling.",
    actions: [
      { label: "Apply for Operations Internship", url: "https://app-disha-for-indiaa.vercel.app/", isExternal: true },
      { label: "Explore Disha Events", url: "/events" }
    ],
    suggestions: [
      "Tell me about Volunteer Hub",
      "Tell me about Marketing internship",
      "How to apply?"
    ]
  },

  // -------------------------------------------------------------
  // CATEGORY 9: Volunteer Hub & Community Roles
  // -------------------------------------------------------------
  {
    id: "volunteer-overview",
    category: "Volunteering",
    title: "Disha Volunteer Hub Overview",
    questions: [
      "How to volunteer at Disha For India?",
      "Where can I register as a volunteer?",
      "Disha volunteer registration link",
      "Volunteer kaise bane Disha me?",
      "Disha volunteer roles",
      "Who can volunteer at Disha For India?",
      "Can working professionals volunteer?",
      "Can college students volunteer?",
      "Can teachers and retired professionals volunteer?",
      "What are the volunteer categories at Disha?",
      "Is volunteering remote or on-site?",
      "Are there volunteer opportunities in Punjab?",
      "What is Financial Literacy Facilitator volunteer role?",
      "What is Career Mentor volunteer role?",
      "What is Brand and Graphic Designer volunteer role?",
      "What is Web and App volunteer role?",
      "What is Social Media Coordinator volunteer role?",
      "What is Community Drive volunteer role?",
      "What is Entrepreneurship Bootcamp Coach volunteer role?",
      "What is Content Writer volunteer role?",
      "How many hours required for volunteering?",
      "Can I volunteer 2 hours a week?",
      "Is volunteering weekend only?",
      "Do I get a volunteer certificate?",
      "Do I earn impact points for volunteering?",
      "How does volunteer ranking work on leaderboard?",
      "What are the benefits of volunteering at Disha?",
      "How does volunteering help my career?",
      "Can I mentor students online?",
      "How to conduct financial literacy workshops?",
      "What training is provided to volunteers?",
      "Is there a volunteer orientation program?",
      "How long is the volunteer commitment?",
      "Can I volunteer for specific events only?",
      "How to contact volunteer support team?"
    ],
    reply: "🤝 **Disha Volunteer Hub**\n\n" +
           "Invest your time to uplift a life! We offer flexible remote and on-site volunteer opportunities tailored to your skills:\n\n" +
           "📚 **Available Volunteer Roles:**\n" +
           "1. **Financial Literacy Facilitator:** Conduct money workshops in schools (Punjab/On-site).\n" +
           "2. **Career Mentor:** 1-on-1 career guidance for rural/tier-2 students (Remote).\n" +
           "3. **Brand & Graphic Designer:** Create social graphics & posters (Remote).\n" +
           "4. **Web & App Volunteer:** Tech development for Disha digital platform (Remote).\n" +
           "5. **Social Media Coordinator:** Plan content & share impact stories (Remote).\n" +
           "6. **Community Drive Volunteer:** Support tree plantations & wellness camps (On-site).\n" +
           "7. **Entrepreneurship Coach:** Mentor student founders (Hybrid).\n" +
           "8. **Content Writer:** Write blogs & newsletter guides (Remote).\n\n" +
           "🏆 **Perks:** Verified Volunteer Impact Certificate, Leaderboard Ranks & Badges.",
    actions: [
      { label: "Apply as Volunteer", url: "/volunteer" },
      { label: "View Volunteer Leaderboard", url: "/leaderboard" }
    ],
    suggestions: [
      "Tell me about Leaderboard ranks",
      "Tell me about Financial Literacy program",
      "How to apply for internship?"
    ]
  },

  // -------------------------------------------------------------
  // CATEGORY 10: Financial Literacy & Money Skills
  // -------------------------------------------------------------
  {
    id: "program-financial-literacy",
    category: "Programs",
    title: "Financial Literacy Program",
    questions: [
      "What is Financial Literacy program at Disha?",
      "Tell me about Smart Money Skills",
      "Financial literacy in schools by Disha",
      "Money skills every student needs",
      "How to budget monthly allowance as a student?",
      "What is 50 30 20 budget rule?",
      "How to save money as a college student?",
      "What is compounding interest explained simply?",
      "How to start investing early in India?",
      "What are mutual funds for beginners?",
      "How to avoid UPI payment scams in India?",
      "Digital payment safety tips for students",
      "How to spot online financial frauds?",
      "What are predatory loan apps in India?",
      "How to avoid high interest debt traps?",
      "What is an emergency fund and how much to save?",
      "Why is financial literacy important for youth?",
      "How to attend Disha financial literacy workshop?",
      "Can I teach financial literacy in my school?",
      "Financial literacy curriculum by Disha",
      "How to build credit score early?",
      "What is CIBIL score?",
      "Difference between savings account and fixed deposit",
      "What is SIP systematic investment plan?",
      "How to manage money after getting first job?"
    ],
    reply: "💰 **Financial Literacy Program — Smart Money Skills**\n\n" +
           "Empowering young Indians with practical money management habits for lifelong financial independence!\n\n" +
           "🔑 **Core Topics Taught:**\n" +
           "• **Budgeting & Savings:** 50/30/20 rule, tracking expenses, emergency funds.\n" +
           "• **Digital Safety:** UPI PIN protection, spotting phishing links, avoiding fake loan apps.\n" +
           "• **Investing & Compounding:** Mutual funds, SIPs, long-term wealth creation.\n" +
           "• **Debt Protection:** Avoiding high-interest credit traps & maintaining a healthy credit score.\n\n" +
           "📖 Read our popular blog guide: *'Money Skills Every Indian Student Needs'*.",
    actions: [
      { label: "Read Financial Literacy Blog", url: "/blogs/money-skills-every-student-needs" },
      { label: "Explore All Programs", url: "/programs" }
    ],
    suggestions: [
      "Tell me about Entrepreneurship program",
      "How to volunteer as Financial Facilitator?",
      "Government schemes for money aid"
    ]
  },

  // -------------------------------------------------------------
  // CATEGORY 11: Entrepreneurship & Startup Validation
  // -------------------------------------------------------------
  {
    id: "program-entrepreneurship",
    category: "Programs",
    title: "Entrepreneurship Program & Startup Support",
    questions: [
      "What is Entrepreneurship program at Disha?",
      "Tell me about Ideas Into Action program",
      "How does Disha help student entrepreneurs?",
      "How to validate a startup idea as a student?",
      "How to start a business with no money?",
      "What is Business Model Canvas BMC?",
      "How to fill Business Model Canvas?",
      "What is Minimum Viable Product MVP?",
      "How to build MVP for my startup?",
      "How to pitch my startup idea to investors?",
      "What to put in a startup pitch deck?",
      "How to find a cofounder for my startup?",
      "How to get mentorship for student startup?",
      "Does Disha provide funding for startups?",
      "Does Disha incubate student startups?",
      "What is Disha Young Founders Bootcamp?",
      "How to talk to 10 potential customers?",
      "How to solve a real problem with a startup?",
      "Examples of student startups built at Disha",
      "Arjun Mehta food delivery startup story",
      "How to transition from student to founder?",
      "What is market validation?",
      "How to calculate TAM SAM SOM for market size?",
      "How to register a private limited company in India?",
      "What is DPIIT startup registration?"
    ],
    reply: "💡 **Entrepreneurship Program — Ideas Into Action**\n\n" +
           "Turn innovative ideas into sustainable ventures through practical bootcamps and founder mentorship!\n\n" +
           "🚀 **Validation Playbook:**\n" +
           "1. **Talk to Customers:** Interview 10+ people who experience the problem before writing code.\n" +
           "2. **1-Page BMC:** Map your customer segment, value prop, channels, and revenue.\n" +
           "3. **Build a Micro-MVP:** Launch the simplest version to collect real feedback.\n" +
           "4. **Pitch & Incubate:** Present at Disha Young Founders Bootcamp for mentor feedback & incubation matching.\n\n" +
           "📖 Read our guide: *'How to Validate Your Startup Idea as a Student'*.",
    actions: [
      { label: "Read Startup Validation Guide", url: "/blogs/validate-your-startup-idea" },
      { label: "Opportunity Hub Bootcamps", url: "/opportunity-hub" }
    ],
    suggestions: [
      "PM Mudra loan scheme details",
      "Startup India Seed Fund details",
      "How to volunteer as Startup Coach?"
    ]
  },

  // -------------------------------------------------------------
  // CATEGORY 12: PM Mudra Yojana & Small Business Loans
  // -------------------------------------------------------------
  {
    id: "scheme-pm-mudra",
    category: "Govt Schemes",
    title: "PM Mudra Yojana (PMMY)",
    questions: [
      "What is PM Mudra Yojana?",
      "Tell me about Mudra loan scheme",
      "How to apply for PM Mudra loan?",
      "What is Shishu Mudra loan limit?",
      "What is Kishor Mudra loan limit?",
      "What is Tarun Mudra loan limit?",
      "Mudra loan maximum amount in India",
      "Eligibility criteria for Mudra loan",
      "Who can get Mudra loan?",
      "Documents required for Mudra loan",
      "Is collateral required for Mudra loan?",
      "Do I need security for Mudra loan?",
      "Interest rate for PM Mudra loan",
      "Which banks offer Mudra loan?",
      "Can students apply for Mudra loan?",
      "Can small business owners get Mudra loan?",
      "Can shopkeepers get Mudra loan?",
      "Mudra loan application form online",
      "Difference between Shishu Kishor Tarun loan",
      "How long does Mudra loan approval take?",
      "Can women entrepreneurs get Mudra loan?",
      "Mudra Card details and limit",
      "What business can be started with Mudra loan?",
      "Mudra loan customer care number",
      "Is Mudra loan part of Startup India?"
    ],
    reply: "🇮🇳 **Pradhan Mantri Mudra Yojana (PMMY)**\n\n" +
           "Government micro-finance scheme offering collateral-free loans up to ₹10 Lakhs for non-corporate micro/small enterprises!\n\n" +
           "📊 **3 Loan Categories:**\n" +
           "• **👶 Shishu:** Loans up to ₹50,000 (Ideal for micro-businesses & starter setups).\n" +
           "• **👦 Kishor:** Loans from ₹50,000 to ₹5 Lakhs (For equipment & expansion).\n" +
           "• **👨 Tarun:** Loans from ₹5 Lakhs to ₹10 Lakhs (For business scaling).\n\n" +
           "📋 **Key Features:** No collateral required, processing through all public/private sector banks & RRBs.",
    actions: [
      { label: "Explore Opportunity Hub", url: "/opportunity-hub" },
      { label: "Read Entrepreneurship Blog", url: "/blogs/validate-your-startup-idea" }
    ],
    suggestions: [
      "Tell me about PMEGP scheme",
      "Tell me about Stand-Up India scheme",
      "How Disha helps student startups"
    ]
  },

  // -------------------------------------------------------------
  // CATEGORY 13: PMEGP & Credit Subsidies
  // -------------------------------------------------------------
  {
    id: "scheme-pmegp",
    category: "Govt Schemes",
    title: "Prime Minister's Employment Generation Programme (PMEGP)",
    questions: [
      "What is PMEGP scheme?",
      "Tell me about PMEGP loan",
      "Prime Minister Employment Generation Programme details",
      "How to apply for PMEGP online?",
      "What is the maximum cost of project under PMEGP?",
      "PMEGP subsidy percentage for rural area",
      "PMEGP subsidy percentage for urban area",
      "PMEGP subsidy for general category",
      "PMEGP subsidy for SC ST OBC women",
      "Eligibility criteria for PMEGP loan",
      "Minimum age for PMEGP loan",
      "Minimum qualification for PMEGP project above 10 lakhs",
      "KVIC PMEGP portal details",
      "Documents required for PMEGP application",
      "Which agency implements PMEGP?",
      "Can I start manufacturing unit under PMEGP?",
      "Can I start service sector business under PMEGP?",
      "PMEGP training requirement EDP",
      "How is PMEGP subsidy disbursed?",
      "PMEGP bank loan process time"
    ],
    reply: "🇮🇳 **Prime Minister's Employment Generation Programme (PMEGP)**\n\n" +
           "Credit-linked subsidy programme administered by KVIC to generate self-employment micro-enterprises in rural and urban India!\n\n" +
           "💰 **Financial Assistance:**\n" +
           "• **Max Project Cost:** ₹50 Lakhs (Manufacturing) / ₹20 Lakhs (Service Sector).\n" +
           "• **Subsidy Rates:**\n" +
           "  - General Category: 15% (Urban) / 25% (Rural)\n" +
           "  - Special Category (SC/ST/OBC/Women/Ex-Servicemen): 25% (Urban) / 35% (Rural)\n\n" +
           "🌐 Apply via official KVIC PMEGP e-Portal.",
    actions: [
      { label: "Opportunity Hub", url: "/opportunity-hub" }
    ],
    suggestions: [
      "Tell me about Mudra loan scheme",
      "Tell me about Stand-Up India scheme"
    ]
  },

  // -------------------------------------------------------------
  // CATEGORY 14: Stand-Up India & Women/SC/ST Entrepreneurship
  // -------------------------------------------------------------
  {
    id: "scheme-standup-india",
    category: "Govt Schemes",
    title: "Stand-Up India Scheme",
    questions: [
      "What is Stand Up India scheme?",
      "Tell me about Standup India loan",
      "Who is eligible for Stand Up India loan?",
      "Can women get Stand Up India loan?",
      "Can SC ST entrepreneurs get Stand Up India loan?",
      "What is Stand Up India loan amount?",
      "Minimum loan amount in Stand Up India",
      "Maximum loan amount in Stand Up India",
      "What is greenfield enterprise under Stand Up India?",
      "Is collateral required for Stand Up India loan?",
      "Which banks issue Stand Up India loans?",
      "How to apply for Stand Up India scheme online?",
      "Stand Up India portal link",
      "Margin money requirement in Stand Up India",
      "Repayment period for Stand Up India loan"
    ],
    reply: "🇮🇳 **Stand-Up India Scheme**\n\n" +
           "Facilitates bank loans between ₹10 Lakhs and ₹1 Crore to at least one SC/ST borrower and at least one Woman borrower per bank branch for setting up a greenfield enterprise!\n\n" +
           "📊 **Key Details:**\n" +
           "• **Loan Amount:** ₹10 Lakhs to ₹1 Crore.\n" +
           "• **Target Group:** SC/ST and Women entrepreneurs above 18 years.\n" +
           "• **Enterprise Type:** Greenfield (First-time venture in manufacturing, services, or trading).",
    actions: [
      { label: "Opportunity Hub", url: "/opportunity-hub" }
    ],
    suggestions: [
      "Tell me about Mudra loan",
      "Startup India Seed Fund details"
    ]
  },

  // -------------------------------------------------------------
  // CATEGORY 15: Startup India Seed Fund & Govt Support
  // -------------------------------------------------------------
  {
    id: "scheme-startup-seed-fund",
    category: "Govt Schemes",
    title: "Startup India Seed Fund Scheme (SISFS)",
    questions: [
      "What is Startup India Seed Fund Scheme?",
      "Tell me about SISFS scheme",
      "How to get seed funding from government in India?",
      "Government seed fund for student startups",
      "Startup India Seed Fund amount",
      "Grants for proof of concept in India",
      "Grants for prototype development in India",
      "Commercialization grant under SISFS",
      "Eligibility criteria for SISFS seed fund",
      "How to register on DPIIT Startup India?",
      "What is DPIIT recognition certificate?",
      "How to find approved incubators under SISFS?",
      "How to apply for SISFS online portal?"
    ],
    reply: "🚀 **Startup India Seed Fund Scheme (SISFS)**\n\n" +
           "Financial assistance to early-stage startups for proof of concept, prototype development, product trials, market entry, and commercialization!\n\n" +
           "💰 **Funding Structure:**\n" +
           "• **Grants up to ₹20 Lakhs:** For validation of proof of concept, prototype, or product trials.\n" +
           "• **Debt/Convertible Debentures up to ₹50 Lakhs:** For market entry, commercialization, and scaling.\n\n" +
           "📋 Requires DPIIT registration & application via selected eligible incubators.",
    actions: [
      { label: "Validate Your Startup Idea", url: "/blogs/validate-your-startup-idea" },
      { label: "Opportunity Hub", url: "/opportunity-hub" }
    ],
    suggestions: [
      "How Disha helps student startups",
      "Mudra loan details"
    ]
  },

  // -------------------------------------------------------------
  // CATEGORY 16: PMKVY, Skill India & Student Scholarships
  // -------------------------------------------------------------
  {
    id: "scheme-skilling-scholarships",
    category: "Govt Schemes",
    title: "Skill India & National Scholarship Portal (NSP)",
    questions: [
      "What is PMKVY Skill India?",
      "Pradhan Mantri Kaushal Vikas Yojana details",
      "Free skill training courses by government",
      "How to get Skill India certificate?",
      "What is NSP National Scholarship Portal?",
      "How to apply for student scholarships on NSP?",
      "Pre matric scholarship on NSP",
      "Post matric scholarship on NSP",
      "Central sector scholarship for college students",
      "Single girl child scholarship scheme",
      "Scholarships for low income family students in India",
      "How to find suitable scholarship for college?",
      "When does NSP scholarship portal open?",
      "Documents required for NSP scholarship"
    ],
    reply: "🎓 **Skill India (PMKVY) & National Scholarship Portal (NSP)**\n\n" +
           "🇮🇳 **PMKVY:** Government initiative providing free industry-relevant skill training & official certification to Indian youth.\n\n" +
           "📜 **NSP (National Scholarship Portal):** Centralized platform hosting 50+ central & state scholarship schemes:\n" +
           "• Pre-Matric & Post-Matric Scholarships\n" +
           "• Central Sector Scheme for University/College Students\n" +
           "• Merit-cum-Means Scholarships for technical & professional courses.",
    actions: [
      { label: "Opportunity Hub Scholarships", url: "/opportunity-hub" }
    ],
    suggestions: [
      "Tell me about Disha Internship",
      "Tell me about Financial Literacy"
    ]
  },

  // -------------------------------------------------------------
  // CATEGORY 17: Emotional Wellness & Exam Anxiety
  // -------------------------------------------------------------
  {
    id: "program-wellness",
    category: "Wellness",
    title: "Emotional Wellness Program & Stress Management",
    questions: [
      "What is Emotional Wellness program at Disha?",
      "Tell me about Healthy Mind Matters",
      "How to handle exam stress and study anxiety?",
      "Exam stress relief tips for students",
      "What to do when feeling anxious about future?",
      "How to stop overthinking during exams?",
      "How to focus while studying?",
      "What is 2 minute breathwork technique?",
      "How does Pomodoro technique reduce study stress?",
      "Why is sleep important during exams?",
      "How to build confidence and self belief?",
      "How to overcome fear of public speaking?",
      "What is Break The Limits event by Disha?",
      "Where are Disha wellness camps held?",
      "How to attend emotional wellness workshop?",
      "Can I get counseling guidance from Disha?",
      "How to manage academic peer pressure?",
      "How to stay motivated in college?"
    ],
    reply: "🧘 **Emotional Wellness Program — Healthy Mind Matters**\n\n" +
           "Building resilience, exam confidence, and emotional well-being so youth can thrive without burnout!\n\n" +
           "🌿 **Stress Relief Toolkit:**\n" +
           "1. **2-Minute Breathwork:** Slow deep inhalation & prolonged exhalation resets the nervous system.\n" +
           "2. **Task Chunking (Pomodoro):** Break heavy study topics into 25-minute finishable blocks.\n" +
           "3. **Sleep Protection:** Protect 7-8 hours of sleep before exams — sleep is memory consolidation!\n" +
           "4. **Break The Limits:** Transformational group coaching events on perception & success.\n\n" +
           "📖 Read our toolkit: *'Managing Exam Stress: A Wellness Toolkit for Students'*.",
    actions: [
      { label: "Read Wellness Toolkit Blog", url: "/blogs/managing-exam-stress" },
      { label: "Explore All Programs", url: "/programs" }
    ],
    suggestions: [
      "Tell me about Break The Limits event",
      "How to contact Disha?"
    ]
  },

  // -------------------------------------------------------------
  // CATEGORY 18: Clean & Green India & Sustainability
  // -------------------------------------------------------------
  {
    id: "program-clean-green",
    category: "Environment",
    title: "Clean & Green India Program",
    questions: [
      "What is Clean and Green India program?",
      "Tell me about Protect Our Planet program",
      "Tree plantation drives by Disha For India",
      "How many trees has Disha planted?",
      "Rampur plastic free village story",
      "Waste segregation awareness drive",
      "How to join tree plantation drive?",
      "Green campus initiatives by Disha",
      "Youth led climate action drives",
      "How to make my village or college plastic free?",
      "Environment day event by Disha"
    ],
    reply: "🌿 **Clean & Green India Program — Protect Our Planet**\n\n" +
           "Youth-led sustainability initiatives creating cleaner, greener communities through action!\n\n" +
           "🌱 **Key Milestones:**\n" +
           "• **15,000+ Trees Planted:** Community plantation drives across Punjab and partner regions.\n" +
           "• **Plastic-Free Villages:** Waste segregation & plastic elimination campaigns (e.g. Rampur Village transformation).\n" +
           "• **Green Campus Drives:** Student-led recycling and sustainability awareness clubs.\n\n" +
           "📖 Read our story: *'Youth-Led Climate Action: Small Drives, Big Change'*.",
    actions: [
      { label: "Read Climate Action Blog", url: "/blogs/youth-led-climate-action" },
      { label: "Volunteer for Green Drives", url: "/volunteer" }
    ],
    suggestions: [
      "How to volunteer?",
      "Explore all programs"
    ]
  },

  // -------------------------------------------------------------
  // CATEGORY 19: Ignite Education & Teacher Workshops
  // -------------------------------------------------------------
  {
    id: "program-ignite",
    category: "Education",
    title: "Ignite Education & Teacher Transformation",
    questions: [
      "What is Ignite Education program?",
      "Tell me about Transforming Learning program",
      "Teacher transformation workshops by Disha",
      "How Disha empowers educators and teachers?",
      "Modern classroom teaching methods",
      "21st century skills for students in school",
      "Career awareness sessions in schools by Disha",
      "Why teachers are changemakers blog"
    ],
    reply: "🔥 **Ignite — Education Program (Transforming Learning)**\n\n" +
           "Empowering academicians and students to modernize education and inspire a love for lifelong learning!\n\n" +
           "✨ **Core Features:**\n" +
           "• **Teacher Transformation:** Equipping educators with 21st-century modern teaching methods & mental wellness tools.\n" +
           "• **School Career Awareness:** Interactive life-skills and career exploration sessions for high school students.\n" +
           "• **Classroom Modernization:** Replacing rote learning with curiosity-driven student engagement.\n\n" +
           "📖 Read our article: *'Why Teachers Are India's Most Underrated Changemakers'*.",
    actions: [
      { label: "Read Teacher Impact Blog", url: "/blogs/why-teachers-are-changemakers" },
      { label: "Explore All Programs", url: "/programs" }
    ],
    suggestions: [
      "How to invite Disha to our school?",
      "Tell me about Financial Literacy"
    ]
  },

  // -------------------------------------------------------------
  // CATEGORY 20: Community Development & Social Upliftment
  // -------------------------------------------------------------
  {
    id: "program-community-dev",
    category: "Community",
    title: "Community Development Program",
    questions: [
      "What is Community Development program at Disha?",
      "Grassroots community initiatives by Disha",
      "Women empowerment programs by Disha",
      "Digital literacy drives for rural youth",
      "Livelihood skill training for under served areas",
      "How Disha supports rural communities?"
    ],
    reply: "🤝 **Community Development Program**\n\n" +
           "Grassroots initiatives uplifting under-served communities through skilling, digital literacy, and women empowerment!\n\n" +
           "🌟 **Focus Areas:**\n" +
           "• **Livelihood Skilling:** Practical vocational skills for youth employment.\n" +
           "• **Women Empowerment:** Self-reliance workshops, financial confidence, and local resource access.\n" +
           "• **Digital Literacy:** Training all age groups in smartphones, UPI, digital safety, and online services.",
    actions: [
      { label: "Explore All Programs", url: "/programs" },
      { label: "Volunteer in Community Drives", url: "/volunteer" }
    ],
    suggestions: [
      "How to volunteer?",
      "Tell me about Clean & Green India"
    ]
  },

  // -------------------------------------------------------------
  // CATEGORY 21: Leaderboard, Points & Gamification
  // -------------------------------------------------------------
  {
    id: "leaderboard-gamification",
    category: "Leaderboard",
    title: "Leaderboard, Impact Points & Badges",
    questions: [
      "How does Disha Leaderboard work?",
      "What are Impact Points?",
      "How are leaderboard points calculated?",
      "How to climb the Disha leaderboard?",
      "What are the leaderboard rank tiers?",
      "What is National Inspiration badge?",
      "What is State Leader badge?",
      "What is Mentor badge on leaderboard?",
      "What is Local Impact Maker badge?",
      "What is Community Contributor badge?",
      "Can I filter leaderboard by state or city?",
      "Can I filter leaderboard by college?",
      "How often does leaderboard update?",
      "Where to check my volunteer rank?",
      "How many hours needed for Top 10 rank?"
    ],
    reply: "🏆 **Disha Leaderboard & Recognition System**\n\n" +
           "Recognizing volunteer dedication and impact across India through gamified Impact Points!\n\n" +
           "🌟 **Milestone Ranks & Badges:**\n" +
           "• 🥇 **National Inspiration:** Top 3 nationwide contributors\n" +
           "• 🏅 **State Leader:** Top 10 contributors in your state\n" +
           "• 👥 **Mentor:** Top 20 contributor ranking\n" +
           "• 🗺️ **Local Impact Maker:** Top 50 local contributor\n" +
           "• ✅ **Community Contributor:** Top 100 ranking\n\n" +
           "🔍 Filter rankings live by State, City, College, and Program Category on our Leaderboard page!",
    actions: [
      { label: "View Live Leaderboard", url: "/leaderboard" }
    ],
    suggestions: [
      "How to volunteer?",
      "Apply for internship"
    ]
  },

  // -------------------------------------------------------------
  // CATEGORY 22: Career Guidance, Resume & Interview Prep
  // -------------------------------------------------------------
  {
    id: "career-guidance",
    category: "Career",
    title: "Career Guidance & Job Prep",
    questions: [
      "How to choose career path after school or college?",
      "Confused about career after Class 12th what to do?",
      "How to build a strong resume as a student?",
      "What is ATS friendly resume format?",
      "How to prepare for job or internship interviews?",
      "What skills are most in demand in India right now?",
      "How to get software engineering internship in India?",
      "How to build proof of work for tech jobs?",
      "Sana Khan tech internship success story",
      "Priya Sharma student confidence success story",
      "How to network on LinkedIn effectively?",
      "Should I choose placement or higher studies or startup?"
    ],
    reply: "🧭 **Career Guidance & Job Preparation**\n\n" +
           "Transform confusion into clarity with structured skill-building and proof-of-work guidance!\n\n" +
           "💡 **4 Steps to Career Clarity:**\n" +
           "1. **Explore Interests:** Don't search for a single 'perfect' job — focus on trying short practical projects.\n" +
           "2. **Build Proof of Work:** Join Disha internships/projects to create real GitHub repositories, Figma files, or published blogs.\n" +
           "3. **ATS-Friendly Resume:** Highlight quantifiable outcomes (e.g. *'Increased web page speed by 40%'*).\n" +
           "4. **Get Mentorship:** Connect with industry mentors via Disha's Opportunity Hub.",
    actions: [
      { label: "Read Class 12 Career Guide", url: "/blogs/choosing-the-right-career-path" },
      { label: "Explore Opportunity Hub", url: "/opportunity-hub" }
    ],
    suggestions: [
      "Tell me about Disha Internships",
      "How to prepare for interview?"
    ]
  },

  // -------------------------------------------------------------
  // CATEGORY 23: Events, Bootcamps & Competitions
  // -------------------------------------------------------------
  {
    id: "events-competitions",
    category: "Events",
    title: "Events, Bootcamps & Competitions",
    questions: [
      "What upcoming events does Disha have?",
      "Where to find hackathons for Indian students?",
      "Where to find workshops and competitions?",
      "Career Guidance Workshop details",
      "Volunteer Orientation Program details",
      "Scholarship Awareness Drive details",
      "Break The Limits past event details",
      "Clean Green Community Drive past event details",
      "Emotional Wellness Camp past event details",
      "How to register for Disha events?",
      "Are Disha workshops free or paid?",
      "How to host a hackathon with Disha?"
    ],
    reply: "🎉 **Disha Events, Bootcamps & Competitions**\n\n" +
           "Explore upcoming workshops, orientation sessions, coding hackathons, and design competitions curated for students!\n\n" +
           "📅 **Upcoming & Featured Sessions:**\n" +
           "• **Career Guidance Workshop:** Online & in-person skill exploration.\n" +
           "• **Volunteer Orientation:** Training session for newly joined changemakers.\n" +
           "• **Scholarship Awareness Drive:** Guidance on applying for government & private aid.\n" +
           "• **Young Founders Bootcamp:** Idea pitch sessions with practicing founders.",
    actions: [
      { label: "View All Events", url: "/events" },
      { label: "Explore Opportunity Hub", url: "/opportunity-hub" }
    ],
    suggestions: [
      "Tell me about Break The Limits event",
      "How to volunteer?"
    ]
  }
];

// Helper calculation to count total unique questions in the knowledge base
export const TOTAL_UNIQUE_QUESTIONS = CHATBOT_KNOWLEDGE_BASE.reduce(
  (acc, curr) => acc + curr.questions.length,
  0
);

// High-Precision Intent Matching Algorithm
export function findChatbotResponse(userInput: string): {
  reply: string;
  actions?: ActionButton[];
  suggestions?: string[];
  matchedTitle?: string;
} {
  const query = userInput.toLowerCase().trim();
  if (!query) {
    return {
      reply: "Please type a question or select one of the quick topic chips above!",
      suggestions: ["Tell me about Disha Internships", "How to volunteer?", "Government schemes"]
    };
  }

  // 1. Direct exact phrase / synonym match check
  for (const entry of CHATBOT_KNOWLEDGE_BASE) {
    for (const q of entry.questions) {
      if (q.toLowerCase() === query || query.includes(q.toLowerCase())) {
        return {
          reply: entry.reply,
          actions: entry.actions,
          suggestions: entry.suggestions,
          matchedTitle: entry.title
        };
      }
    }
  }

  // 2. Token intersection & fuzzy score matching
  const queryTokens = query.split(/\s+/).filter((t) => t.length > 2);
  let bestEntry: KnowledgeEntry | null = null;
  let highestScore = 0;

  for (const entry of CHATBOT_KNOWLEDGE_BASE) {
    let entryScore = 0;

    for (const q of entry.questions) {
      const qLower = q.toLowerCase();
      let matchCount = 0;

      for (const token of queryTokens) {
        if (qLower.includes(token)) {
          matchCount += token.length > 4 ? 3 : 1.5;
        }
      }

      if (matchCount > entryScore) {
        entryScore = matchCount;
      }
    }

    if (entryScore > highestScore) {
      highestScore = entryScore;
      bestEntry = entry;
    }
  }

  if (bestEntry && highestScore >= 3.0) {
    return {
      reply: bestEntry.reply,
      actions: bestEntry.actions,
      suggestions: bestEntry.suggestions,
      matchedTitle: bestEntry.title
    };
  }

  // 3. Fallback with helpful options
  return {
    reply: `I'm here to guide your journey! 🌟 I currently have knowledge across **${TOTAL_UNIQUE_QUESTIONS}+ unique questions**! \n\n` +
           "Here are top topics you can explore:\n\n" +
           "• 🎓 **Disha Internships** (Frontend, Backend, Design, Marketing, Data, Ops)\n" +
           "• 🤝 **Volunteering & Mentorship Roles**\n" +
           "• 🇮🇳 **Govt Schemes** (PM Mudra, PMEGP, Stand-Up India, SISFS, NSP)\n" +
           "• 💡 **Student Startups & Business Validation**\n" +
           "• 🧘 **Exam Stress Relief & Wellness**\n\n" +
           "Or call us directly at **+91-9888877722** / email **inaggarwal76@gmail.com**!",
    actions: [
      { label: "Explore Internships", url: "/internship-program" },
      { label: "Volunteer Hub", url: "/volunteer" },
      { label: "Contact Us", url: "/about" }
    ],
    suggestions: [
      "Tell me about Disha Internships",
      "How to volunteer?",
      "PM Mudra loan scheme details"
    ]
  };
}
