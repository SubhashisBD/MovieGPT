import { Play, Info } from 'lucide-react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-12 text-white absolute top-80">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 w-1/3">{overview}</p>
      <div className="flex space-x-5">
        <button className="flex bg-white text-black px-12 text-center py-4 rounded-lg hover:bg-gray-300 font-bold"><Play />Play</button>
        <button className="flex bg-gray-500 text-white px-12 text-center py-4 rounded-lg hover:bg-gray-300 font-bold"><Info />MoreInfo</button>
      </div>
    </div>
  )
}

export default VideoTitle;
