import React from 'react'


import Drawer from '@mui/material/Drawer';
import ListItem from "@mui/material/ListItem";
import ListItemText from '@mui/material/ListItemText';

import Avatar from '@mui/material/Avatar';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import '../components/Home.css'
import AddtoCart from './AddtoCart';


class Container extends React.Component{
    constructor(props){
        super();
        this.state={
            menuOpen: false
        }
    }
   
    header=()=>{
       
        return(
         
            <div>
               <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Avatar 
               src="https://th.bing.com/th/id/OIP.mljEMsdDPUuUFqaEWg4wHAHaFO?w=248&h=180&c=7&r=0&o=5&pid=1.7" 
                sx={{ width: 56, height: 56 }}
          >
          
          </Avatar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            WIWI-Capstone
        
          </Typography>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            
            
         <AddtoCart />
             
          </Box>
          
        </Toolbar>
      </AppBar>
      
    </Box>
   
            </div>
        )
    }



   footer=()=>{
        return(
            <div style={{backgroundColor:"#4287f5"}}>
            <Typography align="center" style={{ fontSize:20}}>
                     © 2022 Hexaware Technologies Limited. All rights reserved
            </Typography>
            </div>
        )
    }



   render(){
        return(
            <div >
                
                  {this.header()}
                  <div style={{height:"79vh"}}>
                    {this.props.children}
                  </div>
                  
            </div>
        )
    }
}
export default Container;