<?php
echo "Hello world";
$file = "/home/siddharth/public_html/voxeo/TheVocalTrain/test.txt";
$buffer='Hello World!!!';
echo file_put_contents($file, $buffer);
//fclose($file);
?>
