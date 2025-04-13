import os from "os";
import path from "path";

/**
 * 应用程序基础信息
 * 本文件禁止引入其他文件，只能被其他文件引入
 */

const pt = os.platform();
// 基础变量
export const constant = {
    platform: pt, // 运行系统
    isWindows: pt === 'win32',
    isMac: pt === 'darwin',
    pathSep: path.sep, // 应用目录分割符
    version: '2.0.0',
}

const app = nw.App;
// 应用目录信息
export const appDirInfo = {
    // 应用数据路径
    dataDir: path.resolve(app.dataPath.split('nwjs-vue3')[0], 'nwjs-vue3'),
    // 应用运行目录
    appDir: path.dirname(process.execPath),
}
if (constant.isMac) {
    appDirInfo.appDir = appDirInfo.appDir.split('nwjs.app')[0];
}
