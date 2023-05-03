import Box from '@mui/material/Box';
import FlagIcon from '@mui/icons-material/Flag';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import Chip from '@mui/material/Chip';

const Flag_rating = ({ onValueChange, rating, value, oldValue, update}) => {
    const [ratingValue, setRatingValueInternal] = useState(0);
    useEffect(() => {
        setRatingValueInternal(0)
        onValueChange(0)
    }, [rating])

    useEffect(() => {
        setRatingValueInternal(oldValue)
    },[oldValue])
    
    const handleChipClick = (nvalue) => {
        
        setRatingValueInternal(nvalue);
        onValueChange(nvalue);
        
    };
    return (
        <Box>
            <Typography variant="overline" gutterBottom sx={{ display: 'flex', justifyContent: 'center' }}>Priority</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: '1rem' }}>
                <Chip
                    label="Low"
                    icon={<FlagIcon />}
                    color={ratingValue == 'low' ? 'success' : 'default'}
                    onClick={() => {
                        handleChipClick('low')

                    }}
                    clickable={true}
                    sx={{ mr: 2, color: 'white' }}
                />
                <Chip
                    label="Medium"
                    icon={<FlagIcon />}
                    color={ratingValue =='medium' ? 'warning' : 'default'}
                    onClick={() => {
                        handleChipClick('medium')
                    }}
                    clickable={true}
                    sx={{ mr: 2, color: 'white' }}
                />

                <Chip
                    label="High"
                    icon={<FlagIcon />}
                    color={ratingValue =='high' ? 'error' : 'default'}
                    onClick={() => {
                        handleChipClick('high')
                    }}
                    clickable={true}
                    sx={{ color: 'white' }}
                />
            </Box>
        </Box>
    );
};

export default Flag_rating;
