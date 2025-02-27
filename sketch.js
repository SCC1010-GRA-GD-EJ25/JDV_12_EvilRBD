let foto

function preload() {
  // put preload code here
  foto = loadImage('./images/rbd.jpg')
}

function setup() {
  // put setup code here
  createCanvas(640*2,374)
  textFont('Stencil')
  textSize(24)
  noLoop()
}

function draw() {
  background(255)
  image(foto,0,0,640,374)
  foto.loadPixels()
  let numPixeles = foto.width * foto.height * 4
  for (let i = 0; i < numPixeles; i+=4) {
    foto.pixels[i] = 255 - foto.pixels[i]
    foto.pixels[i+1] = 255 - foto.pixels[i+1]
    foto.pixels[i+2] = 255 - foto.pixels[i+2]
  }
  foto.updatePixels()
  image(foto,640,0,640,374)
  fill(255)
  text("EVIL RBD BE LIKE", width/2+10, 374/2-130)
  text("NO ME SALVES", width/2+10, 374/2-100)
}
