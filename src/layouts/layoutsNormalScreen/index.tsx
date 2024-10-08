import React, { ReactElement } from "react";
import { Footer, NavBars } from "@/layouts"

// This component serves as a wrapper for any page component passed as a prop.
interface IndexProps {
  Page: () => ReactElement;
}

const Layout: React.FC<IndexProps> = ({ Page }) => {
  return (
    <div className="bg-slate-900">
      <NavBars />
      <div className="w-full bg-[#E3D9C7] h-full bg-site bg-no-repeat bg-cover overflow-hidden">
        <Page />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
