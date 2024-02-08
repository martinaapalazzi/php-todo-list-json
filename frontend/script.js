const { createApp } = Vue;

createApp({
    data() {
        return {
            list: []
        }
    },
    mounted() {
        axios
            .get('http://localhost:8888/BOOLEAN%20PHP%20Class144/php-todo-list-json/backend/list.php')
            .then((response) => {
                console.log(response.data);
                this.list = response.data
            })
    }
}).mount('#app')