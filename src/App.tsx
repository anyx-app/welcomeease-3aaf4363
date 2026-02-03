import { Routes, Route } from 'react-router-dom';
import AppShell from './components/layout/AppShell';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<Dashboard />} />
        {/* Placeholder routes for future implementation */}
        <Route path="/guide" element={<div className="p-10 text-center text-slate-500">Guide Content Coming Soon</div>} />
        <Route path="/rules" element={<div className="p-10 text-center text-slate-500">House Rules Coming Soon</div>} />
      </Route>
    </Routes>
  );
}
