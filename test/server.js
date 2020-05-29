const app = require('express')();

app.get('/api/1', () => console.log('/api/1'));
app.put('/api/1', () => console.log('/api/1'));
app.post('/api/1', () => console.log('/api/1'));
app.delete('/api/1', () => console.log('/api/1'));

app.get('/api/2', () => console.log('/api/2'));
app.put('/api/2', () => console.log('/api/2'));
app.post('/api/2', () => console.log('/api/2'));
app.delete('/api/2', () => console.log('/api/2'));
module.exports = app;
