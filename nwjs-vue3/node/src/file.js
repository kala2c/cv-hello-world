import fs from 'fs';
import path from 'path';

/**
 * 文件操作相关方法
 */

/**
 * 递归读取目录 并按照regex筛选出需要的文件路径
 * @param dirPath
 * @param regex
 */
export function readDirRecursively(dirPath, regex) {
    const filter = [];
    const files =  fs.readdirSync(dirPath);
    for (const file of files) {
        const tempPath = path.resolve(dirPath, file);
        const stat = fs.statSync(tempPath);
        if (stat.isDirectory()) {
            const tempFilter = readDirRecursively(tempPath, regex);
            filter.push(...tempFilter);
        } else if (stat.isFile()) {
            const extname = path.basename(tempPath);
            if (regex.test(extname)) {
                filter.push(tempPath);
            }
        }
    }
    return filter;
}

/**
 * 拷贝文件
 * 兼容低版本node
 * @param srcPath
 * @param desPath
 */
export function copyFile(srcPath, desPath) {
    return new Promise((resolve, reject) => {
        try {
            const writeStream = fs.createWriteStream(desPath);
            const readStream = fs.createReadStream(srcPath);
            readStream.on("error", reject);
            readStream.on("close", resolve);
            writeStream.on("error", reject);
            writeStream.on("finish", () => {
                console.log("文件复制成功!");
            });
            //将原文件流导向目标文件流
            readStream.pipe(writeStream);
        } catch (error) {
            console.error(error);
        }
    });
}

/**
 * 递归拷贝目录
 * @param srcPath
 * @param desPath
 */
export async function copyDirectory(srcPath, desPath) {
    try {
        if (!fs.existsSync(desPath)) {
            fs.mkdirSync(desPath);
        }
        // 读取源目录中的所有文件和子目录
        const files = fs.readdirSync(srcPath);
        for (const file of files) {
            const copyPath = path.join(srcPath, file);
            const destPath = path.join(desPath, file);
            const stats = fs.statSync(copyPath);
            if (stats.isDirectory()) {
                // 如果是子目录，递归拷贝
                await copyDirectory(copyPath, destPath);
            } else {
                // 如果是文件且不存在，直接拷贝
                if (!fs.existsSync(destPath)) {
                    await copyFile(copyPath, destPath);
                }
            }
        }
    } catch (error) {
        console.error(`Error copying directory: ${error.message}`);
    }
}

/**
 * 下载文件
 * @param url
 * @param saveDir
 * @param fileName
 */
export async function downloadFilePro(url, saveDir, fileName = '') {
    console.log('开始下载文件', url);
    const buffer = await download(url);
    // 从buffer中获取文件格式
    const typeInfo = await fileTypeFromBuffer(buffer);
    const ext = typeInfo.ext || '';
    // 写入文件
    const rand = 1000 + Math.floor(Math.random() * 9000);
    fileName = fileName || `${timeNo()}_${rand}.${ext}`;
    const filePath = path.resolve(saveDir, fileName);
    fs.writeFileSync(filePath, buffer);
    return { filePath, fileName };
}



export default {
    copyFileSync: copyFile,
    copyDirectorySync: copyDirectory,
    downloadFilePro
}
