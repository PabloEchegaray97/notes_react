import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
const Form = ({ oldNote, getNotes }) => {
    const [note, setNote] = useState({
        title: '',
        content: ''
    })
    const [error, setError] = useState(null)
    
    const changeHandler = (event) => {
        let newNote = {
            [event.target.name]: event.target.value,
            [event.target.name]: event.target.value
        }
        //console.log(event.target.value)
        //console.log(event.target.name)
        setNote({ ...note, ...newNote })
        console.log(note)
    }
    
    const saveNote = async () => {
        let URL = ''
        let params = {}
        if (note._id) {
            URL = 'http://localhost:3000/api/notes/' + note._id
            params = {
                method: 'PATCH',
                body: JSON.stringify(note),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        } else {
            URL = 'http://localhost:3000/api/notes/'
            params = {
                method: 'POST',
                body: JSON.stringify(note),
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
              }
            setError(null);
        } catch (error) {
            setError('No se pudo procesar la solicitud: ' + error.message);
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
        console.log(note)
    }, [oldNote])

    return (
        <Card sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', background:'inherit', boxShadow:'none'}}>
            <CardContent sx={{paddingTop:'1rem', minWidth:'100%'}}>
                <form action="" onSubmit={onSubmit} className='form-mod'>
                {error && <p>Error: {error}</p>}

                    <div className="form-group">
                        <TextField
                            id="outlined-controlled"
                            label="Title"
                            value={note.title}
                            onChange={changeHandler}
                            name='title'
                            variant="outlined"
                            multiline
                            sx={{ marginBottom: 1, minWidth: '100%' }}
                            
                        />
                    </div>
                    <div className="form-group">
                        <TextField
                            id="outlined-controlled"
                            label="Content"
                            value={note.content}
                            onChange={changeHandler}
                            name='content'
                            variant="outlined"
                            multiline
                            sx={{ marginBottom: 1, minWidth: '100%' }}
                            
                            rows={4}
                        />
                    </div>
                    <CardActions sx={{ display: 'flex', justifyContent: 'center', padding:0 }}>
                        {note._id
                            ? <Button size='large' type="submit" sx={{ width:'100%', background:'#4285F4', color:'#fafafa', '&:hover':{bgcolor:'#fafafa', color:'#303030'}}}>update</Button>
                            : <Button size='large' type="submit" sx={{width:'100%', background:'#4285F4', color:'#fafafa'}}>save</Button>
                        }
                    </CardActions>
                </form>
            </CardContent>
        </Card>
    )
}

export default Form;