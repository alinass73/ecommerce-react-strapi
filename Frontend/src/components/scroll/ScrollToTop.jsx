import { KeyboardArrowUp } from '@mui/icons-material'
import { Fab, useScrollTrigger, Zoom } from '@mui/material'
import React from 'react'

export default function ScrollToTop() {
  return (
    <Zoom in={useScrollTrigger({threshold: 500})}>
        <Fab sx={{position: "fixed", bottom: 33, right: 33 }}
            color='primary'
            size='small'
            variant='extended'
            onClick={()=>{
                window.scrollTo(0,0)
            }}
        >
            <KeyboardArrowUp fontSize='medium'/>
        </Fab>
    </Zoom>
  )
}
