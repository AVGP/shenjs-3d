var CSS3D = require('./css3d');

var slides = [];

// Slide 1
var slide = document.createElement("div");
slide.className="slide title";
slide.innerHTML = "<h1>Diving in</h1> \
<h2>WebGL and WebVR</h2>";

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
slide.innerHTML = "<h1>Sharing stories</h1>\
<div style=\"position:relative; width: 100%;text-align: center\"> \
  <img height=\"200\" src=\"https://lh6.googleusercontent.com/AMTm57sD-fWQkcwb4sJ8jrHPD1A72uhMMH8zEIpNgYrcds_T3qa5RmqOfE9UkZLMqHcpy4EUtPXugQAAmBQLn2i9JC3zNS1PLB1fHTPDd7hR8NaRRUVVDrU0CMtmbksoTNo3BEHjtg\"> \
  <img height=\"200\" src=\"https://lh5.googleusercontent.com/yjKYpHiieLuNyp579fNnmli2wN8CKI1UzPfHT9RZJcu4VJRfudIVggxjR6lfYEmhY3nc10SkbPeuq4dqgDhdn__8sGirJ3V4Oo90jorHYsw5hBiGAqa5E40_TBFAr60Y64FV0rfYaA\"> \
  <img height=\"200\" src=\"https://lh4.googleusercontent.com/7AVBkv8sRZmvfcFRpJPzgVEGbsl_z-8dgE4pHDOUOMNny8Rtd_GuZDzrS1k1ISyetwRRQkusV4QfGI9hlbivocSRjR69ITBq7cm3jgCICG5Dj57hZxGJpCxCItL0uaFufljIOInINQ\"> \
</div>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(0, 400, 400)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slides.push(slide);

// Slide 4.25 :-)
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>What's WebGL giving us?</h1>\
<div style=\"position:relative; width: 100%;text-align: center\"> \
<img src=\"img/coordinates.png\" height=\"280\">\
</div>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(0, -400, 400)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slides.push(slide);

// Slide 4.75 :-)
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>What's WebGL giving us? (cont)</h1>\
<div style=\"position:relative; width: 100%;text-align: center\"> \
<img src=\"img/pipeline.png\" width=\"500\">\
</div>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(0, -800, 400)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slides.push(slide);

// Slide 5
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>Using WebGL for stories</h1>\
<div style=\"position:relative; width: 100%;text-align: center\"> \
  <a href=\"http://www.nytimes.com/interactive/2015/01/09/sports/the-dawn-wall-el-capitan.html\"><img height=\"280\" src=\"tdw.gif\"></a> \
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
  <img height=\"280\" src=\"https://lh3.googleusercontent.com/4ahd4pgvgniMWc_Rlqgw5Rpe7XyGZTa8EZGu_ei6Us7rfRy-llkc2oFK_WjhTblGOs9doLaM5_V8QFjpMxMrmNZ-Sv858rWweXxLHvkGzBL9dWxxrLro9uY05mcgALRokbwEsFhHtg\">\
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
slide.innerHTML = "<h1>WebGL is verbose</h1>\
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
slide.innerHTML = "<h1>Stop!</h1>\
<h2>Live code time</h2>\
<a href=\"http://avgp.github.io/h2g2three\">avgp.github.io/h2g2three</a>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(2400, 0, 400)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slides.push(slide);


// Slide 11
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>Examples for 3D on the web</h1>\
<ul> \
  <li><a href=\"https://www.google.ch/maps/place/Mercat+del+Born/@41.3855758,2.1846981,653m/data=!3m1!1e3!4m6!1m3!3m2!1s0x12a4a2f17b8c4573:0xc6f1f87231db47fc!2sMercat+del+Born!3m1!1s0x0000000000000000:0xc6f1f87231db47fc!6m1!1e1\">Google Maps</a></li> \
  <li><a href=\"http://beta.archilogic.com/7yMgFh\">Apartment visualisation &amp; customisation</a></li> \
  <li><a href=\"http://openjscad.org/\">CAD in your browser</a></li> \
  <li><a href=\"http://media.tojicode.com/q3bsp/\">Quake 3!</a></li> \
</ul>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 0, 0)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);

