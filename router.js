const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const InfoRouter = require("./infoschema");

//create

router.post("/",async(req,res)=>{
      
    var data =new InfoRouter({
        Name:req.body.Name,
        Question:req.body.Question
        
    });
    await data.save();
    res.json(data);
})

//getAll

router.get("/",async(req,res)=>{
    var findData =await InfoRouter.find();
    res.json(findData);
})

//update
router.put("/update",async(req,res)=>{
    var update = await InfoRouter.update({_id:req.body._id},{$set:{
        Name:req.body.Name,
        Question:req.body.Question
        
    }});
    res.json(update);
})

//delete

router.delete("/del/:id",async(req,res)=>{
    var delData =await InfoRouter.findByIdAndRemove(req.params.id).then(e=>{
        res.json({message:"Deleted succesfully"})
    })
})



router.get("/",(req,res)=>{
    res.json("I am from router file");
})

module.exports = router;