"use client";
import { cn } from "@/lib/utils";
import { WindSong } from "next/font/google";
import { Parallax } from "react-scroll-parallax";

const windsong = WindSong({
  subsets: ["latin"],
  weight: "500",
});
export function Hero() {
  return (
    <Parallax >
      <section
        className="bg-cover bg-center h-[100vh] relative hero-container"
      >
        <div className="bg-black bg-opacity-20 backdrop-blur-sm absolute inset-0 flex-col flex items-center justify-center">
          <div id="title-container" className="text-center text-white">

            <h1
              className={cn([
                "hero-title",
                "lg:text-8xl sm:text-7xl text-5xl font-bold mb-4",
                windsong.className,
              ])}
            >
              Si vale
            </h1>
          </div>
          <div className="roller text-center text-white sm:text-2xl text-base">
            <span id="rolltext">
              ser felices
              <br />
              amarse
              <br />
              para toda la vida
            </span>
          </div>
        </div>
      </section>
    </Parallax>


  );
}
