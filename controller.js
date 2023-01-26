const data = require("./data");

class Controller {
    async getTodos() {
        return new Promise((resolve, _) => resolve(data));
    }

    async getTodo(id) {
        return new Promise((resolve, reject) => {
            let todo = data.find((todo) => todo.id === parseInt(id));
            if (todo) {
                resolve(todo);
            } else {
                reject(`Todo with id ${id} not found `);
            }
        });
    }

    async createTodo(todo) {
        return new Promise((resolve, _) => {
            let newTodo = {
                ...todo,
            };

            resolve(newTodo);
        });
    }

    async updateTodo(id) {
        return new Promise((resolve, reject) => {
            let todo = data.find((todo) => todo.id === parseInt(id));
            if (!todo) {
                reject(`No todo with id ${id} found`);
            }
            todo["completed"] = true;
            resolve(todo);
        });
    }

    async deleteTodo(id) {
        return new Promise((resolve, reject) => {
            let todo = data.find((todo) => todo.id === parseInt(id));
            if (!todo) {
                reject(`No todo with id ${id} found`);
            }
            resolve(`Todo deleted successfully`);
        });
    }
}
module.exports = Controller;