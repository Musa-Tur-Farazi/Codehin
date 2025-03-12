import { LoaderCircle, LogIn } from "lucide-react";

function LoginButton() {
  return (
      <button
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-400 to-purple-800 hover:from-blue-400 hover:to-blue-700 text-white rounded-lg
             transition-all duration-200 font-medium font-semibold font-sans shadow-lg shadow-blue-500/20"
      >
        <LogIn className="w-4 h-4 transition-transform" />
        <LoaderCircle />
      </button>
  );
}
export default LoginButton;