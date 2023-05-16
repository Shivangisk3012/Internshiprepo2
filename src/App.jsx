import "./App.css";
import Badgepage from "./pages/Badgepage";
import { createBrowserRouter, RouterProvider, useRoutes } from "react-router-dom";
import BadgeTypes from "./Components/BadgeTypes";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Badgepage/>,
    children: [
      
      {path:"/",element:<BadgeTypes/>},
      {path:"/:badgetype",element:<BadgeTypes/>}
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
