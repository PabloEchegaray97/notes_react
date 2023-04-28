import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Hidden } from '@mui/material';

/** 
 * <CardContent>
<Typography gutterBottom variant="h5" component="div">
Lizard
</Typography>
<Typography variant="body2" color="text.secondary">
Lizards are a widespread group of squamate reptiles, with over 6,000
species, ranging across all continents except Antarctica
</Typography>
</CardContent>
* **/
const Note = ({ title, content, id, deleteNote, getNote }) => {
    console.log(typeof(content))
    let contenido = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    return (
        <Card className='font-mod card-custom'>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>{title}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
                <CardActions>
                <Button size='small' onClick={(e) => getNote(id)}>edit</Button>
                <Button size='small' onClick={(e) => deleteNote(id)}>delete</Button>
                </CardActions>
            </CardContent>
            
        </Card>
    );
}

export default Note;