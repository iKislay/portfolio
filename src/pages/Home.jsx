import React from 'react'
import { Experience, Feedbacks, Hero, Tech, Works } from "../components";

const Home = () => {
    return (
        <>
            <div>

                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                    <Hero />
                </div>
                <Experience />
                <Tech />
                <Works />
                <Feedbacks />

            </div>

        </>
    )
}

export default Home