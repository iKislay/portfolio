import React from 'react'
import { Experience, Feedbacks, Hero, Tech, Works } from "../components";

const Home = () => {
    return (
        <>
           

                <div>
                    <div className='bg-black bg-cover bg-no-repeat bg-center bg-fixed overflow-hidden'>
                        <Hero />
                    </div>
                    <Experience />
                    <div className='hidden lg:flex'>

                        <Tech />
                    </div>
                    <Works />
                    <Feedbacks />

                </div>

            
        </>
    )
}

export default Home