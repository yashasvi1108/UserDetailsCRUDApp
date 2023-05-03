import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
const Header=styled(AppBar) `
background:#111111;
`;


const Tabs=styled(NavLink)`
font-size:20px;
margin-right:20px;
color:inherit;
text-decoration:none;
`;



const NavBar=()=>{
    return(
      <Header position='static'>
         <Toolbar>
   <Tabs to='/'>CRUD App</Tabs>
   <Tabs to='/all'>All Users</Tabs>
   <Tabs to='/add'>Add Users</Tabs>
         </Toolbar>
      </Header>
     
    )
}
export default NavBar;