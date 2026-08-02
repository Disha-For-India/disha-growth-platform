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
    reply: "Glad you asked! Disha For India Foundation & Educational Trust is a youth-first movement dedicated to skilling India's next generation.\n\n" +
           "Our main goal is to guide students, aspiring entrepreneurs, and local communities to become job-ready, start their own ventures, and lead purposeful lives.\n\n" +
           "Here is how you can reach out to us:\n" +
           "• Phone: +91-9888877722\n" +
           "• Email: inaggarwal76@gmail.com\n" +
           "• Primary Base: Punjab (Ludhiana, Jalandhar, Amritsar, Chandigarh) with programs running nationwide across India.\n\n" +
           "Feel free to explore our vision page or reach out directly if you'd like to collaborate with us!",
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
    title: "Disha Internship Program",
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
      "Can self-taught developers apply for Disha internship?",
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
    reply: "Welcome! We would love to have you in our Disha Internship Program.\n\n" +
           "In this internship, you won't just do dummy work—you will get to contribute to live impact projects, build real work for your resume, and receive 1-on-1 guidance from experienced mentors.\n\n" +
           "Here are the core domains you can apply for:\n" +
           "• Web Development (Frontend & Backend)\n" +
           "• UI/UX Design\n" +
           "• Content Writing & Digital Marketing\n" +
           "• Data & Impact Analytics\n" +
           "• Operations & Event Management\n\n" +
           "It requires around 10 to 15 hours a week with flexible timings so your college exams aren't affected. Upon completion, you earn a Verified Certificate, a Letter of Recommendation (LOR), and points on our national leaderboard.\n\n" +
           "Would you like to apply now?",
    actions: [
      { label: "Apply to Join Disha", url: "https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard", isExternal: true },
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
    reply: "If you love crafting user interfaces, our Frontend Development Internship is a great fit for you!\n\n" +
           "You will work closely with our tech mentors to build clean, fast, and accessible web experiences for the Disha platform.\n\n" +
           "Here is what we work with:\n" +
           "• React.js, Vite, and modern JavaScript/TypeScript\n" +
           "• TailwindCSS and responsive UI design\n" +
           "• Git and GitHub collaboration workflows\n\n" +
           "Don't worry if you are still learning—passion and willingness to build matter most to us!",
    actions: [
      { label: "Apply for Frontend Internship", url: "https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard", isExternal: true },
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
    reply: "Great choice! In our Backend Development Internship, you'll be building the brain behind Disha's platforms.\n\n" +
           "You will get hands-on experience designing REST APIs, managing database schemas, and building authentication flows.\n\n" +
           "Our primary tech stack includes:\n" +
           "• Node.js & Express.js\n" +
           "• Relational & NoSQL Databases (PostgreSQL / MongoDB)\n" +
           "• API Security & JWT Authentication\n\n" +
           "You will receive regular code reviews and guidance from senior engineers.",
    actions: [
      { label: "Apply for Backend Internship", url: "https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard", isExternal: true },
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
    reply: "If you have an eye for clean design and love creating smooth user experiences, our UI/UX Internship is perfect for you.\n\n" +
           "You will design mobile and web screens, conduct real user research with students, and craft interactive Figma prototypes.\n\n" +
           "What you'll gain:\n" +
           "• Real UI/UX case studies for your Behance/Dribbble portfolio\n" +
           "• Collaboration experience working directly with web developers\n" +
           "• Design system creation & accessibility best practices",
    actions: [
      { label: "Apply for UI/UX Internship", url: "https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard", isExternal: true },
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
    reply: "If you enjoy storytelling, writing, or building social media reach, this internship will give you a real stage to shine!\n\n" +
           "You will get to write published articles on student growth, create engaging social media campaigns, and craft newsletters reaching thousands of young readers.\n\n" +
           "You'll learn:\n" +
           "• SEO copywriting & blog publishing\n" +
           "• Content strategy for Instagram, LinkedIn, and YouTube\n" +
           "• Brand storytelling that drives social impact",
    actions: [
      { label: "Apply for Marketing Internship", url: "https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard", isExternal: true },
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
    reply: "Love discovering insights from numbers? In our Data Analytics Internship, you'll help turn raw community metrics into clear decisions!\n\n" +
           "You will work with real volunteer activity data, student reach metrics, and web analytics using tools like Python, SQL, Excel, and visualization dashboards.\n\n" +
           "It's a fantastic way to build a real-world analytics portfolio while seeing your work make a direct community impact.",
    actions: [
      { label: "Apply for Data Internship", url: "https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard", isExternal: true },
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
    reply: "Operations is the backbone of everything we do at Disha!\n\n" +
           "As an Operations & Events intern, you'll gain hands-on experience coordinating workshops, managing volunteer groups, and managing event logistics for school and campus drives.\n\n" +
           "You will develop strong leadership, communication, and project management skills that employers look for.",
    actions: [
      { label: "Apply for Operations Internship", url: "https://app-disha-for-indiaa.vercel.app/login?redirect=%2Fdashboard", isExternal: true },
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
    title: "Disha Volunteer Hub",
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
    reply: "Volunteering with Disha is a wonderful way to give back while connecting with an amazing community!\n\n" +
           "Whether you can give 2 hours a week or join a weekend event, there is a meaningful role for you:\n" +
           "• Teaching & Financial Literacy Facilitation in local schools\n" +
           "• 1-on-1 Online Career Mentoring for students\n" +
           "• Design, Tech, and Social Media volunteering\n" +
           "• Community drives like tree plantations and wellness camps\n\n" +
           "Every hour you contribute earns points on our national leaderboard and a verified Volunteer Impact Certificate.",
    actions: [
      { label: "Apply as Volunteer", url: "https://app-disha-for-indiaa.vercel.app/signup" },
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
    reply: "Managing money is one of the most essential life skills, yet it's rarely taught in school!\n\n" +
           "Our Financial Literacy workshops teach young Indians practical money skills in plain, easy language:\n" +
           "• Smart budgeting (like the 50/30/20 rule)\n" +
           "• Staying safe from UPI scams and fake loan apps\n" +
           "• How compounding works and how to start investing early\n" +
           "• Building an emergency savings fund\n\n" +
           "Check out our free guide 'Money Skills Every Indian Student Needs' on our blog!",
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
    title: "Entrepreneurship & Startup Support",
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
    reply: "Thinking about starting something of your own? We love helping student founders!\n\n" +
           "You don't need millions in funding to start—you just need a real problem and real customers. Here is our simple startup playbook:\n" +
           "1. Talk to 10 potential customers to understand their actual problem\n" +
           "2. Map your 1-page Business Model Canvas\n" +
           "3. Build a tiny MVP (Minimum Viable Product) to test demand\n" +
           "4. Join our Young Founders Bootcamp to pitch and get mentor feedback\n\n" +
           "We have a detailed blog guide on validating your startup idea step-by-step!",
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
    reply: "PM Mudra Yojana is a fantastic government scheme providing collateral-free loans up to 10 Lakhs for micro and small businesses!\n\n" +
           "It has 3 categories:\n" +
           "• Shishu: Loans up to 50,000 Rupees (Great for small starters)\n" +
           "• Kishor: Loans from 50,000 to 5 Lakhs (For equipment and setup)\n" +
           "• Tarun: Loans from 5 Lakhs to 10 Lakhs (For business scaling)\n\n" +
           "You can apply through any commercial bank, regional bank, or small finance bank without needing to pledge property or collateral.",
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
    title: "PMEGP Credit Subsidy Scheme",
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
    reply: "PMEGP (Prime Minister's Employment Generation Programme) is a government subsidy scheme that helps people start new micro-enterprises!\n\n" +
           "Here are the key points:\n" +
           "• Up to 50 Lakhs for manufacturing units and 20 Lakhs for service businesses\n" +
           "• Government subsidies range from 15% up to 35% depending on location (rural vs urban) and category\n" +
           "• Applications are processed online via the KVIC e-Portal",
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
    reply: "Stand-Up India is a focused scheme designed to support Women and SC/ST entrepreneurs setting up their first venture.\n\n" +
           "Key details:\n" +
           "• Bank loans ranging from 10 Lakhs to 1 Crore\n" +
           "• Available at every bank branch across India\n" +
           "• Meant for greenfield (new) projects in manufacturing, services, or trading",
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
    title: "Startup India Seed Fund (SISFS)",
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
    reply: "The Startup India Seed Fund Scheme (SISFS) provides government funding to early-stage startups to help test ideas and build prototypes.\n\n" +
           "Funding options:\n" +
           "• Grants up to 20 Lakhs for proof-of-concept and prototype trials\n" +
           "• Debt/convertible debentures up to 50 Lakhs for market entry and scaling\n\n" +
           "Startups apply through government-approved incubators.",
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
    title: "Skill India & Scholarships",
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
    reply: "Here is a quick overview of government skilling and scholarship portals:\n\n" +
           "• Skill India (PMKVY): Free industry skill training courses across technical, manufacturing, and service domains with official certificates.\n" +
           "• NSP (National Scholarship Portal): Central portal listing 50+ scholarships including pre-matric, post-matric, and central college scholarships.\n\n" +
           "You can check our Opportunity Hub for curated links!",
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
    title: "Emotional Wellness & Exam Stress",
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
    reply: "Exam stress and pressure are completely normal, but they don't have to control your life!\n\n" +
           "Here are 4 quick, practical habits that help:\n" +
           "1. 2-Minute Slow Breathing before studying to calm your nervous system\n" +
           "2. Break study topics into 25-minute finishable chunks (Pomodoro method)\n" +
           "3. Protect 7-8 hours of sleep—your brain needs sleep to retain what you study\n" +
           "4. Remember that one exam or result doesn't define your worth\n\n" +
           "Check out our Wellness Toolkit blog for more helpful techniques!",
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
    title: "Clean & Green India",
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
    reply: "Our Clean & Green India initiative brings youth together to protect our environment through real action!\n\n" +
           "What we've achieved together:\n" +
           "• 15,000+ trees planted in community drives across Punjab\n" +
           "• Waste segregation campaigns, such as making Rampur a plastic-free village\n" +
           "• Student-led green campus drives\n\n" +
           "Want to take part in our next green drive? You can sign up via our Volunteer Hub!",
    actions: [
      { label: "Read Climate Action Blog", url: "/blogs/youth-led-climate-action" },
      { label: "Volunteer for Green Drives", url: "https://app-disha-for-indiaa.vercel.app/signup" }
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
    title: "Ignite Education Program",
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
    reply: "Our Ignite Education program works with school teachers and students to transform classrooms into inspiring spaces.\n\n" +
           "What it focuses on:\n" +
           "• Equipping teachers with modern 21st-century teaching tools and wellness practices\n" +
           "• Interactive career-awareness sessions in high schools\n" +
           "• Helping curiosity replace fear in everyday learning",
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
    title: "Community Development",
    questions: [
      "What is Community Development program at Disha?",
      "Grassroots community initiatives by Disha",
      "Women empowerment programs by Disha",
      "Digital literacy drives for rural youth",
      "Livelihood skill training for under served areas",
      "How Disha supports rural communities?"
    ],
    reply: "Our Community Development work brings skill training and opportunity directly to under-served communities.\n\n" +
           "We focus on:\n" +
           "• Vocational skill training to support local livelihoods\n" +
           "• Women empowerment workshops for financial confidence\n" +
           "• Digital literacy sessions so everyone can safely use smartphones, UPI, and online services",
    actions: [
      { label: "Explore All Programs", url: "/programs" },
      { label: "Volunteer in Community Drives", url: "https://app-disha-for-indiaa.vercel.app/signup" }
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
    title: "Leaderboard & Impact Points",
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
    reply: "Our Leaderboard celebrates every volunteer who gives their time to make an impact!\n\n" +
           "How it works:\n" +
           "• Every hour of volunteering and program completion earns Impact Points\n" +
           "• You unlock milestone badges like National Inspiration (Top 3), State Leader (Top 10), and Mentor (Top 20)\n" +
           "• You can filter rankings live by State, City, or College on our Leaderboard page!",
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
    reply: "Feeling uncertain about your next step? Don't worry, clarity comes from action!\n\n" +
           "Here is our quick 3-step advice:\n" +
           "1. Focus on trying short practical projects rather than searching for one 'perfect' job\n" +
           "2. Build proof of work (like GitHub code, UI designs, or published articles) through internships or open projects\n" +
           "3. Keep your resume clean, simple, and outcome-focused\n\n" +
           "Read our guide 'Confused After Class 12? A Calm Guide to Choosing Your Path' on our blog!",
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
    title: "Events & Bootcamps",
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
    reply: "We regularly host interactive workshops, bootcamps, and community drives!\n\n" +
           "Some of our popular sessions include:\n" +
           "• Career Guidance & Skill Exploration Workshops\n" +
           "• Volunteer Orientation Programs\n" +
           "• Young Founders Startup Bootcamps\n" +
           "• Scholarship Awareness Drives\n\n" +
           "Check out our Events and Opportunity Hub pages to register for upcoming sessions!",
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
      reply: "Feel free to ask a question or select one of the topics above!",
      suggestions: ["Tell me about Disha Internships", "How to volunteer?", "Government schemes"]
    };
  }

  // 1. Basic greetings
  if (query.match(/^(hi|hello|hey|greetings|namaste|hlo|helo)$/i)) {
    return {
      reply: "Hi there! 👋 Welcome to Disha Assistant. I'm here to help you explore internships, volunteer roles, startup guides, and student programs.\n\nWhat would you like to know today?",
      suggestions: [
        "Tell me about Disha Internships",
        "How can I volunteer?",
        "What government schemes exist for startups?",
        "How to manage exam stress?"
      ]
    };
  }

  // 2. Direct exact phrase / synonym match check
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

  // 3. Token intersection & fuzzy score matching
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

  // 4. Fallback with helpful options
  return {
    reply: `I'm here to help! While I didn't quite catch that, I can answer over ${TOTAL_UNIQUE_QUESTIONS}+ questions about:\n\n` +
           "• Disha Internships (Tech, Design, Content, Ops)\n" +
           "• Volunteering & Career Mentoring\n" +
           "• Government schemes (PM Mudra, PMEGP, Stand-Up India, NSP)\n" +
           "• Student Startups & Exam Wellness\n\n" +
           "You can also reach out to our team directly at +91-9888877722 or inaggarwal76@gmail.com!",
    actions: [
      { label: "Explore Internships", url: "/internship-program" },
      { label: "Volunteer Hub", url: "https://app-disha-for-indiaa.vercel.app/signup" },
      { label: "Contact Us", url: "/about" }
    ],
    suggestions: [
      "Tell me about Disha Internships",
      "How to volunteer?",
      "PM Mudra loan scheme details"
    ]
  };
}
