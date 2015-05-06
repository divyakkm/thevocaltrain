<?php
header('Cache-Control: no-cache');
$file = fopen("test.txt","w");
echo fwrite($file,"Hello World. Testing!");

foreach($_REQUEST as $key => $value )
{
    echo $key , "=", $value, "\n";
    echo fwrite($file, $value);
}
fclose($file);
?>