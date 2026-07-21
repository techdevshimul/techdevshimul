"use client";

import { useEffect } from "react";

export default function ReadingProgress() {
  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      const progressBar = document.getElementById("progress-bar");
      if (progressBar) {
        progressBar.style.width = scrolled + "%";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Smooth Scroll for Sidebar
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    const smoothScrollHandler = function (this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href") || "");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", smoothScrollHandler);
    });

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", smoothScrollHandler);
      });
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-60 bg-surface-container">
      <div
        className="h-full bg-primary shadow-[0_0_10px_#2563eb] progress-bar-fill"
        id="progress-bar"
      ></div>
    </div>
  );
}
