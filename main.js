import * as THREE from 'three';

function init() {
    const canvasContainer = document.getElementById('canvas-container');
    
    // Scene
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, canvasContainer.offsetWidth / canvasContainer.offsetHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
    canvasContainer.appendChild(renderer.domElement);
    
    // Box Geometry
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        
        renderer.render(scene, camera);
    }
    
    animate();
}

// Responsive canvas
window.addEventListener('resize', () => {
    const canvasContainer = document.getElementById('canvas-container');
    const camera = scene.camera;
    const renderer = scene.renderer;
    camera.aspect = canvasContainer.offsetWidth / canvasContainer.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
});

document.addEventListener('DOMContentLoaded', init);
