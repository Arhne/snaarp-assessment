'use client';

import { useDrop } from 'react-dnd';
import styles from './draggableGrid.module.scss';

interface DraggableGridProps {
  children: React.ReactNode;
  onDragEnd: (fromIndex: number, toIndex: number) => void;
  className?: string;
  dragType?: string;
}

export function DraggableGrid({ children, onDragEnd, className = '', dragType = 'widget' }: DraggableGridProps) {
  const [{ isOver }, drop] = useDrop({
    accept: dragType,
    drop: (item: { index: number }, monitor) => {},
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      //ref={drop}
      className={`${styles.gridContainer} ${styles.dropZone} ${isOver ? styles.isOver : ''} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
