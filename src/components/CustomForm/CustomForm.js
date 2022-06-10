import React, {useState, useEffect} from 'react'
import {TextField, Button, Grid, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#7d3b86',
      borderBottomColor:'#7d3b86'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#7d3b86',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#7d3b86',
      },
    },
  },
})(TextField);

const CustomForm = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if(status === "success") clearFields();
      }, [status])
    
      const clearFields = () => {

        setEmail('');
      }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
        });
    }

    return (
        <form 
            className="mc__form"
            onSubmit={(e) => handleSubmit(e)}
            style={{width:'90%'}}
        >

        {status === "sending" && (
          <Typography
            sx={{margin:'1.5rem 0 0 0', textAlign:'center', color:'white'}}
            variant="h5"
          >
            Envoi en cours...
          </Typography>
        )}
        {status === "error" && (
          <Typography 
            sx={{margin:'1.5rem 0 0 0', textAlign:'center', color:'white'}}
            variant="h6"
            dangerouslySetInnerHTML={{ __html: 'Une erreur est survenue, veuillez réessayer.' }}
          />
        )}
        {status === "success" && (
          <Typography
            sx={{margin:'1.5rem 0 0 0', textAlign:'center', color:'white'}}
            variant="h6"
            dangerouslySetInnerHTML={{ __html: 'Merci pour votre inscription ! On vous tient au jus 😉' }}
          />
        )}

        {status !== "success" ? (
        <Grid sx={{display:'flex', width:'100%', marginTop:'1.5rem'}}>
            <CssTextField
                sx={{backgroundColor:'#fff', marginRight:'1rem', width:'80%', borderRadius:'5px', input: { color: 'black' }}}
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                variant="filled"
                isrequired="true"
            />
            <Button
                type="submit"
                variant="contained"
                color='success'
                formvalues={[email]}
            >
              S'inscrire
            </Button>

        </Grid>
        ) : null}

      </form>
    )
}

export default CustomForm