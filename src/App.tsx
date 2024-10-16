import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/root";
import MainPage from "./pages/main";
import LoginPage from "./pages/login";
import OrderInfoPage from "./pages/order-info";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/order-info",
        element: <OrderInfoPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
