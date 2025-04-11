const config = require("./config/configure");
const App = require("./app");

//import port
const port = config.app.app_port;

App.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
