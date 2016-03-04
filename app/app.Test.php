<?php

/**
 * Created by PhpStorm.
 * User: dengjiaming
 * Date: 22/2/16
 * Time: 下午11:29
 */
class Test
{
    function __construct(){
        Core::InitDataCache(); //初始化数据缓类 Core::$dc = new DataCache();
        Core::InitDb();
    }

    public function Insert(){
        $data['showtime'] = 500;
        $data['type'] = 'img';
        $data['content'] = 'tset';
//        Core::$db['online']->insert('xz_yao',$data);
        Core::$dc->setData('xz_yao',$data);
        var_dump(Core::$dc->getData('xz_yao'));
    }
}