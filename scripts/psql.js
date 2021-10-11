/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

const cp = require('child_process');

// Load environment variables (PGHOST, PGUSER, etc.)
require('../knexfile');

// Ensure that the SSL key file has correct permissions
if (process.env.PGSSLKEY) {
  cp.spawnSync('chmod', ['0600', process.env.PGSSLKEY], { stdio: 'inherit' });
}

// Launch interactive terminal for working with Postgres
cp.spawn('psql', { stdio: 'inherit' });
