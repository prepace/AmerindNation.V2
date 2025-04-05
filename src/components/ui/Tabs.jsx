// components/ui/Tabs.jsx
'use client';
import React, { useState } from 'react';

export function Tabs({ children, defaultValue }) {
  const [active, setActive] = useState(defaultValue);
  return React.Children.map(children, (child) => {
    // Pass active and setActive props to TabsList and TabsTrigger
    if (child.type.displayName === 'TabsList') {
      return React.cloneElement(child, { active, setActive });
    }
    // Render TabsContent only if its value matches the active tab.
    if (child.type.displayName === 'TabsContent') {
      return active === child.props.value ? child : null;
    }
    return child;
  });
}

export function TabsList({ children, active, setActive, className = "" }) {
  return (
    <div className={`flex space-x-2 ${className}`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { active, setActive })
      )}
    </div>
  );
}
TabsList.displayName = 'TabsList';

export function TabsTrigger({ children, value, active, setActive, className = "" }) {
  const isActive = active === value;
  return (
    <button
      className={`px-4 py-2 border rounded ${
        isActive ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
      } ${className}`}
      onClick={() => setActive(value)}
    >
      {children}
    </button>
  );
}
TabsTrigger.displayName = 'TabsTrigger';

export function TabsContent({ children, value }) {
  return <div>{children}</div>;
}
TabsContent.displayName = 'TabsContent';
