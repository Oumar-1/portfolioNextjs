import Image from 'next/image';
import AnimateText from './components/AnimateText';
import SuperLink from './components/SuperLink';
import Navbar from './components/Navbar';
export default function Home() {
  return (
    <main className='px-2 py-8 pt-20'>
      <div className=''>
        <div className='group relative mx-auto mb-5 aspect-[1/1.1] w-52 overflow-hidden rounded-[0%_0%_69%_31%_/0%_0%_37%_63%] sm:w-60 md:w-72'>
          <div className='absolute -bottom-2 left-0 h-[90%] w-full rounded-blob bg-gradient-to-b from-gradient-100 via-gradient-200 to-gradient-300 bg-[length:100%_110%] duration-500 group-hover:bg-[0%_200%]' />
          <Image
            src='/images/author_xl.webp'
            alt='auther picture'
            width={157}
            height={157}
            sizes='(min-width: 768px) 768px'
            className='relative z-10 mx-auto w-[80%] translate-y-10 duration-500 group-hover:translate-y-0'
          />
        </div>
        <p className='text-md mx-auto max-w-[630px] select-text bg-dark/80 p-2 text-center leading-6 sm:text-xl md:text-2xl'>
          Hello, I&apos;m
          <AnimateText text='Oumar' className='select-none' />, a passionate
          self-taught frontend developer. I have a keen eye for design and a
          strong desire to create stunning and functional websites. My focus is
          on creating user-friendly interfaces and exceptional user experiences.
        </p>
      </div>
      <Navbar />
    </main>
  );
}
