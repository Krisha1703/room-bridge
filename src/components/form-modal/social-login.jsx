import { GitHub, Google } from "@mui/icons-material";

const SocialLogin = ({text}) => {
  return (
    <div className="mt-4">
        <p className="text-center text-sm mb-2 text-gray-500">{text}</p>
        
        <div className="flex justify-center space-x-4 w-full">
            <button className="p-2 w-full rounded shadow hover:bg-gray-200">
                <Google className="mr-2" /> Google
            </button>

            <button className="p-2 w-full rounded shadow hover:bg-gray-200">
                <GitHub className="mr-2" /> GitHub
            </button>
        </div>

    </div>
  )
}

export default SocialLogin