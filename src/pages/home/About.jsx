import { useEffect, useState } from "react"


export default function About() {
  const [about, setAbout] = useState(null)
  
    useEffect(() => {
        fetch('./about.json')
            .then(res => res.json())
            .then(data => setAbout(data)) 
    }, [])
  return (
    <section className="my-16 max-w-7xl mx-auto">
          <h1 className="text-5xl text-center font-extrabold mb-8">About Us</h1>
          <div className="flex items-center gap-10">
            <div className="flex-1">
                <img className="rounded-lg" src={about?.about_us?.about_image_1} alt="About us" />
            </div>
            <div className="flex-1 space-y-6">
              <h1 className="text-2xl font-bold">Company History</h1>
              <p>{about.about_us.description}</p>
              <p>{about.about_us.growth}</p>
              <p>{about.about_us.services}</p>
            </div>
          </div>
          <div className="flex gap-10 flex-row-reverse items-center mt-16">
            <div className="flex-1">
                <img className="rounded-lg" src={about.about_us.about_image_1} alt="About us" />
            </div>
            <div className="flex-1 space-y-6">
              <h1 className="text-2xl font-bold">Mission and vision</h1>
              <p>{about.mission_and_vision.mission}</p>
              <p>{about.mission_and_vision.vision}</p>
              <p>{about.mission_and_vision.end}</p>
            </div>
          </div>
    </section>
  )
}
