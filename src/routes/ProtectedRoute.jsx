
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { AuthContext } from '../contexts/AuthProvider'

function ProtectedRoute({ children }) {
    const { user, loading } = useContext(AuthContext)
    const { pathname } = useLocation()
    
    if (loading) {
        return <Spinner />
    }
    if (user) {
        return children
    }
  return <Navigate state={pathname} to="/login"/>
}

ProtectedRoute.propTypes = {
    children: PropTypes.node
}

export default ProtectedRoute
