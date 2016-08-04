import React from 'react';
import TaskFilterItem from './TaskFilterItem.jsx';

export default function TaskFilters(props) {
  return (<div>
    Show:
    <TaskFilterItem value={props.value}
                    name="All"
                    id="all" />
    <span> </span>
    <TaskFilterItem value={props.value}
                    name="Done"
                    id="done" />
    <span> </span>
    <TaskFilterItem value={props.value}
                    name="Undone"
                    id="undone" />
  </div>);
}
