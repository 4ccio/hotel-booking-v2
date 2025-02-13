import Overlay from "@/components/DarkBlurOverlay";
import FormHotelSearch from "./FormHotelSearch";

const HomePageSearch = () => {
  return (
    <section className="relative mb-5 h-[540px] bg-hotel-search bg-cover bg-center bg-no-repeat lg:h-[480px]">
      <Overlay></Overlay>
      <div className="container relative mx-auto flex h-full w-full items-center justify-center">
        <FormHotelSearch></FormHotelSearch>
      </div>
    </section>
  );
};

export default HomePageSearch;
