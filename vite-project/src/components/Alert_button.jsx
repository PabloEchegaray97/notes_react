import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useEffect } from 'react';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Alert_button = ({ state, style, update }) => {
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    
    useEffect (() => {
        if(update=="Note saved") {
            setOpen(true)
        }
    },[update])

    return (
                <>
                    <Button size='large' type="submit" sx={style}>
                        {state}
                    </Button>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Note saved successfully
                        </Alert>
                    </Snackbar>
                    
                </>
    );
}
export default Alert_button;