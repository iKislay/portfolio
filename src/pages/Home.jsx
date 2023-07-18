import React from 'react'
import { Experience, Feedbacks, Hero, Tech, Works } from "../components";

const Home = () => {
    return (
        <>
            <div>

                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center bg-fixed'>
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