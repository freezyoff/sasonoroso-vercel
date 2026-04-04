import express, {} from 'express';
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('TypeScript with Express');
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
export default app;
//# sourceMappingURL=index.js.map