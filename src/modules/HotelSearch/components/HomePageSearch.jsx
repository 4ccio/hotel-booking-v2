import FormHotelSearch from "./FormHotelSearch";
import DarkOverlay from "@/components/DarkOverlay";

const HomePageSearch = () => {
  return (
    <section className="relative bg-hotel-search bg-cover bg-center bg-no-repeat py-8 xl:h-full xl:py-32">
      <DarkOverlay className={"backdrop-blur-sm"} />
      <div className="container relative mx-auto flex h-full w-full items-center justify-center">
        <FormHotelSearch></FormHotelSearch>
      </div>
    </section>
  );
};

export default HomePageSearch;
