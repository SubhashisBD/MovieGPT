import { BACK_IMG } from "../utils/constant";

const GptSearchBar = () => {
    return (

        <div>
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <img
                    src={BACK_IMG}
                    alt="bg-image"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className=" flex justify-center items-center w-1/2  pt-[10%] mx-auto ">
                <form className="grid grid-cols-12 w-3/4 bg-black rounded-lg ">
                    <input type="text" placeholder="what do you want to watch" className="p-4 m-2 h-14 rounded-lg col-span-9 border-none appearance-none" />
                    <button className=" bg-red-500 text-white px-4 h-14 rounded-lg col-span-3 flex items-center justify-center m-2">Search</button>
                </form>
            </div>
        </div>



    )
}

export default GptSearchBar;