function Card({ className, children }) {
  return (
    <div className='w-full h-72 relative'>
      <div className={`h-4/5 w-4/5 bg-yellow-500 rounded-[30px] top-[10%] left-[10%] absolute flex p-5 gap-5 ${className}`}>
        {children}
      </div>
    </div>
  );
}

export { Card };
