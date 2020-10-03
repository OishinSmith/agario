/// <reference path="./p5.global-mode.d.ts" />
// https://angular.io/guide/setup-local

var blob;

function setup() {
    createCanvas(600, 600); 
    blob = new Blob();
}

function draw() {
    background(0);
    blob.show();
}