import SearchInput from "../../components/SearchInput";


export default function Header() {
  return (
      <header className="min-h-[90vh] banner-image text-white">
          <div className="flex justify-center items-center min-h-[90vh]">
              <div className="md:w-1/2 lg:w-2/5">
                  <h1 className="text-3xl font-bold text-center mb-8">We provide all types of wedding services.</h1>
                <SearchInput />
             </div>
          </div>
    </header>
  )
}
