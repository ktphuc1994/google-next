import HomeHeader from '@/components/HomeHeader';
import HomeSearch from '@/components/HomeSearch';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-col h-screen'>
      <HomeHeader />
      <div className='grow flex flex-col justify-center items-center'>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
          alt='Google Logo'
          width={300}
          height={100}
          priority
          style={{ width: 'auto', height: 'auto' }}
        />
        <HomeSearch />
      </div>
    </main>
  );
}
