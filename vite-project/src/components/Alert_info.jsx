import Alert from '@mui/material/Alert';

const Alert_info = ({severity, color}) => {
    return (
        <Alert severity={severity} color={color}>
            Remember to complete any field
        </Alert>
    );
}
export default Alert_info