

export default function ButtonPrimary({ content }) {
  return (
    <button className="
      group flex items-center justify-center gap-3
      w-46.25 h-12 rounded-full border border-white 
      text-white text-[18px] font-medium bg-black/30
      transition-all duration-300 ease-in-out
      hover:bg-white hover:text-black
    ">
      <span>{content}</span>
      
      <ArrowUpRightIcon 
        className="
          w-5 h-5 text-white transition-all duration-300 
          group-hover:text-black
        " 
      />
    </button>
  );
}

function ArrowUpRightIcon({ className }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2.5} 
      stroke="currentColor" 
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  );
}