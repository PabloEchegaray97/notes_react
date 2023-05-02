import * as React from 'react';
import { Box, CardMedia, Button, CardContent, Typography, CardActions, Card } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
const Note = ({ title, content, id, deleteNote, getNote, time, priority }) => {
    console.log(typeof (content))
    console.log("lalalala por aqui")
    console.log(priority)
    return (
        <Card className='font-mod card-custom' sx={{ width: '100%' }}>
            <CardContent>
                <Typography  variant='h4'>{title}</Typography>
                <Typography variant="caption" color="text.secondary">
                    <FlagIcon sx={{color:'red'}} fontSize='1rem'></FlagIcon> {priority}
                </Typography>
                
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {content}
                </Typography>
                <Typography variant="caption" sx={{ color: 'grey' }}>
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