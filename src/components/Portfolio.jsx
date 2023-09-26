import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'

const Portfolio = () => {
    const portfolios = [
        {
            id:1,
            src: arrayDestruct
        }, 
        {
            id:2,
            src: installNode
        }, 
        {
            id:3,
            src: navbar
        }, 
        {
            id:4,
            src: reactParallax
        }, 
        {
            id:5,
            src: reactSmooth
        }, 
        {
            id: 6,
            src: reactSmooth
        }, 
        {
            id: 7,
            src: reactSmooth
        }, 
    ];

    return (
        <div name="portfolio" className='bg-gradient-to-b  from-black to-gray-800
                w-full  text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col  w-full h-full' >
                <div className=' mt-28 lg:mt-24 pb-32'>
                    <h2 className='text-6xl font-bold'>Portfolio</h2>
                    <p className='pt-8 text-xl text-gray-400'>Check Some of My Work Right Here!</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                gap-8 px-12 sm:px-0'>
                    {portfolios.map(({id,src}) => (
                        <div key={id} className='shadow-md shadow-gray-500 rounded-lg hover:shadow-lg duration-200 hover:shadow-gray-400'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-lg'>Demo</button>
                                <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 text-lg'>Code</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio