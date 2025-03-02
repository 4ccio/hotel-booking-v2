import { Navbar } from "@/modules/NavigationBar";
import { Footer } from "@/modules/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
