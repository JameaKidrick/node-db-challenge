const server = require('./server');

const PORT = process.env.PORT || 7000;

server.listen(PORT, () => {
  console.log(`\n=== LISTENING ON PORT ${PORT} ===\n`)
})