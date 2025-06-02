import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
      >
        <path
          d="M24 4L4 24L24 44L44 24L24 4Z"
          fill="url(#paint0_linear)"
          stroke="url(#paint1_linear)"
          strokeWidth="1.5"
        />
        <path
          d="M24 14L14 24L24 34L34 24L24 14Z"
          fill="url(#paint2_linear)"
          stroke="url(#paint3_linear)"
          strokeWidth="1.5"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="4"
            y1="4"
            x2="44"
            y2="44"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="4"
            y1="4"
            x2="44"
            y2="44"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="14"
            y1="14"
            x2="34"
            y2="34"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C4B5FD" />
            <stop offset="1" stopColor="#F9A8D4" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="14"
            y1="14"
            x2="34"
            y2="34"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C4B5FD" />
            <stop offset="1" stopColor="#F9A8D4" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-2xl font-bold text-white">Adya</span>
    </div>
  );
}