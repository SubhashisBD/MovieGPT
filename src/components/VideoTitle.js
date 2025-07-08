import { Play, Info } from 'lucide-react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[15%] md:px-20 px-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 w-1/3 ">{overview}</p>
      <div className="flex space-x-5 my-3 md:my-0">
        <button className="flex bg-white text-black px-4 md:px-12 text-center py-2 md:py-4 rounded-lg hover:bg-gray-300 font-bold"><Play />Play</button>
        <button className="hidden md:flex bg-gray-500 text-white px- md:px-12 text-center py-4 md:py-4 rounded-lg hover:bg-gray-300 font-bold"><Info />MoreInfo</button>
      </div>
    </div>
  )
}

export default VideoTitle;
