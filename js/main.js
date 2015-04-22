var THREE = require('three'),
    World = require('three-world'),
    OBJMTLLoader = require('./objmtlloader'),
    Animation = require('./animation'),
    CSS3D     = require('./css3d')

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
  mesh.position.set(540, -5, -300)
  mesh.scale.set(0.01, 0.01, 0.01)
  World.add(mesh)

})

// Torre ANTEL

loader.load('antel/antel.obj', 'antel/antel.mtl', function(mesh) {
  mesh.traverse(function(object) {
    if(object instanceof THREE.Mesh) {
      object.material.side = THREE.DoubleSide
    }
  })
  mesh.rotation.set(-Math.PI/2, 0, 0)
  mesh.position.set(0, -5, -500)
  mesh.scale.set(0.0001, 0.0001, 0.0001)
  World.add(mesh)
})

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

logo.position.set(480, 50, -280)

World.add(logo);

World.start()

// CSS 3D

// Text 1: Montevideo
var elem = document.createElement("h1");
elem.textContent = "Buenas dias, Montevideo!";
elem.style.backgroundColor = "rgba(0, 0, 0, 0.8)";

var cssObj = new CSS3D.Object3D(elem);
cssObj.position.set(35, 20, -500);
cssObj.scale.set(0.2, 0.2, 0.2);
//cssObj.rotation.y = - Math.PI/2;
cssScene.add(cssObj);

// Text 2: Zurich
var elem2 = document.createElement("h1");
elem2.textContent = "I'm Martin from Zurich";
elem2.style.backgroundColor = "rgba(0, 0, 0, 0.8)";

var cssObj2 = new CSS3D.Object3D(elem2);
cssObj2.position.set(500, 20, -400)
cssObj2.scale.set(0.2, 0.2, 0.2);
cssObj2.rotation.y = deg2rad(-45);
cssScene.add(cssObj2);

// Editor


var editor = document.createElement("iframe");
elem.width  = 1000;
elem.height =  500;
editor.frameBorder = 0;
editor.onload = function() {
  var iframeDoc = (this.contentDocument ? this.contentDocument : this.contentWindow.document);
  var editorInput = iframeDoc.querySelector("textarea");
  editorInput.style.fontSize = "1.4em";
}
editor.src = "https://www.stadt-zuerich.ch/portal";

var cssObj3 = new CSS3D.Object3D(editor);
cssObj3.position.set(0, 0, -100)
cssScene.add(cssObj3);

// Animation

var cameraPoints = [
  {position: {x:   0, y:  0, z:  100}, rotation: {x: 0, y:   0, z: 0}},
  {position: {x:   0, y: 25, z: -400}, rotation: {x: 0, y:   0, z: 0}},
  {position: {x: 400, y: 25, z: -200}, rotation: {x: 0, y: -45, z: 0}},
  {position: {x: 200, y:  0, z: -800}, rotation: {x: 0, y:   0, z: 0}},
], currentPoint = 0;

// Input

window.addEventListener('keyup', function(e) {
  if(e.keyCode == 39 || e.keyCode == 32) {
    currentPoint++;
    if(!cameraPoints[currentPoint]) return;
    Animation.animate(camera, cameraPoints[currentPoint].position, cameraPoints[currentPoint].rotation);
  } else if(e.keyCode == 37){
    currentPoint--;
    if(!cameraPoints[currentPoint]) return;
    Animation.animate(camera, cameraPoints[currentPoint].position, cameraPoints[currentPoint].rotation);
  }
}, false);