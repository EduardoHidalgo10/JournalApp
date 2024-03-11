import React from 'react'
import {Link as RouterLink} from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import AuthLayout from '../layout/AuthLayout';

const RegisterPage = () => {
  return (


    <AuthLayout title="Create Account">

        <form>
          <Grid container>

          <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                label="Nombre completo"
                type='text'
                placeholder='John Doe'
                fullWidth
                />
            </Grid>


            <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                label="Correo"
                type='email'
                placeholder='correo@mail.com'
                fullWidth
                />
            </Grid>


            <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                label="Password"
                type='password'
                placeholder='Password'
                fullWidth
                />
            </Grid>

            <Grid container spacing={2} sx={{mb:2 ,mt:1}}>
              <Grid item xs={12}>
                  <Button variant='contained' fullWidth>
                    Create Account
                  </Button>
              </Grid>

            </Grid>


            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr:1}}>Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to="/auth/login">
                Ingresar
              </Link>

            </Grid>

          </Grid>


        </form>

    </AuthLayout>

     
  )
}

export default RegisterPage
