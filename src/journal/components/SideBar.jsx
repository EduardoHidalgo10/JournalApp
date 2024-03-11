import { TurnedInNot } from '@mui/icons-material'
import { Box,List, Divider, Drawer, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography, Grid,ListItemText } from '@mui/material'
import React from 'react'

const SideBar = ({drawerWidth}) => {

  return (

    <Box
        component='nav'
        sx={{width:{sm:drawerWidth},flexShrink:{sm:0}}}
    >
        <Drawer
        variant='permanent'
        open
        sx={{display:{xs:'block'},'& .MuiDrawer-paper':{boxSizing:'border-box',width:drawerWidth}}}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Eduardo Hidalgo
                </Typography>
            </Toolbar>

            <Divider/>


            <List>
                {
                    ['Enero','Febrero','Marzo','Abril'].map(text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text}/>
                                    <ListItemText secondary={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}/>

                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }

            </List>


        </Drawer>
        
    </Box>
  )
}

export default SideBar
