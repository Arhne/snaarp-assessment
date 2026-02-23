'use client';

import type { RefObject } from 'react';
import { useDrop } from 'react-dnd';
import styles from './draggableGrid.module.scss';

interface DraggableGridProps {
  children: React.ReactNode;
  onDragEnd: (fromIndex: number, toIndex: number) => void;
  className?: string;
  dragType?: string;
}

export function DraggableGrid({ children, onDragEnd: _onDragEnd, className = '', dragType = 'widget' }: DraggableGridProps) {
  const [{ isOver }, drop] = useDrop({
    accept: dragType,
    drop: (_item: { index: number }, _monitor) => {},
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop as unknown as RefObject<HTMLDivElement>}
      className={`${styles.gridContainer} ${styles.dropZone} ${isOver ? styles.isOver : ''} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