// Slide 11
slide = document.createElement("div");
slide.className="slide title";
slide.innerHTML = "<h1 style=\"position: relative; top: 50%; margin-top: -1em\">2. Interactivity and 3D</h1>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 400, 0)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);

// Slide 12
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>Wait... can we?</h1>\
<div style=\"position:relative; width: 100%;text-align: center\"> \
  <img height=\"280\" src=\"https://lh3.googleusercontent.com/4ahd4pgvgniMWc_Rlqgw5Rpe7XyGZTa8EZGu_ei6Us7rfRy-llkc2oFK_WjhTblGOs9doLaM5_V8QFjpMxMrmNZ-Sv858rWweXxLHvkGzBL9dWxxrLro9uY05mcgALRokbwEsFhHtg\">\
</div>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 800, 0)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);

// Slide 13
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>Wait... can we?</h1>\
<div style=\"position:relative; width: 100%;text-align: center\"> \
<img height=\"280\" src=\"https://lh3.googleusercontent.com/4ahd4pgvgniMWc_Rlqgw5Rpe7XyGZTa8EZGu_ei6Us7rfRy-llkc2oFK_WjhTblGOs9doLaM5_V8QFjpMxMrmNZ-Sv858rWweXxLHvkGzBL9dWxxrLro9uY05mcgALRokbwEsFhHtg\">\
</div>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 800, 0)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);

// Slide 14
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>New interaction methods</h1>\
<ul> \
  <li style=\"line-height: 8em; margin-bottom: 1em\"> \
    LEAPMotion, £55 \
    <img style=\"float:right; height: 8em; vertical-align: middle\" src=\"https://lh3.googleusercontent.com/TKRKNjFTezZUS-kooy-Ql5GolJpzswXL36A0svPXZLgVjWi-tw0OuAhGK4Q3273_K5gK5oZq_mu-qwvQDp_V3Xk1e9pzjmEmWOpqaQzwWaeTTJMje_U9-GUDbxJ1t5zFYvhpsC9lTw\"> \
  </li> \
  <li style=\"line-height: 8em\"> \
    Myo, $199 \
    <img style=\"float: right; height:8em; vertical-align: middle\" src=\"https://lh3.googleusercontent.com/ipVkeL2CBMQNBlarmvWTXqBGWTU678KERMWjSqTQE00Io1SQKQuYisi7IniCBjg0-LgQ0Bz7emCmoLLCj1Mx045K4_zyeTm9pN5IfRK319PRPQL_f9_PelE2Dq1pLmtMCdmbBmFHOQ\"> \
  </li> \
</ul>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 800, 200)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);

// Slide 15
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>So far it was <span style=\"color: #aa0\"[Update!]</span></h1>\
<ul> \
  <li style=\"color: #0a0\"><em>static</em></li> \
  <li style=\"color: #0a0\"><em>two-dimensional</em></li> \
  <li style=\"color: #a00\"><em>making us spectators</em></li> \
</ul>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 400, 200)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);

// Slide 16
slide = document.createElement("div");
slide.className="slide title";
slide.innerHTML = "<h1 style=\"position: relative; top: 50%; margin-top: -1em\">3. Immersion</h1>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 0, -200)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);

// Slide 17
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>Giving people superpowers</h1> \
<img style=\"float:right\" height=\"280\" src=\"https://lh3.googleusercontent.com/X_xwk5LrlgAn_bzMiWhtXbV94oj3j8d8dFGeDu0501d8ir91l7Srg6riz1O_E622CLxG_UQd5EJ3SShxRUW34MJaHpZTNF3R6W-t0RH5eHSZ1v9sOfrQCeRw7ECpCtQo8PUzTg7XSA\"> \
<blockquote style=\"margin-top: 150px\">... the computer is the most remarkable tool \
that we've ever come up with. <br><br>&mdash; \
It's the equivalent of a bicycle for our minds. \
</blockquote>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 0, -400)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);

