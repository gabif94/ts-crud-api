"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const router = express_1.Router();
router.get('/', usuarios_1.getUsers);
router.get('/:id', usuarios_1.getUser);
router.post('/', usuarios_1.postUser);
router.get('/:id', usuarios_1.editUser);
router.get('/:id', usuarios_1.deleteUser);
exports.default = router;
//# sourceMappingURL=usuarios.js.map