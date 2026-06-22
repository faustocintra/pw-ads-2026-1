import { Routes, Route } from 'react-router-dom'

import Homepage from '../pages/Homepage'
import CarsList from '../pages/cars/CarsList'
import CustomersList from '../pages/customers/CustomersList'

import About from '../pages/About'
import Sobre from '../pages/Sobre'

export default function AppRoutes() {
 return <Routes>
   <Route path="/" element={ <Homepage /> } />

   <Route path="/cars" element={ <CarsList /> } />
   <Route path="/customers" element={ <CustomersList /> } />

   {/* 
    9. Crie uma rota para esse componente.
   */}
   <Route path="/about" element={ <About /> } />
   <Route path="/sobre" element={ <Sobre /> } />
  
 </Routes>
}