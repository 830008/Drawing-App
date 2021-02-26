let c;
function setup() {
let canvas = createCanvas(displayWidth, displayHeight);
background(0)
}
function mouseDragged() {
    c = color(255, 255, 255);
    strokeWeight(5);
    stroke(c);
    line(mouseX, mouseY, pmouseX, pmouseY);

}
function savefunction() {
    saveCanvas(canvas, 'MyCanvas', 'png')
}
