import { Link } from "react-router-dom";

export default function LeftPanel() {
  return (
    <div className="min-h-screen bg-slate-700">
      <div className="w-32">
        <Link to="/list">返回</Link>
      </div>
    </div>
  );
}
