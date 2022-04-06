"user strict";

class UserStorage {
    static #users = {
        id: ["woorimIT", "나개발", "김팀장", "1234"],
        psword: ["1234", "1234", "123456", "1234"],
        name: ["우리밋", "나개발", "김팀장", "1234"]
    };

    static getUsers(... fileds) {
        console.log(fileds);
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, filed) => {
            if(users.hasOwnProperty(field)) {
                newUsers[filed] = users[filed];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;