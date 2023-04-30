import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Note = ({ title, content, id, deleteNote, getNote, time }) => {
    console.log(typeof (content))
    return (
        <Card className='font-mod card-custom'>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>{title}</Typography>
                
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {content}
                </Typography>
                <Typography variant="caption" display="block"  sx={{color:'grey'}}>
                    Last update: {time}
                </Typography>
                <CardActions>
                    <Button size='medium' onClick={(e) => getNote(id)}>edit</Button>
                    <Button size='medium' onClick={(e) => deleteNote(id)}>delete</Button>
                </CardActions>
               
            </CardContent>

        </Card>
    );
}

export default Note;