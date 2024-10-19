import Image from "next/image"
import a53 from '../../_public/a53.webp'

const Main = () => {
    return (
        <>
            <div className="w-full p-10">
                <div>
                    <Image src={a53} alt="" /> 
                </div>
            </div>
        </>
    )
}

export default Main