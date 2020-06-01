const app = require('express')();
/**
 * sample server to test the spec generation with
 */
app.get('/:api/:1/:param/:ok', (req, res) => res.send('/api/1'));
app.put('/:api/:1/:param/:ok', (req, res) => res.send('/api/1'));
app.post('/:api/:1/:param/:ok', (req, res) => res.send('/api/1'));
app.delete('/:api/:1/:param/:ok', (req, res) => res.send('/api/1'));
app.get('/api/2/:ok/:param2', (req, res) => res.send('/api/2'));
app.put('/api/2/:ok/:param2', (req, res) => res.send('/api/2'));
app.post('/api/2/:ok/:param2', (req, res) => res.send('/api/2'));
app.delete('/api/2/:ok/:param2', (req, res) => res.send('/api/2'));
module.exports = app;
