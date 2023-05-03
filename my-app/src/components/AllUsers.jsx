import {useEffect,useState} from 'react';
import { Table, TableHead,TableBody,TableRow,TableCell,styled,Button } from "@mui/material";
import { getUsers,deleteUser } from '../service/api';
import { Link } from 'react-router-dom';
const   StyledTable= styled(Table)`
width:90%;
margin:50px auto 0 auto ;
`

const THead=styled(TableRow)`
background:#000000;
& > th{
  color:#fff;
  font-size:20px;
  
}

`;

const TBody=styled(TableRow)`
& > td{
  font-size:20px;
}

`

const AllUsers=()=>{
  const [users,setusers]= useState([]);
 useEffect(()=>{
getAllUsers();
 },[]);

  const getAllUsers = async() =>{
    let response=await  getUsers();
    setusers(response.data);
   
  }
   const deleteUserDetails=async(id)=>{
await deleteUser(id);
getAllUsers();
   }

    return (
  <StyledTable>
<TableHead>
<THead>
    <TableCell> Id </TableCell>
    <TableCell> Name</TableCell>
    <TableCell>Username </TableCell>
    <TableCell> Email</TableCell>
    <TableCell> Phone</TableCell>
    <TableCell></TableCell>
    
</THead>
</TableHead>


 <TableBody>
{
  users.map(users=>(
    <TBody key={users._id}>
      <TableCell> {users._id}</TableCell>
      <TableCell> {users.name}</TableCell>
      <TableCell> {users.username}</TableCell>
      <TableCell> {users.email}</TableCell>
      <TableCell> {users.phone}</TableCell>
      <TableCell> 
      <Button variant='contained' style={{marginRight:10}} component={Link} to= {`/edit/${users._id}`} >  Edit </Button>
      <Button variant='contained' color='secondary' onClick={()=> deleteUserDetails(users._id)}>  Delete</Button>
      </TableCell>
    </TBody>
  ))
}

 </TableBody>
  </StyledTable>
    )
}
export default AllUsers;