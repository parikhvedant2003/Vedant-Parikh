function expand(name)
{
    let btn = document.getElementById(name);
    let sign = document.getElementById(name + "_sign");
    if(btn.style.display == "none")
    {
        btn.style.display = "block";
        sign.style.transform = "rotateZ(45deg)";
    }
    else
    {
        btn.style.display = "none";
        sign.style.transform = "rotateZ(0deg)";
    }
}  

function display_image(src)
{
    let div = document.getElementById("cover_page");
    div.style.display = "block";
    let div_disp = document.getElementById("cover_page_img");
    div_disp.src = src;
}

function display_video()
{
    document.getElementById("myVideo").play();
}