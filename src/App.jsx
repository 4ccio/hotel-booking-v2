import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import SearchResultPage from "./pages/SearchResultPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "@/modules/User";
import AccountPage from "./pages/AccountPage";

function App() {
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);

  useEffect(() => {
    if (isAuthorized) {
      dispatch(fetchUser());
    }
  }, [dispatch, isAuthorized]);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="search-result" element={<SearchResultPage />}></Route>
          <Route path="account" element={<AccountPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
