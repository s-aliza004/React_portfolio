import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 3, 2]} intensity={1} />
      
      {/* 3D Rotating Cube with Text */}
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="aqua" />
        <Html position={[0, 0, 1.2]}>
          <div style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>
            Welcome to My Portfolio
          </div>
        </Html>
      </mesh>

      {/* Orbit Controls */}
      <OrbitControls />
    </Canvas>
  );
}