// Slide 18
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>Live the moment</h1> \
<img style=\"margin: 0 auto; display:block\" src=\"https://lh3.googleusercontent.com/LtTL16wYNltxLRZKVEl4moK92oqreXdOrA0StWI3GNG32XkoU6RL-hkbw1jB_o-TmevavMCeEfgCdcHKDhhH3LJtPSLCqssahbXVo0BpSy975GnkP4Kmvx92-GzBZRFfpFJGTVs9rA\">";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 0, -600)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);

// Slide 19
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>Virtual Reality take 1: Sensorama, 1962</h1> \
<img style=\"display: block;margin: 0 auto;\" src=\"https://lh3.googleusercontent.com/-FnzZ_2e5q2oSdMuztC_WVkFi-NziLIFwgTZWozCwSdUQc8nGf6n2SgmHyleNx_4Y6XC3qH7g0yR_qRtIwJ1FcV_rs2BAGPX4lPxIT9RyriqzUtjSggKmEYchT_HnVblXtm6fFNnhA\" height=\"280\">";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 200, -600)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);

// Slide 20
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>Virtual Reality take 2: Damocles' Sword, 1968</h1> \
<img style=\"display: block;margin: 0 auto;\" src=\"https://lh5.googleusercontent.com/QKp7I8nebUro2qCqZUn3uy2mbl8SrJNsZkaNTv_Jn2ziq1pZ5H7swImHbDvmYZgOAkoHSk2vyl6gk0_haBhe0hDSJakIRGiuxExhyZkEKWIdFdY-lA_mO2Mfc4MspcePa82_R_RKGA\" height=\"280\">";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 400, -600)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);

// Slide 21
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>Virtual Reality take 3:, Sega VR-1 1994</h1> \
<img style=\"display: block;margin: 0 auto;\" src=\"https://lh4.googleusercontent.com/Nz80cEP9Q_9smLZfVgOjNXOBy9bYOvToKaGkIJZUCWmVWk6QviuRnd4PKUT0Ri1isibXouX7mbjCdik6MjLKC85j8SJz2rzIIM4vAoywZ7dlrZkO57TdG0VCHT4RDSQDVRw7kmwrSg\" height=\"280\">";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 600, -600)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);

// Slide 22
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>Virtual Reality take 3: VirtualBoy 1999</h1> \
<h2>$273</h2> \
<img style=\"display: block;margin: 0 auto;\" src=\"https://lh5.googleusercontent.com/AZ8HA2-p1f5QDbR2dGm1rQKa4rqBqAXwXmJVqJVIL2Etf6lI2p6eRdCBasaVItFYhE6GjMrTl1F-1I3zyATn9vcJ_Qz1aGOKmp2qeKR1OmR19_SN6pPLdJR7Gi0lj3jeR0-mngVVCA\" height=\"250\">";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 800, -600)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);

// Slide 22
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>Virtual Reality take 3: VirtualBoy 1999</h1> \
<h2>$273</h2> \
<img style=\"display: block;margin: 0 auto;\" src=\"https://lh5.googleusercontent.com/AZ8HA2-p1f5QDbR2dGm1rQKa4rqBqAXwXmJVqJVIL2Etf6lI2p6eRdCBasaVItFYhE6GjMrTl1F-1I3zyATn9vcJ_Qz1aGOKmp2qeKR1OmR19_SN6pPLdJR7Gi0lj3jeR0-mngVVCA\" height=\"250\">";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 800, -600)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);

// Slide 23
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>Virtual Reality take 4: Oculus Rift, 2014</h1> \
<h2>$350</h2> \
<img style=\"display: block;margin: 0 auto;\" src=\"https://lh3.googleusercontent.com/m9ICiP414lv4h4Iz6-sHk8RKGzftN5jG3bPsZ3XXbMNJATYCAOwivJtZGm1L3K-KKz531EZJUkT44czZs8n76rQ6udt-eJ8vRca9RWznXR6P630VCJEYukIhTAF8zCGovj0aIenlqQ\" height=\"250\">";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 800, -800)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);

