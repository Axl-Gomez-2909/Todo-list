import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({ task, onDelete, onUpdate }) => {
  const handleDelete = () => {
    // Función para manejar el evento de eliminar una tarea
    onDelete(task.id);
  };

  const handleUpdate = () => {
    // Función para manejar el evento de actualizar una tarea
    onUpdate(task.id);
  };

  return (
    <li className={`list-group-item ${task.status === 'done' ? 'list-group-item-success' : ''}`}>
      {/* Muestra el título de la tarea y su estado */}
      <span>
        {task.title} - {task.status === 'todo' ? 'Por hacer' : task.status === 'in-progress' ? 'En progreso' : 'Finalizada'}
      </span>
      <div>
        {/* Botón para editar la tarea */}
        <button className="btn btn-success me-2" onClick={handleUpdate}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        {/* Botón para eliminar la tarea */}
        <button className="btn btn-danger me-2" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        {/* Muestra un ícono de check si la tarea está completada */}
        {task.status === 'done' && <FontAwesomeIcon icon={faCheckCircle} />}
      </div>
    </li>
  );
};

export default TaskItem;
