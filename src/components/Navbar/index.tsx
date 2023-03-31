import { RiApps2Fill } from "react-icons/ri";
import { RiCalendar2Line } from "react-icons/ri";
import { RiBriefcase2Line } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";

function Navbar() {
  return (
    <div className='w-full h-24 text-gray-300 absolute bottom-0 flex items-center justify-center text-2xl  gap-20'>
      <RiApps2Fill className='text-amber-400' />
      <RiCalendar2Line />
      <RiBriefcase2Line />
      <RiUser3Line />
    </div>
  );
}

export { Navbar };
