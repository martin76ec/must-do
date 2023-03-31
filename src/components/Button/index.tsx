function Button({ children }) {
  return (
    <a className='flex items-center justify-center w-40 h-10 bg-white rounded-lg select-none font-bold text-amber-800 text-sm drop-shadow-xl'>{children}</a>
  );
}

export { Button };
