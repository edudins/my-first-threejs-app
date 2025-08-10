import * as THREE from 'three';
import { KeyboardService } from './services/keyboard_service';
import { Being } from './objects/being';
import { ArcadePhysics, RealisticPhysics } from './engines/physics_engine';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("canvas"),
});
renderer.setSize(0.8 * window.innerWidth, 0.8 * window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const geometry2 = new THREE.CircleGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const material2 = new THREE.MeshBasicMaterial({ color: 0xf0ff0f });
const cube = new THREE.Mesh(geometry, material);
const circle = new THREE.Mesh(geometry2, material2)
scene.add(cube);
scene.add(circle);
camera.position.z = 5;
camera.position.y = 0.8;

const keyboard = new KeyboardService();
const player1 = new Being(cube, new RealisticPhysics(10));
const player2 = new Being(circle, new ArcadePhysics(5));

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const deltaTime = clock.getDelta();

  const input = keyboard.getState();
  player1.update(input, deltaTime);
  player2.update(input, deltaTime);

  renderer.render(scene, camera);
}

animate();