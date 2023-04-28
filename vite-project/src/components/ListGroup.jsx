import Note from "./Note";
import { Container } from "@mui/material";
const ListGroup = ({children}) => {
    return (
        <Container sx={{width:'100%', paddingTop:'1rem'}}>
            {children}
        </Container>
    );
}

export default ListGroup;