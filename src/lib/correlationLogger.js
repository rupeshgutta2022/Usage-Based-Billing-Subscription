// Structured application logger
function info(msg, meta = {}) {
  console.log(JSON.stringify({ level: 'INFO', time: new Date().toISOString(), message: msg, ...meta }));
}

function error(msg, meta = {}) {
  console.error(JSON.stringify({ level: 'ERROR', time: new Date().toISOString(), message: msg, ...meta }));
}

module.exports = { info, error };
