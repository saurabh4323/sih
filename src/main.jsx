import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import "./index.css";
import Auth from "./Components/Auth";
import Game from "./Components/Game";
import Tour from "./Components/Tour";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Quiz from "./Components/Quiz";
import Cs from "./Components/Cs";
import Blog from "./Components/Blog";
import Guess from "./Components/Guess";
import Feature from "./Components/Feature";
import AboutUs from "./Components/About";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

// Define routes with App as the layout component
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App component contains Navbar and Footer
    children: [
      {
        path: "/sign",
        element: <Auth />,
      },
      {
        path: "/games",
        element: <Game />,
      },
      { path: "/guess", element: <Guess></Guess> },
      {
        path: "/crossword",
        element: <Cs></Cs>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/feature",
        element: <Feature></Feature>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/tour",
        element: <Tour />,
      },
      {
        path: "/quiz",
        element: <Quiz></Quiz>,
        // element: <Guess></Guess>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // Default route (e.g., the Hero component can be rendered here)
      {
        index: true,
        element: <Hero />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
