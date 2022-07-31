import React from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import SortableItem from './Col';

function DragAndDrop({ columns, setColumns }: any) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={columns.map((item: any) => item.id)}
        strategy={verticalListSortingStrategy}
      >
        {columns.map((el: any) => (
          <SortableItem key={el.id} id={el.id} title={el.title} />
        ))}
      </SortableContext>
    </DndContext>
  );

  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (active.id !== over.id) {
      setColumns((items: any) => {
        const oldIndex = items.findIndex((item: any) => item.id === active.id);
        const newIndex = items.findIndex((item: any) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}
export default DragAndDrop;
