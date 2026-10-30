import React from "react"
import { cn } from "@/lib/utils"

interface TechGridProps {
  className?: string
  variant?: "light" | "dark" | "auto"
  mask?: "hero" | "faded" | "top" | "none"
}

/**
 * High-performance architectural grid background with smooth radial mask falloff.
 */
export function TechGrid({
  className,
  variant = "auto",
  mask = "hero",
}: TechGridProps) {
  const maskClass =
    mask === "hero"
      ? "mask-radial-hero"
      : mask === "faded"
      ? "mask-radial-faded"
      : mask === "top"
      ? "mask-radial-top"
      : ""

  const gridClass =
    variant === "dark"
      ? "bg-tech-grid-dark"
      : variant === "light"
      ? "bg-tech-grid"
      : "bg-tech-grid"

  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-0 pointer-events-none select-none overflow-hidden",
        gridClass,
        maskClass,
        className
      )}
    />
  )
}

interface GraphWaveProps {
  className?: string
  color?: "foreground" | "background" | "current"
  opacity?: number
}

/**
 * Minimalist SVG technical system waveform / performance curve.
 */
export function GraphWave({
  className,
  color = "foreground",
  opacity = 0.12,
}: GraphWaveProps) {
  const strokeColor =
    color === "foreground"
      ? "currentColor"
      : color === "background"
      ? "currentColor"
      : "currentColor"

  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-x-0 bottom-0 pointer-events-none select-none overflow-hidden h-72 md:h-96",
        color === "background" ? "text-background" : "text-foreground",
        className
      )}
      style={{ opacity }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 320"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={strokeColor} stopOpacity="0.25" />
            <stop offset="100%" stopColor={strokeColor} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Shaded Area under main curve */}
        <path
          d="M0,192L48,202.7C96,213,192,235,288,213.3C384,192,480,128,576,128C672,128,768,192,864,208C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="url(#waveGradient)"
        />

        {/* Primary Crisp Contour Curve */}
        <path
          d="M0,192L48,202.7C96,213,192,235,288,213.3C384,192,480,128,576,128C672,128,768,192,864,208C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96"
          stroke={strokeColor}
          strokeWidth="1.5"
          fill="none"
        />

        {/* Secondary Dashed Metric Curve */}
        <path
          d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160"
          stroke={strokeColor}
          strokeWidth="1"
          strokeDasharray="4 6"
          fill="none"
          opacity="0.6"
        />

        {/* Node Points along the curve */}
        <circle cx="288" cy="213" r="3" fill={strokeColor} />
        <circle cx="576" cy="128" r="3.5" fill={strokeColor} />
        <circle cx="864" cy="208" r="3" fill={strokeColor} />
        <circle cx="1152" cy="165" r="3" fill={strokeColor} />
      </svg>
    </div>
  )
}

/**
 * Network topology graph representing distributed software systems and nodes.
 */
export function NodeTopologyGraph({
  className,
  color = "foreground",
}: {
  className?: string
  color?: "foreground" | "background"
}) {
  const isBg = color === "background"

  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute inset-0 pointer-events-none select-none overflow-hidden",
        isBg ? "text-background" : "text-foreground",
        className
      )}
    >
      <svg
        className="w-full h-full opacity-[0.08]"
        viewBox="0 0 1000 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connecting Lines */}
        <line x1="150" y1="180" x2="380" y2="120" stroke="currentColor" strokeWidth="1" />
        <line x1="380" y1="120" x2="620" y2="240" stroke="currentColor" strokeWidth="1" />
        <line x1="620" y1="240" x2="850" y2="180" stroke="currentColor" strokeWidth="1" />
        <line x1="380" y1="120" x2="480" y2="380" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="480" y1="380" x2="720" y2="420" stroke="currentColor" strokeWidth="1" />
        <line x1="620" y1="240" x2="720" y2="420" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="150" y1="180" x2="260" y2="440" stroke="currentColor" strokeWidth="1" />
        <line x1="260" y1="440" x2="480" y2="380" stroke="currentColor" strokeWidth="1" />

        {/* Nodes */}
        <circle cx="150" cy="180" r="4" fill="currentColor" />
        <circle cx="380" cy="120" r="5" fill="currentColor" />
        <circle cx="620" cy="240" r="5" fill="currentColor" />
        <circle cx="850" cy="180" r="4" fill="currentColor" />
        <circle cx="480" cy="380" r="4.5" fill="currentColor" />
        <circle cx="720" cy="420" r="4" fill="currentColor" />
        <circle cx="260" cy="440" r="3.5" fill="currentColor" />

        {/* Surrounding concentric pulse rings */}
        <circle cx="380" cy="120" r="14" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.5" />
        <circle cx="620" cy="240" r="16" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.5" />
      </svg>
    </div>
  )
}

