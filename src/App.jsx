import "./App.css";
import Badgepage from "./pages/Badgepage";
import { createBrowserRouter, RouterProvider, useRoutes } from "react-router-dom";
import Allbadges from "./components/Allbadges";
import Popularbadges from "./components/Popularbadges";
import Ongoingbadges from "./components/Ongoingbadges";
import Earnedbadges from "./components/Earnedbadges";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Badgepage/>,
    children: [
      { path: "/", element: <Allbadges />, title: "All Badges"},
      { path: "/popular", element: <Popularbadges />, title: "Popular Badges"},
      { path: "/ongoing", element: <Ongoingbadges />, title: "Ongoing Badges"},
      { path: "/earned", element: <Earnedbadges />, title: "Earned Badges"}
    ]
  },
  {
    path: "*",
    element: <div>Not Found</div>
  }
]);

function App() {
  return (
    <RouterProvider router={routes}>
      <Badgepage />
    </RouterProvider>
  );
}

export default App;
