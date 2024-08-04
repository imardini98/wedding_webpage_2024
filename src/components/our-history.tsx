"use client";
import { cn } from "@/lib/utils";
import { TimeLine } from "./time-line";
import { WindSong } from "next/font/google";
import { useParallax } from "react-scroll-parallax";

const windsong = WindSong({
  subsets: ["latin"],
  weight: "500",
});

export function OurHistory({ dictionary }: { dictionary: any }) {

  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className={cn([
            "text-5xl font-bold text-center mb-12",
            windsong.className,
            "story-title"
          ])}
        >
          {dictionary.title}
        </h2>

        <div className="grid grid-cols-1 gap-8">
          <TimeLine timeline={dictionary.timeline} />
        </div>
      </div>
    </section>
  )
}