<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="..\galleryStyle.css">
    <link rel="stylesheet" href="..\style.css">
    <link rel="stylesheet" href="..\footer.css">
    <link rel = "stylesheet" type = "text/css" href = "footer/css/font-awesome.min.css">
    <title></title>
    <script src="https://use.fontawesome.com/releases/v5.15.2/js/all.js"></script>
    <script> 
        function stickyMenu (){
            var sticky = document.getElementById('sticky');
            if (window.pageYOffset > 10){
                sticky.classList.add('sticky');
    
            } 
            else{
                sticky.classList.remove('sticky');
            }
        }
    
        window.onscroll = function(){
            stickyMenu();
        }
    </script>



    <script>
        function stickyMenu() {
            var sticky = document.getElementById('sticky');
            if (window.pageYOffset > 10) {
                sticky.classList.add('sticky');

            }
            else {
                sticky.classList.remove('sticky');
            }
        }

        window.onscroll = function () {
            stickyMenu();
        }
    </script>

</head>

<body>
    <div class="parallax">
        <div class="title">JWagPics</div>

    </div>
    <div class="menu" id="sticky">
        <u1 class="menu-u1">
            <a href="home.html" class="a-menu">
                <li>Home </li>
            </a>
            <a href="gallery.html" class = "a-menu">
                <li>Photo Gallery </li>
            </a>
            <a href="#" class="a-menu">
                <li>Buy </li>
            </a>
            <a href="#" class="a-menu">
                <li>About Me </li>
            </a>
            <a href="contact.html" class="a-menu" class="a-menu" id="current-page">
                <li>Contact </li>
            </a>
        </u1>
    </div>


    <div class = "email-background">
        <p> send email</p>
        <form class = "contact-form" action = "contactform.php" method ="POST">
            <input type = "text" name ="name" placeholder = "Full Name">
            <input type = "text" name ="mail" placeholder = "Your Email">
            <input type = "text" name ="subject" placeholder = "Subject">
            <textarea name = "message" placeholder = "message"></textarea>
            <button type = "submit" name = "submit"> send mail</button>
        </form>
    </div>



































    <div class = "footer"> 
        <div class = "inner-footer">
            <div class = "logo">
                <img src = "..\Images/logo.png">
            </div>
            <div class = "footer-third">
                <h1>Follow Me</h1>
                <li><a href = "#"><i class = "fab fa-instagram"></i> instagram link</a></li>
                <li><a href = "#"><i class = "fab fa-twitter"></i> twitter link</a></li>
                <li><a href = "#"><i class = "fab fa-youtube"></i> youtube link</a></li>

            </div>
            <div class = "footer-third">
                <h1>Follow Me</h1>
                <li><a href = "#"><i class = "fab fa-instagram"></i> instagram link</a></li>
                <li><a href = "#"><i class = "fab fa-instagram"></i> instagram link</a></li>
                <li><a href = "#"><i class = "fab fa-instagram"></i> instagram link</a></li>

            </div>
            <div class = "footer-third">
                <h1>Follow Me</h1>
                <li><a href = "#"><i class = "fab fa-instagram"></i> instagram link</a></li>
                <li><a href = "#"><i class = "fab fa-instagram"></i> instagram link</a></li>
                <li><a href = "#"><i class = "fab fa-instagram"></i> instagram link</a></li>

            </div>
            <div class = "footer-third">
                <h1>Follow Me</h1>
                <li><a href = "#"><i class = "fab fa-instagram"></i> instagram link</a></li>
                <li><a href = "#"><i class = "fab fa-instagram"></i> instagram link</a></li>
                <li><a href = "#"><i class = "fab fa-instagram"></i> instagram link</a></li>

            </div>
        </div>
    </div>


</body>