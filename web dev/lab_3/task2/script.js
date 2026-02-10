// DOM элементтері
        const newTaskInput = document.getElementById('newTask');
        const addBtn = document.getElementById('addBtn');
        const taskList = document.getElementById('taskList');
        
        // Тапсырма қосу функциясы
        function addTask() {
            const text = newTaskInput.value.trim();
            
            if (!text) {
                alert('Please enter a task');
                return;
            }
            
            // Жаңа <li> элементін жасау
            const li = document.createElement('li');
            
            // Чекбокс
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            
            // Тапсырма мәтіні
            const taskText = document.createElement('span');
            taskText.className = 'task-text';
            taskText.textContent = text;
            
            // Жою түймесі
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.title = 'Delete task';
            
            // Элементтерді қосу
            li.appendChild(checkbox);
            li.appendChild(taskText);
            li.appendChild(deleteBtn);
            
            // Тізімге қосу
            taskList.appendChild(li);
            
            // Енгізу өрісін тазарту
            newTaskInput.value = '';
            newTaskInput.focus();
            
            // Чекбокс функциясы
            checkbox.addEventListener('change', function() {
                taskText.classList.toggle('completed', this.checked);
            });
            
            // Жою түймесі функциясы
            deleteBtn.addEventListener('click', function() {
                if (confirm('Delete this task?')) {
                    li.remove();
                }
            });
        }
        
        // Оқиға тыңдағыштары
        addBtn.addEventListener('click', addTask);
        
        newTaskInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });
        
        // Бастапқы тапсырмаларға функцияларды қосу
        document.querySelectorAll('#taskList li').forEach(li => {
            const checkbox = li.querySelector('input[type="checkbox"]');
            const taskText = li.querySelector('.task-text');
            const deleteBtn = li.querySelector('.delete-btn');
            
            checkbox.addEventListener('change', function() {
                taskText.classList.toggle('completed', this.checked);
            });
            
            deleteBtn.addEventListener('click', function() {
                if (confirm('Delete this task?')) {
                    li.remove();
                }
            });
        });