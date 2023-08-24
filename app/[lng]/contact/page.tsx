import Contacts from "@/components/Contacts"
import { Github, Linkedin, Location, Mail, Phone } from "@/components/icons"
export default function Page() {
    const classIcons = 'fill-neutral w-[18px] h-[18px]'
    const data = [
        {
            "content": "Based in Montreal, QC, Canada",
            "Img": <Location className={classIcons}/>
        },
        {
            "content": "bettbum@gmail.com",
            "Img": <Mail className={classIcons}/>
        },
        {
            "content": "github.com/bettbum",
            "Img": <Github className={classIcons}/>
        },
        {
            "content": "linkedin.com/in/thihongphucnguye",
            "Img": <Linkedin className={classIcons}/>
        },
        {
            "content": "(438) 509-9109",
            "Img": <Phone className={classIcons}/>
        }
    ]
    return <Contacts data={data}/>
}