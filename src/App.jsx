import { Navbar } from "@/modules/NavigationBar/index";
import { HotelSearch } from "@/modules/HotelSearch/index";
import { PopularDestinations } from "./modules/PopularDestinations/index";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HotelSearch></HotelSearch>
      <PopularDestinations></PopularDestinations>
    </>
  );
}

export default App;
