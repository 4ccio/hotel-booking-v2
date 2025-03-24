import { useNavigate } from "react-router";
import { usePageAccess } from "@/hooks/usePageAccess";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { fetchUser } from "../../store/thunks";
import { Separator } from "@/ui/separator";
import Options from "./Options/Options";
import { TABS } from "../../constants/profileOptions";
import Content from "./Content/Content";

const AccountWrapper = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);

  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const { hasAccess, loading } = usePageAccess();

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
    return <div className="font-bold">ЗАГРУЗКА</div>;
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
      <div className="grid grid-cols-12 gap-4 md:gap-10">
        <div className="col-span-12 sm:col-span-3 xl:col-span-2">
          <Options activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="col-span-12 sm:col-span-9 xl:col-span-10">
          <Content activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
};

export default AccountWrapper;
