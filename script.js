console.log('hello')



const scene = new THREE.Scene(); // 🎬
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); //🎥
//(FOV, aspect ratio, near, far)

const renderer = new THREE.WebGLRenderer({
    antialias: true
});


renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)


renderer.setClearColor(0x333333, 1)

const section = document.querySelector("section")
section.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 5;

const animate = () => {
    requestAnimationFrame(animate); //better than setInterval bc pauses when in a diff browser tab
    renderer.render(scene, camera);
}

animate();

// camera.position.z = -50
// camera.lookAt(scene.position)