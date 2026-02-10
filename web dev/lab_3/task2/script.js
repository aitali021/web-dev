        const newTaskInput = document.getElementById('newTask');
        const addBtn = document.getElementById('addBtn');
        const taskList = document.getElementById('taskList');
        
        function addTask() {
            const text = newTaskInput.value.trim();
            
            if (!text) {
                alert('Please enter a task');
                return;
            }
            
        
            const li = document.createElement('li');
            
    
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            
   
            const taskText = document.createElement('span');
            taskText.className = 'task-text';
            taskText.textContent = text;
           
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.title = 'Delete task';
            
            
            li.appendChild(checkbox);
            li.appendChild(taskText);
            li.appendChild(deleteBtn);
            
    
            taskList.appendChild(li);
            
          
            newTaskInput.value = '';
            newTaskInput.focus();
            
         
            checkbox.addEventListener('change', function() {
                taskText.classList.toggle('completed', this.checked);
            });
            
    
            deleteBtn.addEventListener('click', function() {
                if (confirm('Delete this task?')) {
                    li.remove();
                }
            });
        }
        

        addBtn.addEventListener('click', addTask);
        
        newTaskInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });
        

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
