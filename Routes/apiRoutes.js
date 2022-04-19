const router = require("express").Router();
const storeData = require("../db/storeData");

// GET "notes" read the json file and return all saved notes as JSON
router.get("/notes",(req, res)=>{ 
  storeData
  .getNotes()
  .then((notes)=>{
    return res.json(notes);
  })
  .catch((err)=> res.status(500).json(err));
});

// POST "notes" receive new note save on the request body
router.post('/notes', (req, res) => {
storeData
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete('/notes/:id', (req, res) => {
  storeData
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});
 

module.exports = router;
