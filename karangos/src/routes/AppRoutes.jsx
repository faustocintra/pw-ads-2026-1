
import { Routes, Route } from 'react-router-dom'

import Homepage from '../ui/pages/Homepage'
import CarsList from '../ui/pages/cars/CarsList'
import CustomersList from '../ui/pages/customers/CustomersList'
import AboutDevCard from '../ui/pages/about-dev/AboutDevCard'

export default function AppRoutes() {
 return <Routes>
   <Route path="/" element={ <Homepage /> } />
   <Route path="/cars" element={ <CarsList /> } />
   <Route path="/customers" element={ <CustomersList /> } />
   <Route path="/about-dev" element={ <AboutDevCard /> } />
 </Routes>
}

