function showPic(whichPic) {
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    var text = whichPic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    //alert(body_element.childNodes.length);
    alert(body_element.nodeType);   //元素节点为1，属性节点为2，文本节点为3
}

window.onload = countBodyChildren;