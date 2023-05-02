import { useEffect, useState } from "react";
import { Box, TextField, Button, CardContent, Typography, CardActions, Card } from '@mui/material';
import Alert_info from "./Alert_info";
import Flag_rating from "./Flag_rating";

const Form = ({ oldNote, getNotes }) => {
    const [value, setValue] = useState(0)
    const [note, setNote] = useState({
        title: '',
        content: '',
        priority: ''
    })
    const [update, setUpdate] = useState(null)
    const [error, setError] = useState(null)
    const [rating, setRating] = useState(false)

    const handleChildValueChange = (newValue) => {
 
        setValue(newValue)

    };

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
                body: JSON.stringify({...note, priority:value}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        } else {
            URL = 'http://localhost:3000/api/notes/'
            params = {
                method: 'POST',
                body: JSON.stringify({...note, priority:value}),
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
                setRating(!rating)
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

    }

    useEffect(() => {
        setNote({ ...note, ...oldNote })
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
                    <p name='priority' value={value}>soy la prioridad {value}</p>
                    <Flag_rating rating={rating} name="priority" onValueChange={handleChildValueChange}></Flag_rating>
                    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 0 }}>
                        {note._id
                            ? <Button size='large' type="submit" sx={{ width: '100%', background: '#4285F4', color: '#fafafa', '&:hover': { bgcolor: '#fafafa', color: '#303030' } }}>update</Button>
                            : <Button size='large' type="submit" sx={{ width: '100%', background: '#4285F4', color: '#fafafa' }}>save</Button>
                        }
                    </Box>
                </form>

                {error && <Alert_info severity="warning" color="warning" content={error}></Alert_info>}
                {update && <Alert_info severity="success" color="success" content={update}></Alert_info>}
            </Box>
        </Box>
    )
}

export default Form;