import app from './app.js';
import { Config } from './config/index.js';

const startServer = () => {
  const PORT = Config.PORT;
  try {
    // eslint-disable-next-line no-console
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(1);
  }
};

startServer();
