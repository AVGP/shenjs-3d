var CSS3D = require('./css3d');

var slides = [];

// Slide 1
var slide = document.createElement("div");
slide.className="slide title";
slide.innerHTML = "<h1>Diving in</h1> \
<h2>WebGL and WebVR</h2>\
<img src=\"vr.gif\" height=\"200\">";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(0, 200, 400)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slides.push(slide);

// Slide 2
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>Our journey today</h1> \
<ol> \
  <li>Introduction</li> \
  <li>Interactivity and 3D</li> \
  <li>Immersion with Virtual Reality</li> \
</ol>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(-800, 400, 400)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slides.push(slide);

// Slide 3
slide = document.createElement("div");
slide.className="slide title";
slide.innerHTML = "<h1 style=\"position: relative; top: 50%; margin-top: -1em\">1. Introduction</h1>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(-400, 400, 400)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slides.push(slide);

// Slide 4
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>We're visual beings</h1>\
<div style=\"position:relative; width: 100%;text-align: center\"> \
  <img src=\"img/visual-bandwidth.png\" height=\"280\">\
</div>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(0, 400, 400)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slides.push(slide);

// Slide 4.25 :-)
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>The Screen is flat?</h1>\
<div style=\"position:relative; width: 100%;text-align: center\"> \
<img src=\"img/2dcoord.jpg\" height=\"280\">\
</div>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(0, -400, 400)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slides.push(slide);

// Slide 4.75 :-)
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>The screen is NOT flat!</h1>\
<div style=\"position:relative; width: 100%;text-align: center\"> \
<img src=\"img/coordinates.png\" width=\"280\">\
</div>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(0, -800, 400)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slides.push(slide);

// Slide 5
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>So what's WebGL about?</h1>\
<div style=\"position:relative; width: 100%;text-align: center\"> \
<img src=\"img/pipeline.png\" height=\"200\">\
</div>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(400, 400, 400)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slides.push(slide);

// Slide 6
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>Getting started</h1>\
<pre><code class=\"language-javascript\">var ctx = document.querySelector('canvas').getContext('webgl')</code></pre>\
</div>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(800, 400, 400)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slides.push(slide);

// Slide 7
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>Wait... can we?</h1>\
<div style=\"position:relative; width: 100%;text-align: center\"> \
  <img height=\"280\" src=\"img/webgl-compat.png\">\
</div>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1200, 400, 400)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slides.push(slide);

// Slide 8
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>Getting started, fixed</h1>\
<pre><code class=\"language-javascript\">\
var canvas = document.querySelector('canvas'),\n \
    ctx   = canvas.getContext('webgl') || \n \
            canvas.getContext('experimental-webgl') \
</code></pre>\
</div>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1600, 400, 400)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slides.push(slide);

// Slide 9
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>WebGL is too much!</h1>\
<div style=\"position:relative; width: 100%;text-align: center\"> \
<pre><code class=\"language-javascript\">\
gl.viewport(0, 0, WIDTH, HEIGHT);\n\
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);\n\
\n\
gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);\n\
gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute,\n\
  triangleVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);\n\
setMatrixUniforms();\n\
gl.drawArrays(gl.TRIANGLES, 0, triangleVertexPositionBuffer.numItems);\n\
</code></pre> \
</div>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1600, 0, 400)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slides.push(slide);

// Slide 10
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>But fear not...</h1>\
<div style=\"position:relative; width: 100%;text-align: center\"> \
<pre><code class=\"language-javascript\">\
var scene    = new THREE.Scene(),\n\
    camera   = new THREE.PerspectiveCamera(...),\n\
    renderer = new THREE.WebGLRenderer()\n\
\n\
var box = new THREE.Mesh(...)\n\
scene.add(box)\n\
\n\
renderer.render(scene, camera) // rinse, repeat\
</code></pre></div>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(2000, 0, 400)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slides.push(slide);

// Slide 10.5
slide = document.createElement("div");
slide.className="slide title";
slide.innerHTML = "<h1 style=\"color: red; font-size:3em;\">停止!</h1>\
<h2>Live code time</h2>\
<div><a href=\"http://avgp.github.io/h2g2three\">avgp.github.io/h2g2three</a></div>\
<img src=\"img/hammertime.gif\">";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(2400, 0, 400)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slides.push(slide);

// Slide 25
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>WebVR</h1> \
<div style=\"position:relative; width: 100%;text-align: center\"><a href=\"http://teleports.me\">teleports.me</a>\
<br><img src=\"img/test.gif\">\
</div>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 400, -800)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);

// Slide 26
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>This is how you get it</h1> \
<pre><code class=\"language-javascript\">\
var vrEffect   = new THREE.VREffect(renderer),\n\
    vrControls = new THREE.VRControls()\n\
\n\
…\n\
\n\
vrControls.update()\n\
vrEffect.render(scene, camera)\
</code></pre>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 200, -800)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);

// Slide 31
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>Wrap up</h1> \
<ul> \
  <li>WebGL is stable</li> \
  <li>Enhance with 3D, but carefully</li> \
  <li>New ways of interaction available</li> \
  <li>WebVR is coming</li> \
  <li>Always give your users superpowers!</li> \
</ul>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 800, -1000)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);

// Slide 31
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>谢谢</h1> \
<img src=\"img/thanks.jpg\" style=\"float:right;margin-right:5em;\" width=\"200\">\
<ul> \
<li>Slides @ <a href=\"http://avgp.github.io/shenjs-3d\">avgp.github.io/shenjs-3d</a></li> \
<li>Twitter: <a href=\"https://twitter.com/g33konaut\">@g33konaut</a></li> \
<li>Web: <a href=\"http://beta.archilogic.com\">archilogic.com</a></li> \
</ul>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 1000, -1000)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);


module.exports = slides;
