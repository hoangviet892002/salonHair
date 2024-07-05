import React, { ReactElement } from "react";
import { Footer, Sidebar } from "@/layouts"


interface IndexProps {
    Page: () => ReactElement;
  }
  const LayoutShop: React.FC<IndexProps> = ({ Page }) => {
    return (
      <div className="dark:bg-slate-900 flex flex-row">
        <Sidebar/>
        
        <div className="w-full h-full bg-site bg-no-repeat bg-cover overflow-hidden">
            <div className="h-screen">
          <Page />
          </div>
          
        </div>
        
      </div>
    );
  };
  
export default LayoutShop;