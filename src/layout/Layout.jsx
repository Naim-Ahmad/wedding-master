import { Outlet } from "react-router-dom";
import MyNavbar from "./MyNavbar";


export default function Layout() {
  return (
      <>
        <MyNavbar/>
        <Outlet></Outlet>
      </>
  )
}
