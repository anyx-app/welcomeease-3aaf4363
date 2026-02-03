import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  title?: string;
  icon?: ReactNode;
}

export function GlassCard({ children, className = '', onClick, title, icon }: GlassCardProps) {
  return (
    <div 
      onClick={onClick}
      className={`
        relative overflow-hidden group
        bg-white/40 backdrop-blur-xl border border-white/60 
        shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]
        rounded-3xl p-6 transition-all duration-300 ease-out
        ${onClick ? 'cursor-pointer hover:-translate-y-1 hover:bg-white/50' : ''}
        ${className}
      `}
    >
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-gradient-to-br from-blue-100/50 to-pink-100/50 blur-2xl transition-all group-hover:scale-150" />
      
      {(title || icon) && (
        <div className="flex items-center gap-3 mb-4 relative z-10">
          {icon && (
            <div className="p-2 rounded-xl bg-white/80 shadow-sm text-blue-600 ring-1 ring-black/5">
              {icon}
            </div>
          )}
          {title && <h3 className="font-bold text-slate-800 text-lg">{title}</h3>}
        </div>
      )}
      
      <div className="relative z-10 text-slate-600">
        {children}
      </div>
    </div>
  );
}
