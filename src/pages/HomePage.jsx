import { HotelSearch } from "@/modules/HotelSearch";
import { PopularDestinations } from "@/modules/PopularDestinations";

const HomePage = () => {
  return (
    <>
      <HotelSearch></HotelSearch>
      <PopularDestinations></PopularDestinations>
    </>
  );
};

export default HomePage;
