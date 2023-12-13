import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./pages/layout";
import TempList from "./pages/temp-list";
import Design from "./pages/design";
import NotFound from "./pages/not-found";
import Print from "./pages/print";

export default function App() {
  return (
    <div className="dark">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/list" element={<TempList />} />
          <Route path="/print" element={<Print />} />
        </Route>
        <Route path="/design" element={<Design />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
