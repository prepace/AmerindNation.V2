// components/ui/Card.jsx
import React from 'react';

export function Card({ children, className = "" }) {
  return (
    <div className={`border rounded-lg shadow p-4 bg-white ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return (
    <div className={`mb-2 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "" }) {
  return (
    <h3 className={`text-lg font-bold ${className}`}>
      {children}
    </h3>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`text-sm ${className}`}>
      {children}
    </div>
  );
}
