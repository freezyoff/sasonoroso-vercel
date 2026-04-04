import express, {type Request, type Response} from 'express';

const app = express();
const PORT: number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('TypeScript with Express');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app