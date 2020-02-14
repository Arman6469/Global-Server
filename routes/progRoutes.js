const express = require('express');
const router = new express.Router();

const Prog = require('../db/models/Prog-model');

router.post('/', async(req, res) =>{
    const prog = new Prog(req.body);

    if(!req.body.title) return res.status(400).json({message: 'Title is required'});
    if(!req.body.img) return res.status(400).json({message: 'Image is required'});
    if(!req.body.iravichak) return res.status(400).json({message: 'Iravichak is required'});
    if(!req.body.makardak) return res.status(400).json({message: 'Makardak is required'});
    if(!req.body.transition) return res.status(400).json({message: 'Transition is required'});
    if(!req.body.language) return res.status(400).json({message: 'Language is required'});
    if(!req.body.fee) return res.status(400).json({message:'Fee is required'});
    if(!req.body.maingif) return res.status.json({message:'Maingif is required'});
    if(!req.body.step1) return res.status.json({message: 'Step1 is required'});
    if(!req.body.step2) return res.status.json({message: 'Step2 is required'});
    if(!req.body.step3) return res.status.json({message: 'Step3 is required'});
    if(!req.body.gif1) return res.status.json({message: 'Gif1 is required'});
    if(!req.body.gif2) return res.status.json({message: 'Gif2 is required'});
    if(!req.body.gif3) return res.status.json({message: 'Gif3 is required'});
    if(!req.body.desc1) return res.status.json({message: 'Desc1 is required'});
    if(!req.body.desc2) return res.status.json({message: 'Desc2 is required'});
    if(!req.body.desc3) return res.status.json({message: 'Desc3 is required'});
    if(!req.body.description) return res.status.json({message: 'Description is required'});

    try{
        await prog.save();
        res.status(201).json(prog)
    }catch(error){
        res.status(500).json({message: 'Bad request'});
    }
});

router.get('/', async(req, res) => {
    try{
        let progs = await Prog.find();
        if(req.query.title){
            progs = progs.filter(prog => 
                prog.title.toLowerCase().includes(req.query.title.toLowerCase()),
                );
        }
        res.json(progs);
    }catch(error){
        res.status(500).json({message: 'Bad request'});
    }
});
router.get('/:id', async (req, res) => {
    try {
        const prog = await Prog.findById(req.params.id);
        if(!prog) return res.status(404).json({message: 'Item not found'})
        res.json(prog)
    } catch (error) {
        res.status(500).json({message: 'Bad request'})
    }
});
router.patch('/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['title', 'img', 'iravichak', 'makardak', 'transition', 'language', 'fee', 'description']
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if(!isValidOperation) return res.status(400).json({message: 'Invalid operation'})

    try {
        const prog = await Prog.findByIdAndUpdate(req.params.id , req.body, {
            new: true,
            runValidators: true,
        });

        if(!prog) return res.status(404).json({message: 'Item not found'});

        res.json(prog);
    } catch (error) {
        res.status(500).json({message: 'Bad request'});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const prog = await Prog.findByIdAndDelete(req.params.id);

        if(!prog) return res.status(404).json({message: 'Item not found'})
        res.json(prog)
    } catch (error) {
        res.status(500).json({message: 'Bad request'});
    }
})


module.exports = router;