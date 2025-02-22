import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/carousel";
import DestinationCard from "./DestinationCard";
import { DESTINATIONS } from "../constants/destinations";

const PopularDestinations = () => {
  return (
    <section className="mt-6">
      <div className="container mx-auto w-full">
        <h2 className="mb-4 text-center text-xl font-semibold lg:text-2xl">
          Популярные направления
        </h2>
        <div className="px-10 sm:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {DESTINATIONS.map(({ imgUrl, city, country, price }, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
                >
                  <div className="aspect-video">
                    <DestinationCard
                      imgUrl={imgUrl}
                      city={city}
                      country={country}
                      price={price}
                    ></DestinationCard>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
