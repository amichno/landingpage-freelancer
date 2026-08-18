import { socialLinks } from '@/data/social';
import { SocialLinks } from '@/components/ui/SocialLinks';

export function Header() {
  return (
    <header className='relative z-40 pt-10'>
      <div className='mx-auto flex max-w-[1180px] items-center justify-between px-6 sm:px-10'>
        <a
          href='#top'
          className='font-display text-[1.15rem] font-extrabold tracking-tight'
        >
          AMW
        </a>
        <SocialLinks links={socialLinks} />
      </div>
    </header>
  );
}
