import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import SearchResultPage from "./pages/SearchResultPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="search-result" element={<SearchResultPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
