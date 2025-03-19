import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

type GlobeProps = {
  className?: string;
  autoRotate?: boolean;
  initialZoom?: number;
};

type Marker = {
  lat: number;
  lng: number;
  color: string;
  size: number;
  pulseSpeed?: number; // Speed of pulse animation
};

const Globe3D: React.FC<GlobeProps> = ({ 
  className = '', 
  autoRotate = true,
  initialZoom = 2.5
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const markersRef = useRef<THREE.Mesh[]>([]);
  const animationFrameRef = useRef<number>(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Example marker locations from around the world
  const markers: Marker[] = [
    { lat: 40.7128, lng: -74.006, color: '#00FFFF', size: 0.022, pulseSpeed: 0.5 }, // New York
    { lat: 51.5074, lng: -0.1278, color: '#00FFFF', size: 0.022, pulseSpeed: 0.7 }, // London
    { lat: 35.6762, lng: 139.6503, color: '#00FFFF', size: 0.022, pulseSpeed: 0.6 }, // Tokyo
    { lat: -33.8688, lng: 151.2093, color: '#00FFFF', size: 0.022, pulseSpeed: 0.55 }, // Sydney
    { lat: 37.7749, lng: -122.4194, color: '#00FFFF', size: 0.022, pulseSpeed: 0.8 }, // San Francisco
    { lat: 55.7558, lng: 37.6173, color: '#00FFFF', size: 0.022, pulseSpeed: 0.65 }, // Moscow
    { lat: -22.9068, lng: -43.1729, color: '#00FFFF', size: 0.022, pulseSpeed: 0.45 }, // Rio de Janeiro
    { lat: 28.6139, lng: 77.209, color: '#00FFFF', size: 0.022, pulseSpeed: 0.7 }, // New Delhi
    { lat: 1.3521, lng: 103.8198, color: '#00FFFF', size: 0.022, pulseSpeed: 0.5 }, // Singapore
    { lat: -26.2041, lng: 28.0473, color: '#00FFFF', size: 0.022, pulseSpeed: 0.6 }, // Johannesburg
    { lat: 19.4326, lng: -99.1332, color: '#00FFFF', size: 0.022, pulseSpeed: 0.7 }, // Mexico City
    { lat: 48.8566, lng: 2.3522, color: '#00FFFF', size: 0.022, pulseSpeed: 0.5 }, // Paris
    { lat: 55.6761, lng: 12.5683, color: '#00FFFF', size: 0.022, pulseSpeed: 0.6 }, // Copenhagen
    { lat: 41.9028, lng: 12.4964, color: '#00FFFF', size: 0.022, pulseSpeed: 0.5 }, // Rome
    { lat: -34.6037, lng: -58.3816, color: '#00FFFF', size: 0.022, pulseSpeed: 0.7 }, // Buenos Aires
    { lat: 31.2304, lng: 121.4737, color: '#00FFFF', size: 0.022, pulseSpeed: 0.8 }, // Shanghai
    { lat: 25.276987, lng: 55.296249, color: '#00FFFF', size: 0.022, pulseSpeed: 0.6 }, // Dubai
    { lat: 52.52, lng: 13.405, color: '#00FFFF', size: 0.022, pulseSpeed: 0.5 }, // Berlin
    { lat: 59.3293, lng: 18.0686, color: '#00FFFF', size: 0.022, pulseSpeed: 0.45 }, // Stockholm
    { lat: 37.5665, lng: 126.978, color: '#00FFFF', size: 0.022, pulseSpeed: 0.7 }, // Seoul
  ];

  const latLongToVector3 = (lat: number, lng: number, radius: number): THREE.Vector3 => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    
    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    
    return new THREE.Vector3(x, y, z);
  };

  // Initialize and handle resize
  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };
    
    // Initial measurement
    updateDimensions();
    
    // Set up resize listener
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Initialize and animate the 3D scene
  useEffect(() => {
    if (!containerRef.current || dimensions.width === 0 || dimensions.height === 0) return;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Adjust camera position and zoom based on screen size
    const screenSize = Math.min(dimensions.width, dimensions.height);
    const viewportRatio = dimensions.width / dimensions.height;
    
    // Use a larger initial zoom for full-screen background and adjust for viewport ratio
    const adjustedZoom = screenSize < 600 
      ? initialZoom * 1.3 
      : viewportRatio > 1.5 
        ? initialZoom * 0.9  // Widescreen adjustment
        : initialZoom;
    
    // Initialize camera
    const camera = new THREE.PerspectiveCamera(
      45, 
      dimensions.width / dimensions.height, 
      0.1, 
      1000
    );
    camera.position.set(0, 0, adjustedZoom);
    cameraRef.current = camera;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance' // Better performance for background use
    });
    renderer.setSize(dimensions.width, dimensions.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Create controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.15; // Slightly slower rotation for background
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 0.4; // Slower auto-rotation for background
    
    // Tilt the globe slightly for a more dramatic appearance
    controls.object.position.y = 0.3;
    controls.update();
    
    controlsRef.current = controls;

    // Create earth
    const earthRadius = 1;
    const earthGeometry = new THREE.SphereGeometry(earthRadius, 64, 64);
    
    // Create earth material with space blue color and wireframe effect
    const earthMaterial = new THREE.MeshPhongMaterial({
      color: 0x121242,
      emissive: 0x121242,
      emissiveIntensity: 0.3,
      wireframe: true,
      transparent: true,
      opacity: 0.9,
    });
    
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // Create soft glow around earth
    const glowGeometry = new THREE.SphereGeometry(earthRadius * 1.02, 64, 64);
    const glowMaterial = new THREE.MeshPhongMaterial({
      color: 0x8A2BE2,
      emissive: 0x8A2BE2,
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 0.25,
      side: THREE.BackSide,
    });
    
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

    // Add additional larger glow for background effect
    const outerGlowGeometry = new THREE.SphereGeometry(earthRadius * 1.08, 32, 32);
    const outerGlowMaterial = new THREE.MeshPhongMaterial({
      color: 0x00FFFF,
      emissive: 0x00FFFF,
      emissiveIntensity: 0.08,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
    });
    
    const outerGlow = new THREE.Mesh(outerGlowGeometry, outerGlowMaterial);
    scene.add(outerGlow);

    // Adjust marker size based on screen size
    const markerSizeAdjustment = screenSize < 600 
      ? 0.8 
      : screenSize > 1200 
        ? 1.5 
        : 1.2;

    // Add markers
    markers.forEach((marker) => {
      const position = latLongToVector3(marker.lat, marker.lng, earthRadius);
      const adjustedSize = marker.size * markerSizeAdjustment;
      
      // Create the central marker point
      const markerGeometry = new THREE.SphereGeometry(adjustedSize, 16, 16);
      const markerMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(marker.color),
        transparent: true,
        opacity: 0.85,
      });
      
      const markerMesh = new THREE.Mesh(markerGeometry, markerMaterial);
      markerMesh.position.copy(position);
      markerMesh.userData = { 
        originalSize: adjustedSize,
        pulseSpeed: marker.pulseSpeed || 0.5,
        time: Math.random() * Math.PI * 2 // Random starting phase
      };
      
      scene.add(markerMesh);
      markersRef.current.push(markerMesh);
      
      // Create pulsating outer ring
      const ringGeometry = new THREE.RingGeometry(adjustedSize * 1.2, adjustedSize * 2.2, 16);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(marker.color),
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide
      });
      
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.copy(position);
      
      // Orient ring to be perpendicular to the surface
      ring.lookAt(0, 0, 0);
      ring.rotateX(Math.PI / 2);
      
      ring.userData = { 
        originalSize: adjustedSize,
        pulseSpeed: (marker.pulseSpeed || 0.5) * 0.7,
        time: Math.random() * Math.PI * 2 // Random starting phase
      };
      
      scene.add(ring);
      markersRef.current.push(ring);
    });

    // Setup animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      
      // Update controls
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      
      // Animate markers (pulsating effect)
      markersRef.current.forEach((marker) => {
        if (marker.userData) {
          marker.userData.time += 0.01 * (marker.userData.pulseSpeed || 0.5);
          
          // For spheres
          if (marker.geometry instanceof THREE.SphereGeometry) {
            const scale = 1 + 0.3 * Math.sin(marker.userData.time);
            marker.scale.set(scale, scale, scale);
            
            // Also adjust opacity for pulsating glow effect
            if (marker.material instanceof THREE.MeshBasicMaterial) {
              marker.material.opacity = 0.6 + 0.4 * Math.sin(marker.userData.time);
            }
          }
          
          // For rings
          if (marker.geometry instanceof THREE.RingGeometry) {
            const scaleFactor = 1 + 0.6 * Math.sin(marker.userData.time);
            marker.scale.set(scaleFactor, scaleFactor, scaleFactor);
            
            // Fade opacity as it expands
            if (marker.material instanceof THREE.MeshBasicMaterial) {
              marker.material.opacity = 0.5 - 0.3 * Math.sin(marker.userData.time);
            }
          }
        }
      });
      
      // Render scene
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameRef.current);
      
      markersRef.current.forEach((marker) => {
        if (marker.geometry) marker.geometry.dispose();
        if (marker.material instanceof THREE.Material) marker.material.dispose();
      });
    };
  }, [dimensions, autoRotate, initialZoom]);

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-full ${className}`}
    />
  );
};

export default Globe3D; 