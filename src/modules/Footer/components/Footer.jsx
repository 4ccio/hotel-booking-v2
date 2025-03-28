import { Link } from "react-router";
import { items } from "../constants/footerItems";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-secondary py-4">
      <div className="max-auto container w-full">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="max-w-52">
            <Link to="/" className="mb-2 flex items-center">
              <img
                src={logo}
                alt="logo"
                className="mr-1 h-8 w-auto sm:h-10"
              ></img>
              <span className="text-xl font-bold lg:text-2xl">myHotel</span>
            </Link>
            <p className="max-w-fit text-balance font-semibold">
              Ваш верный спутник в путешествиях!
            </p>
          </div>
          {items.map((item, index) => {
            return (
              <div key={index} className="">
                <h4 className="mb-1.5 font-semibold text-secondary-foreground">
                  {item.header}
                </h4>
                {item.children.map((child, index) => {
                  return (
                    <div
                      key={index}
                      className="w-fit text-sm text-muted-foreground"
                    >
                      <a href={child.link}>
                        <span className="mb-0.5 block hover:text-secondary-foreground">
                          {child.name}
                        </span>
                      </a>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
