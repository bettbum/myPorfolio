import HeadRouter from "@/components/HeadRouter";
import dynamic from 'next/dynamic'

const SunMoon = dynamic(() => import("@/components/SunMoon"), { ssr: false })
export default function Header({params = {lng : 'en'}}) {
    return <div>
        <SunMoon/>
        <HeadRouter params={params}/>
    </div>
}