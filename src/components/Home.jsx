import React from 'react';
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className=' flex h-screen w-full  bg-gradient-to-b from-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-white bsmmd:flex-row xl:space-x-24 md:overflow-hidden'>
                <div className='flex flex-col justify-center h-full mt-20 md:mt-60  bsmmd:mt-0 bsmmd:space-y-12'>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white'>I'm a Self-Taught Developer</h2>
                    <p className='text-gray-400 py-4 max-w-sm bsmmd:text-lg'>
                        Hi, I'm Ali Kiani, a Developer with 1 years of experience. I'm passionate about programming, and I'm always looking for new challenges and opportunities to learn and grow.                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={600} className='group text-white w-fit px-6 ppy-3 my-2 flex items-center rounded-md  bg-gradient-to-r h-8 bsmmd:h-12 bsmmd:text-xl from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='w-[25rem] bsmmd:w-[40rem] lg:w-[48rem] hover:scale-110 duration-300'>
                    <img src={HeroImage} alt="my profile" className='rounded-full ' height='' />
                </div>
            </div>
        </div>
    )
}

export default Home