import React, {Fragment} from 'react';
import { Container, Box, Typography } from "@material-ui/core";
import Tabs from './Tabs';


function TabCources(){
    return (
        <Fragment>
           <Container className="mt-5">
               <div className="row">
               <div className="col-md-4 p-5" style={{backgroundColor:"#f7f8fa"}}>
                  <Box component="span" m="1" color="text.primary">
                      <Typography variant="h5">
                          The world's largest selection of cources
                      </Typography>
                      <Typography variant="caption">
                          Choose from over 100,000 online video cources with new additions publushed every month.

                      </Typography>
                  </Box>
               </div>
               <div className="col-md-8">
                   <Tabs />
               </div>
               </div>
           </Container>
        </Fragment>

    )
}


export default TabCources;
