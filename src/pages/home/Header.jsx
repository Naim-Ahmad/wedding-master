import SearchInput from "../../components/SearchInput";


export default function Header() {
  return (
      <header className="min-h-[90vh] max-w-full banner-image text-white">
          <div className="flex justify-center items-center min-h-[90vh]">
              <div data-aos="flip-up" className="md:w-1/2 lg:w-2/5">
                  <h1 className="text-3xl font-bold text-center mb-8">We provide all types of <span className="text-cyan-700">wedding services.</span></h1>
                <SearchInput />
             </div>
          </div>
    </header>
  )
}