interface CadCornerBracketsProps {
  className?: string
  size?: number
  offset?: "sm" | "default" | "md" | "lg"
}

/**
 * Corner CAD bracket markers `┌ ┐ └ ┘` for technical cards.
 * Supports configurable insets to sit comfortably inside rounded card corners.
 */
export function CadCornerBrackets({
  className,
  size = 12,
  offset = "default",
}: CadCornerBracketsProps) {
  const positions = {
    sm: {
      tl: "top-2 left-2",
      tr: "top-2 right-2",
      bl: "bottom-2 left-2",
      br: "bottom-2 right-2",
    },
    default: {
      tl: "top-3 left-3",
      tr: "top-3 right-3",
      bl: "bottom-3 left-3",
      br: "bottom-3 right-3",
    },
    md: {
      tl: "top-4 left-4",
      tr: "top-4 right-4",
      bl: "bottom-4 left-4",
      br: "bottom-4 right-4",
    },
    lg: {
      tl: "top-5 left-5 md:top-6 md:left-6",
      tr: "top-5 right-5 md:top-6 md:right-6",
      bl: "bottom-5 left-5 md:bottom-6 md:left-6",
      br: "bottom-5 right-5 md:bottom-6 md:right-6",
    },
  }[offset]

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 select-none", className)}
    >
      <span
        className={cn("absolute border-t border-l border-foreground/30", positions.tl)}
        style={{ width: size, height: size }}
      />
      <span
        className={cn("absolute border-t border-r border-foreground/30", positions.tr)}
        style={{ width: size, height: size }}
      />
      <span
        className={cn("absolute border-b border-l border-foreground/30", positions.bl)}
        style={{ width: size, height: size }}
      />
      <span
        className={cn("absolute border-b border-r border-foreground/30", positions.br)}
        style={{ width: size, height: size }}
      />
    </div>
  )
}


export type GlowPosition =
  | "top"
  | "bottom"
  | "center"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "split"
  | "random"

export type GlowVariant = "default" | "drift" | "aurora" | "spotlight" | "dual"

interface AmbientGlowProps {
  className?: string
  position?: GlowPosition
  variant?: GlowVariant
  animated?: boolean
}

/**
 * Playful, multi-layered ambient warm orange gradient glow.
 * Offers varied positions, distinct organic geometries, and subtle floating dynamics
 * while preserving the brand's signature orange color palette.
 */
