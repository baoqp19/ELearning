
import Siderbar from "@/components/layouts/Siderbar";

import React from "react";
const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)] h-screen">
            <Siderbar />
            <main>{children}</main>
        </div>
    );
};
export default layout;