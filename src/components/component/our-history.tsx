"use client";
import { cn } from "@/lib/utils";
import { TimeLine } from "./time-line";
import { WindSong } from "next/font/google";
import { useParallax } from "react-scroll-parallax";

const windsong = WindSong({
  subsets: ["latin"],
  weight: "500",
});

export function OurHistory() {
  /*  const history = useParallax({
     opacity: [0, 1],
     endScroll: 3000,
   }); */
  return (
    <section ref={history.ref} className="py-16 mt-[500px]">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className={cn([
            "text-5xl font-bold text-center mb-12",
            windsong.className,
          ])}
        >
          Nuestra Historia
        </h2>

        <div className="grid grid-cols-1 gap-8">
          <TimeLine />
        </div>
      </div>
    </section>
  )
}