import Note from "./Note";
import { Container } from "@mui/material";
const ListGroup = ({children}) => {
    return (
        <Container sx={{width:'100%', paddingTop:'1rem', height:'80vh', overflowY:'scroll'}}>
            {children}
        </Container>
    );
}

export default ListGroup;