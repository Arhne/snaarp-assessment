'use client';

import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';
import styles from './draggableWidget.module.scss';

interface DraggableWidgetProps {
  id: string;
  index: number;
  //title: string;
  children: React.ReactNode;
  className?: string;
  onMove?: (fromIndex: number, toIndex: number) => void;
  dragType?: string;
}

export function DraggableWidget({
  id,
  index,
  //title,
  children,
  className = '',
  onMove,
  dragType = 'widget',
}: DraggableWidgetProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: dragType,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: dragType,
    drop: (draggedItem: { id: string; index: number }) => {
      if (draggedItem.index !== index && onMove) {
        onMove(draggedItem.index, index);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={` ${styles.dragContainer}
        
        ${isDragging ? 'shadow-2xl scale-105 opacity-95 z-50 border-primary' : ''}
        ${isOver ? 'scale-95 opacity-75' : ''}
        ${className}
      `}
    >
      {/* <div className="mb-4 flex items-center gap-3 group">
        <GripVertical className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      </div> */}
      <div>{children}</div>
    </div>
  );
}
