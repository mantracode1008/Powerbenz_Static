
import { Client } from 'ssh2';

const config = {
    host: '145.223.22.204',
    port: 22,
    username: 'root',
    password: 'MantraGDR@1008'
};

const conn = new Client();
conn.on('ready', () => {
    console.log('Client :: ready');
    conn.exec('grep -r "server_name" /etc/nginx/sites-enabled/', (err, stream) => {
        if (err) {
            // Fallback to simpler check
            conn.exec('ls -la /etc/nginx/sites-enabled/', (err2, stream2) => {
                if (err2) { conn.end(); return; }
                stream2.on('data', (d) => console.log('SITES: ' + d));
                stream2.on('close', () => conn.end());
            });
            return;
        }
        stream.on('close', (code, signal) => {
            console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
            // Also grep for root to find the path
            conn.exec('grep -r "root" /etc/nginx/sites-enabled/', (err3, stream3) => {
                if (err3) { conn.end(); return; }
                stream3.on('data', (d) => console.log('ROOTS: ' + d));
                stream3.on('close', () => conn.end());
            });
        }).on('data', (data) => {
            console.log('SERVER NAMES:');
            console.log(data.toString());
        }).stderr.on('data', (data) => {
            console.log('STDERR: ' + data);
        });
    });
}).connect(config);
