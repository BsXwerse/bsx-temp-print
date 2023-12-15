import FooterBar from "@/components/footer-bar";
import Header from "@/components/header";
import LeftBar from "@/components/left-bar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row justify-center py-10 px-5 gap-10">
        <LeftBar />
        <div className="max-w-4xl w-full">
          <Outlet />
        </div>
        <FooterBar />
      </div>
    </>
  );
}
