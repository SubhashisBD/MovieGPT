import { useSelector } from "react-redux";
import { BACK_IMG } from "../utils/constant";
import lang from "./languageConstant";
import { useRef } from "react";
import openai from "../utils/openAI";

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang)
    const searchText = useRef(null);

    const handleGptSearch = async () => {

        const gptQuery = "Act as a movie Recommendation system and suggest some movies for the query :" + searchText.current.value +". Only give me name of 7 movies, comma separated like the example result given as. Example-Dhol, Dhammal, Koi mil gya, Dhoom";

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: gptQuery,
                }
            ],
        });
        console.log(response.choices);
    }
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
                <form className="grid grid-cols-12 w-3/4 bg-black rounded-lg " onSubmit={(e) => e.preventDefault()}>
                    <input
                        ref={searchText}
                        type="text"
                        placeholder={lang[langKey].gptPlaceHolder}
                        className="p-4 m-2 h-14 rounded-lg col-span-9 border-none appearance-none"
                    />
                    <button
                        className=" bg-red-500 text-white px-4 h-14 rounded-lg col-span-3 flex items-center justify-center m-2"
                        onClick={handleGptSearch}>{lang[langKey].search}
                    </button>
                </form>
            </div>
        </div>



    )
}

export default GptSearchBar;