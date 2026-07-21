"use client";

import { useState, useEffect } from "react";

const accordionData = [
  {
    title: "Why use the MERN stack for enterprise applications?",
    content:
      "The MERN stack (MongoDB, Express, React, Node) offers a unified JavaScript development experience, which accelerates time-to-market. Its non-blocking I/O model makes it exceptionally efficient for real-time data handling and high-concurrency environments.",
  },
  {
    title: "How do you handle cross-platform mobile development?",
    content:
      "I leverage React Native to build native-quality apps for iOS and Android using a single codebase. This approach reduces development costs by ~40% while maintaining high performance through native bridge optimizations and specialized UI components.",
  },
  {
    title: "What does your post-launch maintenance plan include?",
    content:
      "Maintenance includes 24/7 uptime monitoring, security patching, API version updates, and performance auditing. I provide tiered support plans ensuring that your application remains modern and secure against evolving threats.",
  },
  {
    title: "How is technical documentation delivered?",
    content:
      "I provide comprehensive documentation including API Swagger/OpenAPI specifications, README files for setup, and architectural diagrams. All source code is versioned via GitHub/GitLab with meaningful commit history.",
  },
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    // If clicking the already-active item, close it. Otherwise open the clicked one.
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  // Horizontal scroll animation for circuit nodes
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const heroHeight = 500;
      if (scrollPos > heroHeight) {
        // Potential for adding micro-interactions on scroll here
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="space-y-4">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className={`accordion-item-workflow glass-card rounded-xl overflow-hidden transition-all duration-300 ${activeIndex === index ? "active" : ""}`}
        >
          <button
            className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-headline-sm text-[18px] text-on-surface">
              {item.title}
            </span>
            <span className="material-symbols-outlined chevron transition-transform duration-300">
              expand_more
            </span>
          </button>
          <div className="accordion-content-workflow px-6">
            <p className="text-on-surface-variant font-body-md text-body-md">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
