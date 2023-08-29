import HeadRouter from "@/components/HeadRouter";
import dynamic from 'next/dynamic'

const SunMoon = dynamic(() => import("@/components/SunMoon"), { ssr: false })
export default function Header({params = {lng : 'en'}}) {
    return <div className="max-lg:flex max-lg:flex-col max-lg:items-center max-lg:w-full">
        <SunMoon/>
        <HeadRouter params={params}/>
    </div>
}