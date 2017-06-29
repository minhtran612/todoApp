import express from 'express';
import Category from '../models/category';
import Item from '../models/item';
import util from 'util';

let router = express.Router();

router.post('/addCategory', (req, res) => {
    const  category_name  = req.body.data;

    Category.forge({category_name}, { hasTimestamps: false })
        .save()
        .then(category => res.json({ success: true }))
        .catch(err => res.status(500).json({ errors: err }))
});

router.get('/getCategoryList', (req, res) => {
  Category.forge().fetchAll().then(category => {
        return res.json({ category });
    });
});

router.post('/:id/addItem', (req, res) => {
    const  category_id = req.params.id;
    const  { item_name, item_description}  = req.body.data;

    Item.forge({todo_name: item_name, todo_description: item_description, category_id}, { hasTimestamps: true })
        .save()
        .then(category => res.json({ success: true }))
        .catch(err => res.status(500).json({ errors: err }))
});

router.get('/:id/showItem', (req, res) => {
    const  category_id = req.params.id;

    Item.query('where', 'category_id', '=', `${category_id}`)
        .fetchAll()
        .then(item => res.json({ item }))
        .catch(err => res.status(500).json({ errors: err }))
});



export default router;