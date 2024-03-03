import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "../src/pages/Register";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import CarCard from "./components/CarCard/CarCard";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "card",
    element: <CarCard />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
