import { useEffect, useState } from "react";
import { Box, TextField, Button, CardContent, Typography, CardActions, Card } from '@mui/material';

import Priority_selector from "./Priority_selector";
import Alert_button from "./Alert_button";
import Snackbar from '@mui/material/Snackbar';

const Form = ({ oldNote, getNotes }) => {
   
    const [note, setNote] = useState({
        title: '',
        content: '',
        priority: ''
    })
    const [update, setUpdate] = useState(null)
    const [error, setError] = useState(null)
    const [priority, setPriority] = useState("")
    const changeHandler = (event) => {
        let newNote = {
            ...note,
            [event.target.name]: event.target.value,
            [event.target.name]: event.target.value,
        }
        setNote(prevNote => ({...prevNote, ...newNote}))
        
    }

    const saveNote = async () => {
        let URL = ''
        let params = {}
        
       
        if (note._id) {
            URL = 'http://localhost:3000/api/notes/' + note._id
            params = {
                method: 'PATCH',
                body: JSON.stringify({...note, priority:priority}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        } else {
            URL = 'http://localhost:3000/api/notes/'
            params = {
                method: 'POST',
                body: JSON.stringify({...note, priority:priority}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            
        }
        try {
            const response = await fetch(URL, params)
            if (!response.ok) {
                // Si la respuesta no es correcta (status >= 400), lanzar un error
                throw new Error(response.statusText);
            } else {
                console.log(response.statusText)
                setUpdate('Note saved')
                setTimeout(() => setUpdate(null), 2000); // Ocultar el mensaje después de 3 segundos
            }
            setError(null);
        } catch (error) {
            console.log(error.message)
            setError('Remember to complete any field');
        }
        getNotes()
    }
    const onSubmit = (event) => {
        event.preventDefault();
        saveNote()
        setNote({
            'title': '',
            'content': ''
        })
        setPriority("")
        
    }
    useEffect(() => {
        setNote({ ...note, ...oldNote })
        setUpdate(null)
        setPriority(oldNote.priority)
    }, [oldNote])

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'inherit', boxShadow: 'none' }}>
            <Box sx={{ paddingTop: '1rem', minWidth: '100%' }}>
                <form action="" onSubmit={onSubmit} className='form-mod'>

                    <Box>
                        <TextField
                            required
                            id="outlined-controlled"
                            label="Title"
                            value={note.title}
                            onChange={changeHandler}
                            name='title'
                            variant="outlined"
                            multiline
                            sx={{ marginBottom: '1rem', minWidth: '100%' }}
                        />
                    </Box>
                    <Box>
                        <TextField
                            required
                            id="outlined-controlled"
                            label="Content"
                            value={note.content}
                            onChange={changeHandler}
                            name='content'
                            variant="outlined"
                            multiline
                            sx={{ marginBottom: '1rem', minWidth: '100%' }}
                            rows={4}
                        />
                    </Box>
                    <Priority_selector setPriority={setPriority} priority={priority} name="priority"></Priority_selector>
                    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 0 }}>
                        {note._id
                            ? <Alert_button state='update' update={update}></Alert_button>
                            : <Alert_button state='save' update={update}></Alert_button>
                        }
                    </Box>
                </form>
            </Box>
        </Box>
    )
}

export default Form;