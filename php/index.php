<?php
    include "multisprogconfig.php";
 ?>   

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>multisprog</title>
    <script src="js/clickjava.js" defer></script>
    <link rel="stylesheet" type="text/css" href="css/clickcss.css">
</head>
<body>
    <ul class="fjerndots">
        <li class="sprogSideStylingKnap"><button class="btnsprog" data-color="green"><a href="index.php?lang=dk"><?php echo $lang['dansk'] ?></a></button></li>
        <li class="sprogSideStylingKnap"><button class="btnsprog" data-color="green"><a href="index.php?lang=en"><?php echo $lang['engelsk'] ?></a></button></li>
        <li class="sprogSideStylingKnap"><button class="btnsprog" data-color="green"><?php echo $lang['fransk'] ?></button></li>
        <li class="sprogSideStylingKnap"><button class="btnsprog" data-color="green"><?php echo $lang['tysk'] ?></button></li>
        <li class="sprogSideStylingKnap"><button class="box"><a href="stop1.html"><?php echo $lang['godkend'] ?></a></button></li>
    </ul>
</body>
</html>