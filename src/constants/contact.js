import { HelpCircle, MailOpen, MessageSquareDot } from "lucide-react";

export const contactCards = [
  {
    icon: HelpCircle,
    title: "Knowledgebase",
    desc: "We're here to help with any questions.",
    cta: {
      name: "Contact Support",
      link: "tel:+254 795 889533",
    },
  },
  {
    icon: MessageSquareDot,
    title: "FAQ",
    desc: "Search our FAQ for answers to anything you might ask.",
    cta: {
      name: "Visit FAQ",
      link: "/contact-us#faq",
    },
  },
  {
    icon: MailOpen,
    title: "Contact us by email",
    desc: "If you wish to write us an email instead please use",
    cta: {
      name: "worldwingsnbi@gmail.com",
      link: "mailto:worldwingsnbi@gmail.com",
    },
  },
];
