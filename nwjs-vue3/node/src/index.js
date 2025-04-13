import fs from 'fs';
import path from 'path';
import file from './file.js';

function exec() {
    window.nodeObj = {
        fs,
        path,
        file,
    }
}

exec();
