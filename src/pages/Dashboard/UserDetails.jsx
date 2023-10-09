import { Avatar } from 'flowbite-react'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'

function UserDetails({totalAmount, cashAdvance,  projectsCounties}) {
    const { user } = useContext(AuthContext)
    const created = new Date(Number(user?.metadata?.createdAt))
    const lastLogged = new Date(Number(user?.metadata?.lastLoginAt))

  return (
    <div className="flex flex-col items-center gap-4 overflow-x-hidden rounded-3xl bg-gray-100 p-6">
                <Avatar img={user?.photoURL} size="lg" rounded/>
                <div className="text-center font-semibold">
                  <h1>{user?.displayName}</h1>
                  <p>{user?.email}</p>
                </div>
                <div className="text-gray-700 text-sm">
                  <p>Created Account at {created.toLocaleDateString()}</p>
                  <p>Last Login at {lastLogged.toLocaleTimeString()}</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="bg-gray-300 rounded-xl px-8 py-2 text-center">
                  <p className="font-bold text-2xl">{ projectsCounties || '0'}</p>
                  <p className="text-sm text-gray-500">Active Projects</p>
                </div>
                <div className="bg-gray-300 rounded-xl px-8 py-2 text-center">
                  <p className="font-bold text-2xl">${totalAmount}</p>
                  <p className="text-sm text-gray-500">Total Amount</p>
                </div>
                <div className="bg-gray-300 rounded-xl px-8 py-2 text-center">
                  <p className="font-bold text-2xl">${ cashAdvance }</p>
                  <p className="text-sm text-gray-500">Cash Advance</p>
                </div>

              </div>
    </div>
  )
}

UserDetails.propTypes = {
  totalAmount: PropTypes.number,
  cashAdvance: PropTypes.number,
  projectsCounties: PropTypes.number,
}

export default UserDetails
