import ClipboardJS from "clipboard";
import { ElMessage } from "element-plus";

/**
 * 获取格式化时间
 * @returns {string}
 */
export function currentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

/**
 * 获取当前时间编码
 * @returns {string}
 */
export function timeNo() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

/**
 * 获取随机数
 * @param start 开始范围
 * @param end 结束范围
 * @param digit 小数位数
 */
export function rand(start, end, digit) {
    digit = digit || 0;
    const rate = Math.pow(10, digit);
    const number = Math.random() * (end - start) * rate + start * rate;
    return (number / rate).toFixed(digit) * 1;
}

/**
 * 随机字符串
 * @param length
 */
export function getRandomStr(length) {
    const str = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * str.length);
        result += str.charAt(randomIndex);
    }
    return result;
}

/**
 * 复制内容到粘贴板
 * @param text
 */
export function copyToClipboard(text) {
    const id = 'clip'+getRandomStr(6);
    const button = document.createElement('button');
    button.setAttribute('id', id);
    button.setAttribute('data-clipboard-text', text);
    button.style.display = 'none';
    document.body.appendChild(button);
    const clipboard = new ClipboardJS('#' + id);

    clipboard.on('success', function (e) {
        ElMessage.success('复制成功');
        e.clearSelection();
        document.getElementById(id)?.remove();
    });

    clipboard.on('error', function (e) {
        ElMessage.error('复制失败');
        document.getElementById(id)?.remove();
    });
    button.click();
}

/**
 * 将路径中的非法字符替换为-
 * @param path
 * @returns {string}
 */
export const replaceFlag = (path) => {
    console.log(path);
    // 低版本浏览器不支持 replaceAll
    path = path.replace(/ /g, '');
    path = path.replace(/（/g, '_');
    path = path.replace(/\(/g, '_');
    path = path.replace(/）/g, '_');
    path = path.replace(/\)/, '_');
    return path;
}

/**
 * 检查路径是否存在非法字符
 * @param path
 * @returns {boolean}
 */
export function checkPath(path) {
    const specFlag = [' ', '（', '）', '【', '】', '!', '&', '?'];
    for (let i = 0; i < specFlag.length; i++) {
        if (path.indexOf(specFlag[i]) > -1) {
            return false;
        }
    }
    return true;
}
