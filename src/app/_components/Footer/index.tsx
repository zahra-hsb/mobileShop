import Link from "next/link"

const Footer = () => {
    return (
        <>
            <footer className="w-full bottom-0 p-5 flex items-center justify-center text-gray-200 bg-blue-950 flex-row-reverse gap-1">
                developed by 
                <Link href={'https://www.instagram.com/z_dev2024'} className="hover:text-white">Z_dev2024</Link>
            </footer>
        </>
    )
}

export default Footer