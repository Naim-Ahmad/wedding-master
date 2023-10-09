import { Avatar, Progress } from 'flowbite-react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'

function UserDetails(props) {
    const { user } = useContext(AuthContext)
    const created = new Date(Number(user?.metadata?.createdAt))
    const lastLogged = new Date(Number(user?.metadata?.lastLoginAt))

  return (
    <div className="flex flex-col items-center gap-4  rounded-3xl bg-gray-100 p-6 border">
                <Avatar img={user?.photoURL} size="lg" rounded/>
                <div className="text-center font-semibold">
                  <h1>{user?.displayName}</h1>
                  <p>{user?.email}</p>
                </div>
                <div className="text-gray-700 text-sm">
                  <p>Created Account at {created.toLocaleDateString()}</p>
                  <p>Last Login at {lastLogged.toLocaleTimeString()}</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-gray-300 rounded-xl px-8 py-2 text-center">
                  <p className="font-bold text-2xl">3</p>
                  <p className="text-sm text-gray-500">Active Projects</p>
                </div>
                <div className="bg-gray-300 rounded-xl px-8 py-2 text-center">
                  <p className="font-bold text-2xl">3</p>
                  <p className="text-sm text-gray-500">Total Amount</p>
                </div>
                <div className="bg-gray-300 rounded-xl px-8 py-2 text-center">
                  <p className="font-bold text-2xl">3</p>
                  <p className="text-sm text-gray-500">Paid Amount</p>
                </div>

              </div>

              <div className="w-full">
              <Progress
                labelProgress
                labelText
                progress={45}
                progressLabelPosition="inside"
                size="xl"
                textLabel="Average Project Done"
                textLabelPosition="outside"
              />
              </div>
              
            </div>
  )
}

UserDetails.propTypes = {}

export default UserDetails
