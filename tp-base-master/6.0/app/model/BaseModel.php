<?php


namespace app\model;


use think\Model;

class BaseModel extends Model
{
    static public $page = [];

    /**
     * @param int 当前页码
     * @param array 查询条件
     * @param int 每页数量
     * @return BaseModel
     */
    static public function pageUtil($page = 1, $map = [], $pageCount = 10)
    {
        $total = self::where($map)->count(); //总条数
        // $pageMax = ceil($total/$pageCount); //最大页码
        $offset = ($page-1)*$pageCount; //查询起始位置

        // self::$page = [
        //     'page'       => $page,
        //     'pageMax'    => $pageMax,
        //     'total'      => $total,
        //     'pageCount'  => $pageCount,
        // ];
        self::calcPageInfo($total, $page, $pageCount);
        return self::where($map)->limit($offset, $pageCount);
    }

    /**
     * 计算 生成页面信息
     * @param $total
     * @param $page
     * @param int $pageCount
     * @return array
     */
    static public function calcPageInfo($total, $page, $pageCount = 10)
    {
        $pageMax = ceil($total/$pageCount); //最大页码
        self::$page = [
            'page'       => $page,
            'pageMax'    => $pageMax,
            'total'      => $total,
            'pageCount'  => $pageCount,
        ];
        return self::$page;
    }

    /**
     * @return array 返回分页信息
     */
    static public function pageInfo()
    {
        return self::$page;
    }
    /**
     * 为数据添加时间戳字段
     * @param array $post 数据
     * @param bool $create 是否添加创建时间 默认-是
     * @param bool $update 是否添加修改时间 默认-是
     * @return array 添加字段后的数据
     */
    static public function addTimeField($post = [], $create = true, $update = true)
    {
        if (empty($post)) return [];
        if ($create) {
            $post['create_time'] = date("Y-m-d H:i:s");
            // $post['create_time'] = time();
        }
        if ($update) {
            $post['update_time'] = date("Y-m-d H:i:s");
            // $post['update_time'] = time();
        }
        return $post;
    }

}