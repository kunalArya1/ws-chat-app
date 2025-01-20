import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LeftSide from "../Components/LeftSide";
import RightSide from "../Components/RightSide";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: <LeftSide />,
    children: [
      {
        path: ":id", // No need to repeat `/profile` here
        element: <RightSide />,
      },
    ],
  },
]);
