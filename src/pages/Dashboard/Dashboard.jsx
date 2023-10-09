import { useContext } from "react"
import { AuthContext } from '../../contexts/AuthProvider'
import PieChartCard from "./PieChartCard"
import UserDetails from "./UserDetails"

export default function Dashboard() {
  const { user } = useContext(AuthContext)

  const data = [
    { name: 'Done', value: 40 },
    { name: 'Pending', value: 70 },
  
  ];
  
  return (
    <main className="min-h-[80vh]">
      <section>
        <div className="flex gap-6 py-10">
          <div className="flex-1 grid grid-cols-2 gap-4 border">
            <PieChartCard data={data}/>
            <PieChartCard data={data}/>
            <PieChartCard data={data}/>
            <PieChartCard data={data}/>
          </div>
          <div className="flex-2 border">
            <UserDetails />
          </div>
        </div>  
      </section>
    </main>
  )
}
