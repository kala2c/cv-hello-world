<?php


namespace app\controller;


use app\BaseController;
use app\exception\ApiException;
use app\exception\error\ErrorCode;
use Firebase\JWT\JWT;
use think\Exception;
use think\facade\Cache;
use think\facade\View;

class Base extends BaseController
{

    protected $user_info;  // ['uid' => 1]

    /**
     * 鉴权-用户认证
     */
    public function initialize()
    {
        $token = session('token');

        if (!isset($token)) {
            // 重定向到登录页
            redirect('/login')->send();
            exit();
        }

        $user_info = JWT::decode($token, 'recover', ['HS256']); // 得到的是个对象
        // userinfo的内容 [ 'uid' => 1, 'username' => 'abc']
        $this->user_info = (array)$user_info;
    }
}