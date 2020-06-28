const app = require('./lib/app');
const routes = require('./routes');

const port = process.env.PORT || 3000;
routes(app);

app.listen(port, () => {
  console.log(`CORS-enabled web server listening on port ${port}`);
});
