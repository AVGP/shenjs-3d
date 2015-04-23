var THREE         = require('three'),
    World         = require('three-world'),
    OBJMTLLoader  = require('./objmtlloader'),
    Animation     = require('./animation'),
    CSS3D         = require('./css3d'),
    Leap          = require('leapjs'),
    LeapPlugins   = require('leapjs-plugins');

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
  mesh.position.set(1540, -5, -300)
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
  mesh.position.set(1000, -5, -500)
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

logo.position.set(1480, 50, -280)

World.add(logo);

World.start()

// CSS 3D

// Text 1: Montevideo
var elem = document.createElement("h1");
elem.textContent = "Buenas dias, Montevideo!";
elem.style.backgroundColor = "rgba(0, 0, 0, 0.8)";

var cssObj = new CSS3D.Object3D(elem);
cssObj.position.set(1035, 20, -500);
cssObj.scale.set(0.2, 0.2, 0.2);
//cssObj.rotation.y = - Math.PI/2;
cssScene.add(cssObj);

// Text 2: Zurich
var elem2 = document.createElement("h1");
elem2.textContent = "I'm Martin from Zurich";
elem2.style.backgroundColor = "rgba(0, 0, 0, 0.8)";

var cssObj2 = new CSS3D.Object3D(elem2);
cssObj2.position.set(1500, 20, -400)
cssObj2.scale.set(0.2, 0.2, 0.2);
cssObj2.rotation.y = deg2rad(-45);
cssScene.add(cssObj2);

// Animation

var cameraPoints = [
  {position: {x:    0, y:  0, z:  100}, rotation: {x: 0, y:   0, z: 0}},
  {position: {x: 1000, y: 25, z: -400}, rotation: {x: 0, y:   0, z: 0}},
  {position: {x: 1400, y: 25, z: -200}, rotation: {x: 0, y: -45, z: 0}},
  {position: {x:    0, y: 50, z:  500}, rotation: {x: 0, y:   0, z: 0}},
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

var previousHandPos  = null,
    previousRotation = null,
    Z_AXIS_VECTOR    = new THREE.Vector3(0, 0, 1),
    directionVector  = new THREE.Vector3();

// Hand stuff
var magicObjects  = [],
    magicGeometry = new THREE.BoxGeometry(2, 2, 2);
    magicMaterial = new THREE.MeshPhongMaterial({
      map: THREE.ImageUtils.loadTexture('img/jsconf-uy.jpg')
    }),
    selectedObject = null;

Leap.loop({enableGestures: true}, function(frame) {
  if(!frame.valid) return;
  if(frame.hands.length > 0 && frame.hands[0].confidence < 0.5) return;

  frame.gestures.forEach(function(gesture) {
    if(gesture.state != "stop") return

    switch(gesture.type) {
    case 'circle':
      if(selectedObject) break;

      var thing = new THREE.Mesh(
        magicGeometry,
        magicMaterial.clone()
      );
      thing.position.set(gesture.center[0], gesture.center[1], gesture.center[2])
      thing.scale.set(gesture.radius, gesture.radius, gesture.radius)
      thing.box = new THREE.Box3()
      thing.box.setFromObject(thing);

      World.add(thing);
      magicObjects.push(thing);
    break
    case 'keyTap':
      for(var i=0; i< magicObjects.length; i++) {
        if(magicObjects[i].box.containsPoint({
          x: gesture.position[0],
          y: gesture.position[1],
          z: gesture.position[2]
        })) {
          if(magicObjects[i].selected) {
            magicObjects[i].material.color.setHex(0xffffff);
            magicObjects[i].material.transparent = false;
            magicObjects[i].material.opacity = 1.0;
            magicObjects[i].material.needsUpdate = true;
            magicObjects[i].selected = false;

            selectedObject = null;
          } else {
            magicObjects[i].material.color.setHex(0xff0000);
            magicObjects[i].material.transparent = true;
            magicObjects[i].material.opacity = 0.5;
            magicObjects[i].material.needsUpdate = true;
            magicObjects[i].selected = true;

            selectedObject = magicObjects[i];
          }
        }
      }
    }
  });

  if(frame.hands.length > 0 && selectedObject) {
    var hand = frame.hands[0];
    if(hand.pinchStrength < 0.8) {
      return;
    }
    directionVector.set(
      hand.direction[0],
      hand.direction[1],
      hand.direction[2]
    );

    var tipPosition = hand.indexFinger.stabilizedTipPosition;
    selectedObject.position.x = tipPosition[0];
    selectedObject.position.y = tipPosition[1];
    selectedObject.position.z = tipPosition[2];
    selectedObject.box.setFromObject(selectedObject);

    var angle = Z_AXIS_VECTOR.angleTo(directionVector);
    selectedObject.rotation.y = angle;
  }
}).use('boneHand', {
  scene: World.getScene(),
  jointColor: new THREE.Color(0x00ff00),
  arm: false
});
