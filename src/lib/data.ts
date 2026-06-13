export const PHONE = "+923001234567";
export const WHATSAPP = "923001234567";
export const EMAIL = "info@azhairclub.com";
export const ADDRESS = "Kohinoor City, Jaranwala Road, Faisalabad, Pakistan";

export const whatsappLink = (msg = "Hello A.Z Hair Club, I'd like to book a free consultation.") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const services = [
  {
    slug: "hair-patch",
    icon: "✦",
    title: "Hair Patch / Hair System",
    short: "Ultra-natural, undetectable hair patches custom-built to your scalp.",
    desc: "Instant, non-surgical hair replacement using premium hair systems matched to your color, density and hairline.",
  },
  {
    slug: "non-surgical",
    icon: "❖",
    title: "Non-Surgical Hair Replacement",
    short: "Full coverage with zero downtime and no surgery required.",
    desc: "A pain-free alternative to transplants delivering a complete, natural head of hair the same day.",
  },
  {
    slug: "hair-wig",
    icon: "♛",
    title: "Hair Wig Services",
    short: "Custom human-hair wigs with hand-tied natural hairlines.",
    desc: "Premium custom and human hair wigs designed, styled and fitted for a flawless look.",
  },
  {
    slug: "hair-transplant",
    icon: "⚕",
    title: "Hair Transplant Consultation",
    short: "Expert assessment and honest guidance for your hair goals.",
    desc: "Professional hair loss assessment and consultation to help you choose the right path.",
  },
  {
    slug: "hair-fixing",
    icon: "◈",
    title: "Hair Fixing & Bonding",
    short: "Secure, comfortable bonding for an active modern lifestyle.",
    desc: "Advanced fixing and bonding techniques so your hair system stays secure through anything.",
  },
  {
    slug: "maintenance",
    icon: "✺",
    title: "Hair Maintenance Services",
    short: "Keep your system fresh, clean and looking brand new.",
    desc: "Routine servicing, cleaning, refitting and styling to extend the life of your hair system.",
  },
];

export const testimonials = [
  {
    name: "Imran Khalid",
    role: "Business Owner, Faisalabad",
    text: "I had lost all hope after years of thinning. A.Z Hair Club gave me a completely natural look — nobody can tell. My confidence is back!",
    rating: 5,
  },
  {
    name: "Usman Tariq",
    role: "Software Engineer",
    text: "The most professional team I've dealt with. The hairline they designed looks exactly like my natural hair. Worth every rupee.",
    rating: 5,
  },
  {
    name: "Bilal Ahmed",
    role: "Sales Manager",
    text: "Non-surgical, painless and instant results. I walked out looking 10 years younger. Highly recommend the best hair patch center in Faisalabad.",
    rating: 5,
  },
  {
    name: "Hamza Sheikh",
    role: "Teacher",
    text: "From consultation to fitting, everything was premium and discreet. The maintenance service keeps it looking perfect.",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Will the hair patch look natural?",
    a: "Absolutely. We custom-match the color, density, curl and hairline to your existing hair so the result is completely undetectable — even up close.",
  },
  {
    q: "Is the procedure surgical or painful?",
    a: "No. Our hair systems and patches are 100% non-surgical, pain-free, and give you a full head of hair the very same day.",
  },
  {
    q: "How long does a hair system last?",
    a: "With proper maintenance, a quality hair system lasts 6–12 months. We offer maintenance plans to keep it looking brand new.",
  },
  {
    q: "Can I swim, shower and exercise normally?",
    a: "Yes. With our secure bonding techniques you can shower, swim, work out and live an active lifestyle with full confidence.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on the system, hair type and coverage required. Book a free consultation and we'll give you a transparent quote.",
  },
  {
    q: "Do you offer a free consultation?",
    a: "Yes! Your first consultation is completely free. We assess your hair loss and recommend the best solution for you.",
  },
];

export const stats = [
  { value: "5000+", label: "Happy Clients" },
  { value: "12+", label: "Years Experience" },
  { value: "100%", label: "Natural Look" },
  { value: "4.9★", label: "Client Rating" },
];

export const steps = [
  { n: "01", title: "Free Consultation", desc: "We assess your hair loss, scalp and goals — honestly and privately." },
  { n: "02", title: "Custom Design", desc: "Your hair system is built to match your color, density and natural hairline." },
  { n: "03", title: "Precision Fitting", desc: "Expert application and bonding for a secure, undetectable result." },
  { n: "04", title: "Lifelong Support", desc: "Ongoing maintenance and styling to keep you looking your best." },
];
