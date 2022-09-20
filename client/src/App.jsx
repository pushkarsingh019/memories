import React from "react";

// importing material ui components
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";

import memories from "../src/images/memories.png";

function App(){

    return(

        <Container maxWidth="lg" >
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Memories</Typography>
                <img src="{memories}" alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid>

                    </Grid>
                </Container>
            </Grow>
        </Container>

        
    )
}

export default App;