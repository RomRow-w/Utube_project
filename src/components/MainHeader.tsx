import { Menu, Upload, User, Bell, Mic, Search, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/imgs/mainLogo.svg';
import Button from './UI/Button';

type headerProps = {
  sideVisible: boolean,
  setSideVisible: React.Dispatch<React.SetStateAction<boolean>>,
}


export default function MainHeader({sideVisible,setSideVisible}: headerProps) {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState<boolean>(false);

  return (
    <div className='flex justify-between gap-10 lg:gap-20 pt-2 mb-6 mx-4'>
      <div 
        className={
          `gap-4 items-center flex-shrink-0 
          ${showFullWidthSearch ? "hidden" : "flex" }`
        }
      >
        <Button variant='ghost' size='icon' onClick={() => setSideVisible(!sideVisible)}>
          <Menu />
        </Button>
        <div className=' items-center select-none hidden sm:flex'>
          <img src={logo} alt='' className='h-8 w-8'/>
          <div className='font-medium pl-1 text-lg'>Юtube</div>
        </div>
      </div>  
      <form className={
          `gap-4 flex-grow justify-center
          ${showFullWidthSearch ? "flex" : "hidden md:flex" }`
        }
      >
        {showFullWidthSearch && (
          <Button 
            onClick={() => setShowFullWidthSearch(false)}
            type='button' 
            size='icon' 
            variant='ghost' 
            className='flex-shrink-0'
          >
            <ArrowLeft />
          </Button>
        )}
        <div className='flex flex-grow max-w-[600px]'>
          <input 
            type='search' 
            placeholder='Введите запрос'
            className='rounded-l-full border border-secondary-border 
              shadow-inner shadow-secondary py-1 px-4 text-lg w-full
              focus:border-blue-500 outline-none'
          />
          <Button className='py-2 px-4 rounded-r-full border-secondary-border
           border border-l-0 flex-shrink-0'>
            <Search />
          </Button>
        </div>
        <Button type='button' size='icon' className='flex-shrink-0'>
          <Mic />
        </Button>
      </form>
      <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex" }`}>
        <Button onClick={() => setShowFullWidthSearch(true)} size='icon' variant='ghost' className='md:hidden'>
          <Search />
        </Button>
        <Button size='icon' variant='ghost' className='md:hidden'>
          <Mic />
        </Button>
        <Button size='icon' variant='ghost'>
          <Upload />
        </Button>
        <Button size='icon' variant='ghost'>
          <Bell />
        </Button>
        <Button size='icon' variant='ghost'>
          <User />
        </Button>
      </div>
    </div>
  )
}
