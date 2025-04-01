<?php


namespace app\utils;


use think\facade\Filesystem;

class File
{
    private $save_dir = '/uploads/';
    const BLOCK_ICON = 'icon';
    const BLOCK_PROGRAM_LIST = 'screenshot';
    const BLOCK_REWARD = 'screenshot_reward';
//    const BLOCK_
    /**
     * 保存文件
     * @param $files
     * @return array|mixed
     */
    public function saveFile($files, $block)
    {
        $save_dir = $this->save_dir;
        $filePath = [];
        if (is_array($files)) {
            foreach ($files as $file) {
                $save_name = Filesystem::disk('public')->putFile($block, $file);
                array_push($filePath, '/storage/'.$save_name);
            }
        } else {
            $save_name = Filesystem::disk('public')->putFile($block, $files);
            array_push($filePath, '/storage/'.$save_name);
        }
        if (count($filePath) > 1) {
            return $filePath;
        } else {
            return $filePath[0];
        }
    }
}