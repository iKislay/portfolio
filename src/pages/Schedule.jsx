import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { JsonCalendar } from 'json-calendar'

import { faChevronLeft, faChevronRight, faClock, faVideoCamera, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Work = () => {
  const calendar = new JsonCalendar();
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [dates, setDates] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]);

  const year = calendar.today.getFullYear()
  const months = calendar.monthNames;
  const totalMonths = months.length;

  const handleNextMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex + 1) % totalMonths);
  };

  const handlePrevMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex - 1 + totalMonths) % totalMonths);
  };

  useEffect(() => {
    let newDates = []; // Initialize a new array for each month

    // Function to check if a year is a leap year
    const isLeapYear = (year) => {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };

    // Handle February (index 1) separately
    if (currentMonthIndex === 1) {
      if (isLeapYear(year)) {
        newDates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
      } else {
        newDates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
      }
    } else {
      // For other months, add or remove days as needed
      newDates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];

      if (currentMonthIndex % 2 === 0) {
        newDates = [...newDates, 29, 30, 31];
      } else {
        newDates = [...newDates, 29, 30];
      }
    }

    // Set the updated dates array to the state
    setDates(newDates);
  }, [currentMonthIndex, year]);


  const currentMonth = months[currentMonthIndex];

  return (
    <>
      <div className="py-[100px]">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Schedule</p>
          <h2 className={`${styles.sectionHeadText} py-2`}>Schedule a call with me</h2>
        </motion.div>

        <div className="flex flex-row gap-8">



          <div className="border rounded border-gray-400 p-8 flex-1">
            <h1 className="font-bold pb-4">Project Consultation Call (30 mins)</h1>
            <div className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faClock} />
              <p className="font-medium">30 mins</p>
            </div>

            <div className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faVideoCamera} />
              <p className="font-medium">Web conferencing details provided upon confirmation</p>
            </div>

            <div className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faCreditCard} />
              <p className="font-medium">$0 USD</p>
            </div>

            <div className="flex gap-3 items-center">
              <p className="font-light">
                <br />
                <span className="font-semibold">Who is this for?</span><br />
                Businesses, startups, and individuals looking to kickstart or enhance their projects. If you have a project idea or are facing technical challenges, this call is tailored for you.<br />

                <span className="font-semibold">What you get?</span><br />
                A comprehensive discussion about your project, insights into the technical aspects, guidance on timelines and budget considerations, and a roadmap for moving forward.<br />

                <span className="font-semibold">Why a free consultation?</span><br />
                I believe in understanding your needs and providing valuable insights before committing to any project. This is an opportunity for us to connect, discuss your ideas, and explore how I can bring value to your project.<br />

              </p>
            </div>

          </div>

          <div className="border rounded border-gray-400 h-auto w-fit p-9 flex-1">
            <h1 className="pb-3">Select a month</h1>
            <div className="flex justify-between items-center">
              <FontAwesomeIcon icon={faChevronLeft} onClick={handlePrevMonth} className="cursor-pointer rounded-full p-1 w-4 hover:bg-[#d3d3d34e]" />
              {currentMonth}
              <FontAwesomeIcon icon={faChevronRight} onClick={handleNextMonth} className="cursor-pointer rounded-full p-1 w-4 hover:bg-[#d3d3d34e]" />
            </div>
            <h1 className="py-3">Select a date</h1>
            <div className="flex flex-row gap-4">
              <div className="border rounded border-[#d3d3d3] h-auto w-fit p-4 inline-grid grid-cols-7 gap-4">
                {/* Render your dates here */}
                {dates.map((date) => (
                  <button className="p-0 w-6 text-stone-400 rounded-full hover:bg-[#d3d3d34e] hover:text-black focus:bg-[#d3d3d3] focus:text-black " key={date}>{date}</button>
                ))}
              </div>
              <div className="flex flex-col">

                <h1 className="font-bold pb-4">Select Timing</h1>
                <h1 className="px-8 py-2 bg-slate-400 h-fit rounded">10:15- 10:45</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(Work, "work");
