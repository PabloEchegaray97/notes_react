import ListGroup from "../components/ListGroup";
import Form from "../components/Form";
import { useEffect, useState } from "react";
import Note from '../components/Note'
const Index = () => {
    const [notes, setNotes] = useState([])
    const getNotes = async () =>{
        const response = await fetch('http://localhost:3000/api/notes')
        const result = await  response.json()
        setNotes(result)
        
    }
    useEffect(() => {
        getNotes()
    },[])

    return (
        <div>
            <div>
                <Form></Form>
            </div>
            <div>
                Notes
                <ListGroup>
                    {notes.map((note,index) => <Note key={index} title={note.title} content={note.content}></Note>)}
                </ListGroup>
            </div>
        </div>
    );
}

export default Index;
