"use client"
import { useState } from "react"
import {LinkIcon} from '@heroicons/react/20/solid'

const ShareLinkBtn = () => {
  const [clicked, setClicked] = useState(false)

  const handleShareBtn=()=>{
        navigator.clipboard.writeText(window.location.href)
        setClicked(true);
        setTimeout(()=>setClicked(false), 1500)
  };


  console.log("ShareLinkBtn, rendering", clicked)
  return (
    <>
        <button onClick={handleShareBtn}
        className='border flex gap-1 items-center px-2 py-1 rounded text-slate-900  text-sm'>
            <LinkIcon className="h-4 w-4"/>
            {clicked ? 'Link Copied!' : 'Share Link'}
        </button>
    </>
  )
}

export default ShareLinkBtn