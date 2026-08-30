export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "How It Works", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const audienceTags = [
  "Local shop",
  "Restaurant",
  "Salon",
  "Independent professional",
  "New business",
  "Family business",
  "Creator",
  "Small brand",
] as const;

export const services = [
  {
    number: "01",
    kind: "web",
    title: "Website & Online Presence",
    summary: "A clear, useful home for your business online.",
    forWhom: "For businesses that need to be found, trusted, or ready to sell online.",
    deliverables: "Business websites, landing pages, simple online stores and updates.",
    tone: "coral",
  },
  {
    number: "02",
    kind: "content",
    title: "Content & Social",
    summary: "The right words and ideas to keep your business visible.",
    forWhom: "For businesses that know what they do but need help explaining it.",
    deliverables: "Website copy, blogs, social posts and practical business content.",
    tone: "yellow",
  },
  {
    number: "03",
    kind: "design",
    title: "Design & Branding",
    summary: "A consistent look that feels like your business.",
    forWhom: "For new brands or established businesses ready to look more professional.",
    deliverables: "Logos, brand basics, posters, social graphics and marketing material.",
    tone: "mint",
  },
  {
    number: "04",
    kind: "growth",
    title: "Ads & Growth",
    summary: "Practical ways to reach more of the right people.",
    forWhom: "For businesses ready to improve local visibility and attract customers.",
    deliverables: "Google and Meta campaigns, local visibility and campaign support.",
    tone: "blue",
  },
] as const;

export const conceptProjects = [
  {
    type: "Food & hospitality concept",
    title: "The Friendly Table",
    description: "A warm digital starter kit for a neighbourhood café moving beyond word of mouth.",
    deliverables: ["Website", "Menu design", "Social posts"],
    tone: "cafe",
  },
  {
    type: "Local service concept",
    title: "Everyday Glow",
    description: "A simple, confident online presence designed to make salon bookings feel easy.",
    deliverables: ["Brand basics", "Service page", "Local ads"],
    tone: "salon",
  },
  {
    type: "Education concept",
    title: "Step Up Learning",
    description: "Clear course information and parent-friendly content for a growing coaching centre.",
    deliverables: ["Landing page", "Content", "Campaign idea"],
    tone: "learning",
  },
] as const;

export const processSteps = [
  { title: "Tell us about your business", text: "Share where you are today and what you want to improve." },
  { title: "We suggest the simplest plan", text: "You get a clear starting point without unnecessary extras." },
  { title: "We create it with you", text: "We keep the work understandable and ask for your input along the way." },
  { title: "Launch, learn and improve", text: "Start using it, see what helps, and add more when it makes sense." },
] as const;

export const packages = [
  { title: "Get Online", text: "For a business that needs its first professional digital presence.", accent: "coral" },
  { title: "Look Professional", text: "For a business that wants its website, words and visuals to work together.", accent: "yellow" },
  { title: "Grow Locally", text: "For a business ready to reach more nearby customers in practical ways.", accent: "mint" },
] as const;

export const reasons = [
  "Plain-language guidance",
  "A flexible starting scope",
  "Web, design, content and marketing in one place",
  "Work shaped around real business needs",
  "Easy, human communication",
  "No unnecessary complexity",
] as const;

export const faqs = [
  { question: "I don't know what kind of website I need. Can you help?", answer: "Yes. Tell us about your business and what you want customers to do. We'll help you choose the simplest useful option." },
  { question: "Can I start with only one service?", answer: "Absolutely. Start with the piece that matters now and add other support only when your business needs it." },
  { question: "Do I need to already have a logo and content?", answer: "No. We can work with what you have, improve it, or help create the essentials from scratch." },
  { question: "Can you manage the website after launch?", answer: "Ongoing support can be included based on what the website needs. The exact options will be agreed before work begins." },
  { question: "Can you help a business that mainly uses WhatsApp or Instagram?", answer: "Yes. We can build around the way your customers already contact you and create a sensible next step from there." },
  { question: "Do you work with very small businesses?", answer: "Yes. Small and growing businesses are exactly who the studio is designed to help." },
  { question: "How much will it cost?", answer: "It depends on the starting scope. We'll first understand what you need, then suggest a clear option without pushing unnecessary work." },
  { question: "How long does a basic website take?", answer: "Timing depends on the number of pages, content and feedback. You'll receive a realistic schedule with the proposed scope." },
] as const;
