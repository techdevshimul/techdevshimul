"use client";

export default function CopyCodeButton() {
  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const pre = button.closest(".rounded-xl")?.querySelector("pre");
    const code = pre?.textContent ?? "";

    navigator.clipboard.writeText(code).then(() => {
      const icon = button.querySelector(".material-symbols-outlined");
      if (!icon) return;

      icon.textContent = "check";
      button.classList.add("text-secondary");

      setTimeout(() => {
        icon.textContent = "content_copy";
        button.classList.remove("text-secondary");
      }, 2000);
    });
  };

  return (
    <button
      className="flex items-center gap-1.5 font-label-sm text-label-sm text-outline hover:text-primary transition-colors"
      onClick={handleCopy}
    >
      <span className="material-symbols-outlined text-[16px]">
        content_copy
      </span>
      Copy
    </button>
  );
}
