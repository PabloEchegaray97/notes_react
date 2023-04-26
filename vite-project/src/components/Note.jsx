const Note = ({title, content, id}) => {
    return (
    <div>
        <div>{title}</div>
        <div>{content}</div>
        <button>edit</button>
        <button>delete</button>
    </div>
    );
}

export default Note;