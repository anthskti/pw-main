# Design Fixes

Design issues identified from an Apple Design review of the site. Fixes are ordered by priority.

---

## 🔴 High Priority

### 1. Add `prefers-reduced-motion` guard

No motion guard exists anywhere. Users who've requested reduced motion still get all sweep animations, scale transitions, and hover effects — an accessibility miss.

```css
/* globals.css */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

### 2. Mobile nav — instant mount/unmount breaks spatial consistency

The nav appears/disappears instantly with no animation. Per Apple's principle, things should enter and exit along the same path.

```jsx
// Header.js
import { AnimatePresence, motion } from "framer-motion";

<AnimatePresence>
  {mobileOpen && (
    <motion.div
      key="mobile-nav"
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ type: "spring", bounce: 0, duration: 0.22 }}
      className="mt-4 sm:hidden"
    >
      <MobileNav links={links} onNavigate={() => setMobileOpen(false)} />
    </motion.div>
  )}
</AnimatePresence>
```

---

### 3. Mobile nav toggle — `+` icon is ambiguous

The `X` icon rotated `-45deg` renders as a `+`, which reads as "add" not "open menu." Swap to the standard `Menu` → `X` pattern. Both icons are already imported from `lucide-react`.

```jsx
// Header.js
{mobileOpen ? (
  <X className="h-5 w-5 transition-transform duration-300" />
) : (
  <Menu className="h-5 w-5 transition-transform duration-300" />
)}
```

---

## 🟠 Medium Priority

### 4. Link sweep animation doesn't reverse

The `link-sweep` keyframe (2s ease-in-out, plays once) is too slow and doesn't reverse on hover-off — the underline just pops away. Replace with a reversible CSS transition.

```css
/* globals.css — replace the link-sweep keyframe + hover rule */
.link-sweep::before {
  content: "";
  @apply absolute left-0 bottom-0 h-px w-full bg-zinc-800 dark:bg-zinc-300;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 220ms ease-out;
}

.link-sweep:hover::before {
  transform: scaleX(1);
  opacity: 1;
}
```

---

### 5. Button press — no `:active` feedback

Buttons respond on hover but not on the actual press moment. Apple's rule: respond on pointer-down, not release.

```css
/* globals.css */
.nav-link:active {
  transform: scale(0.95);
  transition: transform 80ms ease-out;
}
```

```jsx
/* ProjectFilters.js — add to button className */
"... active:scale-[0.97] transition-transform duration-75 ..."
```

---

### 6. Footer icon label — `w-0 → w-auto` can't be transitioned

`width: auto` can't be interpolated by CSS — the label text pops in rather than sliding. Use `max-width` with a cap.

```jsx
// Footer.js
<span
  className="hidden md:inline-block max-w-0 overflow-hidden opacity-0
             group-hover:max-w-[6rem] group-hover:ml-2 group-hover:opacity-100
             transition-all duration-300 ease-out whitespace-nowrap"
>
  {link.name}
</span>
```

---

## 🟡 Low Priority

### 7. Heading tracking — h1 reads slightly loose

Large display text wants negative tracking per Apple's typography guidelines.

```jsx
// page.js
<header className="text-2xl font-bold tracking-tight">
  Hey, I'm Anthony (or Anth)
</header>
```

---

### 8. Future: `prefers-reduced-transparency` guard

If `backdrop-filter` blur is added to the nav or sheets, add a fallback for users who've requested reduced transparency.

```css
@media (prefers-reduced-transparency: reduce) {
  .toolbar {
    background: white;
    backdrop-filter: none;
  }
}
```

---

## 🎨 Experimental: Dither & Texture Animation (Inspired by borisnezlobin.com)

Boris Nezlobin's site uses a full-width HTML `<canvas>` styled with `[image-rendering:pixelated]` that blends two techniques:
1. **Procedural grain & fibers** — offscreen canvas pattern with randomized pixel noise and linear alpha gradients.
2. **Interactive dynamic scene** — particle/flock motion that reacts to pointer movement and wind physics, rendered at low resolution with crisp pixelated scaling.

### Where Dither Fits on anthonypham.ca (Apple Design Perspective)

Apple's design philosophy values **restraint**, **responsiveness**, and **purpose**:
- **Do:** Use dither as an ambient header/hero layer behind text or as an interactive hover effect on project card preview images (e.g. pixelated dither dissolve on card hover).
- **Do:** Respect `prefers-reduced-motion` by freezing animation loops and rendering a single static frame.
- **Do:** Pause `requestAnimationFrame` loops when the element leaves the viewport (`IntersectionObserver`) to save battery and GPU cycles.
- **Don't:** Place dither directly underneath small body text or project descriptions where it degrades legibility or contrast.

### Clean, Readable Implementation Options

#### Option A: Ambient Hero Dither Canvas (`DitherHero.js`)
An offscreen procedural pixel-dither canvas that sits subtly in the hero or background:

```jsx
"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient dither/grain canvas inspired by borisnezlobin.com
 * Rendered at 1/2 or 1/4 resolution with pixelated upscaling for retro texture.
 */
export default function DitherCanvas({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let isVisible = true;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Scale factor: renders small then scales up with CSS pixelated rendering
    const pixelScale = 4;

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth / pixelScale);
      canvas.height = Math.floor(window.innerHeight / pixelScale);
    };

    resize();
    window.addEventListener("resize", resize);

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    let time = 0;

    const render = () => {
      if (isVisible) {
        time += 0.02;
        const { width, height } = canvas;
        const imgData = ctx.createImageData(width, height);
        const data = imgData.data;

        // Subtle Bayer matrix or noise modulation
        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const index = (y * width + x) * 4;
            const noise = (Math.sin(x * 0.05 + time) * Math.cos(y * 0.05 + time) + 1) * 0.5;
            const threshold = ((x % 4) * 4 + (y % 4)) / 16;
            const isDot = noise > threshold ? 255 : 0;

            // Subtle dark mode / light mode neutral tint
            data[index] = isDot;     // R
            data[index + 1] = isDot; // G
            data[index + 2] = isDot; // B
            data[index + 3] = isDot ? 18 : 0; // Low alpha so it remains ambient
          }
        }

        ctx.putImageData(imgData, 0, 0);
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 size-full [image-rendering:pixelated] ${className}`}
      aria-hidden="true"
    />
  );
}
```

#### Option B: Dither Card Hover Effect
Apply a dither filter directly to the project card image on hover using a canvas shader or Bayer matrix filter to reveal high-tech retro detail on pointer interaction.

