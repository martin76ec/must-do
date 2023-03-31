import { GrSearch } from 'react-icons/gr';

function SearchBar({ className }) {
  return (
    <div className={`h-16 rounded-full border border-gray-300 flex p-5 gap-5 items-center ${className}`}>
      <GrSearch className='text-2xl' />
      <input className='grow text-gray-700 border-0 focus:border-0 h-14 focus:outline-none' placeholder='Search here...' />
    </div>
  );
}

export { SearchBar };
