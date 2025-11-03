import { Button } from '@mui/material';
import React from 'react'
import Stack  from '@mui/material/Stack';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Fields = ({name, email, index}) => {
  return ( 
    <div className="data_val">
        <h4>{name}</h4>
        <h4>{email}</h4>
        <Stack>
        <Button  variant="contained" color="error">
           <DeleteOutlineOutlinedIcon />
        </Button>
        </Stack>
    </div>
  )
}

export default Fields;