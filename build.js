const fs = require('fs');
const path = require('path');

// Source and destination directories
const srcDir = __dirname;
const destDir = path.join(__dirname, 'dist');

// Function to copy files and directories
function copyFiles(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  fs.readdirSync(src).forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    if (item !== 'dist' && item !== 'node_modules' && item !== 'package-lock.json' && item !== 'build.js') {
      if (fs.lstatSync(srcPath).isDirectory()) {
        copyFiles(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  });
}

// Remove and recreate the destination directory
fs.rmSync(destDir, { recursive: true, force: true });
fs.mkdirSync(destDir);

// Copy files from the source to the destination directory
copyFiles(srcDir, destDir);

console.log('Build complete.');
