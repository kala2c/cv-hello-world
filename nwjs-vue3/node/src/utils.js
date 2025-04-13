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