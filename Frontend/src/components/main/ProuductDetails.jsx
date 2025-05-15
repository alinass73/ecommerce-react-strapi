import { AddShoppingCartOutlined } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

export default function ProuductDetails() {
  return (
    <Box sx={{display: "flex", alignItems: "center", gap: 2.5, flexDirection:{xs: "column", sm: "row"}}}>
        <Box sx={{display: "flex"}}>
            <img src="src/images/1.jpg" width={300} alt="" />
        </Box>
        <Box sx={{textAlign: {xs: "center", sm: "left"}}}>
            <Typography variant='h5'>
                WOMAN'S FASHIN
            </Typography>
            <Typography my={0.4} fontSize={"22px"} variant='' color={"crimson"} >
                $12.99
            </Typography>
            <Typography variant='body1'>
                dsafj;kp wefoeo kfjskdl;fj klsaj fk;ljklfjklsjf ajfe
            </Typography>
            <Stack sx={{justifyContent: {xs: "center", sm: "left"}}} direction={"row"} gap={1} my={2}>
                {["src/images/2.jpg",'src/images/2.jpg',"src/images/1.jpg"].map((item)=>{
                    return(
                        <img style={{borderRadius: 3}} height={100} width={90} key={item} src={item} alt="" />
                    )
                })}
            </Stack>
            <Button sx={{mb: {xs: 1, sm: 0}, textTransform: "capitalize"}} variant='contained' >
                <AddShoppingCartOutlined  
                    sx={{mr: 1}} fontSize='small'
                />
                Buy Now
            </Button>
        </Box>
    </Box>
  )
}
