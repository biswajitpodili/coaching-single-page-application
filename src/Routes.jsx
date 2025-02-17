import { Routes, Route } from "react-router-dom";

// Layouts
import HomeLayout from "./layouts/HomeLayout";

// Pages
import Home from "./pages/Home";
import Exams from "./pages/Exams";
import Programs from "./pages/Programs";
import TestSeries from "./pages/TestSeries";
import Scholarships from "./pages/Scholarships";
import StudyMaterial from "./pages/StudyMaterial";
import NotFound from "./pages/NotFound";

// Home Routes
const HomeRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/exams",
    element: <Exams />,
  },
  {
    path: "/programs",
    element: <Programs />,
  },
  {
    path: "/scholarships",
    element: <Scholarships />,
  },
  {
    path: "/test-series",
    element: <TestSeries />,
  },
  {
    path: "/study-material",
    element: <StudyMaterial />,
  },
];

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home Routes */}
      <Route path="/" element={<HomeLayout />}>
        {HomeRoutes.map(({ path, element }, index) => {
          return <Route key={index} path={path} element={element} />;
        })}
      </Route>

      {/* Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
