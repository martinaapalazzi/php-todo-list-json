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
        },
        invertDone: function (index) {
            this.list[index]['done'] = !this.list[index]['done'];
            console.log('Fatto!', index, this.list)

            // Chiamata axios a updateTodo.php e invii index e this.list[index]['done'] e l'index
            
            axios
                .post('http://localhost:8888/BOOLEAN%20PHP%20Class144/php-todo-list-json/backend/updateToDo.php', { done: this.list[index]['done'], index }, { headers: {'content-type': 'multipart/form-data' } })
                .then (response => {
                    console.log(response.data);
                })

            // $allTodos[$index]['done'] = $_POST['done']
            // file_put ecc

        }
    }
}).mount('#app')