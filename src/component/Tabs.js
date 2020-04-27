import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActionArea } from '@material-ui/core';
import { StarBorderOutlined, StarHalfOutlined, StarOutlined } from '@material-ui/icons';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Slider from "react-slick";

let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`ant-tabpanel-${index}`}
      aria-labelledby={`ant-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `ant-tab-${index}`,
    'aria-controls': `ant-tabpanel-${index}`,
  };
}

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardRoot:{
     maxWidth: 400,
  },
  media: {
    height: 140,
  },
  marginTop:{
    marginTop: "5px",
  },
  cardPadding:{
     padding: theme.spacing(1),
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
}));

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Business" {...a11yProps(0)} />
          <AntTab label="IT & Software" {...a11yProps(1)} />
          <AntTab label="Development" {...a11yProps(2)} />
        </AntTabs>
        <Typography className={classes.padding} />
        <TabPanel value={value} index={0}>
        <Slider {...settings}>
        <div className={classes.cardPadding}>
          <Card className={classes.cardRoot}>
            <CardActionArea>
            <CardMedia
            className={classes.media}
              src="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              image="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              title="Paella dish"
            />
            <CardContent >
              <Typography variant="subtitle2">
                Google speardsheets-databse for database
              </Typography>
              <Typography className={classes.marginTop} variant="caption">
                Trainer name
              </Typography>
               <div className={classes.marginTop} style={{display:"flex"}}>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <Typography variant="subtitle1">
                   4.5
                 </Typography>
                 <Typography variant="subtitle1">
                   (8)
                 </Typography>
               </div>
               <div className={classes.marginTop} style={{float: "right"}}>
                   <Typography variant="h4">
                       $ 19.99
                   </Typography>
               </div>

            </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.cardPadding}>
        <Card className={classes.cardRoot}>
            <CardActionArea>
            <CardMedia
            className={classes.media}
              src="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              image="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              title="Paella dish"
            />
            <CardContent >
              <Typography variant="subtitle2">
                Google speardsheets-databse for database
              </Typography>
              <Typography className={classes.marginTop} variant="caption">
                Trainer name
              </Typography>
               <div className={classes.marginTop} style={{display:"flex"}}>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <Typography variant="subtitle1">
                   4.5
                 </Typography>
                 <Typography variant="subtitle1">
                   (8)
                 </Typography>
               </div>
               <div className={classes.marginTop} style={{float: "right"}}>
                   <Typography variant="h4">
                       $ 19.99
                   </Typography>
               </div>

            </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.cardPadding}>
        <Card className={classes.cardRoot}>
            <CardActionArea>
            <CardMedia
            className={classes.media}
              src="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              image="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              title="Paella dish"
            />
            <CardContent >
              <Typography variant="subtitle2">
                Google speardsheets-databse for database
              </Typography>
              <Typography className={classes.marginTop} variant="caption">
                Trainer name
              </Typography>
               <div className={classes.marginTop} style={{display:"flex"}}>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <Typography variant="subtitle1">
                   4.5
                 </Typography>
                 <Typography variant="subtitle1">
                   (8)
                 </Typography>
               </div>
               <div className={classes.marginTop} style={{float: "right"}}>
                   <Typography variant="h4">
                       $ 19.99
                   </Typography>
               </div>

            </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.cardPadding}>
        <Card className={classes.cardRoot}>
            <CardActionArea>
            <CardMedia
            className={classes.media}
              src="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              image="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              title="Paella dish"
            />
            <CardContent >
              <Typography variant="subtitle2">
                Google speardsheets-databse for database
              </Typography>
              <Typography className={classes.marginTop} variant="caption">
                Trainer name
              </Typography>
               <div className={classes.marginTop} style={{display:"flex"}}>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <Typography variant="subtitle1">
                   4.5
                 </Typography>
                 <Typography variant="subtitle1">
                   (8)
                 </Typography>
               </div>
               <div className={classes.marginTop} style={{float: "right"}}>
                   <Typography variant="h4">
                       $ 19.99
                   </Typography>
               </div>

            </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.cardPadding}>
        <Card className={classes.cardRoot}>
            <CardActionArea>
            <CardMedia
            className={classes.media}
              src="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              image="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              title="Paella dish"
            />
            <CardContent >
              <Typography variant="subtitle2">
                Google speardsheets-databse for database
              </Typography>
              <Typography className={classes.marginTop} variant="caption">
                Trainer name
              </Typography>
               <div className={classes.marginTop} style={{display:"flex"}}>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <Typography variant="subtitle1">
                   4.5
                 </Typography>
                 <Typography variant="subtitle1">
                   (8)
                 </Typography>
               </div>
               <div className={classes.marginTop} style={{float: "right"}}>
                   <Typography variant="h4">
                       $ 19.99
                   </Typography>
               </div>

            </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.cardPadding}>
        <Card className={classes.cardRoot}>
            <CardActionArea>
            <CardMedia
            className={classes.media}
              src="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              image="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              title="Paella dish"
            />
            <CardContent >
              <Typography variant="subtitle2">
                Google speardsheets-databse for database
              </Typography>
              <Typography className={classes.marginTop} variant="caption">
                Trainer name
              </Typography>
               <div className={classes.marginTop} style={{display:"flex"}}>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <Typography variant="subtitle1">
                   4.5
                 </Typography>
                 <Typography variant="subtitle1">
                   (8)
                 </Typography>
               </div>
               <div className={classes.marginTop} style={{float: "right"}}>
                   <Typography variant="h4">
                       $ 19.99
                   </Typography>
               </div>

            </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </Slider>
        </TabPanel>


        <TabPanel value={value} index={1}>
        <Slider {...settings}>
        <div className={classes.cardPadding}>
          <Card className={classes.cardRoot}>
            <CardActionArea>
            <CardMedia
            className={classes.media}
              src="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              image="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              title="Paella dish"
            />
            <CardContent >
              <Typography variant="subtitle2">
                Google speardsheets-databse for database
              </Typography>
              <Typography className={classes.marginTop} variant="caption">
                Trainer name
              </Typography>
               <div className={classes.marginTop} style={{display:"flex"}}>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <Typography variant="subtitle1">
                   4.5
                 </Typography>
                 <Typography variant="subtitle1">
                   (8)
                 </Typography>
               </div>
               <div className={classes.marginTop} style={{float: "right"}}>
                   <Typography variant="h4">
                       $ 19.99
                   </Typography>
               </div>

            </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.cardPadding}>
        <Card className={classes.cardRoot}>
            <CardActionArea>
            <CardMedia
            className={classes.media}
              src="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              image="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              title="Paella dish"
            />
            <CardContent >
              <Typography variant="subtitle2">
                Google speardsheets-databse for database
              </Typography>
              <Typography className={classes.marginTop} variant="caption">
                Trainer name
              </Typography>
               <div className={classes.marginTop} style={{display:"flex"}}>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <Typography variant="subtitle1">
                   4.5
                 </Typography>
                 <Typography variant="subtitle1">
                   (8)
                 </Typography>
               </div>
               <div className={classes.marginTop} style={{float: "right"}}>
                   <Typography variant="h4">
                       $ 19.99
                   </Typography>
               </div>

            </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.cardPadding}>
        <Card className={classes.cardRoot}>
            <CardActionArea>
            <CardMedia
            className={classes.media}
              src="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              image="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              title="Paella dish"
            />
            <CardContent >
              <Typography variant="subtitle2">
                Google speardsheets-databse for database
              </Typography>
              <Typography className={classes.marginTop} variant="caption">
                Trainer name
              </Typography>
               <div className={classes.marginTop} style={{display:"flex"}}>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <Typography variant="subtitle1">
                   4.5
                 </Typography>
                 <Typography variant="subtitle1">
                   (8)
                 </Typography>
               </div>
               <div className={classes.marginTop} style={{float: "right"}}>
                   <Typography variant="h4">
                       $ 19.99
                   </Typography>
               </div>

            </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.cardPadding}>
        <Card className={classes.cardRoot}>
            <CardActionArea>
            <CardMedia
            className={classes.media}
              src="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              image="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              title="Paella dish"
            />
            <CardContent >
              <Typography variant="subtitle2">
                Google speardsheets-databse for database
              </Typography>
              <Typography className={classes.marginTop} variant="caption">
                Trainer name
              </Typography>
               <div className={classes.marginTop} style={{display:"flex"}}>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <Typography variant="subtitle1">
                   4.5
                 </Typography>
                 <Typography variant="subtitle1">
                   (8)
                 </Typography>
               </div>
               <div className={classes.marginTop} style={{float: "right"}}>
                   <Typography variant="h4">
                       $ 19.99
                   </Typography>
               </div>

            </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.cardPadding}>
        <Card className={classes.cardRoot}>
            <CardActionArea>
            <CardMedia
            className={classes.media}
              src="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              image="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              title="Paella dish"
            />
            <CardContent >
              <Typography variant="subtitle2">
                Google speardsheets-databse for database
              </Typography>
              <Typography className={classes.marginTop} variant="caption">
                Trainer name
              </Typography>
               <div className={classes.marginTop} style={{display:"flex"}}>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <Typography variant="subtitle1">
                   4.5
                 </Typography>
                 <Typography variant="subtitle1">
                   (8)
                 </Typography>
               </div>
               <div className={classes.marginTop} style={{float: "right"}}>
                   <Typography variant="h4">
                       $ 19.99
                   </Typography>
               </div>

            </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.cardPadding}>
        <Card className={classes.cardRoot}>
            <CardActionArea>
            <CardMedia
            className={classes.media}
              src="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              image="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              title="Paella dish"
            />
            <CardContent >
              <Typography variant="subtitle2">
                Google speardsheets-databse for database
              </Typography>
              <Typography className={classes.marginTop} variant="caption">
                Trainer name
              </Typography>
               <div className={classes.marginTop} style={{display:"flex"}}>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <Typography variant="subtitle1">
                   4.5
                 </Typography>
                 <Typography variant="subtitle1">
                   (8)
                 </Typography>
               </div>
               <div className={classes.marginTop} style={{float: "right"}}>
                   <Typography variant="h4">
                       $ 19.99
                   </Typography>
               </div>

            </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </Slider>
        </TabPanel>



        <TabPanel value={value} index={2}>
        <Slider {...settings}>
        <div className={classes.cardPadding}>
          <Card className={classes.cardRoot}>
            <CardActionArea>
            <CardMedia
            className={classes.media}
              src="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              image="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              title="Paella dish"
            />
            <CardContent >
              <Typography variant="subtitle2">
                Google speardsheets-databse for database
              </Typography>
              <Typography className={classes.marginTop} variant="caption">
                Trainer name
              </Typography>
               <div className={classes.marginTop} style={{display:"flex"}}>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <Typography variant="subtitle1">
                   4.5
                 </Typography>
                 <Typography variant="subtitle1">
                   (8)
                 </Typography>
               </div>
               <div className={classes.marginTop} style={{float: "right"}}>
                   <Typography variant="h4">
                       $ 19.99
                   </Typography>
               </div>

            </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.cardPadding}>
        <Card className={classes.cardRoot}>
            <CardActionArea>
            <CardMedia
            className={classes.media}
              src="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              image="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              title="Paella dish"
            />
            <CardContent >
              <Typography variant="subtitle2">
                Google speardsheets-databse for database
              </Typography>
              <Typography className={classes.marginTop} variant="caption">
                Trainer name
              </Typography>
               <div className={classes.marginTop} style={{display:"flex"}}>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <Typography variant="subtitle1">
                   4.5
                 </Typography>
                 <Typography variant="subtitle1">
                   (8)
                 </Typography>
               </div>
               <div className={classes.marginTop} style={{float: "right"}}>
                   <Typography variant="h4">
                       $ 19.99
                   </Typography>
               </div>

            </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.cardPadding}>
        <Card className={classes.cardRoot}>
            <CardActionArea>
            <CardMedia
            className={classes.media}
              src="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              image="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              title="Paella dish"
            />
            <CardContent >
              <Typography variant="subtitle2">
                Google speardsheets-databse for database
              </Typography>
              <Typography className={classes.marginTop} variant="caption">
                Trainer name
              </Typography>
               <div className={classes.marginTop} style={{display:"flex"}}>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <Typography variant="subtitle1">
                   4.5
                 </Typography>
                 <Typography variant="subtitle1">
                   (8)
                 </Typography>
               </div>
               <div className={classes.marginTop} style={{float: "right"}}>
                   <Typography variant="h4">
                       $ 19.99
                   </Typography>
               </div>

            </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.cardPadding}>
        <Card className={classes.cardRoot}>
            <CardActionArea>
            <CardMedia
            className={classes.media}
              src="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              image="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              title="Paella dish"
            />
            <CardContent >
              <Typography variant="subtitle2">
                Google speardsheets-databse for database
              </Typography>
              <Typography className={classes.marginTop} variant="caption">
                Trainer name
              </Typography>
               <div className={classes.marginTop} style={{display:"flex"}}>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <Typography variant="subtitle1">
                   4.5
                 </Typography>
                 <Typography variant="subtitle1">
                   (8)
                 </Typography>
               </div>
               <div className={classes.marginTop} style={{float: "right"}}>
                   <Typography variant="h4">
                       $ 19.99
                   </Typography>
               </div>

            </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.cardPadding}>
        <Card className={classes.cardRoot}>
            <CardActionArea>
            <CardMedia
            className={classes.media}
              src="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              image="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              title="Paella dish"
            />
            <CardContent >
              <Typography variant="subtitle2">
                Google speardsheets-databse for database
              </Typography>
              <Typography className={classes.marginTop} variant="caption">
                Trainer name
              </Typography>
               <div className={classes.marginTop} style={{display:"flex"}}>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <Typography variant="subtitle1">
                   4.5
                 </Typography>
                 <Typography variant="subtitle1">
                   (8)
                 </Typography>
               </div>
               <div className={classes.marginTop} style={{float: "right"}}>
                   <Typography variant="h4">
                       $ 19.99
                   </Typography>
               </div>

            </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={classes.cardPadding}>
        <Card className={classes.cardRoot}>
            <CardActionArea>
            <CardMedia
            className={classes.media}
              src="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              image="https://img-a.udemycdn.com/course/240x135/2926670_86f2.jpg"
              title="Paella dish"
            />
            <CardContent >
              <Typography variant="subtitle2">
                Google speardsheets-databse for database
              </Typography>
              <Typography className={classes.marginTop} variant="caption">
                Trainer name
              </Typography>
               <div className={classes.marginTop} style={{display:"flex"}}>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <StarBorderOutlined/>
                 <Typography variant="subtitle1">
                   4.5
                 </Typography>
                 <Typography variant="subtitle1">
                   (8)
                 </Typography>
               </div>
               <div className={classes.marginTop} style={{float: "right"}}>
                   <Typography variant="h4">
                       $ 19.99
                   </Typography>
               </div>

            </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </Slider>
        </TabPanel>
      </div>
    </div>
  );
}
