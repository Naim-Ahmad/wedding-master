import { Button, Datepicker } from "flowbite-react"
import { useEffect, useState } from "react"
import { AiTwotonePhone } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { useParams } from "react-router-dom"
import Input from "../../components/Input"
import ListItem from "../../components/ListItem"
import Spinner from "../../components/Spinner"


export default function ServiceDetails() {
    const [services, setServices] = useState(null)
    const [loading, setLoading] = useState(true)
    const [totalPrice, setTotalPrice] = useState(0)
    const {id} = useParams()

    useEffect(() => {
        fetch('/services.json')
            .then(res=>res.json())
            .then(data => {
                const findService = data.find(d => d._id == id)
                setServices(findService)
                setLoading(false)
                setTotalPrice(findService?.details?.pricing?.split(' ')[2])
                console.log(findService)
            })
    }, [])
    
    const handleHire = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const fromDate = form.get('from')
        const toDate = form.get('to')
        console.log(fromDate, toDate)
    }
    
  return (
      <main className="pt-16 px-8 max-w-7xl mx-auto">
          <section>
              {loading ? <Spinner/>: <div className="flex flex-col md:flex-row gap-10">
                  <div className="flex-1">
                      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">{services?.title}</h1>
                      <img className="h-96 mb-8" src={services?.image_url} alt="" />
                      <p>{services?.details?.description}</p>
                      <div className="my-8">
                          <h2 className="text-3xl font-bold mb-2">Features</h2>
                            <ul>
                                {services?.details?.key_features.map((f, idx) => <ListItem key={idx}>{ f }</ListItem>)}
                            </ul>
                      </div>
                     
                  </div>
                  <div className="flex-1">
                    <p className="text-2xl lg:text-3xl font-bold mb-8">Price { services?.details?.pricing} Per Day</p>
                        <form onSubmit={handleHire}>
                            <Input type="text" placeholder="Your Address" required/>
                            <Input type="number" placeholder="Your Phone Number" required/>
                            <h1 className="font-semibold mb-2">Project Duration</h1>
                            <div className="flex items-center gap-3 justify-between">
                                <Datepicker name="from" />
                                to
                                <Datepicker name="to"/>
                            </div>
                            <div className="mt-6">
                                <p className="font-bold">Price Per Day: {services?.details?.pricing?.split(' ')[2]}</p>
                                <p className="font-bold">Total Price: { totalPrice }</p>
                            </div>
                        <Button type='submit' className='w-full mt-8'>
                            Hire Now   
                        </Button>
                        
                      </form>
                      <div className="mt-10 space-y-5">
                          <h1 className="font-semibold">Have Any Question ? <span className="text-cyan-700">Please Contact us</span></h1>
                          <div className="flex items-center gap-1">
                              <AiTwotonePhone className="text-2xl"/>
                              <p>{ services?.details?.contact_info?.phone}</p>
                          </div>
                          <div className="flex items-center gap-1">
                              <MdEmail className="text-2xl"/>
                              <p>{ services?.details?.contact_info?.phone}</p>
                          </div>
                      </div>
                  </div>

              </div>}
          </section>
    </main>
  )
}
