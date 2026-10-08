const ITEMS = ["Illustration", "Fan art", "3D modelling", "Houdini sims", "VR games", "Unity", "React", "three.js", "Brand design", "Blender"];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((t, i) => (
          <span key={i} className="marquee__item">{t}</span>
        ))}
      </div>
    </div>
  );
}
