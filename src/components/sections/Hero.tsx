import { ButtonLink } from '@/components/ui/ButtonLink';
import Selfie from '../../data/images/image-profile-desktop.webp';

export function Hero() {
  return (
    <section className='relative z-10 py-12 sm:py-14'>
      <div className='mx-auto flex max-w-[1180px] flex-col-reverse items-start gap-6 px-6 sm:flex-row sm:items-center sm:gap-10 sm:px-10 lg:gap-16'>
        <div className='w-full sm:max-w-[460px] flex-1 text-center sm:text-left sm:justify-end'>
          <h1 className='mb-5 font-display text-[1.6rem] font-extrabold leading-[1.15] sm:text-[2.2rem] lg:text-[2.75rem]'>
            Nice to meet you! I&rsquo;m{' '}
            <span className='border-b-[3px] border-accent'>AMW.</span>
          </h1>
          <p className='mb-5 w-full sm:max-w-[34ch] text-muted sm:mb-7'>
            Based in the Poland, I&rsquo;m a front-end developer passionate
            about building accessible web apps that users love.
          </p>
          <ButtonLink href='#contact'>Contact me</ButtonLink>
        </div>

        <div className='flex w-full flex-1 justify-center sm:justify-end'>
          <div className='relative w-full max-w-[460px] overflow-hidden sm:-mt-36 sm:-mr-12  rounded-sm sm:max-w-[420px]'>
            {/* <svg
              viewBox='0 0 200 220'
              role='img'
              aria-label='Portrait of Adam Keyes'
              className='block h-full w-full grayscale'
            >
              <rect width='200' height='220' fill='#2A313D' />
              <circle cx='100' cy='86' r='40' fill='#3D4552' />
              <path d='M40 220c0-46 27-78 60-78s60 32 60 78' fill='#3D4552' />
            </svg> */}
            <img
              src={Selfie}
              alt='Hero'
              className='w-auto h-full sm:h-max-600 object-contain object-top opacity-50   '
            />
            <div className='absolute -bottom-4 -right-4 h-14 w-14 rounded-full border-2 border-white/10 sm:-bottom-7 sm:-right-7 sm:h-24 sm:w-24' />
          </div>
        </div>
      </div>
    </section>
  );
}
