<?php
if(!defined('IN_SYS')) {
    echo ("HTTP/1.1 404 Not Found");
    die;
}
//数据库配置参数

Core::$configs ['db'] = array (
    'online' => array (
	    'host' => 'localhost',  //'xzbbmrds.mysql.rds.aliyuncs.com',
	    'username' => 'root',   //'xzbbm_db',
	    'password' => '',   //FgbAsj9ZND4rEpDj',
        'database' => 'xzbbm',
        '_charset' => 'utf8', 
    )
);
