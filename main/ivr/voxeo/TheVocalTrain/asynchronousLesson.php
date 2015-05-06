<?php
$responseq1 = $_GET["Lesson1_response1"]; 
$responseq2 = $_GET["Lesson1_response2"];
// $myVar3 = $_GET["Lesson1_response3"];
// $myVar4 = $_GET["Lesson1_response4"];
$callerID = $_GET["callerID"]; 
$file = "/home/siddharth/public_html/voxeo/TheVocalTrain/testValues.txt";
$buffer='Hello new World!!!';
// echo $myVar1;
// echo $myVar2;
// echo $myVar3;
// $buffer2=$myVar1.",".$myVar2.",".$myVar3.",".$myVar4.",".$myVar5;
$buffer2=$responseq1.",".$responseq2.",".$callerID;
// echo $buffer2;
file_put_contents($file, $buffer2);
// print file_get_contents('asynchronous.xml');
// SAY GOODBYE MESSAGE IN THIS XML??
//print file_get_contents('asynchronous.xml');
exit(0);
//echo "Hello new world";
// $file = "/home/siddharth/public_html/voxeo/TheVocalTrain/testValues.txt";
// $buffer='Hello new World!!!';
// file_put_contents($file, $buffer);

// foreach($_REQUEST as $key => $value )
// {
//     //echo $key , "=", $value, "\n";
//     // echo file_put_contents($file, $value);
//     file_put_contents($file, $value);
// }
//fclose($file);
?>