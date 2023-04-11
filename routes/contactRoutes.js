const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.status(200).json({message: 'CONTACT MANAGER!'});
});

routes.get('/api/contacts', (req, res) => {
    res.status(200).json({message: 'GET ALL CONTACTS!'});
});

routes.post('/api/contacts', (req, res) => {
    res.status(200).json({message: 'CREATE CONTACT!'});
});

routes.get('/api/contacts/:id', (req, res) => {
    res.status(200).json({message: `GET CONTACT FOR ${req.params.id}`});
});

routes.put('/api/contacts/:id', (req, res) => {
    res.status(200).json({message: `UPDATED CONTACT FOR ${req.params.id}`});
});

routes.delete('/api/contacts/:id', (req, res) => {
    res.status(200).json({message: `DELETED CONTACT FOR ${req.params.id}`});
});


module.exports = routes;
