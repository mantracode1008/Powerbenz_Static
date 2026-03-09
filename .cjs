// Temporary script to forcefully delete files and directories via Node.js fs module
const fs = require('fs');
const path = require('path');

const baseDir = "f:\\Powerbenz_Static";
const dirsToRemove = [
    path.join(baseDir, "public", "plugins", "situ-design"),
    path.join(baseDir, "images"),
    path.join(baseDir, "src", "components", "materials")
];

const filesToRemove = [
    "build_error.txt", "dashboard_main.js", "dist.tar.gz",
    "explore_server.js", "index_placeholder.html", "login_chunk.js",
    "main_bundle.js", "main_style.css", "setup_ssh.ps1"
].map(f => path.join(baseDir, f));

console.log("Starting deletion process...");

dirsToRemove.forEach(dir => {
    if (fs.existsSync(dir)) {
        console.log(`Deleting directory: ${dir}`);
        try {
            fs.rmSync(dir, { recursive: true, force: true });
            console.log(`Successfully deleted: ${dir}`);
        } catch (e) {
            console.error(`Error deleting directory ${dir}:`, e.message);
        }
    }
});

filesToRemove.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`Deleting file: ${file}`);
        try {
            fs.unlinkSync(file);
            console.log(`Successfully deleted: ${file}`);
        } catch (e) {
            console.error(`Error deleting file ${file}:`, e.message);
        }
    }
});

console.log("Deletion process completed.");
