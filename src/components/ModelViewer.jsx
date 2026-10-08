// Loaded on demand (React.lazy) so three.js only downloads when a visitor
// presses "Enter the Witch House".
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls, Environment, PerspectiveCamera, useProgress } from "@react-three/drei";
import { WitchHouse } from "./WitchHouse2026.jsx";

function Progress() {
  const { active, progress } = useProgress();
  if (!active) return null;
  return (
    <div className="stage__progress" role="status">
      <div style={{ textAlign: "center" }}>
        Loading the house… {Math.round(progress)}%
        <div className="bar">
          <i style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

export default function ModelViewer() {
  return (
    <>
      <Canvas dpr={[1, 2]} gl={{ antialias: true }}>
        <PerspectiveCamera makeDefault fov={60} position={[10, 20, 0]} />
        <CameraControls makeDefault minDistance={4} maxDistance={60} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <WitchHouse />
          <Environment background={false} preset="apartment" />
        </Suspense>
      </Canvas>
      <Progress />
      <div className="stage__hud">Drag to orbit · scroll / pinch to zoom · right-drag to pan</div>
    </>
  );
}
