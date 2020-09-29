var box = document.getElementById("box")
var img1 = document.getElementById("img1")
var img2 = document.getElementById("img2")
var img3 = document.getElementById("img3")
var img4 = document.getElementById("img4")

function fun1() {
    box.style.backgroundImage = "url(mipmap/p1.jpg)"
    img1.style.backgroundColor = "grey"
    img2.style.backgroundColor = "#ccc"
    img3.style.backgroundColor = "#ccc"
    img4.style.backgroundColor = "#ccc"
}

function fun2() {
    box.style.backgroundImage = "url(mipmap/p2.jpg)"
    img2.style.backgroundColor = "grey"
    img1.style.backgroundColor = "#ccc"
    img3.style.backgroundColor = "#ccc"
    img4.style.backgroundColor = "#ccc"
}

function fun3() {
    box.style.backgroundImage = "url(mipmap/p3.jpg)"
    img3.style.backgroundColor = "grey"
    img1.style.backgroundColor = "#ccc"
    img2.style.backgroundColor = "#ccc"
    img4.style.backgroundColor = "#ccc"
}

function fun4() {
    box.style.backgroundImage = "url(mipmap/p4.jpg)"
    img4.style.backgroundColor = "grey"
    img1.style.backgroundColor = "#ccc"
    img3.style.backgroundColor = "#ccc"
    img2.style.backgroundColor = "#ccc"
}