import React from 'react'
import TopContent from './TopContent'
import PacManSkills from './PacManSkills'
import AboutMe from './AboutMe'

const Background = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
        <video autoPlay muted loop className='rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover'>
            <source src='/blackhole.webm' type='video/webm'/>
        </video>
        <TopContent/>
        <PacManSkills/>
    </div>
  )
}

export default Background