"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.editUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const User_1 = __importDefault(require("../models/User"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.findAll();
        res.json(users);
    }
    catch (error) {
        console.error(error);
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield User_1.default.findByPk(id);
        if (user) {
            res.json(user);
        }
        else {
            res.json({
                error: 'User not found'
            });
        }
    }
    catch (error) {
        console.error(error);
    }
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const emailExist = yield User_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (emailExist) {
            return res.status(400).json({
                error: 'Email already exists'
            });
        }
        const user = yield User_1.default.create(body);
        res.json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Something went wrong'
        });
    }
});
exports.postUser = postUser;
const editUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const { id } = req.params;
    try {
        const user = yield User_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({
                error: 'User not found'
            });
        }
        yield user.update(body);
        res.json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Something went wrong'
        });
    }
});
exports.editUser = editUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield User_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({
                error: 'User not found'
            });
        }
        yield user.update({
            state: false
        });
        res.json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Something went wrong'
        });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=usuarios.js.map