import React from 'react'
import AboutCard from './AboutCard'

export const About = () => {
  return (
    <section className="relative bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Sobre
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <AboutCard/>
        <AboutCard/>
        <AboutCard/>
      </div>
    </section>
  )
}
export default About