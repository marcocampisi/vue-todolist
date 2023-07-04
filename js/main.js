const { createApp } = Vue;

createApp({
    data() {
        return {
            todoInput: {
                text : '',
                done : false
            },
            todos : [
                {
                    text : 'Primo Todo',
                    done : false
                },
                {
                    text : 'Secondo Todo',
                    done : false
                },
                {
                    text : 'Terzo Todo',
                    done : false
                }
            ]
        }
    },
    methods : {
        addTodo() {
            if (this.todoInput.text.trim() !== '') {
                this.todos.push({
                    text : this.todoInput.text,
                    done : this.todoInput.done
                });
                this.todoInput.text = '';
            }
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        markTodoDone(todo) {
            todo.done = !todo.done;
        }
    }
}).mount('#app');