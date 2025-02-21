import DestinationCard from "./DestinationCard";

const PopularDestinations = () => {
  return (
    <section className="mt-6">
      <div className="container mx-auto w-full">
        <h2 className="mb-4 text-center text-lg font-semibold sm:text-left lg:text-xl">
          Популярные направления
        </h2>
        <div>
          <div className="h-48 w-full max-w-96 rounded-lg shadow-sm transition duration-300 hover:-translate-y-0.5">
            <DestinationCard
              imgUrl={"/src/assets/moscow.jpg"}
              city={"Москва"}
              country={"Россия"}
              price={2000}
            ></DestinationCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
