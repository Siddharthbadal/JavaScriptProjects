import React from 'react'
import { monospace } from '@/app/fonts'

//  creating eading component for all pages
const Heading = ({children}) => {
  return (
    <>
        <h1 className={`text-center text-6xl my-9 text-blue-900 pb-1 font-bold ${monospace.className}`}>
            {children}
        </h1>
    </>
  )
}

export default Heading