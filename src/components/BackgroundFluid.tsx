import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface BackgroundFluidProps {
  blobColors: number[];
}

const BackgroundFluid = ({ blobColors }: BackgroundFluidProps) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    
    // Orthographic camera ensures blobs stay the same size regardless of Z depth
    const camera = new THREE.OrthographicCamera(
      window.innerWidth / -2, window.innerWidth / 2,
      window.innerHeight / 2, window.innerHeight / -2,
      1, 1000
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // 2. Create Blobs
    const geometry = new THREE.CircleGeometry(200, 32); // Simple 2D circles
    const group = new THREE.Group();

    // Use passed colors or fallback
    const colors = blobColors.length === 4 ? blobColors : [0xeab308, 0xa16207, 0xfacc15, 0x713f12];
    
    const blobs = [
      { color: colors[0], x: -300, y: 100, scale: 1.5, speed: 0.8 }, 
      { color: colors[1], x: 300, y: -100, scale: 1.2, speed: 1.2 }, 
      { color: colors[2], x: -100, y: -200, scale: 1.8, speed: 0.6 }, 
      { color: colors[3], x: 200, y: 200, scale: 1.4, speed: 0.9 }, 
    ];

    const meshes = blobs.map(b => {
      const material = new THREE.MeshBasicMaterial({ color: b.color });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(b.x, b.y, 0);
      mesh.scale.setScalar(b.scale);
      mesh.userData = { 
        initialX: b.x, 
        initialY: b.y, 
        speed: b.speed,
        offset: Math.random() * 100 
      };
      group.add(mesh);
      return mesh;
    });

    scene.add(group);

    // 3. Inputs
    let mouseX = 0;
    let mouseY = 0;
    let gyroX = 0;
    let gyroY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2);
      mouseY = (e.clientY - window.innerHeight / 2);
    };

    const onGyro = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        gyroX = e.gamma * 10; 
        gyroY = (e.beta - 45) * 10;
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('deviceorientation', onGyro);

    // 4. Animation
    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      const time = clock.getElapsedTime();

      // Animate individual blobs
      meshes.forEach(mesh => {
        const { initialX, initialY, speed, offset } = mesh.userData;
        
        // Organic wandering motion
        mesh.position.x = initialX + Math.sin(time * speed * 0.5 + offset) * 150;
        mesh.position.y = initialY + Math.cos(time * speed * 0.4 + offset) * 150;
        
        // Gentle pulsing
        const scalePulse = Math.sin(time * speed + offset) * 0.1 + 1;
        mesh.scale.setScalar(mesh.userData.speed * scalePulse);
      });

      // Global Parallax (Mouse + Gyro)
      const targetX = (mouseX + gyroX) * 0.2;
      const targetY = -(mouseY + gyroY) * 0.2; // Invert Y for natural feel

      group.position.x += (targetX - group.position.x) * 0.05;
      group.position.y += (targetY - group.position.y) * 0.05;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // 5. Resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.left = width / -2;
      camera.right = width / 2;
      camera.top = height / 2;
      camera.bottom = height / -2;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('deviceorientation', onGyro);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      meshes.forEach(mesh => {
        (mesh.material as THREE.Material).dispose();
      });
    };
  }, [blobColors]);

  return (
    <div 
      ref={mountRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ 
        filter: 'blur(100px)', // This creates the fluid gradient
        transform: 'scale(1.2)', // Scale up to avoid blurred edges
        opacity: 0.6
      }}
    />
  );
};

export default BackgroundFluid;
