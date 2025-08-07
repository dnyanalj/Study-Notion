import React from 'react'
import HighLightText from './HighLightText'
import know_your_progress from '../../../assets/Images/Know_your_progress.svg'
import compare_with_others from '../../../assets/Images/Compare_with_others.svg'
import plan_your_lessons from '../../../assets/Images/Plan_your_lessons.svg'
import CTAButton from './CTAbutton'
const LearningLanguageSection = () => {
  return (
    <div className='mt-[150px]'>
        

        <div className='flex flex-col gap-5'>
          <div className='text-4xl font-semibold text-center'>
            Your Swiss Knife for
            <HighLightText text={" learning any language"}/>
          </div> 
          <div className='text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3'>
          Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
          </div>

          <div className='flex  flex-col lg:flex-row items-center justify-center mt-5'>
              <img
                src={know_your_progress}
                className='object-contain  lg:-mr-32 '
              />
              <img
                src={compare_with_others}
                className='object-contain lg:-mb-10 lg:-mt-0 -mt-12'
              />
              <img
                src={plan_your_lessons}
                className='object-contain  lg:-ml-36 lg:-mt-5 -mt-16'
              />
          </div>

          <div className='w-fit mx-auto mb-16'>
            <CTAButton active={true} linkto={'/signup'}>
              <div >
                Learn More
              </div>
            </CTAButton>
          </div>


        </div>

    </div>
  )
}

export default LearningLanguageSection