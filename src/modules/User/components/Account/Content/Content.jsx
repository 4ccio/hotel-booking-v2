import { TABS } from "../../../constants/profileOptions";

const Content = ({ activeTab }) => {
  const componentToShow = TABS.find((tab) => tab.id === activeTab);

  return (
    <div>{componentToShow ? componentToShow.content() : "Не найдено"}</div>
  );
};

export default Content;
