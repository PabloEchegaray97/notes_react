const Note = ({title, content, id, deleteNote, getNote}) => {
    return (
    <>
        <div>{title}</div>
        <div>{content}</div>
        <button onClick={(e)=>getNote(id)}>edit</button>
        <button onClick={(e)=>deleteNote(id)}>delete</button>
    </>
    );
}

export default Note;