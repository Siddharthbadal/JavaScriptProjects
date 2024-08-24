import Heading from '@/components/Heading'
import React from 'react'

export const metadata = {
  title: "About ",  
  }

const About = () => {
  return (
    <>
        <Heading>About</Heading>
        <p className='text-center'>Project is built with NextJS and Tailwind for learning purpose. </p>
    </>
  )
}

export default About