import Note from "./Note";
import { Container, Box } from "@mui/material";
const ListGroup = ({children}) => {
    return (
        <Box sx={{width:'100%', mt:'1rem', height:'70vh', overflowY:'scroll'}}>
            {children}
        </Box>
    );
}

export default ListGroup;