import { useState } from "react";

const Form = () => {
    const [note, setNote] = useState({
        title:'',
        content:''
    })
    const changeHandler = (event) => {
        let newNote = {
            [event.target.name]: event.target.value,
            [event.target.name]: event.target.value
        }
        //console.log(event.target.value)
        //console.log(event.target.name)
        setNote({...note,...newNote})
        console.log(note)
    }
    const saveNote = async() => {
        await fetch('http://localhost:3000/api/notes', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(note),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
    }
    const onSubmit = (event) => {
        event.preventDefault();
        saveNote()
    }

    return (
    <div className="card">
        <div className="card-header">
            Add note
        </div>
        <div className="card-body">
            <form action="" onSubmit={onSubmit}>
                <div className="form-group">
                    <input name= 'title' onChange={changeHandler} type="text" placeholder='Title' className="form-control" />
                </div>
                <div className="form-group">
                    <textarea name="content" onChange={changeHandler} id="" cols="30" rows="10" placeholder="content"></textarea>
                </div>
                <button type="submit" >add note</button>
            </form>
        </div>
    </div>
    )}

export default Form;