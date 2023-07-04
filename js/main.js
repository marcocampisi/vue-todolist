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
            if (this.todoInput != '') {
                this.todos.push(this.todoInput);
                this.todoInput.text = '';
            }
        }
    }
}).mount('#app');