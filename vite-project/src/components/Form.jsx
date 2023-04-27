import { useEffect, useState } from "react";

const Form = ({ oldNote }) => {
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
        <div className="card">
            <div className="card-header">
                Add note
            </div>
            <div className="card-body">
                <form action="" onSubmit={onSubmit}>
                    <div className="form-group">
                        <input name='title' value={note.title} onChange={changeHandler} type="text" placeholder='Title' className="form-control" />
                    </div>
                    <div className="form-group">
                        <textarea name="content" value={note.content} onChange={changeHandler} id="" cols="30" rows="10" placeholder="content"></textarea>
                    </div>
                    {note._id
                        ? <button type="submit" >update</button>
                        : <button type="submit" >save</button>
                    }
                </form>
            </div>
        </div>
    )
}

export default Form;