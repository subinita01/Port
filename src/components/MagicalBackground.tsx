import { Canvas } from '@react-three/fiber';
import { Stars, Float, Sparkles } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const MagicalOrb = ({ position, color }: { position: [number, number, number], color: string }) => {
  const orbRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0] * 2) * 0.3;
      const material = orbRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.6 + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.2;
    }
  });

  return (
    <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <mesh ref={orbRef} position={position}>
        <sphereGeometry args={[0.08, 16, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.4} />
        <pointLight position={[0, 0, 0]} color={color} intensity={0.1} distance={2} />
      </mesh>
    </Float>
  );
};
const FloatingCandle = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const flameRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
    if (flameRef.current) {
      flameRef.current.scale.setScalar(0.8 + Math.sin(state.clock.elapsedTime * 4 + position[0]) * 0.2);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh ref={meshRef} position={position}>
        {/* Candle body */}
        <cylinderGeometry args={[0.02, 0.02, 0.3]} />
        <meshBasicMaterial color="#9CA3AF" />
        
        {/* Flame */}
        <mesh ref={flameRef} position={[0, 0.2, 0]}>
          <sphereGeometry args={[0.03, 8, 6]} />
          <meshBasicMaterial color="#D1D5DB" transparent opacity={0.6} />
        </mesh>
        
        {/* Inner flame */}
        <mesh position={[0, 0.2, 0]}>
          <sphereGeometry args={[0.02, 8, 6]} />
          <meshBasicMaterial color="#F3F4F6" transparent opacity={0.7} />
        </mesh>
        
        <pointLight position={[0, 0.2, 0]} color="#F3F4F6" intensity={0.3} distance={3} />
      </mesh>
    </Float>
  );
};

const FloatingBook = ({ position }: { position: [number, number, number] }) => {
  const bookRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (bookRef.current) {
      bookRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3;
      bookRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7 + position[1]) * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.1}>
      <group ref={bookRef} position={position}>
        <mesh>
          <boxGeometry args={[0.15, 0.02, 0.2]} />
          <meshBasicMaterial color="#6B7280" />
        </mesh>
        <mesh position={[0, 0.01, 0]}>
          <boxGeometry args={[0.14, 0.01, 0.19]} />
          <meshBasicMaterial color="#9CA3AF" />
        </mesh>
      </group>
    </Float>
  );
};

const DecorativeTree = ({ position }: { position: [number, number, number] }) => {
  const treeRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (treeRef.current) {
      treeRef.current.children.forEach((child, index) => {
        if (index > 0) { // Skip trunk, animate leaves
          child.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.1;
        }
      });
    }
  });

  return (
    <group ref={treeRef} position={position}>
      {/* Tree trunk */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.15, 0.2, 1]} />
        <meshBasicMaterial color="#8B6914" transparent opacity={0.6} />
      </mesh>
      
      {/* Tree canopy layers for fullness */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.6, 8, 6]} />
        <meshBasicMaterial color="#B8860B" transparent opacity={0.7} />
      </mesh>
      
      <mesh position={[0, 1.4, 0]}>
        <sphereGeometry args={[0.4, 8, 6]} />
        <meshBasicMaterial color="#DAA520" transparent opacity={0.8} />
      </mesh>
      
      {/* Glittering effect */}
      <mesh position={[0, 1.3, 0]}>
        <sphereGeometry args={[0.7, 12, 8]} />
        <meshBasicMaterial color="#FFD700" transparent opacity={0.3} />
        <pointLight position={[0, 0, 0]} color="#FFD700" intensity={0.2} distance={3} />
      </mesh>
    </group>
  );
};

const DecorativeVase = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      {/* Vase base */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.2, 0.15, 0.2]} />
        <meshBasicMaterial color="#8B6914" transparent opacity={0.8} />
      </mesh>
      
      {/* Vase body */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.15, 0.2, 0.4]} />
        <meshBasicMaterial color="#B8860B" transparent opacity={0.8} />
      </mesh>
      
      {/* Vase rim */}
      <mesh position={[0, 0.55, 0]}>
        <cylinderGeometry args={[0.18, 0.15, 0.1]} />
        <meshBasicMaterial color="#DAA520" transparent opacity={0.9} />
      </mesh>
      
      {/* Glittering highlight */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.16, 0.21, 0.45]} />
        <meshBasicMaterial color="#FFD700" transparent opacity={0.3} />
        <pointLight position={[0, 0, 0]} color="#FFD700" intensity={0.15} distance={2} />
      </mesh>
    </group>
  );
};

