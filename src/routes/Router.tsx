import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Cart from "../pages/Cart";
import CheckoutConfirm from "../pages/CheckoutConfirm";
import CheckoutDelivery from "../pages/CheckoutDelivery";
import CheckoutPayment from "../pages/CheckoutPayment";
import AllResults from "../pages/AllResults";
import CheckoutSuccess from "../pages/CheckoutSuccess";
import Orders from "../pages/Orders";
import Addresses from "../pages/Addresses";
import Profile from "../pages/Profile";
import Categories from "../pages/Categories";
import AllCategories from "../pages/AllCategories";
import Store from "../pages/Store";
import InSeason from "../pages/InSeason";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Routes = (): JSX.Element => {
  const pageRoutes = [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/categories",
      element: <AllCategories />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/product/:id", 
      element: <Product />
    },
    {
      path: "/categories/:id", 
      element: <Categories />
    },
    {
      path: "/cart", 
      element: <Cart />
    },
    {
      path: "/checkout/delivery", 
      element: <CheckoutDelivery />
    },
    {
      path: "/checkout/payment", 
      element: <CheckoutPayment />
    },
    {
      path: "/checkout/confirm", 
      element: <CheckoutConfirm />
    },
    {
      path: "/checkout/success", 
      element: <CheckoutSuccess />
    },
    {
      path: "/orders", 
      element: <Orders />
    },
    {
      path: "/addresses", 
      element: <Addresses />
    },
    {
      path: "/profile", 
      element: <Profile />
    },
    {
      path: "/search/allresults", 
      element: <AllResults />
    },
    {
      path: "/store",
      element: <Store />
    },
    {
      path: "/in-season",
      element: <InSeason />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
  ];

  const router = createBrowserRouter([...pageRoutes]);

  return <RouterProvider router={router} />;
};

export default Routes;