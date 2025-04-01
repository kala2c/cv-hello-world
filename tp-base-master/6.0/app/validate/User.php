<?php


namespace app\validate;


use think\Validate;

class User extends Validate
{
    protected $rule = [
        'username'  =>  'require|max:12|min:2',
        'password' =>  'require|max:12|min:5',
        'realname' => 'require|max:6',
        'id' => 'number'
    ];

    protected $message = [
        'id.require' => '请选择一个用户',
        'id.number' => '用户id必须为数字',
        'username.require' => '请填写用户名',
        'username.max' => '登录账号长度不能多于12个字符',
        'username.min' => '登录账号长度不能少于2个字符',
        'password.require' => '请填写密码',
        'password.max' => '密码长度不能多于12个字符',
        'password.min' => '密码长度不能少于5个字符',
        'realname.require' => '真实姓名不可缺少',
        'realname.max' => '真实姓名不能多于6个字符',
    ];

    protected $scene = [
        'login' => ['username', 'password']
    ];

    // 编辑用户信息时
    public function sceneEdit()
    {
        return $this->only(['username', 'realname', 'id'])
            ->append('id', 'require')
//            ->remove('username', 'require')
//            ->remove('username', ['require', 'min'])
            ->remove('password', 'require');
    }
}