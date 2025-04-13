import axios from "axios";
import { ElMessage, ElMessageBox } from "element-plus";

const BASE_URL = process.env.VUE_APP_API_URL + "/api/client";

/**
 * 请求函数
 * 这个封装很low，建议使用axios拦截器
 * @param {Object} config 
 * @returns 
 */

export async function request(config) {
    const method = config.method || "GET";
    let url = config.url || "";
    const data = config.data || "";
    const params = config.params || {};
    // 请求前处理

    // config拓展支持了params，会转换为queryString拼接到url上
    const queryStringArr = [];
    for (let key in params) {
        queryStringArr.push(key + "=" + params[key]);
    }
    const queryString = queryStringArr.join("&");
    if (queryString) url += "?" + queryString;

    // 发起处理
    const res = await axios({
        baseURL: BASE_URL,
        method,
        url,
        data,
        // 添加请求头
        headers: {
            "Content-Type": "application/json",
            "X-Token": 'your token',
        },
    });

    // 请求后处理

    const resData = res.data || {};
    // 在此处添加错误提示
    if (resData.code === 'error code') {
        ElMessageBox.alert(resData.msg, "提示", {
            confirmButtonText: '关闭'
        });
    }

    // 返回数据
    return res.data;
}

/**
 * GET请求
 * @param {String} url 
 * @param {Object} params 
 * @returns 
 */
export async function httpGet(url, params = {}) {
    return request({
        url,
        params
    });
}

/**
 * POST请求
 * @param {String} url 
 * @param {Object} data 
 * @param {Object} params 
 * @returns 
 */
export async function httpPost(url, data, params = {}) {
    return request({
        method: "POST",
        url,
        params,
        data
    });
}