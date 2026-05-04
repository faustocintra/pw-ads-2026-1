// import './App.css'
import { BrowserRouter } from 'react-router-dom'
import HeaderBar from './ui/HeaderBar'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './ui/theme'


function App() {
 return (
   <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
     <BrowserRouter>
       <HeaderBar />
     </BrowserRouter>
      </ThemeProvider>
   </>
 )
}


export default App