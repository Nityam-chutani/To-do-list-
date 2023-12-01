let fs = require("fs");
let path = require("path");
let filepath = path.join(__dirname, "..", "todo", "todo.js");

class todo {

    static getdata() {
        return new Promise((resolve, reject) => {
            fs.readFile(filepath, { encoding: "utf-8" }, (err, data) => {
                if (err) return reject(err.message);
                if (data.length == 0) {
                    resolve("No task found here");
                }
                else {
                    resolve(JSON.parse(data));//parse json string into javascript object
                }
            })
        })
    }
    static writedata(value) {
        return new Promise((resolve, reject) => {
            fs.readFile(
                filepath,
                {
                    encoding: "utf-8"
                },
                (err, data) => {
                    if (err) return reject(err.message);
                    if (data.length == 0) {
                        data = []
                    } else {
                        data = JSON.parse(data);
                    }

                    data.push(value);
                    fs.writeFile(
                        filepath,
                        JSON.stringify(data),//converti json string into javascript object 
                        (err) => {
                            if (err) return reject(err.message);
                            resolve(`${value.name} task added `);
                        }
                    )

                }

            )
        })
    }
    static deletedata(id) {
        return new Promise((resolve, reject) => {
            fs.readFile(filepath, { encoding: "utf-8" }, (err, data) => {
                if (err) return reject(err.message);
                if (data.length == 0) {
                    resolve("todolist empty");

                }
                else {
                    data = JSON.parse(data);

                }

                data = data.filter(element =>
                    element.id !== id
                )

                fs.writeFile(
                    filepath,
                    JSON.stringify(data),
                    (err) => {
                        if (err) return reject(err.message);
                        resolve(`${value} removed `);
                    }
                )
            })
        })

    }
    static editdata(id, edittask) {
        return new Promise((resolve, reject) => {
            fs.readFile(filepath, { encoding: "utf-8" }, (err, data) => {
                if (err) return reject(err.message);
                if (data.length == 0) {
                    resolve("todolist  empty");
                }
                else {
                    data = JSON.parse(data);
                }

                data.forEach(element => {
                    if (element.id === id) {
                        element.name = edittask;
                    }
                })
                fs.writeFile(filepath, JSON.stringify(data), (err) => {
                    if (err) return reject(err.message);
                    resolve(`${name} successfully changed to ${edittask}`)

                })

            })
        })
    }

}

module.exports = todo;