// Slide 24
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>Virtual Reality take 4: Google Cardboard, 2014</h1> \
<h2>$5</h2> \
<img style=\"display: block;margin: 0 auto;\" src=\"https://lh3.googleusercontent.com/FIgcrD4GfjyOonPqKJLuj-0ivTS4Gm-ErJ7kAktKWZkdHO_4gq21KcYKgwkeV9DFTYAKYTN_9REdszjBm1xd6jrzQT_JKNuKdb_i0gBiSlCOePwfJfsZhTV0_ZlUNQ1gGqB10GYXYg\" height=\"250\">";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 600, -800)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);

// Slide 25
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1>WebVR</h1> \
<div style=\"position:relative; width: 100%;text-align: center\"><a href=\"http://teleports.me\">Demo time.</a>\
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

// Slide 27
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1 style=\"text-align: center\">But...</h1> \
<img style=\"display: block;margin: 0 auto;\" src=\"https://lh5.googleusercontent.com/jClt6aDBOZDQ3CBeE6M1tp79c1xhNdhwjd3JrzrBADr3mhPPjD98sht-8Yi70rcD3KkZYD9nMi9eqxb9l-F7dGsaqsmqgBiYBVsUdrB-NwGIfTMzNSgrm39htGkwjjG4yv6iMUbN0Q\" height=\"250\"> \
<h2 style=\"text-align: center\">Challenges ahead!</h2>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 0, -800)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);

// Slide 28
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1 style=\"text-align: center\">Simulator sickness</h1> \
<img style=\"display: block;margin: 0 auto;\" src=\"https://lh3.googleusercontent.com/o4we70OVc-jd-_ggmqKKOTnm6Mrn79-5nWtts91uPDUAwC_BnMlTN-3U4x_DzkR0sKysI2wEkXIdcc8ZXhUXbUukORLh0gGaO7pD5QC_LABUdowRSCKjwoSfFYvl2uviMGhbXMH09w\" height=\"250\">";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 0, -1000)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);

// Slide 29
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1 style=\"text-align: center\">Design Guidelines</h1> \
<img style=\"display: block;margin: 0 auto;\" src=\"https://lh4.googleusercontent.com/39kHVbmqhMFyMBO8Es19d1QFR9Q4SBfjyGljC6WXSxKXYORRAjgNiQoNrQQ3UekidKkjhX7tnr_7eHYB8Fh2dE1PjdwrkvK2plcSWXbPWPiVxDTj2dKQzbSlTKjHFLh2GnwgjeuWvg\" height=\"250\"> \
<p style=\"text-align: center\"><a href=\"https://www.google.com/cardboard/spec-vr\">Google Cardboard Design Guidelines</p>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 200, -1000)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);

// Slide 30
slide = document.createElement("div");
slide.className="slide";
slide.innerHTML = "<h1 style=\"text-align: center\">Interfaces & Interactions</h1> \
<img style=\"display: block;margin: 0 auto;\" src=\"https://lh5.googleusercontent.com/03MGV4UrQpIakOTtpkTMkh9yo8qKAjbu1FWwlc92ANxz7jMRiLGfDp7-Zwka9rZVjk8N5wWOR6oPlTmqjeVUgLoA_gHSZb--IJ-gk2sRwuUNa4KnA1rGv3mvc2A80hPXfp3HZzPI5w\" height=\"250\">";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 400, -1000)
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
<ul> \
<li>Slides @ <a href=\"https://bit.ly/shenjs-3d\">bit.ly/shenjs-3d</a></li> \
<li>Twitter: <a href=\"https://twitter.com/g33konaut\">@g33konaut</a></li> \
<li>Web: <a href=\"http://beta.archilogic.com\">archilogic.com</a></li> \
</ul>";

slide.mesh = new CSS3D.Object3D(slide);
slide.mesh.position.set(1900, 1000, -1000)
slide.mesh.scale.set(0.2, 0.2, 0.2);
slide.mesh.rotation.set(0, Math.PI / 2, 0);
slides.push(slide);


module.exports = slides;
