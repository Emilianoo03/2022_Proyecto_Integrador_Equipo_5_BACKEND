import app from './server';
import dotenv from 'dotenv';

dotenv.config();

app.listen(4000, () => {
  console.log('Server started on port 4000');
});