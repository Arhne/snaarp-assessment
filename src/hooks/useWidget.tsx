import { useCallback, useEffect, useState } from 'react';
import { defaultLayout, type WidgetPosition } from '../utils/defaultLayout';


const STORAGE_KEY = 'dashboard-widget-layout';

export function useWidgetState() {
  const [layout, setLayout] = useState<WidgetPosition[]>(defaultLayout);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load layout from localStorage on mount; merge with default so new widgets always appear
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as WidgetPosition[];
        const merged = [...parsed];
        defaultLayout.forEach((defaultWidget) => {
          if (!merged.some((w) => w.id === defaultWidget.id)) {
            merged.push(defaultWidget);
          }
        });
        setLayout(merged);
      } catch (e) {
        console.error('Failed to parse layout from localStorage:', e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save layout to localStorage whenever it changes
  const updateLayout = useCallback((newLayout: WidgetPosition[]) => {
    setLayout(newLayout);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newLayout));
  }, []);

  // Reset to default layout
  const resetLayout = useCallback(() => {
    setLayout(defaultLayout);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultLayout));
  }, []);

  return {
    layout,
    updateLayout,
    resetLayout,
    isLoaded,
  };
}
