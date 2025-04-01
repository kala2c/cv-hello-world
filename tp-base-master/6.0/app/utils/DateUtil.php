<?php


namespace app\utils;


use DateTime;

class DateUtil
{
    /**
     * 将日期时间转换为详细信息
     * @param $str
     * @return array
     */
    public static function str2info($str)
    {
        $timestamp = strtotime($str);
        return [
            'year' => date('Y', $timestamp),
            'month' => date('m', $timestamp),
            'date' => date('d', $timestamp),
            'hour' => date('H', $timestamp),
            'minute' => date('i', $timestamp),
            'second' => date('s', $timestamp),
        ];
    }

    /**
     * 获取现在的格式化时间 可直接写入datetime
     * @return false|string
     */
    public static function now()
    {
        return date('Y-m-d H:i:s', time());
    }

    /**
     * 向datetime对象增加
     * @param $datetime DateTime 时间日期对象
     * @param $date_str
     * @return DateTime|false
     */
    public static function add($datetime, $date_str)
    {
        return date_add($datetime, date_interval_create_from_date_string($date_str));
    }

    public static function addDays($datetime, $days)
    {
        return self::add($datetime, $days.' days');
    }

    public static function addDays2str($str, $days)
    {
        $timestamp = strtotime($str);
        $timestamp += 60*60*24 * $days;
        return date('Y-m-d', $timestamp);
    }

    public static function addMonths(DateTime $datetime, int $months)
    {
        return self::add($datetime, $months.' months');
    }

    /**
     * 格式化后的时间比大小
     * @param $str1
     * @param $str2
     * @return bool
     */
    public static function diffFmtDate($str1, $str2)
    {
        return strtotime($str1) > strtotime($str2);
    }


    /**
     * 按格式对比
     * @param $str1
     * @param $str2
     * @param $format
     * @return bool
     */
    public static function diffWithFormat($str1, $str2, $format)
    {
        return date($format, strtotime($str1)) == date($format, strtotime($str2));
    }

    /**
     * 对比年份
     * @param $str1
     * @param $str2
     * @return bool
     */
    public static function diffYear($str1, $str2)
    {
        return self::diffWithFormat($str1, $str2, 'Y');
    }

    /**
     * 对比月
     * @param $str1
     * @param $str2
     * @return bool
     */
    public static function diffMonth($str1, $str2)
    {
        return self::diffWithFormat($str1, $str2, 'm');
    }

    /**
     * 对比天
     * @param $str1
     * @param $str2
     * @return bool
     */
    public static function diffDate($str1, $str2)
    {
        return self::diffWithFormat($str1, $str2, 'd');
    }
}