import { ReactNode, useEffect, } from 'react'
import { Footer, } from '@/widgets/Footer'
import { Header, } from '@/widgets/Header'

type PageProps = {
    children: ReactNode;
}
export const Page = (props: PageProps) => {
    const { children, } = props

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    return (
        <div className="flex flex-col items-center h-screen">
            <Header />
            <div className="flex flex-col w-full grow pt-18 bg-page-background">{children}</div>
            <Footer />
        </div>
    )
}