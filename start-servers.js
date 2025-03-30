// start-servers.js
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createInterface } from 'readline';

// Get the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to create a readline interface for user input
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to start the backend server
function startBackend() {
  console.log('\x1b[36m%s\x1b[0m', '🚀 Starting backend server...');
  
  const backend = spawn('node', ['app.js'], {
    cwd: __dirname,
    stdio: ['inherit', 'pipe', 'pipe']
  });
  
  backend.stdout.on('data', (data) => {
    console.log('\x1b[36m%s\x1b[0m', `[Backend] ${data.toString().trim()}`);
  });
  
  backend.stderr.on('data', (data) => {
    console.error('\x1b[31m%s\x1b[0m', `[Backend Error] ${data.toString().trim()}`);
  });
  
  backend.on('close', (code) => {
    console.log('\x1b[36m%s\x1b[0m', `Backend server exited with code ${code}`);
    process.exit();
  });
  
  return backend;
}

// Function to start the frontend server
function startFrontend() {
  console.log('\x1b[35m%s\x1b[0m', '🚀 Starting frontend server...');
  
  const frontend = spawn('npm', ['run', 'dev'], {
    cwd: __dirname,
    stdio: ['inherit', 'pipe', 'pipe']
  });
  
  frontend.stdout.on('data', (data) => {
    console.log('\x1b[35m%s\x1b[0m', `[Frontend] ${data.toString().trim()}`);
  });
  
  frontend.stderr.on('data', (data) => {
    console.error('\x1b[31m%s\x1b[0m', `[Frontend Error] ${data.toString().trim()}`);
  });
  
  frontend.on('close', (code) => {
    console.log('\x1b[35m%s\x1b[0m', `Frontend server exited with code ${code}`);
    process.exit();
  });
  
  return frontend;
}

// Start both servers
const backend = startBackend();
const frontend = startFrontend();

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n\x1b[33m%s\x1b[0m', 'Shutting down servers...');
  backend.kill();
  frontend.kill();
  rl.close();
  process.exit();
});

console.log('\x1b[32m%s\x1b[0m', '\n✅ Both servers are starting up. Press Ctrl+C to stop both servers.\n');
