<?php


namespace app\exception\error;


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



    /*************USER 接口错误代码**********/
    const GET_USER_INFO_FAILED = 20001;
    const INSERT_USER_FAILED = 20002;
    const UPDATE_USER_FAILED = 20003;
    const DELETE_USER_FAILED = 20004;
    const USER_NOT_EXISTS = 20005;
    const PASSWORD_ERROR = 20006;
    const USER_EXISTS = 20007;
    const USER_DELETED = 20008;
    const PASSWORD_NOT_EQ = 20009;
    const PASSWORD_NOT_TRUE = 20010;
    const CHANGE_PASSWORD_FAILED = 20011;
    const RESET_PASSWORD_FAILED = 20012;

    /*************Member 接口错误代码**********/

    /*************WorkOrder 接口错误代码**********/
    const WORK_ORDER_HANDLE_FAILED = 40001;
    const WORK_ORDER_DONE_FAILED = 40002;
    const WORK_ORDER_IGNORE_FAILED = 40003;

    /*************VisitRecord 接口错误代码**********/
    const VISIT_RECORD_UPDATE_FAILED = 50001;
    const VISIT_RECORD_INSERT_FAILED = 50002;
    const VISIT_RECORD_CANNOT_EDIT = 50003;
    const WORK_ORDER_HANDLE_ERROR = 50004;
    const WORK_ORDER_HANDLE_TIME_LATER = 50005;



    // -----------------------error_message分割线-----------------------------------

    static $ERROR_MSG = [
        self::OK => 'OK',
        self::NET_ERROR => '网络错误',
        self::PARAM_ERROR => '参数错误',
        self::COMMON_ERROR => '未知错误 稍后再试',
        self::LOGIN_EXPIRED => '登录过期 请重新登录',
        self::UNAUTHORIZED => '未登录 请先登录',
        self::NO_POWER => '没有访问权限',

        self::GET_USER_INFO_FAILED => '获取用户信息失败',
        self::INSERT_USER_FAILED => '添加用户记录失败',
        self::UPDATE_USER_FAILED => '修改用户信息失败',
        self::DELETE_USER_FAILED => '删除用户信息失败',
        self::USER_NOT_EXISTS => '未找到该用户信息',
        self::PASSWORD_ERROR => '密码错误',
        self::USER_EXISTS => '用户名已存在',
        self::USER_DELETED => '用户已删除',
        self::PASSWORD_NOT_EQ => '输入的两次密码不一致',
        self::PASSWORD_NOT_TRUE => '原密码不正确',
        self::CHANGE_PASSWORD_FAILED => '修改密码失败',
        self::RESET_PASSWORD_FAILED => '重置密码失败',

        self::WORK_ORDER_HANDLE_FAILED => '处理工单失败',
        self::WORK_ORDER_DONE_FAILED => '完成工单失败',
        self::WORK_ORDER_IGNORE_FAILED => '忽略工单失败',

        self::VISIT_RECORD_INSERT_FAILED => '添加回访记录失败',
        self::VISIT_RECORD_UPDATE_FAILED => '修改回访记录失败',
        self::VISIT_RECORD_CANNOT_EDIT => '不能编辑他人的回访记录',
        self::WORK_ORDER_HANDLE_ERROR => '提醒没有被处理或您不是处理人',
        self::WORK_ORDER_HANDLE_TIME_LATER => '回访计划未到处理时间',

    ];
}