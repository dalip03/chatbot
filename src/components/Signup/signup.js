import { Button, TextField } from '@mui/material'
import React from 'react'

export default function Signup() {
  return (
    <div>
      <div className="col-lg-4 lgdv">
      <h1>Signup Here</h1>
      <TextField id="outlined-basic" name="name" label="Enter Name" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="Enter Password"
        variant="outlined"
        name="password"
      />

      <Button variant="contained" >
            Login
      </Button>
    </div>
    </div>
  )
}
