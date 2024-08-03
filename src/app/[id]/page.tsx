import { Container } from "@/components/container";
import prisma from "../../../prisma/client";
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
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="flex flex-col justify-center items-center w-full">
                    <Image src="/vi_logo.png" alt="logo" width={100} height={100} />
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

