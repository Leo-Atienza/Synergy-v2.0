"use client";

import { useEffect, useState } from "react";

import { Moon, Sun } from "@/components/icons";

// Light/dark toggle for the showcase. Dark is the default; this flips
// data-theme="light" on <html> (CSS owns every colour via the token block in
// globals.css), persists the choice to localStorage, and keeps the mobile
// browser-chrome colour (the <meta name="theme-color"> rendered by the layout's
// viewport export) in sync. Mounted-guarded so the SSR markup (dark state)
// matches the first client paint — no hydration warning; the glyph corrects
// after mount if the page was loaded in light by the before-paint script.
const META_COLOR = { light: "#f7f3ec", dark: "#0d1620" } as const;

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    setMounted(true);
    setTheme(document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark");
  }, []);

  const current = mounted ? theme : "dark";
  const next = current === "light" ? "dark" : "light";

  function toggle() {
    const root = document.documentElement;
    // Dark is the default state (no attribute) — remove rather than set "dark",
    // so the DOM matches a fresh SSR render exactly.
    if (next === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode: the in-page switch still works for this session */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", META_COLOR[next]);
    setTheme(next);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label="Toggle light theme"
      aria-pressed={current === "light"}
      title={`Switch to ${next} theme`}
    >
      {current === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
