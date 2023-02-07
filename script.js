let colorElement = document.getElementById('color');

colorElement.oninput = function(){
    document.body.style.backgroundColor = this.value;
}