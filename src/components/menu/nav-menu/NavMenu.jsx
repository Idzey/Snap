export default function NavMenu({items}) {
    return (
        <div className="flex flex-col px-4 py-2 bg-almost-white drop-shadow rounded-lg absolute top-10 right-0 w-36 gap-2">
            {items.map(({icon, text}, index) => (
                <div key={index} className="flex w-full gap-4 cursor-pointer">
                    {icon} 
                    <span className="text-medium-gray hover:text-almost-black border-b-2 border-transparent xl:hover:border-almost-black">{text}</span>
                </div>
            ))}
        </div>
    )
}