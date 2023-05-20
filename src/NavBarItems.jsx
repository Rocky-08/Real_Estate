import React,{useState} from 'react';

import {AppBar,CssBaseline,Toolbar,Typography, Tabs,Button,Tab,useMediaQuery,useTheme} from '@material-ui/core';
import DrawerComp from './DrawerComp';

const Pages = ["Home","About Us" , "Contact Us" , "Policy"];
const NavBarItems = () => {

    const [value,setValue] = useState();

    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    
    return (<>
         <CssBaseline /> 
   <AppBar style={{backgroundColor:'grey'}}>
     <Toolbar>
        <Typography variant="h6">Pg Seekers</Typography>
           
           { 
            isMatch ? (<>
                <DrawerComp />
            </>) : (<>
                
         <Tabs style={{marginLeft:'auto'}} textColor="inherit" value={value} onChange={(e,value)=>{setValue(value)}} indicateColor='secondary'>
          {
            Pages.map((page, index)=>(
                <Tab value={index} label={page} />
            ))
          }

         </Tabs>

         <Button variant="h6" style={{marginLeft:'auto'}}>Sign up</Button>
         <Button variant="h6">Login</Button>
            </>)
            
           }
     </Toolbar>
   </AppBar>
    </>);
}

export default NavBarItems;