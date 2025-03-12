"use client"
import LoginButton from "@/components/LoginButton";
import { ClerkLoading, SignInButton, SignOutButton, useAuth, UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ChevronDown, LogIn, LogOut, MoveRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HeaderProfileBtn from "../editor/_components/HeaderProfileBtn";

function HomePage() {
  const writings = [
    "Write Code Seamlessly",
    "Discover New Snippets",
    "Collaborate with Developers Worldwide",
    "Run and Share Your Code Instantly",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const { isSignedIn } = useAuth();

  useEffect(() => {
    // Cycle through writings every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % writings.length);
    }, 7000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [writings.length]);

  
  return (
    <div className="relative min-h-screen bg-cover bg-center text-white dark:bg-gray-900 dark:text-white"
      style={{ backgroundImage: 'url(/homeBg2.jpg)' }}>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-5xl text-lg font-bold font-mono bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text mb-6"
        >
          Welcome to Codehin
        </motion.h1>
        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-4xl py-5 font-bold font-sans bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text mb-6">
          Run Code & Discover Snippets WorldWide !
        </motion.h2> */}
        <div className="overflow-hidden h-20"> {/* Ensures only one line of text is visible */}
          <motion.div
            key={currentIndex} // Triggers reanimation when the index changes
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text"
          >
            {writings[currentIndex]}
          </motion.div>
        </div>


        {/* Get Started Button */}
        <Link href="/editor" className="flex px-8 py-3 bg-transparent border text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition ">
          <span>Get Started</span>
          <MoveRight className="ml-2" />
        </Link>
      </div>

      {/* Sign In Button at the top-right corner */}
      {!isSignedIn ? (
        <div className="absolute top-5 right-5 px-3 py-1">
          <LoginButton />
        </div>
      ) : (
        <div className="flex gap-5 absolute top-5 right-5 px-3 py-1">
          <SignOutButton>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-400 to-purple-800 hover:from-blue-400 hover:to-blue-700 text-white rounded-lg
             transition-all duration-200 font-medium font-semibold font-sans shadow-lg shadow-blue-500/20"
            >
              <LogOut className="w-4 h-4 transition-transform" />
              <span>Sign Out</span>
            </button>
          </SignOutButton>
          <HeaderProfileBtn />

        </div>
      )
      }
    </div>
  );
};

export default HomePage;