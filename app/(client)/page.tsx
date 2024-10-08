import Photo from '@/components/Photo';
import Social from '@/components/Social';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from '@radix-ui/react-icons';

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* texto */}
          <div className='text-center xl:text-left '>
            <span className='text-xl'>
              Front-End Dev & UX Designer
            </span>
            <h1 className='h1 mb-6'>
              Hello I&apos;m
              <br />
              <span className='text-accent'>Anthony Davi</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I seek to create impactful digital experiences, combining intuitive design with technical skills.
            </p>

            {/* botões e redes*/}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button variant='outline' size='lg' className='uppercase flex items-center gap-2'>
                <span>Download CV</span>
                <DownloadIcon className='text-xl' />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles="flex gap-6"
                  iconsStyles="w-9 h-9 border-accent border rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* imagem */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
