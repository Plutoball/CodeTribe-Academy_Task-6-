//

import express from "express";
import type { Item } from '../models/item.js';
import { sendError } from '../utils/errorHandler.js';

const router = express.Router();
let items: Item[] = [];
let nextId = 1;

//GET all items
router.get("/", (req, res) => {
    res.json(items);
});

//GET item by ID
router.get("/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);
    if (!item) return sendError(res, 404, "Item not found");
    res.json(item);
});

//POST new item
router.post("/", (req, res) => {
    const { name, quantity, purchased } = req.body;
    if (!name || !quantity || purchased === undefined){
        return sendError(res, 400, "Missing fields");
    }
    const newItem: Item = { id: nextId++, name, quantity, purchased};
    items.push(newItem);
    res.status(201).json(newItem);
});

//PUT update item
router.put("/:id", (req, res) => {
    const id =  parseInt(req.params.id);
    const item = items.find(i => i.id === id);
    if (!item) return sendError(res, 404, "Item not found");

    const { name, quantity, purchased } = req.body;
    if (!name || !quantity || purchased === undefined){
        return sendError(res, 400, "Missing fields");
    }

    item.name =  name;
    item.quantity = quantity;
    item.purchased = purchased;
    res.json(item);
});

//DELETE item
router.delete("/:id", (req,res) =>{
    const id = parseInt(req.params.id);
    const index = items.findIndex(i => i.id === id);
    if (index === -1) return sendError(res, 404, "Item not found");

    items.splice(index, 1);
    res.status(204).send();
});

export default router;