import { Router } from 'express'
import { deleteUser, editUser, getUser, getUsers, postUser } from '../controllers/usuarios'

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', postUser)
router.put('/:id', editUser)
router.delete('/:id', deleteUser)

export default router