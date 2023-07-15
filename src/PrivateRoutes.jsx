import { Navigate, Outlet } from "react-router-dom"
import { useIsAuthenticated } from "react-auth-kit"

const PrivateRoutes = () => {
    const isAuthenticated = useIsAuthenticated()
  return (
    !(isAuthenticated()) ? <Navigate to={'/login'}/> : <Outlet/>
  )
}

export default PrivateRoutes