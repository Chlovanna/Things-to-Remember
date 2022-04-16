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
router.post("/notes");
router.delete();


module.exports = router;
