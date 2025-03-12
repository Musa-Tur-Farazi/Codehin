import { useAuth } from "@clerk/nextjs";
import Header from "./_components/Header";
import ResizablePanels from "./_components/ResizablePanels";
import { toast } from "react-hot-toast";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1800px] mx-auto p-4">
        {/* Server component */}
        <Header />

        {/* Client-side component */}
        <ResizablePanels />
      </div>
    </div>
  );
}