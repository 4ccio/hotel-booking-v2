import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { Button } from "@/ui/button";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { BREAKPOINTS as bp } from "@/config/breakpoints";
import { TABS } from "../../../constants/profileOptions";

const Options = ({ activeTab, setActiveTab }) => {
  const isMobile = useMediaQuery(bp.sm);

  return (
    <>
      {isMobile ? (
        <Select value={activeTab} onValueChange={setActiveTab}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {TABS.map((item) => {
                return (
                  <SelectItem key={item.id} value={item.id}>
                    {item.label}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      ) : (
        <div className="flex w-full flex-col gap-2">
          {TABS.map((tab) => (
            <Button
              key={tab.id}
              variant={"link"}
              onClick={() => setActiveTab(tab.id)}
              className={`justify-start ${activeTab === tab.id ? "bg-secondary text-secondary-foreground" : ""}`}
            >
              {tab.icon ? <tab.icon size={"16"} /> : null}
              {tab.label}
            </Button>
          ))}
        </div>
      )}
    </>
  );
};

export default Options;
