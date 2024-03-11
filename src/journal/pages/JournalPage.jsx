import { IconButton, Typography } from '@mui/material'
import React from 'react'
import JournalLayout from '../layout/JournalLayout'
import NothingSelectedView from '../views/NothingSelectedView'
import NoteView from '../views/NoteView'
import { AddOutlined } from '@mui/icons-material'

const JournalPage = () => {


  return (

    <JournalLayout>
      {/* <Typography>aaaa</Typography> */}


      <NothingSelectedView/>


      {/* <NoteView/> */}


      <IconButton
      size='large'
      sx={{
        color:'white',
        backgroundColor:'error.main',
        ':hover':{backgroundColor:'error.main',opacity:0.9},
        position:'fixed',
        right:50,
        bottom:50
      }}
      
      >
        <AddOutlined sx={{fontSize:30}}/>
      </IconButton>

    </JournalLayout>
  )
}

export default JournalPage
