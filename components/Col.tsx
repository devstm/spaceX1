import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface IProps {
  id: number;
  title: string;
}

function SortableItem(props: IProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    border: '2px solid black',
    cursor: 'pointer',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {props.title}
    </div>
  );
}
export default SortableItem;
