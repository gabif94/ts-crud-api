import { Request, Response } from 'express'
import User from '../models/User'

export const getUsers = async (req: Request, res: Response) => {

    try {
        const users = await User.findAll()
        res.json(users)
    } catch (error) {
        console.error(error)
    }
}

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const user = await User.findByPk(id)
        if (user) {
            res.json(user)
        } else {
            res.json({
                error: 'User not found'
            })
        }

    } catch (error) {
        console.error(error)
    }
}

export const postUser = async (req: Request, res: Response) => {
    const body = req.body



    try {

        const emailExist = await User.findOne({
            where: {
                email: body.email
            }
        })
        if (emailExist) {
            return res.status(400).json({
                error: 'Email already exists'
            })
        }
        const user = await User.create(body)
        res.json(user)

    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: 'Something went wrong'
        })

    }
}

export const editUser = async (req: Request, res: Response) => {
    const body = req.body
    const { id } = req.params

    try {

        const user = await User.findByPk(id)

        if (!user) {
            return res.status(404).json({
                error: 'User not found'
            })
        }

        await user.update(body)

        res.json(user)

    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: 'Something went wrong'
        })

    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params

    try {

        const user = await User.findByPk(id)

        if (!user) {
            return res.status(404).json({
                error: 'User not found'
            })
        }

        await user.update({
            state: false
        })

        res.json(user)

    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: 'Something went wrong'
        })

    }
}