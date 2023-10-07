import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import MyNavbar from './MyNavbar';

export default function Layout() {
  return (
    <>
        <Toaster/>
        <MyNavbar/>
        <Outlet></Outlet>
      </>
  )
}
