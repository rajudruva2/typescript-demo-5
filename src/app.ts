import express from 'express';
const app = express();
app.get('/', (_req, res) => res.json({service: 'product-service', status: 'running'}));
app.get('/health', (_req, res) => res.json({status: 'UP'}));
app.get('/api/products', (_req, res) => res.json([{ id: 1, name: 'Keyboard' }, { id: 2, name: 'Mouse' }]));
app.listen(Number(process.env.PORT || 3000), '0.0.0.0');