export function AmbientGlow({
  className,
  position = "center",
  variant = "default",
  animated = true,
}: AmbientGlowProps) {
  // Balanced configurations for varied placements across sections
  const positionConfigs: Record<
    GlowPosition,
    {
      container: string
      blob1: string
      blob2: string
      blob3?: string
    }
  > = {
    top: {
      container: "top-[-15%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[1100px] h-[340px] md:h-[520px]",
      blob1: "w-full h-full -rotate-6 scale-x-110",
      blob2: "inset-6 rotate-12 scale-95",
      blob3: "inset-x-16 inset-y-8 -rotate-3 scale-90",
    },
    bottom: {
      container: "bottom-[-15%] left-1/2 -translate-x-1/2 w-[85vw] max-w-[1000px] h-[300px] md:h-[480px]",
      blob1: "w-full h-full rotate-8 scale-x-105",
      blob2: "inset-8 -rotate-10 scale-90",
    },
    center: {
      container: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] max-w-[950px] h-[320px] md:h-[500px]",
      blob1: "w-full h-full -rotate-12 scale-100",
      blob2: "inset-10 rotate-12 scale-95",
    },
    "top-left": {
      container: "top-[-10%] -left-[10%] md:-left-[5%] w-[65vw] max-w-[800px] h-[350px] md:h-[520px]",
      blob1: "w-full h-full -rotate-45 scale-110",
      blob2: "inset-6 rotate-18 scale-90",
    },
    "top-right": {
      container: "top-[-10%] -right-[10%] md:-right-[5%] w-[65vw] max-w-[800px] h-[350px] md:h-[520px]",
      blob1: "w-full h-full rotate-45 scale-110",
      blob2: "inset-6 -rotate-18 scale-90",
    },
    "bottom-left": {
      container: "bottom-[-10%] -left-[10%] md:-left-[5%] w-[65vw] max-w-[750px] h-[300px] md:h-[460px]",
      blob1: "w-full h-full rotate-24 scale-105",
      blob2: "inset-8 -rotate-15 scale-90",
    },
    "bottom-right": {
      container: "bottom-[-10%] -right-[10%] md:-right-[5%] w-[65vw] max-w-[750px] h-[300px] md:h-[460px]",
      blob1: "w-full h-full -rotate-24 scale-105",
      blob2: "inset-8 rotate-15 scale-90",
    },
    split: {
      container: "top-[10%] left-0 right-0 w-full h-[380px] md:h-[550px]",
      blob1: "-left-[15%] top-0 w-[55vw] max-w-[650px] h-full rotate-12",
      blob2: "-right-[15%] bottom-0 w-[55vw] max-w-[650px] h-full -rotate-12",
    },
    random: {
      container: "top-[5%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[980px] h-[340px] md:h-[500px]",
      blob1: "w-full h-full rotate-15 scale-105",
      blob2: "inset-8 -rotate-8 scale-95",
    },
  }

  const current = positionConfigs[position] || positionConfigs.center

  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute pointer-events-none select-none blur-[90px] md:blur-[120px] opacity-40 md:opacity-35 dark:opacity-40 mix-blend-normal dark:mix-blend-screen overflow-visible",
        current.container,
        className
      )}
    >
      {/* Primary Organic Layer (Warm Orange Spectrum) */}
      <div
        className={cn(
          "absolute rounded-[40%_60%_70%_30%/40%_50%_60%_55%] bg-gradient-to-r from-[#e15813]/40 via-[#ee7639]/35 to-[#f59e0b]/30 transform-gpu will-change-transform",
          animated && "animate-float-slow",
          current.blob1
        )}
      />

      {/* Secondary Complementary Layer (Deeper Amber / Rust Contrast) */}
      <div
        className={cn(
          "absolute rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-tr from-[#c2410c]/30 via-[#e15813]/25 to-[#fb923c]/25 mix-blend-overlay dark:mix-blend-screen transform-gpu will-change-transform",
          animated && "animate-float-alt",
          current.blob2
        )}
      />

      {/* Tertiary Accent Highlight (If present) */}
      {current.blob3 && (
        <div
          className={cn(
            "absolute rounded-full bg-gradient-to-b from-[#f97316]/25 via-[#fb923c]/20 to-transparent mix-blend-screen opacity-70",
            current.blob3
          )}
        />
      )}
    </div>
  )
}


/**
 * Elegant architectural grid lines that act like borders, fading out at the edges.
 * Adds a highly premium feel to section backgrounds.
 */
export function GridLines({
  className,
}: {
  className?: string
}) {
  return null
}
