import DarkOverlay from "@/components/DarkOverlay";

const DestinationCard = ({ imgUrl, city, country, price }) => {
  return (
    <div
      className={`relative h-full overflow-hidden rounded-md bg-cover bg-center`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <DarkOverlay />
      <div className="relative flex h-full items-end">
        <div className="flex h-fit w-full justify-between gap-x-1 p-3 text-primary-foreground">
          <div className="flex flex-col items-start">
            <span className="text-lg font-bold">{city}</span>
            <span className="text-sm font-semibold">{country}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-lg font-bold">
              от {price}
              <span>₽</span>
            </span>
            <span className="text-sm font-semibold">за ночь</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
