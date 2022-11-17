import Equipeimg from "../images/Equipeimg.png"
import { FaUserFriends } from "react-icons/fa";


export const AboutCard = () => {
  return (
  <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink items-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <div className="">
      <div className="text-gray-900 text-xl font-medium mb-2 bg-blue-300 p-6 rounded-t-md flex items-center">
        <div className="bg-white rounded-full p-4 mr-6">
          <FaUserFriends className="h-10 w-10 text-blue-300"/>
        </div>
        Nossa Equipe
        </div>
      <p className="text-gray-700 text-base mb-4 px-6">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
    </div>
  </div>
</div>
  )
}
export default AboutCard