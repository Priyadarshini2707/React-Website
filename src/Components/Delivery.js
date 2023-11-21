import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
      <div className='w-[1520px] mx-auto grid md:grid-cols-2'>
        <img className='w-[550px] mx-auto my-4 'src='https://blog.cdn.cmarix.com/blog/wp-content/uploads/2021/03/Organic-and-Natural-Food-Delivery-Apps.png'/>
        <div className='flex flex-col justify-center'>
            <h1 className='text-[#00df9a] md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Get the App Now</h1>
            <p>
             Are you craving delicious meals from your favorite restaurants, but don't want to leave the comfort of your home?
             Look no further! FoodNation, your go-to food delivery app, is here to satisfy your hunger and simplify your life.
             With FoodNation, you'll never go hungry again. Download our app today and embark on a gastronomic journey that brings the world's finest cuisines right to your doorstep. 
             Satisfaction guaranteed!
             Your hunger, our mission.
            </p>
            
        </div>
      </div>

    </div>
  )
}

export default Delivery