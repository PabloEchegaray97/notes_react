import Box from '@mui/material/Box';
import FlagIcon from '@mui/icons-material/Flag';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import Chip from '@mui/material/Chip';


const Flag_rating = ({rating}) => {
    const [ratingValue, setRatingValueInternal] = useState(rating);
    const handleChange = (event, newValue) => {
        setRatingValueInternal(newValue);
        console.log(newValue)
    };
    const updateRating = () => {
        setRatingValueInternal(0)
    }
    useEffect(() => {
        console.log(rating)
        updateRating(0)
    }, [rating])
    return (
        <Box>
            <Typography variant="overline" gutterBottom sx={{display:'flex', justifyContent:'center'}}>Priority</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: '1rem' }}>
                <Chip
                    label="Low"
                    icon={<FlagIcon />}
                    color={ratingValue === 1 ? 'success' : 'default'}
                    onClick={() => handleChange(null, 1)}
                    clickable={true}
                    sx={{ mr: 2, color: 'white' }}
                />
                <Chip
                    label="Medium"
                    icon={<FlagIcon />}
                    color={ratingValue === 2 ? 'warning' : 'default'}
                    onClick={() => handleChange(null, 2)}
                    clickable={true}
                    sx={{ mr: 2, color: 'white' }}
                />
                <Chip
                    label="High"
                    icon={<FlagIcon />}
                    color={ratingValue === 3 ? 'error' : 'default'}
                    onClick={() => handleChange(null, 3)}
                    clickable={true}
                    sx={{ color: 'white' }}
                />
            </Box>

        </Box>
    );
};

export default Flag_rating;
