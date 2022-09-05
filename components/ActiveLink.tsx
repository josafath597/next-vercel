import { useRouter } from "next/router"
import Link from "next/link"
import { CSSProperties, FC, PropsWithChildren } from "react"

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'none',
}

interface Props {
    text: string;
    href: string;
}

const ActiveLink: FC<Props>= ({text , href}) => {
    const { asPath }  = useRouter()
    console.log(asPath);
    return (
        <Link href={href}>
            <a style = { asPath === href ? style : undefined }>{text}</a>
        </Link>
    )
}

export default ActiveLink