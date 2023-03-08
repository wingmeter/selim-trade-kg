import { Navigate } from 'react-router'

import { TOKEN_KEY } from '../../utils/constants'

const PrivateRoute = ({ Component }) => {
   const token = JSON.parse(localStorage.getItem(TOKEN_KEY))
   const isUserHasRole = !!token?.token
   if (!isUserHasRole) return <Navigate to="/admin/login" replace />
   return Component
}

export default PrivateRoute
