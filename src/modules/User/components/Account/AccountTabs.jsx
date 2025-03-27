import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";
import { TABS } from "../../constants/profileOptions";

export default function AccountTabs({ activeTab, setActiveTab }) {
  return (
    <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      orientation="vertical"
      className="flex w-full flex-row gap-10"
    >
      <TabsList className="h-full flex-col gap-2 rounded-md bg-transparent px-1 py-0 text-sm text-foreground">
        {TABS.map(({ id, label, icon: Icon }) => {
          return (
            <TabsTrigger
              key={id}
              value={id}
              className="relative w-full justify-start px-4 py-2 after:absolute after:inset-y-0 after:start-0 after:-ms-1 after:w-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
            >
              <div className="flex items-center gap-2">
                <Icon className="opacity-80" size={16} aria-hidden="true" />
                <span>{label}</span>
              </div>
            </TabsTrigger>
          );
        })}
      </TabsList>
      <div className="grow">
        {TABS.map(({ id, content: Content }) => {
          return (
            <TabsContent key={id} value={id}>
              <Content />
            </TabsContent>
          );
        })}
      </div>
    </Tabs>
  );
}
