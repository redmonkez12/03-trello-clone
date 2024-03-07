import { PropsWithChildren } from "react";
import { Navbar } from "@/app/(platform)/(dashboard)/_components/navbar";

export default function DashboardLayout({ children }: PropsWithChildren) {
    return (
        <div className="h-full">
            <Navbar/>
            {children}
        </div>
    );
}