import Alert from '@mui/material/Alert';

const Alert_info = ({severity, color, content}) => {
    return (
        <Alert severity={severity} color={color} sx={{mt:'.5rem'}}>
            {content}
        </Alert>
    );
}
export default Alert_info