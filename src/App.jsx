import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/Auth/Register/Register";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import ForgetPassword from "./pages/Auth/ForgetPassword/ForgetPassword";
import CarCard from "./components/CarCard/CarCard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";

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
  {
    path: "forgotpassword",
    element: <ForgetPassword />,
  },
  {
    path: "resetPassword",
    element: <ResetPassword />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 5000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
      <RouterProvider router={router}></RouterProvider>;
    </QueryClientProvider>
  );
}

export default App;
