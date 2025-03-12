"use client"
import { useEffect, useRef, useState } from "react";
import OutputPanel from "./OutputPanel";
import EditorPanel from "./EditorPanel";
import assert from "assert";

export default function ResizablePanels() {
  const [panelWidth, setPanelWidth] = useState(50); // Percentage width for the Editor Panel
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, [])
  const outputWidth = 100 - panelWidth;
  console.log("PanelWidth :", panelWidth);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();

    const handleMouseMove = (e: MouseEvent) => {
      if(!isMounted.current) return;
      if(window.innerWidth <= 0 || !e.clientX) return
      const newWidth = (e.clientX / window.innerWidth) * 100;
      const newOutwidth = 100 - newWidth;
      if (isNaN(newWidth) || newWidth < 0 || newWidth > 100 || newOutwidth<0 || newOutwidth > 100) return;
      const finalNewWidth = Math.max(40, Math.min(newWidth, 65));
      if (finalNewWidth !== panelWidth) {
        setPanelWidth(finalNewWidth);
      }
     // setPanelWidth(finalNewWidth);
    //  isMounted.current = true;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="flex">
      <div
        //className="bg-gray-800"
        style={{ width: `${panelWidth}%` }} // Set dynamic width
      >
        {/* Editor Panel */}

        <EditorPanel />
      </div>


      {/* Resizable Divider */}
      <div
        className="w-2 gap-2 bg-gray-500 cursor-col-resize"
        onMouseDown={handleMouseDown}
      ></div>

      {/* Output Panel */}
      <div

        style={{ width: `${outputWidth}%` }} // Set dynamic width
      >
        <OutputPanel />
      </div>
    </div>
  );
}
