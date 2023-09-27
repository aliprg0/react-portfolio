import React from 'react'
import AIProjects from '../assets/portfolio/AIProjects.png'
import BrainTumorDetection from '../assets/portfolio/BrainTumorDetection.png'
import CandlePrediction from '../assets/portfolio/CandlePrediction.png'
import RealStatePrediction from '../assets/portfolio/RealStatePrediction.png'
import LandingPage from '../assets/portfolio/LandingPage.png'

const Portfolio = () => {
    const portfolios = [
        {
            id:1,
            name: "Simple Landing Page",
            src: LandingPage,
            codesrc: "https://github.com/aliprg0/Rexa-Landing-Page",
            live: true,
            livesrc: 'aliprg0.github.io/Rexa-Landing-Page/',
        }, 
        {
            id:2,
            name: "Brain Tumor Detection",
            src: BrainTumorDetection,
            codesrc: "https://github.com/aliprg0/Brain-Tumor-Detection",
            live: false,
            livesrc: '',
        }, 
        {
            id:3,
            name: "Real State Prediction",
            src: RealStatePrediction,
            codesrc: "https://github.com/aliprg0/Real-Estate-Price-Prediction-Site",
            live: false,
            livesrc: '',
        }, 
        {
            id:4,
            name: "Candle Prediction",
            src: CandlePrediction,
            codesrc: "https://github.com/aliprg0/small_projects",
            live: false,
            livesrc: '',
        }, 
        {
            id:5,
            name: "AI Models",
            src: AIProjects,
            codesrc: "https://github.com/aliprg0/Rexa-Landing-Page",
            live: false,
            livesrc: '',
        }, 

    ];

    return (
        <div  className='bg-gradient-to-b  from-black to-gray-800
                w-full pt-60 lg:pt-20 text-white h-full'>
            <div name="portfolio" className='max-w-screen-lg p-4 mx-auto flex flex-col  w-full h-full' >
                <div className=' mt-28 lg:mt-24 pb-32'>
                    <h2 className='text-6xl font-bold'>Portfolio</h2>
                    <p className='pt-8 text-xl text-gray-400'>Check Some of My Work Right Here!</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                gap-8 px-12 sm:px-0'>
                    {portfolios.map(({id,src,codesrc,live,livesrc, name}) => (
                        <div key={id} className='shadow-md shadow-gray-500 rounded-lg hover:shadow-lg duration-200 hover:shadow-gray-400'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 w-full' />
                            <p className='w-full text-center pt-3 text-2xl'>{name}</p>
                            <div className='flex items-center justify-center'>
                                {live ? 
                                <a href={livesrc} className='hover:cursor-pointer border-gray-800 shadow-lg border-4 w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 text-lg text-center'>Demo</a> :
                                    <a className='w-1/2 px-6 py-2 m-4 border-gray-800 shadow-lg border-4 duration-200 hover:scale-105 text-lg text-center'>Demo</a>
                            }
                                <a href={codesrc} className='hover:cursor-pointer border-gray-800 shadow-lg border-4 w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 text-lg text-center'>Code</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio