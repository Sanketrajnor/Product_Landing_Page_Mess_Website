window.onload = function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = "none";
        document.getElementById('content').style.display = "block";
    }, 2000); 
    
};

var menubtn = document.getElementById('menubtn')
        var navigation = document.getElementById('navigation')
        var menu = document.getElementById('menu')
        navigation.style.right = "-250px";
        menubtn.onclick = function()
        {
            if(navigation.style.right == "-250px")
            {
                navigation.style.right = "0";
                menu.src="images/close-removebg-preview.png";
            }
            else
            {
                navigation.style.right = "-250px";
                menu.src="images/menu-removebg-preview.png";
            }
        }