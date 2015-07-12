var THREE         = require('three'),
    World         = require('three-world'),
    OBJMTLLoader  = require('./objmtlloader'),
    Animation     = require('./animation'),
    CSS3D         = require('./css3d'),
    Slides        = require('./slides');

// Allow cross-origin texture loading
THREE.ImageUtils.crossOrigin = ''

function deg2rad(angle) {
  return (angle / 180) * Math.PI;
}

var loader = new OBJMTLLoader()

function render() {
  Animation.update()
  // Rendering, updating the world
  cssRenderer.render(cssScene, camera);
  logo.rotation.y += Math.PI / 100;
}

// Init CSS 3D

// The 3D renderer & scene
var cssRenderer = new CSS3D.Renderer(),
    cssScene    = new THREE.Scene();

cssRenderer.setSize( window.innerWidth, window.innerHeight );
cssRenderer.domElement.style.position = 'absolute';
cssRenderer.domElement.style.top = 0;
document.body.appendChild(cssRenderer.domElement);

// The 3D renderer & scene
var cssRenderer = new CSS3D.Renderer(),
cssScene    = new THREE.Scene();

cssRenderer.setSize( window.innerWidth, window.innerHeight );
cssRenderer.domElement.style.position = 'absolute';
cssRenderer.domElement.style.top = 0;
document.body.appendChild(cssRenderer.domElement);

// Init WebGL

World.init({camDistance: 100, renderCallback: render})
var camera = World.getCamera();

// Add things to the world

// Prime tower

loader.load('primetower/Prime-Tower-V34.obj', 'primetower/Prime-Tower-V34.mtl', function(mesh) {
  mesh.traverse(function(object) {
    if(object instanceof THREE.Mesh) {
      object.material.side = THREE.DoubleSide
    }
  })
  mesh.rotation.set(-Math.PI/2, 0, 0)
  mesh.position.set(-600, -5, -300)
  mesh.scale.set(0.01, 0.01, 0.01)
  World.add(mesh)

})

// Fraumünster

loader.load('fraumuenster/Fraumu-nster.obj', 'fraumuenster/Fraumu-nster.mtl', function(mesh) {
  mesh.traverse(function(object) {
    if(object instanceof THREE.Mesh) {
      object.material.side = THREE.DoubleSide
    }
  })
  mesh.rotation.set(-Math.PI/2, 0, Math.PI/2)
  mesh.position.set(-580, -5, -300)
  mesh.scale.set(0.0004, 0.0004, 0.0004)
  World.add(mesh)
})


// Window of the world

loader.load('window-of-the-world/wotw.obj', 'window-of-the-world/wotw.mtl', function(mesh) {
  mesh.traverse(function(object) {
    if(object instanceof THREE.Mesh) {
      object.material.side = THREE.DoubleSide
    }
  })
  mesh.rotation.set(-Math.PI/2, 0, 0) //Math.PI/4)
  mesh.position.set(450, -5, -1000)
  mesh.scale.set(0.005, 0.005, 0.005)
  World.add(mesh)
  window.thing = mesh
})

var lightA = new THREE.PointLight(0xffffff)
lightA.position.set(600, -10, -500)
World.add(lightA)


// Merchants tower (WTC)

loader.load('wtc/Shenzhen_World_Trade_Centre.obj', 'wtc/Shenzhen_World_Trade_Centre.mtl', function(mesh) {
  mesh.traverse(function(object) {
    if(object instanceof THREE.Mesh) {
      object.material.side = THREE.DoubleSide
    }
  })
  mesh.rotation.set(-Math.PI/2, 0, 0) //Math.PI/4)
  mesh.position.set(1050, -5, -600)
  mesh.scale.set(0.05, 0.05, 0.05)
  World.add(mesh)
  window.thing2 = mesh
})

var light = new THREE.PointLight(0xffffff)
light.position.set(1000, -100, 0)
World.add(light)

// Floor

var floorTex = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture("floor.jpg", null, function() {
  floorTex.map.wrapS = floorTex.map.wrapT = THREE.RepeatWrapping
  floorTex.map.repeat.set(50, 50)
  floorTex.map.needsUpdate = true
  floorTex.needsUpdate = true
})})

var floor = new THREE.Mesh(
  new THREE.PlaneGeometry(4000, 4000),
  floorTex
);

World.add(floor)

floor.position.y = -5;
floor.rotation.x = -Math.PI/2;

