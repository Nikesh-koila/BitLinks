import React from 'react'
import { Typewriter } from 'nextjs-simple-typewriter'
import { Jersey_15 } from "next/font/google";

const Jersey = Jersey_15({
  subsets: ["latin"],
  weight: "400",
});

const TypeEffect = () => {
    const words =[
"Welcome to BitLinks!", "Simplify links, Amplify reach.","Effortless link management.","Secure and reliable links.", "Join the BitLinks family!"
    ]
  return (
    <div className={`text-5xl   font-bold text-center ${Jersey.className}`}>
      <Typewriter words={words} loop={true}   typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={1000}
           />
    </div>
  )
}

export default TypeEffect
