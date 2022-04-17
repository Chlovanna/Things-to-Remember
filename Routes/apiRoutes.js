const router = require("express").Router();
const storeData = require("../db/storeData");

router.get("/notes",(req, res)=>{ 
  storeData
  .getNotes()
  .then((notes)=>{
    return res.json(notes);
  })
  .catch((err)=> res.status(500).json(err));
});
router.post("/notes",(req, res)=>{
  storeData
 .addNote()
 .then(notes)
 {
   return res.json(notes);
 }
});
router.delete("/notes/: id", (req, res)=>{
  storeData
  .removeNote()

  return res.json(notes)
});


module.exports = router;
