import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logotipo from '../assets/karangos-logo-600px.png'
import MainMenu from './MainMenu'


export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" enableColorOnDark>
        <Toolbar variant="dense">
          <MainMenu />
          <a href="/">
            <img
              src={logotipo}
              alt="Logotipo Karangos"
              title="Karangos &bull; Os velhinhos são nossa paixão"
              style={{ width: '300px' }}
            />
          </a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
