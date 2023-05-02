import * as React from 'react';
import { Box, CardMedia, Button, CardContent, Typography, CardActions, Card } from '@mui/material';

const Note = ({ title, content, id, deleteNote, getNote, time }) => {
    console.log(typeof (content))
    return (
        <Card className='font-mod card-custom' sx={{ width: '100%' }}>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>{title}</Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {content}
                </Typography>
                <Typography variant="caption" display="block" sx={{ color: 'grey' }}>
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