const { createApp } = Vue;

createApp({
    data() {
        return {
            list: [],
            newToDo: ''
        }
    },
    mounted() {
        axios
            .get('http://localhost:8888/BOOLEAN%20PHP%20Class144/php-todo-list-json/backend/list.php')
            .then((response) => {
                console.log(response.data);
                this.list = response.data
            })
    },
    methods: {
        addNewToDo: function () {
            axios
                .post('http://localhost:8888/BOOLEAN%20PHP%20Class144/php-todo-list-json/backend/createNewToDo.php', { toDo: this.newToDo }, { headers: {'content-type': 'multipart/form-data'} })
                .then (response => {
                    console.log(response.data);
                    this.list = [...this.list, response.data]
                })
        }
    }
}).mount('#app')