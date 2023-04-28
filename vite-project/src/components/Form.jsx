import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
const Form = ({ oldNote, getNotes }) => {
    const [note, setNote] = useState({
        title: '',
        content: ''
    })
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
        await fetch(URL, params)
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
        <div className="bg-custom">
            
            <div className="card-body">
                <form action="" onSubmit={onSubmit}>
                    <div className="form-group">
                        <Input name='title' value={note.title} onChange={changeHandler} type="text" placeholder='Title'  sx={{ width: '20rem' }}/>
                    </div>
                    <div className="form-group">
                        <Input name='content' multiline value={note.content} onChange={changeHandler} type="text" placeholder='Content' sx={{ width: '20rem' }} />
                        
                    </div>
                    {note._id
                        ? <Button size='small' type="submit" >update</Button>
                        : <Button size='small' type="submit" >save</Button>
                    }
                </form>
            </div>
        </div>
    )
}

export default Form;