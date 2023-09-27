import React from 'react'

const About = () => {
  return (
    <div name="about" className='pt-80 lg:pt-20 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 flex '>
          <p className='text-4xl font-bold inline border-b-4 border-gray-600'> About </p>
        </div>
        <p className='text-xl mt-11'>
          I am a second-year college student studying computer science. I am passionate about programming and always looking for new challenges and opportunities to learn and grow.
          In addition to my academic studies, I am involved in a number of extracurricular activities, including writing two articles for the CERN beam competition,
          participating in the Nojavan Kharazmi competition, participating in the Javan Kharazmi competition in AI, where I earned two top rankings.
          My experiences at CERN and in the Javan Kharazmi competition have given me the opportunity to work on challenging projects with talented people. I have learned a great deal from these experiences and looking forward for more.
        </p>
        <br />
        <p className='text-xl'>
          I am currently learning web development. I am excited about the potential of web development to create new and innovative ways for people to interact with the world
          around them. I am also interested in using web development to solve real-world problems. In the future, I hope to use my skills in web development to create a positive
          impact on the world. I am also interested in pursuing a career in AI or Web Development. I am confident that my skills and experience will make me a valuable asset to any team.
        </p>
      </div>
    </div>
  )
}

export default About