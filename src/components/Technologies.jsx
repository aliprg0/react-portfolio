import React from 'react'

import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import python from '../assets/python.png'

const Technologies = () => {
    const techs = [
        {
            id:1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
        id: 3,
        src: javascript,
        title: "Javascript",
        style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: react ,
            title: "React",
            style: "shadow-cyan-200",
        },
        {
            id: 5,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-cyan-700",
        },  
        {
            id: 6,
            src: python,
            title: "Python",
            style: "shadow-yellow-200",
        },  
        
    ]
    return (
        <div name="technologies" className='pt-[5rem] lg:pt-20 bg-gradient-to-b from-gray-800 to-black w-full h-screen' >

            <div name="" className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-2 border-gray-400 p-2 inline'>Technologies</p>
                    <p className='py-10 text-lg'>Here's a List of Technologies I Have Worked With: </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 
                        text-center py-8 px-12 sm:px-8'>
                    {techs.map(({id,src,title,style}) => (
                        <div key={id} className={style + ' shadow-md hover:scale-105 duration-500 py-2 rounded-lg '}>
                            <img src={src} alt="" className='w-20 mx-auto' />
                            <p>{title}</p>
                        </div> 
                    ) )},

                </div>
            </div>


        </div>
    )
}

export default Technologies