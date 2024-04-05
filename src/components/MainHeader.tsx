import { Menu } from "lucide-react";


export default function MainHeader() {
  return (
    <div className='flex justify-between'>
      <div className='flex gap-4 items-center flex-shrink-0 bg-red-500 h-6'>
        <button>
          <Menu />
        </button>
      </div>
      <div>Search</div>
      <div>Icons</div>
    </div>
  )
}
