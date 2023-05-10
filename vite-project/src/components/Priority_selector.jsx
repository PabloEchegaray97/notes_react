import Box from '@mui/material/Box';
import FlagIcon from '@mui/icons-material/Flag';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import Chip from '@mui/material/Chip';

const Priority_selector = ({setPriority, priority}) => {
    
    return (
        <Box>
            <Typography variant="overline" gutterBottom sx={{ display: 'flex', justifyContent: 'center' }}>Priority</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: '1rem' }}>
                <Chip
                    label="Low"
                    icon={<FlagIcon />}
                    color={priority == 'low' ? 'success' : 'default'}
                    onClick={() => {
                        setPriority("low")
                    }}
                    clickable={true}
                    sx={{ mr: 2, color: 'white' }}
                />
                <Chip
                    label="Medium"
                    icon={<FlagIcon />}
                    color={priority =='medium'  ? 'warning' : 'default'}
                    onClick={() => {
                        setPriority("medium")
                    }}
                    clickable={true}
                    sx={{ mr: 2, color: 'white' }}
                />

                <Chip
                    label="High"
                    icon={<FlagIcon />}
                    color={priority =='high'? 'error' : 'default'}
                    onClick={() => {
                        setPriority("high")
                    }}
                    clickable={true}
                    sx={{ color: 'white' }}
                />
            </Box>
        </Box>
    );
};

export default Priority_selector;
