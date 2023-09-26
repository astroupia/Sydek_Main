import React from 'react'

const contact = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-16 sm:px-16 px-6`}>
            <h1 className='flex-1 font-manrope font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[60px] z-[1] xs:text-[40px]'>
            Contact<br className='sm:block hidden' />{""}
            
            <p className={`${styles.paragraph} font-thin mt-2`}>We'd love to hear from you. Contact us today.</p>
          </h1>
          </div>
          </section>
  )
}

export default contact