const HogwartsCastle = ({ isVisible }: { isVisible: boolean }) => {
  if (!isVisible) return null;
  
  return (
    <group position={[0, -4, -12]} scale={[8, 8, 8]}>
      {/* Great Hall - Central structure */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[2, 3, 1.5]} />
        <meshBasicMaterial color="#2D2D3A" transparent opacity={0.8} />
      </mesh>
      
      {/* Great Hall Roof */}
      <mesh position={[0, 3.2, 0]} rotation={[0, 0, 0]}>
        <coneGeometry args={[1.5, 1, 4]} />
        <meshBasicMaterial color="#2D2D3A" transparent opacity={0.8} />
      </mesh>
      
      {/* Left Tower (Astronomy Tower) */}
      <mesh position={[-2, 2.5, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 4]} />
        <meshBasicMaterial color="#2D2D3A" transparent opacity={0.8} />
      </mesh>
      
      {/* Left Tower Roof */}
      <mesh position={[-2, 4.8, 0]}>
        <coneGeometry args={[0.5, 1, 6]} />
        <meshBasicMaterial color="#2D2D3A" transparent opacity={0.8} />
      </mesh>
      
      {/* Right Tower (Gryffindor Tower) */}
      <mesh position={[2, 2.5, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 4]} />
        <meshBasicMaterial color="#2D2D3A" transparent opacity={0.8} />
      </mesh>
      
      {/* Right Tower Roof */}
      <mesh position={[2, 4.8, 0]}>
        <coneGeometry args={[0.5, 1, 6]} />
        <meshBasicMaterial color="#2D2D3A" transparent opacity={0.8} />
      </mesh>
      
      {/* Left Wing */}
      <mesh position={[-1.5, 1, -0.5]}>
        <boxGeometry args={[1, 2, 1]} />
        <meshBasicMaterial color="#2D2D3A" transparent opacity={0.8} />
      </mesh>
      
      {/* Left Wing Roof */}
      <mesh position={[-1.5, 2.3, -0.5]}>
        <coneGeometry args={[0.8, 0.8, 4]} />
        <meshBasicMaterial color="#2D2D3A" transparent opacity={0.8} />
      </mesh>
      
      {/* Right Wing */}
      <mesh position={[1.5, 1, -0.5]}>
        <boxGeometry args={[1, 2, 1]} />
        <meshBasicMaterial color="#2D2D3A" transparent opacity={0.8} />
      </mesh>
      
      {/* Right Wing Roof */}
      <mesh position={[1.5, 2.3, -0.5]}>
        <coneGeometry args={[0.8, 0.8, 4]} />
        <meshBasicMaterial color="#2D2D3A" transparent opacity={0.8} />
      </mesh>
      
      {/* Castle Foundation */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[4, 1, 3]} />
        <meshBasicMaterial color="#2D2D3A" transparent opacity={0.6} />
      </mesh>
      
      {/* Bridge */}
      <mesh position={[0, 0.5, -2]}>
        <boxGeometry args={[0.5, 0.2, 2]} />
        <meshBasicMaterial color="#2D2D3A" transparent opacity={0.8} />
      </mesh>
      
      {/* Windows with warm yellowish glow - symmetrical */}
      {[
        [-0.5, 2, 0.76], [0.5, 2, 0.76], [-0.5, 1.2, 0.76], [0.5, 1.2, 0.76],
        [-2, 3, 0.2], [-2, 2, 0.2], [2, 3, 0.2], [2, 2, 0.2],
        [-1.5, 1.5, -0.2], [1.5, 1.5, -0.2]
      ].map((pos, index) => (
        <mesh key={index} position={pos as [number, number, number]}>
          <boxGeometry args={[0.1, 0.15, 0.02]} />
          <meshBasicMaterial color="#FBBF24" transparent opacity={0.7} />
          <pointLight position={[0, 0, 0.1]} color="#FBBF24" intensity={0.15} distance={1} />
        </mesh>
      ))}
    </group>
  );
};



export const MagicalBackground = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const candles = [
    [-8, 3, -4], [8, 2.5, -5], [-6, 4.5, -3], [6, 4, -4]
  ] as [number, number, number][];

  const books = [
    [-7, 5, -3], [7, 5.5, -4]
  ] as [number, number, number][];

  const orbs = [
    { position: [-9, 2, -3], color: "#6B7280" },
    { position: [9, 3, -4], color: "#6B7280" },
    { position: [-5, 6, -5], color: "#6B7280" }
  ];

  const trees = [
    [-10, -5, -5], [10, -5, -5]
  ] as [number, number, number][];

  const vases = [
    [-10, -5.5, -4], [10, -5.5, -4]
  ] as [number, number, number][];

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 2, 8], fov: 75 }}>
        {/* Enhanced starfield */}
        <Stars 
          radius={150} 
          depth={80} 
          count={5000} 
          factor={6} 
          saturation={0} 
          fade 
          speed={0.3}
        />
        
        {/* Reduced sparkle layers */}
        <Sparkles 
          count={80} 
          scale={12} 
          size={2} 
          speed={0.3} 
          color="#E5E7EB"
        />
        
        <Sparkles 
          count={40} 
          scale={8} 
          size={1} 
          speed={0.5} 
          color="#F3F4F6"
        />
        
        {/* Hogwarts Castle - hidden on mobile */}
        <HogwartsCastle isVisible={!isMobile} />
        
        {/* Floating magical elements */}
        {candles.map((position, index) => (
          <FloatingCandle key={`candle-${index}`} position={position} />
        ))}
        
        {books.map((position, index) => (
          <FloatingBook key={`book-${index}`} position={position} />
        ))}
        
        {orbs.map((orb, index) => (
          <MagicalOrb 
            key={`orb-${index}`} 
            position={orb.position as [number, number, number]} 
            color={orb.color} 
          />
        ))}
        
        {/* Decorative trees with vases - hidden on mobile */}
        {!isMobile && trees.map((position, index) => (
          <DecorativeTree key={`tree-${index}`} position={position} />
        ))}
        
        {!isMobile && vases.map((position, index) => (
          <DecorativeVase key={`vase-${index}`} position={position} />
        ))}
        
        {/* Subtle lighting */}
        <ambientLight intensity={0.1} color="#F8FAFC" />
        <pointLight position={[0, 10, 5]} intensity={0.2} color="#F3F4F6" />
        
        {/* Subtle atmospheric light */}
        <pointLight position={[0, -2, -8]} intensity={0.2} color="#E5E7EB" distance={20} />
      </Canvas>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/80" />
    </div>
  );
};