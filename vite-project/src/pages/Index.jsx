import ListGroup from "../components/ListGroup";
import Form from "../components/Form";
import { useEffect, useState } from "react";
import Note from '../components/Note'
const Index = () => {
    const [notes, setNotes] = useState([])
    const [oldNote, setOldNote] = useState([])
    const getNotes = async () => {
        const response = await fetch('http://localhost:3000/api/notes')
        const result = await response.json()
        setNotes(result)

    }
    useEffect(() => {
        getNotes()
    }, [])

    const deleteNote = async (id) => {
        await fetch('http://localhost:3000/api/notes/' + id, {
            method: 'DELETE',
            mode: 'cors'
        })
        console.log(id)
    }
    const getNote = async(id) =>{
        const note = await fetch('http://localhost:3000/api/notes/'+id)
        const result = await note.json()
        console.log(result)
        setOldNote(result)
    }
    return (
        <div>
            <div>
                <Form oldNote={oldNote} ></Form>
            </div>
            <div>
                Notes
                <ListGroup>
                    {notes.map((note, index) => (
                        <Note key={index} id={note._id} deleteNote={deleteNote} getNote= {getNote} title={note.title} content={note.content}></Note>
                    ))}
                </ListGroup>
            </div>
        </div>
    );
}

export default Index;
