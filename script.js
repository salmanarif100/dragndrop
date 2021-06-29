const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')
const img = document.getElementById ('img');
// const pic = p1.jpeg;

//my function for random images from my src 
window.onload = choosePic;

var myPix = new Array("images/p1.jpeg", "images/p2.jpeg", "images/p3.jpeg", "images/p4.jpeg", "images/p5.jpeg", "images/p6.jpeg", "images/p7.jpeg", "images/p8.jpeg", "images/p9.jpeg", "images/p10.jpeg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     img.src = myPix[randomNum];
}

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    this.className += ' hold' 
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}