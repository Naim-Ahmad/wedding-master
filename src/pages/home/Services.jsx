
import { useContext, useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import { AuthContext } from "../../contexts/AuthProvider";
import ServiceCard from "./ServiceCard";


export default function Services() {
  const [services, setServices] = useState(null)
  const { loading, setLoading } = useContext(AuthContext);

  useEffect(() => {
    fetch('./services.json')
      .then(res => res.json())
      .then(data => {
        setServices(data)
        setLoading(false)
      })
  }, [])
 
  return (
    <section className="my-16 max-w-7xl mx-auto px-6">
      <h1 className="text-3xl sm:text-5xl text-center font-extrabold mb-8">Our <span className="text-cyan-700">Services</span></h1>
      
        {loading ? <Spinner />: <div className="grid grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 gap-8">
          { services?.map(service => <ServiceCard
            key={service._id}
            service={service}
          />)}
        </div>}

    </section>
  )
}
