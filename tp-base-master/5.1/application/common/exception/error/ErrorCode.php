<?php


namespace app\common\exception\error;


class ErrorCode
{
    const OK = 0;
    const NET_ERROR = 10001;
    const PARAM_ERROR = 10003;
    const COMMON_ERROR = 10004;
    const LOGIN_EXPIRED = 10005;
    const UNAUTHORIZED = 10006;
    const TIME_OUT = 10007;
    const NO_POWER = 10008;


    // -----------------------error_message分割线-----------------------------------

    static $ERROR_MSG = [
        self::OK => 'OK',
        self::NET_ERROR => '网络错误',
        self::PARAM_ERROR => '参数错误',
        self::COMMON_ERROR => '未知错误 稍后再试',
        self::LOGIN_EXPIRED => '登录过期 请重新登录',
        self::UNAUTHORIZED => '未登录 请先登录',
        self::NO_POWER => '没有访问权限',


    ];
}