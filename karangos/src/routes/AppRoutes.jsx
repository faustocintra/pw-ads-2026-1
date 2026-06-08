
import { Routes, Route } from 'react-router-dom'

import Homepage from '../ui/pages/Homepage'
import CarsList from '../ui/pages/cars/CarsList'
import CustomersList from '../ui/pages/customers/CustomersList'
import Likes from '../ui/pages/Likes'

export default function AppRoutes() {
 return <Routes>
   <Route path="/" element={ <Homepage /> } />
   <Route path="/cars" element={ <CarsList /> } />
   <Route path="/customers" element={ <CustomersList /> } />
   <Route path="/likes" element={ <Likes /> } />
 </Routes>
}

