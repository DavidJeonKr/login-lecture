"user strict";

class UserStorage {
    static #users = {
        id: ["woorimIT", "나개발", "김팀장", "1234"],
        psword: ["1234", "1234", "123456", "1234"],
        name: ["우리밋", "나개발", "김팀장", "1234"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUsers, info) => {
            newUser[info] = users[info][idx];
            return newUser;            
        }, {});
        return userInfo;
    }
}

module.exports = UserStorage;