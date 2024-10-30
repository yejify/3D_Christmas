import { useGLTF } from '@react-three/drei';

export function Cloud({ opacity, ...props }) {
  const { nodes, materials } = useGLTF('/models/cloud/model.glb');
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry}>
        <meshStandardMaterial
          envMapIntensity={2}
          transparent
          opacity={opacity}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/models/cloud/model.glb');
