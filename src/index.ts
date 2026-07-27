import { getCardByName } from "./services/scryfallClient.js";
import type { Request, Response } from "express";
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/card/:name', async (req: Request, res: Response) => {
    if (typeof req.params.name !== 'string') {
        res.status(400).json({ error: 'Invalid name parameter' });
        return;
    }
    const card = await getCardByName(req.params.name);
    res.json(card);
});