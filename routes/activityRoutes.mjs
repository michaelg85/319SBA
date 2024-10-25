//Import
import express from "express";
import Activity from '../models/activitySchema.mjs'
const router = express.Router();

//Test Route
// router.get("/", (req, res) => {
//   res.send("Testing!!");
// });


//Create
router.post('/', async (req, res)=>{
    try {
        const newActivity = new Activity(req.body);

        await newActivity.save()

        res.json(newActivity);

    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "Server Error"})
    }
})


//Read
router.get('/', async (req, res)=>{
    try {
        const allActivities = await Activity.find({})

        res.json(allActivities)

    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "Server Error"})
    }
})


//Update
router.put('/:id', async (req, res)=>{
    try {
        let updatedActivity = await Activity.findByIdAndUpdate(req.params.id, req.body, {new: true})
        
        res.json(updatedActivity)

    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "Server Error"})
    }
})


//Delete
router.delete('/:id', async (req, res)=>{
    try {
        let deletedActivity = await Activity.findByIdAndDelete(req.params.id);
        
        res.json(deletedActivity);
    } catch (err) {
        console.error(err)
        res.status(500).json({msg: "Server Error"})
    }
})


//Export
export default router;
