/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

// ---- Slides live outside the component to avoid re-creation on each render
const SLIDES = [
  {
    title: "Your Complete Event Partner",
    subtitle: "On-Ground Crew + All-In-One Dashboard",
    description:
      "From stage setup to QR check-in, we handle every detail — with technology that keeps your event running flawlessly.",
    image: "/hero/hero1.png",
  },
  {
    title: "Plan, Run, and Track — From One Place",
    subtitle: "All Your Event Tools, Connected",
    description:
      "Manage registration, check-ins, schedules, and real-time analytics from a single, easy-to-use dashboard.",
    image: "/hero/hero2.png",
  },
  {
    title: "Events That Impress",
    subtitle: "Seamless Experience for You and Your Guests",
    description:
      "We combine expert on-site management with modern tech to create events people remember — for all the right reasons.",
    image: "/hero/hero3.png",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const containerRef = useRef<HTMLElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const reducedMotion = useReducedMotion();

  const total = SLIDES.length;

  const goTo = useCallback(
    (idx: number) => {
      setCurrent((idx + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(current + 1), [goTo, current]);
  const prev = useCallback(() => goTo(current - 1), [goTo, current]);

  // Auto-advance with safety: pause on hover/focus, reduced motion, hidden tab, or off-screen
  useEffect(() => {
    if (reducedMotion || isPaused || !isInView || typeof window === "undefined")
      return;
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [reducedMotion, isPaused, isInView, total]);

  // Pause when tab is hidden
  useEffect(() => {
    const handleVisibility = () => setIsPaused(document.hidden);
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // Pause when hero is off-screen
  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === "undefined")
      return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    io.observe(containerRef.current);
    return () => io.disconnect();
  }, []);

  // Keyboard navigation on focused region
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  // Animation helpers
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: reducedMotion ? 0 : 0.6,
          staggerChildren: reducedMotion ? 0 : 0.15,
        },
      },
    }),
    [reducedMotion]
  );

  const titleAnim = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
      };

  const subtitleAnim = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.1 },
      };

  const descAnim = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.2 },
      };

  return (
    <section
      ref={containerRef as any}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Hero slides"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      {/* Background Slides */}
      <div className="absolute inset-0">
        {SLIDES.map((s, i) => {
          const isActive = i === current;
          return (
            <motion.div
              key={i}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: reducedMotion ? 1 : isActive ? 1 : 1.04,
              }}
              transition={{
                duration: reducedMotion ? 0 : 0.9,
                ease: "easeInOut",
              }}
              aria-hidden={!isActive}
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
              {/* Gradient overlays for readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
            </motion.div>
          );
        })}
      </div>

      {/* Floating ambient dots (respect reduced motion) */}
      {!reducedMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full"
          />
          <motion.div
            animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/20 rounded-full"
          />
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white pt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-10"
        >
          {/* Text block with optional backdrop blur on small screens */}
          <div className="mx-auto max-w-4xl">
            <motion.h1
              key={`title-${current}`}
              {...titleAnim}
              transition={{
                duration: reducedMotion ? 0 : 0.6,
                ease: "easeOut",
              }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            >
              {SLIDES[current].title}
            </motion.h1>

            <motion.div
              key={`subtitle-${current}`}
              {...subtitleAnim}
              className="text-xl sm:text-2xl md:text-3xl text-primary mb-4 font-semibold"
            >
              {SLIDES[current].subtitle}
            </motion.div>

            <motion.p
              key={`desc-${current}`}
              {...descAnim}
              className="text-lg sm:text-xl text-gray-200 leading-relaxed"
            >
              {SLIDES[current].description}
            </motion.p>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reducedMotion ? 0 : 0.6,
            delay: reducedMotion ? 0 : 0.15,
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10"
        >
          <motion.div
            whileHover={!reducedMotion ? { scale: 1.03 } : {}}
            whileTap={!reducedMotion ? { scale: 0.97 } : {}}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 min-w-[220px]"
              aria-label="Book a Free Consultation"
            >
              <span className="relative z-10">Book a Free Consultation</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={!reducedMotion ? { scale: 1.03 } : {}}
            whileTap={!reducedMotion ? { scale: 0.97 } : {}}
          >
            <Link
              href="#process"
              className="group relative inline-flex items-center justify-center border-2 border-white/50 hover:border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm min-w={[200].toString()} aria-label='See How It Works'"
            >
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              See How It Works
            </Link>
          </motion.div>
        </motion.div>

        {/* Arrows */}
        <div className="pointer-events-auto absolute left-4 right-4 top-1/2 -translate-y-1/2 flex items-center justify-between">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="inline-flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 border border-white/10 w-10 h-10 text-white transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="inline-flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 border border-white/10 w-10 h-10 text-white transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-3">
          {SLIDES.map((_, i) => {
            const isActive = i === current;
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative transition-all duration-300 ${
                  isActive
                    ? "w-8 h-3 bg-primary"
                    : "w-3 h-3 bg-white/40 hover:bg-white/60"
                } rounded-full`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
