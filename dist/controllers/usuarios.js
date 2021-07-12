"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.editUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        msg: 'getUsers'
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getUser',
        id
    });
};
exports.getUser = getUser;
const postUser = (req, res) => {
    const body = req.body;
    console.log(body);
    res.json({
        msg: 'postUser',
        body
    });
};
exports.postUser = postUser;
const editUser = (req, res) => {
    const { body } = req.body;
    const { id } = req.params;
    res.json({
        msg: 'editUser',
        id,
        body
    });
};
exports.editUser = editUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUser',
        id,
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=usuarios.js.map