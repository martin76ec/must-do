import { HomeIcon, MagnifyingGlassIcon, ColorWheelIcon } from "@radix-ui/react-icons";

function Navbar() {
  return (
    <div className='absolute w-full flex justify-center bottom-4'>
      <div className='bg-[#E90064] h-16 rounded-xl w-[90%] lg:w-full lg:rounded-none grid grid-cols-3 overflow-hidden'>
        <div className='flex items-center justify-center hover:bg-[#FF5F9E] text-5xl text-white'>
          <HomeIcon />
        </div>
        <div className='flex items-center justify-center hover:bg-[#FF5F9E] text-5xl text-white'>
          <MagnifyingGlassIcon />
        </div>
        <div className='flex items-center justify-center hover:bg-[#FF5F9E] text-5xl text-white'>
          <ColorWheelIcon />
        </div>
      </div>
    </div>
  );
}

export { Navbar };
