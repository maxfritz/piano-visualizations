//set the scene
var width = window.innerWidth, height = window.innerHeight; //scene dimensions
var fov = 75; // field of view
var aspect = width/height; // aspect ratio
var near = 0.1, far = 2000; //distance from camera

var scene = new THREE.Scene(); // container for everything
var camera = new THREE.PerspectiveCamera(fov, aspect, near, far); //camera type




// on resize
window.addEventListener('resize', function() {
     var width = window.innerWidth,
         height = window.innerHeight;
     renderer.setSize(width, height);
     camera.aspect = width / height;
     camera.updateProjectionMatrix();
   });



camera.position.z = 20;
var renderer = new THREE.WebGLRenderer(); // it is what it is
renderer.setSize(width,height);
document.body.appendChild(renderer.domElement);

scene.background = new THREE.Color( 0x000033)

// Create a light, set its position, and add it to the scene.
var light = new THREE.PointLight(0xffffff);
//light.position.set(-100,200,100);
scene.add(light);

var animate = ()=>{
  requestAnimationFrame(animate); //notify browser that we want to animate

cube.rotation.x += 0.01;
cube.rotation.y += 0.01;

  renderer.render(scene,camera) // display the scene
};

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube)


animate();
