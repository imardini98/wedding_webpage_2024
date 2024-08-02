"use client";
import { cn } from "@/lib/utils";
import { WindSong } from "next/font/google";
import { Parallax, useParallax } from "react-scroll-parallax";
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from "@/../tailwind.config";
import useTailwindBreakpoints from "@/lib/breakpoints";
import { LegacyRef } from "react";
const { theme: { screens } } = resolveConfig(tailwindConfig);
const windsong = WindSong({
    subsets: ["latin"],
    weight: "500",
});
export function HeroParallax() {
    const { isTabletOrMobile, isXs, isSm } = useTailwindBreakpoints();
    const hero = useParallax({
        speed: -200
    });
    const ese = useParallax({
        opacity: [1, 0],
        translateX: ["124.5px", "0px"],
        startScroll: 0,
        endScroll: 500
    });

    const to_slide = useParallax({
        translateX: isXs ? ["-60px", "-60px"] : ["124.5px", "0px"],
        startScroll: 0,
        endScroll: 500
    })
    const to_slide_revert = useParallax({
        translateX: isSm ? ["-124.5px", "-60px"] : isXs ? ["-.5px", "-65px"] : ["-124.5px", "0px"],
        startScroll: 0,
        endScroll: 500
    })
    const to_hide = useParallax({
        //translateX: ["0px", "-100px"],
        startScroll: 0,
        endScroll: 500,
        opacity: [0, 1]
    })
    return (
        <section
            ref={hero.ref}
            className="bg-cover bg-center h-[100vh] relative hero-container z-20"
        >
            <div className="bg-black bg-opacity-20 backdrop-blur-sm absolute inset-0 flex-col flex items-center justify-center">
                <div id="title-container" className="text-center text-white">
                    <Parallax speed={-10}>
                        <h1
                            ref={ese.ref as LegacyRef<HTMLHeadingElement>}
                            id="ese"
                            className={cn([
                                "hero-title",
                                "lg:text-8xl sm:text-7xl text-5xl font-bold mb-4",
                                windsong.className,
                            ])}
                        >
                            S
                        </h1>
                        <h1
                            ref={to_slide.ref as LegacyRef<HTMLHeadingElement>}
                            className={cn([
                                "hero-title",
                                "to_slide",
                                "lg:text-8xl sm:text-7xl text-5xl font-bold mb-4",
                                windsong.className,
                            ])}
                        >
                            <span id="chosen">
                                i<span ref={to_hide.ref} id="to_hide">ván &</span>
                            </span>
                        </h1>
                        <h1
                            ref={to_slide_revert.ref as LegacyRef<HTMLHeadingElement>}
                            className={cn([
                                "hero-title",
                                "lg:text-8xl sm:text-7xl text-5xl font-bold mb-4",
                                windsong.className,
                            ])}
                        >
                            vale
                        </h1>
                    </Parallax>
                </div>
            </div>
        </section>


    );
}
