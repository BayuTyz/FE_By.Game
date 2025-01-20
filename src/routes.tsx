import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./Components/Layout/Layout";
import FF from "./Components/game/ff";
import MobileLagen from "./Components/game/ml";
import HonorOfKings from "./Components/game/hok";
import Sigup from "./pages/Sigup";
// import Testing from "./pages/Testing";
import Home from "./pages/home";
import Game from "./pages/game";
import Account from "./pages/account";
import Honkai_SR from "./Components/game/hsr";
import NewGame from "./pages/newGame";
import Newproduct from "./pages/newproduct";
import TopUp from "./Components/game/topup";
import ModalLogin from "./Components/ModalLogin";
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};
const ProtectedRoute = ({ element }: { element: React.ReactElement }) => {
  if (isAuthenticated()) {
    return element;
  }
  return <ModalLogin />;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "game",
        element: <Game />,
      },
      {
        path: "ff",
        element: <FF />,
      },
      {
        path: "ml",
        element: <MobileLagen />,
      },
      {
        path: "hok",
        element: <HonorOfKings />,
      },
      {
        path: "hsr",
        element: <Honkai_SR />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "account",
        element: <ProtectedRoute element={<Account />} />,
      },
      {
        path: "Signup",
        element: <Sigup />,
      },
      {
        path: "/topup/:gameId",
        element: <TopUp />,
      },
      {
        path: "/modalLogin",
        element: <ModalLogin />,
      },
    ],
  },
  // {
  //   path: "/testing",
  //   element: <Testing />,
  // },
  {
    path: "/newgame",
    element: <NewGame />,
  },
  {
    path: "/newproduct",
    element: <Newproduct />,
  },
]);
