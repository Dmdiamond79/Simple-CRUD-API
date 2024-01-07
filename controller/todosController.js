const {Todo} = require('../models');

class TodosController{
    static getAll = async (req, res, next) => {
        try {
            const todos = await Todo.findAll(
                {
                    where: {status: 'active'}
                }
            );
            res.status(200).json(todos);
        } catch (error) {
            next(error);
        }
    }

    static getById = async (req, res, next) => {
        const id = req.params.id;
        try {
            const todos = await Todo.findByPk(id);
            res.status(200).json(todos);
        } catch (error) {
            next(error);
        }
    }

    static create = async (req, res, next) => {
        let {title, status}= req.body;
        try {
            const todos = await Todo.create({
                title,
                status
            })
            res.status(201).json(todos);
        } catch (error) {
            next(error);
        }
    }
    
    static delete = async (req, res, next) => {
        const {id} = req.params
        try {
            await Todo.update(
                {status: 'inactive'},
                {where: {id}}
                );
            res.status(200).json({message: 'Todos deleted succesfully'});
        } catch (error) {
            next(error);
        }
    }
}

module.exports = TodosController