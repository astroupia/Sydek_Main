import React from 'react';
import styles from '../../../../style';
import {
  net,
  andriod,
  angular,
  bootstrap,
  csharp,
  css,
  docker,
  figma,
  firebase,
  flutter,
  git,
  html,
  java,
  javascript,
  laravel,
  mongodb,
  nodejs,
  php,
  python,
  reactnative,
  ruby,
  sass,
  svelte,
  swift,
  typescript,
  vue,
  wordpress,
} from '../../../../assets';

const techImages = [
  mongodb,
  html,
  angular,
  reactnative,
  sass,
  javascript,
  nodejs,
  git,
  css,
  bootstrap,
  wordpress,
  reactnative,
  csharp,
  typescript,
  php,
  docker,
  firebase,
  figma,
  python,
  java,
  swift,
  vue,
  andriod,
  net,
  flutter,
  ruby,
  svelte,
  laravel,
];

const Techhnologies = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-16 sm:px-16 px-6`}>
        <h1 className='flex-1 font-manrope font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[60px] z-[1] xs:text-[40px]'>
          Technologies <br className='sm:block hidden' />
          <p className={`${styles.paragraph} font-thin mt-2`}>
            Powering innovation with the world's most popular programming languages
          </p>
        </h1>
        <div className={`flex ${styles.flexStart} flex-row flex-wrap justify-between mt-2 w-[100%]`}>
          {techImages.map((image, index) => (
            <img
              key={index}
              src={image}
              className={`m-[5px] xs:w-[65px] ss:w-[70px] sm:w-[70px] md:w-[80px] lg:w-[100px]`}
              alt=''
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Techhnologies;
