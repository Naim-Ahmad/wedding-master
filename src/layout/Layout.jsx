import Aos from "aos";
import 'aos/dist/aos.css';
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import MyNavbar from './MyNavbar';

Aos.init({
  once: true
})

export default function Layout() {
  return (
    <>
        <Toaster/>
      <MyNavbar />
      <div className="pt-16">
        <Outlet></Outlet>
      </div>
      </>
  )
}
