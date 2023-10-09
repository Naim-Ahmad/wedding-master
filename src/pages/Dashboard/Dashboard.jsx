import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { getUserData } from "../../utils/localstorage";
import PieChartCard from "./PieChartCard";
import UserDetails from "./UserDetails";

const regex = /[$,]/g;


export default function Dashboard() {
  const [userData, setUserData] = useState(null)
  const [totalAmount, setTotalAmount] = useState(0)
  const [totalCashAdvance, setTotalCashAdvance] = useState(0)
  const {user} = useContext(AuthContext)

  useEffect(() => {
    const data = getUserData()
    let totalAmount = 0;
    let totalCashAdvance = 0;

    data?.forEach(d => {
      const totalAmountString = d.totalAmount.replace(regex, '');
      const totalAmountNumber = Number(totalAmountString)
      totalAmount+=totalAmountNumber
    })

    data?.forEach(d => {
      const cashAdvance = Number(d.cashAdvance)
      totalCashAdvance += cashAdvance
    })
    const userData = data.filter(d => d?.email === user.email)
    if (userData.length) {
      setUserData(data)
      setTotalCashAdvance(totalCashAdvance)
      setTotalAmount(totalAmount)
    }
  }, [])

  
  return (
    <main className="min-h-[80vh]">
      <section>
        <div className="flex gap-6 py-10">
        
            
          {userData?.length ? 
              <div className="flex-1 grid grid-cols-2 gap-4">{userData?.map(data => <PieChartCard key={data.id} data={data} />)} </div> :<div className="min-h-screen w-full h-full text-center mt-16 text-4xl font-bold"><p>No Service here</p></div>}
        
          <div className="flex-2">
            <UserDetails cashAdvance={totalCashAdvance} totalAmount={totalAmount}  projectsCounties={userData?.length} />
          </div>
        </div>  
      </section>
    </main>
  )
}
