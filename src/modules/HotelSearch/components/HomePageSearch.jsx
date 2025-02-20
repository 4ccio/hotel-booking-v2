import Overlay from "@/components/DarkBlurOverlay";
import FormHotelSearch from "./FormHotelSearch";

const HomePageSearch = () => {
  return (
    <section className="relative mb-5 bg-hotel-search bg-cover bg-center bg-no-repeat pb-8 pt-8 xl:h-full xl:pb-32 xl:pt-32">
      <Overlay></Overlay>
      <div className="container relative mx-auto flex h-full w-full items-center justify-center">
        <FormHotelSearch></FormHotelSearch>
      </div>
    </section>
  );
};

export default HomePageSearch;
