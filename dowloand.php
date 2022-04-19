<?php
header('Content-Description: File Transfer');
header('Content-Type: application/octet-stream');
header('Content-Transfert-Encoding: Binary');
header('Content-disposition: attachement; filename="kamango-alberto.pdf"');
header('Expire: 0');
header('Cache-Control:must-revalidate');
header('Pragma: public');
header('Content-Length:'.filesize('kamango-alberto.pdf'));
echo readfile('kamango-alberto.pdf');
exit();