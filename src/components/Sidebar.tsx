import { Clapperboard, Home, Library, Repeat } from 'lucide-react'
import SidebarItem from './UI/SidebarItem'

export default function Sidebar() {
  return (
    <aside className='pb-4 flex flex-col ml-1'>
      <SidebarItem Icon={Home} title='Главная'></SidebarItem>
      <SidebarItem Icon={Repeat} title='Shorts'></SidebarItem>
      <SidebarItem Icon={Clapperboard} title='Подписки'></SidebarItem>
      <SidebarItem Icon={Library} title='Вы'></SidebarItem>
    </aside>
  )
}
