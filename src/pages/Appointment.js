import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  Snackbar,
} from '@mui/material';
import { styled } from '@mui/material/styles';



const BackgroundContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url('https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&w=600')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    //filter: 'blur(0px)', 
    zIndex: -1,
    opacity: 0.5,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    zIndex: -1,
  },
}));


const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff', 
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  maxWidth: '500px', 
  margin: 'auto',
  position: 'absolute', 
  top: '50%', 
  left: '50%', 
  transform: 'translate(-50%, -50%)', 
  textAlign: 'center',
  zIndex: 1,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: '100%',
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: '100%',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  width: '100%',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: 'Lobster, cursive',
  color: 'black',
  marginBottom: theme.spacing(2),
}));

function Appointment() {
  const [successMessage, setSuccessMessage] = useState(false);

  return (
    <BackgroundContainer>
      <Container>
        <FormContainer>
          <Title variant="h4" component="h1" gutterBottom>
            Book an Appointment
          </Title>
          <Formik
            initialValues={{ name: '', email: '', service: '', date: '' }}
            validationSchema={Yup.object({
              name: Yup.string().required('Required'),
              email: Yup.string().email('Invalid email address').required('Required'),
              service: Yup.string().required('Required'),
              date: Yup.date().min(new Date(), 'Date must be in the future').required('Required'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log('Form data:', values);
              setSubmitting(false);
              setSuccessMessage(true); 
              resetForm(); 
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field name="name">
                  {({ field, meta }) => (
                    <StyledTextField
                      {...field}
                      label="Name"
                      variant="outlined"
                      error={meta.touched && Boolean(meta.error)}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
                <Field name="email">
                  {({ field, meta }) => (
                    <StyledTextField
                      {...field}
                      label="Email"
                      variant="outlined"
                      type="email"
                      error={meta.touched && Boolean(meta.error)}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
                <Field name="service">
                  {({ field, meta }) => (
                    <FormControl fullWidth error={meta.touched && Boolean(meta.error)}>
                      <InputLabel>Service</InputLabel>
                      <StyledSelect
                        {...field}
                        label="Service"
                        error={meta.touched && Boolean(meta.error)}
                        defaultValue=""
                      >
                        <MenuItem value="">Select a Service</MenuItem>
                        <MenuItem value="hair">Hair Styling</MenuItem>
                        <MenuItem value="facial">Facials</MenuItem>
                        <MenuItem value="manicure">Manicures</MenuItem>
                        <MenuItem value="pedicure">Pedicures</MenuItem>
                        <MenuItem value="makeup">Makeup</MenuItem>
                      </StyledSelect>
                      <FormHelperText>{meta.touched && meta.error}</FormHelperText>
                    </FormControl>
                  )}
                </Field>
                <Field name="date">
                  {({ field, meta }) => (
                    <StyledTextField
                      {...field}
                      label="Date"
                      variant="outlined"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      error={meta.touched && Boolean(meta.error)}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
                <StyledButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Book Appointment'}
                </StyledButton>
              </Form>
            )}
          </Formik>
        </FormContainer>
        <Snackbar
          open={successMessage}
          autoHideDuration={6000}
          onClose={() => setSuccessMessage(false)}
          message="Appointment booked successfully!"
        />
        
      </Container>
    </BackgroundContainer>
  );
}

export default Appointment;
