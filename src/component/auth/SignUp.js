import React,{useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';
import firebase from '../../firebase';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(10),
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    height:"100%",
    width:"120px"
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

 function SignUp(props) {
   let usersRef = firebase.database().ref('users');
  const classes = useStyles();

  const [firstName, handleFirstName] = useState("");
  const [lastName, handleLastName] = useState("");
  const [email, handleEmail] = useState("");
  const [password, handlePassword] = useState("");
  const [error,setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const isFormEmpty = () =>{
    return !firstName.length || !lastName.length || !email.length || !password.length
  }

  const isEmailValid = (email) => {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const isPasswordValid = (password) => {
    if(password.length < 7){
      return false;
    }
  }

  const isFormValid = () => {
    let error;
    if(isFormEmpty()){
      error = { message: "fill in all fields"};
      setError(error);
      return false;
    }else if(!isEmailValid(email)){
        error = {message: "Enter a valid email!"};
        setError(error);
        return false
    }else if(isPasswordValid(password)){
     error = {message: "Password must be atleast 8 character!"}
     setError(error);
     return false;
    }else{
      return true;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isFormValid()){
      setError(null);
      setLoading(true);
    firebase.auth()
    .createUserWithEmailAndPassword(email,password)
    .then(createdUser => {
      createdUser.user.updateProfile({
        displayName: `${firstName} ${lastName}`
      }).then(()=>{
        saveUser(createdUser).then(()=>{
          props.history.push("/");
          setLoading(false);
        })
      }).catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false)
        
      })
    
    })
    .catch(err => {
      console.error(err)
      setError(err);
      setLoading(false);
    })
    }
  }

  const handleGoogleSignup = () => {
    setLoading(true);
    const base_provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(base_provider).then(user => {
      if(!user.additionalUserInfo.isNewUser){
        return  props.history.push("/");
      }
       saveUser(user).then(()=> {
          setLoading(false);
          props.history.push("/");
        }).catch(err => {
          setError(err);
          
        })
      
    }).catch(err => {
      setError(err)
      setLoading(false);
    })
    
  }

  const saveUser = (createdUser) => {
    return usersRef.child(createdUser.user.uid).set({
      name: createdUser.user.displayName
    });
  }
  return (
    <Container component="main" maxWidth="xs">
      {error &&  <div className={classes.root}>
                <Alert severity="error">{error.message}</Alert>
                </div>
        }
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" variant="square" className={classes.avatar} />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                value={firstName}
                onChange={(ev) => handleFirstName(ev.target.value)}
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={lastName}
                onChange={(ev)=> handleLastName(ev.target.value)}
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={email}
                onChange={(ev) => handleEmail(ev.target.value)}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={password}
                onChange={(ev) => handlePassword(ev.target.value)}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Want to subscribe newsletter!"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            disabled={loading}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Button
            disabled={loading}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleGoogleSignup}
          >
            Sign Up With Google
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}


export default SignUp;