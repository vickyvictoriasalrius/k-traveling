import Image from 'next/image';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const FeatureSection = () => {
    const darkModeEnabled = useSelector((state) => state.theme.isDark);

    const lightIcons = {
        iconB: "/images/icon-facility-2.png",
        iconA: "/images/icon-facility-1.png",
        iconC: "/images/icon-facility-3.png",
        iconD: "/images/icon-facility-4.png"
    }

    const darkIcons = {
        iconB: "/images/icon-facility-2-dark.png",
        iconA: "/images/icon-facility-1-dark.png",
        iconC: "/images/icon-facility-3-dark.png",
        iconD: "/images/icon-facility-4-dark.png"
    }

    const featureTitles = [
        "Best Flights",
        "Calculated Weather",
        "Local Events",
        "Good Testimonials",
    ]

    const featureDescriptions = [
        "Discover best flights for your perfect getaway",
        "Precision weather forecasting for seamless adventures",
        "Explore local events for unforgettable experiences",
        "Trusted by many with excellent customer testimonials",
    ]

    const iconKeys = Object.keys(lightIcons);

    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <div className='relative z-30 flex flex-col w-full gap-4 lg:gap-6 xl:gap-8 -mt-8 sm:-mt-12 lg:-mt-16 h-fit'>
            <div className='absolute z-0 bg-primaryyellow dark:bg-primaryblue bg-opacity-10 dark:bg-opacity-20 rounded-full w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] blur-3xl -top-12 lg:-top-24 right-0 lg:-right-20'></div>
            <Image src="/images/aksen.png" className='absolute w-16 -top-10 sm:-top-5 lg:w-20 xl:w-24 lg:-top-10 -left-8 sm:-left-5 lg:-left-20' width={500} height={500} alt='Line Decore' />
            <h1 className='flex items-center justify-center w-full text-xl font-bold tracking-tight lg:text-2xl xl:text-3xl font-volkhov'>
                Why Choose Our Services?
            </h1>
            <div className='flex justify-start w-full gap-2 overflow-x-scroll no-scrollbar md:overflow-visible md:gap-0 md:justify-between rounded-2xl'>
                {iconKeys.map((key, index) => (
                    <div className='relative' key={index}>
                        <div onMouseEnter={() => setHoveredItem(index)} onMouseLeave={() => setHoveredItem(null)} className='relative z-10 flex flex-col w-40 h-48 mt-1 ml-4 duration-75 bg-white mb-14 lg:h-52 xl:h-64 lg:w-44 xl:w-52 dark:bg-primaryblack hover:shadow-card dark:shadow-slate-700 hover:scale-103 rounded-2xl'>
                            <div className='flex items-end justify-center w-full h-[40%]'>
                                <Image src={darkModeEnabled ? darkIcons[key] : lightIcons[key]} className='w-auto h-12 lg:h-14 xl:h-16' width={500} height={500} alt="Icon" />
                            </div>
                            <div className='flex flex-col items-center gap-2 py-6 lg:gap-2 xl:gap-4 h-[60%]'>
                                <h1 className='font-medium text-[10px] lg:text-[11px] xl:text-[13px]'>{featureTitles[index]}</h1>
                                <h1 className='px-4 lg:px-6 xl:px-8 text-center text-[10px] lg:text-[11px] xl:text-[13px] text-primarygray dark:text-slate-400'>{featureDescriptions[index]}</h1>
                            </div>
                        </div>
                        <div className={`${hoveredItem === index ? 'scale-100' : 'scale-0'} flex bottom-10 xl:bottom-8 duration-75 left-0 xl:-left-2 absolute z-0 w-24 h-24 rounded-bl-[25px] md:rounded-bl-[30px] rounded-xl md:rounded-2xl bg-primaryred dark:bg-primaryyellow`}></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeatureSection;
