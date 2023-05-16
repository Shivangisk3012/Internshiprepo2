import "./App.css";
import Badgepage from "./pages/Badgepage";
import { createBrowserRouter, RouterProvider, useRoutes } from "react-router-dom";
import Allbadges from "./Components/Allbadges";
import Popularbadges from "./Components/Popularbadges";
import Ongoingbadges from "./Components/Ongoingbadges";
import Earnedbadges from "./Components/Earnedbadges";


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
