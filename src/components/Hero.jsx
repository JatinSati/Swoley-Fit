import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto'>
     <div className='flex flex-col gap-4'>
         <p>IT'S TIME TO GET</p>

         <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-5xl lg:text-6xl'>Swole<span className='text-blue-400'>Normous</span></h1>
     </div>
      <p className='text-sm md:text-base font-light'>I hereby acknowledgement that I may become <span className='text-blue-400 font-medium'>unbelievably swolenormous</span> and accept all risks of becoming the local <span className='text-blue-400 font-medium'>mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>

      <button className='px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200'><p>Accept & Begin</p></button>

    </div>
  )
}
