import { useEffect, useState } from "react";
import ListGroup from "../components/ListGroup";
import Form from "../components/Form";
import Alert_info from "../components/Alert_info";
import Note from '../components/Note'
import { Typography, Grid, Container, Paper, TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const Index = () => {
    const [notes, setNotes] = useState([])
    const [oldNote, setOldNote] = useState([])
    const [inUse, setInUse] = useState(false)
    const getNotes = async () => {
        const response = await fetch('http://localhost:3000/api/notes')
        const result = await response.json()
        setNotes(result)

    }

    useEffect(() => {
        getNotes()
    }, [])

    if (inUse) {
        console.log("useeffect?")
        getNotes()
        setInUse(false)
    }

    const deleteNote = async (id) => {
        await fetch('http://localhost:3000/api/notes/' + id, {
            method: 'DELETE',
            mode: 'cors'
        })
        setInUse(true);
        console.log(inUse)
        console.log(id)
    }
    const getNote = async (id) => {
        const note = await fetch('http://localhost:3000/api/notes/' + id)
        const result = await note.json()
        console.log(result)
        setOldNote(result)
    }
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline>
                <Container sx={{ marginTop: '1rem' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={5}>
                            <Typography gutterBottom variant='h4' sx={{ display: 'flex', justifyContent: 'center' }}>Add note</Typography>

                            <Form oldNote={oldNote} getNotes={getNotes} ></Form>

                        </Grid>
                        <Grid item xs={12} sm={6} md={7}>
                            <TextField
                                id="filled-search"
                                label="Search"
                                type="search"
                                variant="filled"
                                sx={{width:'100%', mb:'1rem'}}
                            />
                            <Typography gutterBottom variant='h4' sx={{ display: 'flex', justifyContent: 'center' }}>Notes</Typography>
                            <ListGroup>
                                {notes.map((note, index) => (
                                    <Note key={index} id={note._id} deleteNote={deleteNote} getNote={getNote} title={note.title} content={note.content} time={note.time}></Note>
                                ))}
                            </ListGroup>
                        </Grid>
                    </Grid>
                </Container>
            </CssBaseline>
        </ThemeProvider>
    );
}

export default Index;
