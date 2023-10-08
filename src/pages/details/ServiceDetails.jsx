import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Login from "../login/Login"


export default function ServiceDetails() {
    const [services, setServices] = useState(null)
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        fetch('/services.json')
            .then(res=>res.json())
            .then(data => {
                const findService = data.find(d => d._id == id)
                setServices(findService)
                setLoading(false)
            })
     }, [])
    
  return (
      <main className="pt-16">
          <section>
              <div className="flex gap-10">
                  <div className="flex-1">
                      <h1>{services?.title}</h1>
                      <img src={services?.image_url} alt="" />
                      <p>{services?.details?.description}</p>
                      <div>
                          <h2>Key Features</h2>
                      <ul>
                          {services?.details?.key_features.map((f, idx) => <li key={idx}>{ f }</li>)}
                      </ul>
                      </div>
                      <p>{ services?.details?.pricing}</p>
                  </div>
                  <div className="flex-1">
                      <Login />
                  </div>
              </div>
          </section>
    </main>
  )
}
