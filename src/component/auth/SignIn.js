import React, {useState} from 'react';
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
    height: "100%",
    width:"120px",
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  let usersRef = firebase.database().ref('users');
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);



  const handleSubmit = (e) => {
      e.preventDefault();
      if(isFormValid(email,password)){
        setError(null);
        setLoading(true);

        firebase.auth().signInWithEmailAndPassword(email,password).then(signedInUser => {
          setLoading(false);
          props.history.push("/");
        }).catch(err => {
          console.log(err);
          setError(err);
          setLoading(false);
          
        })
      }
  }

  const isFormValid = (email, password) => email && password

  
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
        <Avatar src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" variant="square" className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            value={email}
            onChange = {(ev) => setEmail(ev.target.value)}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            disabled={loading}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Button
            fullWidth
            disabled={loading}
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleGoogleSignup}
          >
            Sign In with Google
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/resetpassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}