<?php
// 应用公共文件

use app\exception\error\ErrorCode;
use think\response\Json;

// 应用公共文件
// 响应的格式
const OK_CODE = ErrorCode::OK;
/**
 * @param int $code 业务状态码
 * @param string $status http状态码 success->200 error->500 其它为数字
 * @param string $message 返回消息
 * @param array $data 返回数据
 * @param array $meta 和基本模板同级的数据
 * @return Json 结果是json响应
 */
function result($code = OK_CODE, $status = "success", $message = "OK", $data = [], $meta = [])
{
    if ($status === "success") $status = 200;
    if ($status === "error") $status = 500;

    $template = [
        "code" => $code,
        "message" => $message,
        "data" => $data
    ];

    if (!empty($meta)) {
        $keys = array_keys($meta);
        foreach ($keys as $k) {
            $template[$k] = $meta[$k];
        }
    }
    return json($template)->code($status);
}

/**
 * 成功接口且带有个性化消息
 * @param string $message
 * @param array $data
 * @param array $meta
 * @return Json
 */
function successWithMsg($message = "OK", $data = [], $meta = []) {
    return result(OK_CODE, "success", $message, $data, $meta);
}

/**
 * 成功带有数据
 * @param array $data
 * @param array $meta
 * @return Json
 */
function success($data = [], $meta = [])
{
    return result(OK_CODE, "success", "OK", $data, $meta);
}

/**
 * 带有返回数据且伴有错误产生
 * @param array $data
 * @param array $meta
 * @return Json
 */
function error($data = [], $meta = [])
{
    return result(-1, "error", "服务出错了，稍后再试", $data, $meta);
}

/**
 * 密码加密函数
 * @param $str
 * @return string
 */
function encrypt($str) {
    return sha1(md5($str));
}