<?php


namespace app\controller;


use app\BaseController;
use app\exception\ApiException;
use app\exception\error\ErrorCode;
use app\utils\Param;
use Firebase\JWT\JWT;
use think\exception\ValidateException;
use think\facade\Cache;
use app\model\UserModel;

class BaseRest extends BaseController
{
    protected $user_info;

    /**
     * 鉴权-用户认证
     */
    public function initialize()
    {
        $token = session('token');
//        $local_key = !$token ? false : Cache::get($token);
//        if (!$token || !$local_key) {
        if (!$token) {
            throw new ApiException(ErrorCode::UNAUTHORIZED);
        }

        $user_info = JWT::decode($token, 'recover', ['HS256']);
        $this->user_info = (array)$user_info;
    }

    /**
     * 检查用户权限
     * @param $role
     * @throws ApiException
     */
    protected function checkRole($role)
    {
        // id为1的用户拥有所有权限
        if ($this->user_info['uid'] != 1) {
            if (!UserModel::checkRole($role, $this->user_info['uid'])) {
                throw new ApiException(ErrorCode::NO_POWER);
            }
        }
    }

    /**
     * 获取id参数
     * 适用于只接收id参数的接口
     * @param bool $post id是否为post接收 反之为get参数
     * @return array|mixed
     */
    protected function getID($post = true)
    {
        if ($post) {
            $id = $this->request->post('id') ?? null;
        } else {
            $id = $this->request->get('id') ?? null;
        }

        if (!isset($id)) {
            throw new ValidateException('缺少id');
        }

        return $id;
    }
}