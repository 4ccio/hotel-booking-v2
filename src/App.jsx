import { Navbar } from "@/modules/NavigationBar";
import { HotelSearch } from "@/modules/HotelSearch";
import { PopularDestinations } from "./modules/PopularDestinations";
import { Footer } from "./modules/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HotelSearch></HotelSearch>
      <PopularDestinations></PopularDestinations>
      <Footer></Footer>
    </>
  );
}

export default App;