var logo = new THREE.Mesh(
  new THREE.BoxGeometry(10, 10, 10),
  new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture("img/archilogic.png")})
);

logo.position.set(-630, 60, -310)

World.add(logo);

World.start()

// CSS 3D

// Text 1: Hola!
var elem = document.createElement("h1");
elem.textContent = "您好深圳!";
elem.style.backgroundColor = "rgba(0, 0, 0, 0.8)";

var cssObj = new CSS3D.Object3D(elem);
cssObj.position.set(1200, 225, -130);
cssObj.scale.set(0.5, 0.5, 0.5);
//cssObj.rotation.y = - Math.PI/2;
cssScene.add(cssObj);
window.txt = cssObj;

// Text 2: Zurich
var elem2 = document.createElement("h1");
elem2.textContent = "I'm Martin from Zurich";
elem2.style.backgroundColor = "rgba(0, 0, 0, 0.8)";

var cssObj2 = new CSS3D.Object3D(elem2);
cssObj2.position.set(-650, 20, -400)
cssObj2.scale.set(0.2, 0.2, 0.2);
cssObj2.rotation.y = deg2rad(-45);
cssScene.add(cssObj2);

for(var i=0; i<Slides.length;i++) cssScene.add(Slides[i].mesh);
// Animation

var cameraPoints = [
{position: {x:    0, y:  200, z:  500}, rotation: {x: 0, y:   0, z: 0}},
{position: {x: 1200, y:  250, z:    0}, rotation: {x: 0, y:  20, z: 0}},
{position: {x: -700, y:   25, z: -200}, rotation: {x: 0, y: -45, z: 0}},
{position: {x: -800, y:  400, z:  500}, rotation: {x: 0, y:   0, z: 0}},
{position: {x: -400, y:  400, z:  500}, rotation: {x: 0, y:   0, z: 0}},
{position: {x:    0, y:  400, z:  500}, rotation: {x: 0, y:   0, z: 0}},
{position: {x:    0, y: -400, z:  500}, rotation: {x: 0, y:   0, z: 0}},
{position: {x:    0, y: -800, z:  500}, rotation: {x: 0, y:   0, z: 0}},
{position: {x:  400, y:  400, z:  500}, rotation: {x: 0, y:   0, z: 0}},
{position: {x:  800, y:  400, z:  500}, rotation: {x: 0, y:   0, z: 0}},
{position: {x: 1200, y:  400, z:  500}, rotation: {x: 0, y:   0, z: 0}},
{position: {x: 1600, y:  400, z:  500}, rotation: {x: 0, y:   0, z: 0}},
{position: {x: 1600, y:    0, z:  500}, rotation: {x: 0, y:   0, z: 0}},
{position: {x: 2000, y:    0, z:  500}, rotation: {x: 0, y:   0, z: 0}},
{position: {x: 2400, y:    0, z:  500}, rotation: {x: 0, y:   0, z: 0}},
{position: {x: 2000, y:  400, z: -800}, rotation: {x: 0, y:  90, z: 0}},
{position: {x: 2000, y:  200, z: -800}, rotation: {x: 0, y:  90, z: 0}},
{position: {x: 2000, y:  800, z: -1000}, rotation: {x: 0, y:  90, z: 0}},
{position: {x: 2000, y: 1000, z: -1000}, rotation: {x: 0, y:  90, z: 0}},
], currentPoint = 0;

camera.rotation.order = 'YXZ';

// Input

if(window.location.hash.length > 0) {
  currentPoint = parseInt(window.location.hash.slice(1), 10);
  Animation.animate(camera, cameraPoints[currentPoint].position, cameraPoints[currentPoint].rotation);
}

window.addEventListener('keyup', function(e) {
  Prism.highlightAll();
  if(e.keyCode == 39 || e.keyCode == 32 || e.keyCode == 34) {
    currentPoint++;
    if(!cameraPoints[currentPoint]) return;
    Animation.animate(camera, cameraPoints[currentPoint].position, cameraPoints[currentPoint].rotation);
    window.location.hash = "#" + currentPoint;
  } else if(e.keyCode == 37 || e.keyCode == 33){
    currentPoint--;
    if(!cameraPoints[currentPoint]) return;
    Animation.animate(camera, cameraPoints[currentPoint].position, cameraPoints[currentPoint].rotation);
    window.location.hash = "#" + currentPoint;
  }
}, false);
