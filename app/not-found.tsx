import React from 'react'
import Link from 'next/link'
import { LayoutPanelTop } from "lucide-react";

function NotFound() {
  return (
    <div className='bg-foreground grid gap-8 justify-center content-center justify-items-center items-center h-[100vh]'>
      <h1 className='text-[10rem] font-bold text-white leading-none text-center'>404</h1>
      <p className='text-white font-bold text-xl text-center'>Sorry, we can’t find the page you’re looking for.</p>
      <Link href={'/'} className='w-[14rem] h-12 flex gap-3 justify-center content-center items-center bg-white text-foreground font-bold rounded-md text-center'><LayoutPanelTop className="text-xl" />Back To Dashboard</Link>
    </div>
  )
}

export default NotFound