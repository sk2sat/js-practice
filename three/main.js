window.addEventListener('DOMContentLoaded', init);
 
function init() {
	const width = 960, height = 540;

	const renderer = new THREE.WebGLRenderer({
		canvas: document.querySelector('#mycanvas')
	});
	renderer.setSize(width, height);
	renderer.setPixelRatio(window.devicePixelRatio);
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(45, width/height, 1, 10000);
	camera.position.set(0, 0, 1000);
	const geometry = new THREE.BoxGeometry(500, 500, 500);
	const material = new THREE.MeshStandardMaterial({color: 0x0000FF});
	const box = new THREE.Mesh(geometry, material);
	scene.add(box);
	const light = new THREE.DirectionalLight(0xFFFFFF);
	light.intensity = 2;
	light.position.set(1,1,1);
	scene.add(light);
	
	tick();

	function tick(){
		requestAnimationFrame(tick);
		box.rotation.x += 0.01;
		box.rotation.y += 0.01;

		renderer.render(scene, camera);
	}
}
