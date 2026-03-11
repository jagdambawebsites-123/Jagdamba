

export default function ButtonPrimary({ content }) {
  return (
    <button className="
      group flex items-center justify-center gap-3
      w-46.25 h-12 rounded-full border border-white 
      text-white text-[18px] font-medium font-sans bg-black/30
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
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}