import About from "./About";
import Header from "./Header";
import Serices from "./Services";


export default function Home() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-6">
        <About />
        <Serices/>
      </main>
    </div>
  )
}
