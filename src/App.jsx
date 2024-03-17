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
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Cars from "./pages/Cars/Cars";
import Profile from "./pages/Profile/Profile";
// import UserProfille from "./pages/userProfile/userProfile";
import UserProfileDetailsForm from "./components/userProfileDetailsForm/UserProfileDetailsForm"
import { RentedCars } from "./components/RentedCars/RentedCars";
import AddCarForm from "./components/AddCarForm/AddCarForm";
import UserSendMessageForm from "./components/sendMessagesForm/SendMessagesForm";
import RecviedMessagesUser from "./components/RecviedMessagesUser/RecviedMessagesUser";
import SportsCar from "./components/CarDetails/CarDetailsImages";
import PersistentDrawerLeft from "./components/Test/Test";
// import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const rental = {
  name: 'Nissan GT-R',
  reviewer: 440,
  image: "car1",
  price: {
    subtotal: 80,
    tax: 0,
  },
};

const car = {
  name: 'Nissan GT-R',
  reviewer: 440,
  image: "car1",
  priceAferDiscount: {
    subtotal: 80,
    tax: 0,

  },
  priceBerforeDiscount:{
    subtotal: 100,
  },
  TypeCar:"Sport",
  capacity:'2 Person',
  Streening:"Manual",
  Gasoline:"70L",
  discripstion:"NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving"
}
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
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
  {
    path : "cars",
    element : (
      <ProtectedRoute>
        <Cars />
      </ProtectedRoute>
    )
  },
  {
    path : "profile",
    element : (
   
        <Profile />
    
    )
  },
   {
     path : "user",
     element :<PersistentDrawerLeft/>,children:[
      {path:""
      ,element:<UserProfileDetailsForm/>
    },
    {path:"profiledetalis"
    ,element:<UserProfileDetailsForm/>
  },
    {path:"rentedcars"
      ,element:<RentedCars/>
    }, {path:"addcar"
    ,element:<AddCarForm/>
  },
  {path:"sendmessage"
    ,element:<UserSendMessageForm/>
  },
  {
    path:"recviedmessage",
    element:<RecviedMessagesUser/>
  }

     ] },
     {
      path:"Detalis",
      element:<SportsCar></SportsCar>
     }
  ,{
    path:"test",
    element:<PersistentDrawerLeft/>
  }
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
            backgroundColor: "#fff",
            color: "var(--color-grey-700)",
          },
        }}
      />
      <RouterProvider router={router}></RouterProvider>;
    </QueryClientProvider>
  );
}

export default App;
