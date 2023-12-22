import Header from "@/components/header";
import LeftBar from "@/components/left-bar";
import MobileBar from "@/components/mobile-bar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="flex justify-center py-10 px-5 gap-10">
        <LeftBar />
        <div className="max-w-4xl w-full">
          <Outlet />
        </div>
      </div>
      <MobileBar />
    </>
  );
}
