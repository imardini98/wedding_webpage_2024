import prisma from "../../../../prisma/client";
import ImageLegacy from "next/legacy/image";
import Image from "next/image";
import { Bona_Nova, WindSong } from "next/font/google";
import { cn } from "@/lib/utils";
import "./style.css"
const windsong = Bona_Nova({
    subsets: ["latin"],
    weight: "400",
});

async function getGuestInformation(id: string) {
    const guest = prisma.guest.findUnique({
        where: {
            guestCode: String(id.toUpperCase()),
        },
    });
    return guest;
}


export default async function Page({ params }: { params: { id: string } }) {
    const guest = await getGuestInformation(params.id);
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen custom-bg">
            {/*             <ImageLegacy src="/page_background.jpg" alt="description" layout="fill" objectFit="cover" quality={100} />
 */}            <div className="card bg-base-100 w-96 shadow-xl pt-[10px]">
                <div className="flex flex-col justify-center items-center w-full">
                    <Image src="/vi_gold_logo.png" alt="logo" width={80} height={80} />
                </div>
                <div className={cn(["card-body", windsong.className])}>
                    <h2 className="card-title">{guest?.name ?? "Not found"}</h2>
                    {guest && <>
                        <p><span className="text-title">Seats:</span> {guest?.seats}</p>
                        <p><span className="text-title">Code:</span> {guest?.guestCode}</p>
                    </>}

                </div>
            </div>
        </div>

    )

}

