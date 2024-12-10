import { Search } from 'lucide-react';
import { Moon } from 'lucide-react';
import { Bell } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const Navbar = () => {
  return (
    <section>
      <nav>
        <div className='flex flex-row gap-6 items-center'>
        <div className="flex flex-row p-2 w-[500px] bg-customGray rounded-md px-4">
          <input type="text" alt="searchbar" placeholder="Search for 'cup cakes'" className="w-[500px] bg-transparent outline-none border-none" />
          <Search className='flex-end' color="gray"/>
        </div>

        <div className='bg-customGray p-2 rounded-md hover:cursor-pointer hover:bg-white transition transition-duration-300'>
          <Moon color="gray"/>
        </div>

        <div className='bg-customGray p-2 rounded-md hover:cursor-pointer hover:bg-white transition transition-duration-300'>
          <Bell color="gray"/>
        </div>

        <div className=' flex flex-row bg-customGray py-2 px-4 rounded-md hover:cursor-pointer hover:bg-white transition transition-duration-300'>
          <ChevronRight color="tomato"/>
          <p className='font-semibold text-black/70'>Log Out</p>
        </div>
      </div>
      </nav>
    </section>
  )
}

export default Navbar