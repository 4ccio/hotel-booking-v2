import { useNavigate } from "react-router";
import { usePageAccess } from "@/hooks/usePageAccess";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { fetchUser } from "../../store/thunks";
import { Separator } from "@/ui/separator";
import { TABS } from "../../constants/profileOptions";
import LoadingScreen from "@/components/LoadingScreen";
import AccountTabs from "./AccountTabs";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { BREAKPOINTS as bp } from "@/config/breakpoints";

const AccountWrapper = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);

  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const { hasAccess, loading } = usePageAccess();

  const isMobile = useMediaQuery(bp.sm);

  const loadUserData = useCallback(async () => {
    if (!userData) {
      await dispatch(fetchUser());
    }
  }, [dispatch, userData]);

  useEffect(() => {
    if (!loading && !hasAccess) {
      navigate("/");
    } else {
      loadUserData();
    }
  }, [loading, hasAccess, navigate, loadUserData]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (!userData) {
    return (
      <div className="font-bold">
        Не удалось загрузить данные, повторите попытку позже
      </div>
    );
  }

  return (
    <section className="container mx-auto my-4">
      <p className="text-2xl font-semibold">{`${userData?.name} ${userData?.surname}`}</p>
      <Separator className="my-4"></Separator>
      {isMobile ? (
        <div className="flex flex-col gap-4">
          <div className="grow">
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
          </div>
          <div className="grow">
            {TABS.map(({ id, content: Content }) =>
              id === activeTab ? <Content key={id} /> : null,
            ) || "Не найдено"}
          </div>
        </div>
      ) : (
        <AccountTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        ></AccountTabs>
      )}
    </section>
  );
};

export default AccountWrapper;
