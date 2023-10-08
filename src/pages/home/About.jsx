import { useEffect, useState } from "react"

export default function About() {
  const [about, setAbout] = useState(null)
  
    useEffect(() => {
        fetch('./about.json')
            .then(res => res.json())
            .then(data => setAbout(data)) 
    }, [])
  
  return (
    <section className="my-16 max-w-7xl mx-auto px-6">
          <h1 className="text-5xl text-center font-extrabold mb-8"><span className="text-cyan-700">About</span> Us</h1>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div data-aos="fade-right" className="flex-1">
                <img className="rounded-lg" src={about?.about_us?.about_image_1} alt="About us" />
            </div>
            <div data-aos="fade-left" className="flex-1 space-y-6">
              <h1 className="text-2xl font-bold">C+ompany History</h1>
              <p>{about?.about_us?.description}</p>
              <p>{about?.about_us?.growth}</p>
              <p>{about?.about_us?.services}</p>
            </div>
          </div>
          <div className="flex gap-10 flex-row-reverse items-center mt-16">
            <div data-aos="fade-up" className="flex-1">
                <img className="rounded-lg" src={about?.about_us?.about_image_1} alt="About us" />
            </div>
        <div data-aos="fade-down" data-aos-mirror="true" className="flex-1 flex-col lg:flex-row space-y-6">
              <h1 className="text-2xl font-bold">Mission and vision</h1>
              <p>{about?.mission_and_vision?.mission}</p>
              <p>{about?.mission_and_vision?.vision}</p>
              <p>{about?.mission_and_vision?.end}</p>
            </div>
          </div>
    </section>
  )
}
