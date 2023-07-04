const { createApp } = Vue;

createApp({
    data() {
        return {
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
    }
}).mount('#app');