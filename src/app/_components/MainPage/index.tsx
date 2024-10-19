import { mobilesArray2, SMobilesArray } from "@/app/_bin/Mobiles"
import SecondSlider from "../SecondSlider"
import Slider from "../Slider"

const MainPage = () => {
    return (
        <>
            <Slider />
            <SecondSlider mobilesArray2={mobilesArray2} />
            <div className='pt-10 px-20 flex items-center justify-center w-full border-b'>
                <h3 className='text-xl font-bold py-5'>انواع گوشی های سامسونگ سری S</h3>
            </div>
            <SecondSlider mobilesArray2={SMobilesArray} />
        </>
    )
}

export default MainPage