<?php


namespace app\utils;


use app\model\CommonParamDetail;
use think\db\exception\DbException;
use think\facade\Config;

class Param
{
    const STATUS_DRAFT = 'status.draft';
    const STATUS_PENDING = 'status.pending';
    const STATUS_DONE = 'status.done';

    const ROLE_ADMIN = 'role.admin';
    const ROLE_CHECKER = 'role.checker';
    const ROLE_ACTOR = 'role.actor';

    const KEY_STATUS = 'key.status';
    const KEY_ROLE = 'key.role';

    /** 获取某一个字典值的key
     * @param $name int 字典常量
     * @return array|mixed|null
     */
    public static function getParam($name)
    {
        return Config::get('param.'.$name);
    }

    /**
     * 获取状态字典系列
     */
    public static function getStatus()
    {
        return CommonParamDetail::getList(self::getParam(self::KEY_STATUS));
    }

    public static function getRole()
    {
        return CommonParamDetail::getList(self::getParam(self::KEY_ROLE));
    }
}