import Image from "next/image";

export default function Loader() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div className="flex flex-col z-[10000] justify-center items-center h-screen bg-[white]"><Image className="logo-loading" alt="Loading..." src="/vi_gold_logo.png" width={100} height={100} /></div>
}