import { socialLinks } from '@/data/social';
import { SocialLinks } from '@/components/ui/SocialLinks';

export function Footer() {
  return (
    <footer className='relative z-10 py-10 sm:py-12'>
      <div className='mx-auto flex max-w-[1180px] flex-col items-center gap-5 px-6 text-center sm:flex-row sm:justify-between sm:px-10 sm:text-left'>
        <a
          href='#top'
          className='font-display text-[1.15rem] font-extrabold tracking-tight'
        >
          AMW
        </a>
        <SocialLinks links={socialLinks} iconSize={18} />
      </div>
    </footer>
  );
}
