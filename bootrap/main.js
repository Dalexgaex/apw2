document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
  
    taskForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const taskName = document.getElementById('taskName').value;
      const startDate = document.getElementById('startDate').value;
      const endDate = document.getElementById('endDate').value;
      const responsible = document.getElementById('responsible').value;
  
      // Validar fechas
      if (new Date(startDate) > new Date(endDate)) {
        alert('La fecha de inicio no puede ser posterior a la fecha de fin.');
        return;
      }
  
      const taskItem = document.createElement('li');
      taskItem.className = 'list-group-item';
      taskItem.innerHTML = `
        <div>
          <strong>Tarea:</strong> ${taskName} <br>
          <strong>Inicio:</strong> ${startDate} <br>
          <strong>Fin:</strong> ${endDate} <br>
          <strong>Responsable:</strong> ${responsible}
        </div>
        <button class="btn btn-success btn-sm mark-complete">Marcar como Resuelta</button>
        <button class="btn btn-secondary btn-sm unmark-complete" style="display:none;">Desmarcar</button>
        <button class="btn btn-danger btn-sm delete-task">Eliminar</button>
      `;
  
      updateTaskStyles(taskItem, startDate, endDate);
  
      taskList.appendChild(taskItem);
  
      // Limpiar formulario
      taskForm.reset();
    });
  
    taskList.addEventListener('click', function (e) {
      if (e.target.classList.contains('mark-complete')) {
        const taskItem = e.target.closest('li');
        const endDate = taskItem.querySelector('div strong:nth-child(3)').nextSibling.textContent.trim();
        if (new Date() > new Date(endDate)) {
          alert('No se puede marcar como resuelta una tarea cuya fecha de fin ya ha expirado.');
        } else {
          taskItem.classList.remove('pending', 'expired');
          taskItem.classList.add('completed');
          e.target.style.display = 'none';
          taskItem.querySelector('.unmark-complete').style.display = 'inline-block';
        }
      } else if (e.target.classList.contains('unmark-complete')) {
        const taskItem = e.target.closest('li');
        taskItem.classList.remove('completed');
        taskItem.classList.add('pending');
        e.target.style.display = 'none';
        taskItem.querySelector('.mark-complete').style.display = 'inline-block';
      } else if (e.target.classList.contains('delete-task')) {
        if (confirm('¿Está seguro de que desea eliminar esta tarea?')) {
          e.target.closest('li').remove();
        }
      }
    });
  
    function updateTaskStyles(taskItem, startDate, endDate) {
      const currentDate = new Date();
      const start = new Date(startDate);
      const end = new Date(endDate);
  
      if (currentDate > end) {
        taskItem.classList.add('expired');
      } else {
        taskItem.classList.add('pending');
      }
    }
  });
  