import React,{useState} from 'react'
import { BsChevronCompactLeft,BsChevronCompactRight } from 'react-icons/bs'

const Featured = () => {
    const sliders=[
        {
            url:'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
        },
        
        {
            url:'https://img.freepik.com/free-photo/grilled-cheeseburger-sesame-bun-with-fresh-toppings-generative-ai_188544-12325.jpg'
        }
    ]
    const [currentIndex,setCurrentIndex]=useState(0)
    const prevSlider=()=>{
        const isFirstSlide=currentIndex === 0
        const newIndex=isFirstSlide ? sliders.length -1: currentIndex -1
        setCurrentIndex(newIndex)
    }
    const nextSlider=()=>{
        const isLastSlide=currentIndex === sliders.length -1
        const newIndex=isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{backgroundImage:`url(${sliders[currentIndex].url})`}}
        ></div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2  bg-orange-700  text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlider}/>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  bg-orange-700  text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlider}/>
        </div>
    </div>
  )
}

export default Featured