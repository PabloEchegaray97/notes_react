import { Grid, Container, Paper } from '@mui/material';
const Test_grid = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={5}>
                    <Paper style={{ height: '50px' }}>Elemento 1</Paper>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Paper style={{ height: '50px' }}>Elemento 2</Paper>
                </Grid>
                
            </Grid>
        </Container>
    );
}
export default Test_grid;