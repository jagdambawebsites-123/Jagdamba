export default function ButtonPrimary( {content} ) {
  return (
    <button className="rounded-full border-white border text-white text-[18px] w-[171px] h-[48px] py-4 px-8 flex items-center justify-center">
        <p>{content}</p> 
    </button>
  )
}
