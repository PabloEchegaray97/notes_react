import * as React from 'react';
import { Box, CardMedia, Button, CardContent, Typography, CardActions, Card, Chip } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag';
const Note = ({ title, content, id, deleteNote, getNote, time, priority }) => {

    return (
        <Card className='font-mod card-custom' sx={{ width: '100%' }}>
            <CardContent>
                <Typography  variant='h4'>{title}</Typography>
                <Typography variant="caption" color="text.secondary">
                </Typography>
                {priority == '1' && <Chip
                    label="low"
                    icon={<FlagIcon />}
                    color={'success'}
                    size='small'
                    sx={{color: 'white', mb:'1rem'}}
                />}
                {priority == '2' && <Chip
                    label="medium"
                    icon={<FlagIcon />}
                    color={'warning'}
                    size='small'
                    sx={{color: 'white', mb:'1rem'}}
                />}
                {priority == '3' && <Chip
                    label="high"
                    icon={<FlagIcon />}
                    color={'error'}
                    size='small'
                    sx={{color: 'white', mb:'1rem'}}
                />}
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