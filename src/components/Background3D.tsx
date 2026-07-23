import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

function ChromeKnot() {
  const groupRef = useRef<THREE.Group>(null);
  const knotRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  const [hovered, setHovered] = useState(false);
  const scrollProgress = useRef(0); 

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.current = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const colorA = useRef(new THREE.Color("#FF3FA4"));
  const colorB = useRef(new THREE.Color("#7B8CFF"));
  const currentColor = useRef(new THREE.Color());

  useFrame((state) => {
    if (!groupRef.current || !knotRef.current || !materialRef.current) return;

    const { x, y } = state.pointer;
    const scroll = scrollProgress.current;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      x * 0.6 + scroll * Math.PI * 2, 
      0.04
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -y * 0.4,
      0.04
    );

    knotRef.current.rotation.z += hovered ? 0.005 : 0.0015;
    const targetScale = hovered ? 1.15 :1;
    knotRef.current.scale.setScalar(
      THREE.MathUtils.lerp(knotRef.current.scale.x, targetScale, 0.08)
    );


    const scrollDistort = THREE.MathUtils.lerp(0.15, 0.55, scroll);
    const targetDistort = hovered ? scrollDistort + 0.25 : scrollDistort;
    materialRef.current.distort = THREE.MathUtils.lerp(
      materialRef.current.distort,
      targetDistort,
      0.06
    );

    const targetSpeed = hovered ? 4 : THREE.MathUtils.lerp(1, 2.5, scroll);
    materialRef.current.speed = THREE.MathUtils.lerp(
      materialRef.current.speed,
      targetSpeed,
      0.06
    );
    currentColor.current.copy(colorA.current).lerp(colorB.current, scroll);
    materialRef.current.color.lerp(currentColor.current, 0.05);
  });

  return (
    <group ref={groupRef}>
      <mesh
        ref={knotRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <torusKnotGeometry args={[1.1, 0.34, 220, 32, 2, 3]} />
        <MeshDistortMaterial
          ref={materialRef}
          color="#FF3FA4"
          distort={0.18}
          speed={1.6}
          roughness={0.08}
          metalness={0.85}
        />
      </mesh>
    </group>
  );
}

function Background3D() {
  return (
    <div className="absolute inset-0 z-[1]">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 42 }} dpr={[1, 2]}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[4, 4, 4]} intensity={1.4} color="#ffffff" />
        <directionalLight position={[-4, -2, -4]} intensity={0.6} color="#7B8CFF" />
        <Environment preset="studio" />
        <ChromeKnot />
      </Canvas>
    </div>
  );
}

export default Background3D;