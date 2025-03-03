import { Outlet } from "react-router";
import { Navbar } from "@/modules/NavigationBar";
import { Footer } from "@/modules/Footer";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
