window.addEventListener('DOMContentLoaded', init);
 
function init() {
	const width = 960, height = 540;
	const v_init = 300;
	const theta = 45 / 180 * Math.PI;
	const dt = 0.03;
	const x = -5000;
	const y = 0;
	var v_x = v_init * Math.cos(theta);
	var v_y = v_init * Math.sin(theta);
	var a_x = 0.0;
	var a_y = -9.8;

	const renderer = new THREE.WebGLRenderer({
		canvas: document.querySelector('#mycanvas')
	});
	renderer.setSize(width, height);
	renderer.setPixelRatio(window.devicePixelRatio);
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(45, width/height, 1, 10000);
	camera.position.set(0, 0, 10000);
	const geometry = new THREE.BoxGeometry(500, 500, 500);
	const material = new THREE.MeshStandardMaterial({color: 0x0000FF});
	const box = new THREE.Mesh(geometry, material);
	box.position.set(x, y, 0);
	scene.add(box);
	const light = new THREE.DirectionalLight(0xFFFFFF);
	light.intensity = 2;
	light.position.set(1,1,1);
	scene.add(light);

	var flg = 0;
	var lastTime = 0.0;
	setInterval(tick, 1);
	draw();

	function draw(){
		renderer.render(scene, camera);
		requestAnimationFrame(draw);
	}

	function tick(time){
//		box.rotation.x += 0.01;
		box.rotation.y += 0.01;

		v_x += a_x * dt;
		v_y += a_y * dt;
		box.position.x += v_x * dt;
		box.position.y += v_y * dt;
	}
}
