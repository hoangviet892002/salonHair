import React, { ReactElement } from "react";
import { Footer, SidebarAdmin } from "@/layouts"


interface IndexProps {
    Page: () => ReactElement;
  }
  const LayoutAdmin: React.FC<IndexProps> = ({ Page }) => {
    return (
      <div className="dark:bg-slate-900 flex flex-row">
        <SidebarAdmin/>
        
        <div className="w-full h-full bg-site bg-no-repeat bg-cover overflow-hidden">
            <div className="h-screen">
          <Page />
          </div>
          
        </div>
        
      </div>
    );
  };
  
export default LayoutAdmin;