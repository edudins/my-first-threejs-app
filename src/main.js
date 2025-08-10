import * as THREE from 'three';
import { KeyboardService } from './services/keyboard_service';
import { Being } from './objects/being';
import { ArcadePhysics } from './engines/physics_engine';

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
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;
camera.position.y = 0.8;

const keyboard = new KeyboardService();
const player = new Being(cube, new ArcadePhysics(2));

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const deltaTime = clock.getDelta();

  const input = keyboard.getState();
  player.update(input, deltaTime);

  renderer.render(scene, camera);
}

animate();