function prepareGallery() {
    if (!document.getElementById || !document.getElementsByTagName) return false;
    if (!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return showPic(this) ? false : true;
        }
    }
}

function showPic(whichPic) {
    if (!document.getElementById("placeholder")) return false;
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != 'IMG') return false;
    placeholder.setAttribute("src", source);
    if (document.getElementById("description")) {
        var text = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if (description.firstChild.nodeValue == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);