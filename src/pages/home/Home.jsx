import About from "./About";
import Header from "./Header";
import Services from './Services';
import Testimonials from './Testimonials';


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Testimonials/>
        <Services />
      </main>
    </>
  )
}
