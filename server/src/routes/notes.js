import { Router } from "express";
import Note from "../models/notes.js";
import notes from "../models/notes.js";

const router = Router();

//solicitudes (request, response)
router.get('/notes', async (req, res) => {
    //res.send('hi')
    const {title} = req.query;
    let notes;
    if (title) {
        notes = await Note.find({title:{ $regex: title, $options: 'i'} });
    } else {
        notes = await Note.find()
    }
    res.send(notes);
})

router.post('/notes', async (req, res) => {
    const data = req.body
    
    const note = new Note({
        'title': req.body.title,
        'content': req.body.content,
        'time': data.timestamp = new Date().toLocaleTimeString(),
        'priority':req.body.priority
    })

    console.log(req.body)
    if(req.body.title!="" && req.body.content!="") {
        await note.save();
        res.send(note);
    } else {
        res.status(400).send('Obligatory fields missing')
    }

})

router.get('/notes/:id', async (req, res) => {
    const note = await Note.findOne({
        _id: req.params.id
    })
    res.send(note);
})

router.patch('/notes/:id', async (req, res) => {
    const data = req.body
    try {
        const note = await Note.findOne({
            _id: req.params.id
        })
        if (req.body.title) {
            note.title = req.body.title;
        }
        if (req.body.content) {
            note.content = req.body.content;
        }
        note.time = data.timestamp = new Date().toLocaleTimeString()
        note.save();
        res.send(note);
    } catch {
        res.send('Error')
    }
})


router.delete('/notes/:id', async (req, res) => {
    try {
        const note = await Note.deleteOne({
            _id: req.params.id
        })
        res.send(note);
    } catch {
        res.send('Error');
    }
})

export default router;