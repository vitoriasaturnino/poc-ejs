import Task from '../models/Task.js';
import mongoose from 'mongoose';

class TaskController {
  create = async (req, res) => {
    const task = req.body;

    if(!task.taskDescription){
      return res.redirect("/");
    }

    try {
      await Task.create(task);
      return res.redirect("/");
    } catch (error) {
      console.error("Erro ao criar a tarefa:", error);
      return res.status(500).send("Erro ao criar a tarefa.");
    }
  };

  getAll = async (req, res) => {
    try {
      const tasks = await Task.find();
      return res.render("index", { tasks, task: null });
    } catch (error) {
      console.error("Erro ao listar as tarefas:", error);
      return res.status(500).send("Erro ao listar as tarefas.");
    }
  };

  findById = async (req, res) => {
    const taskId = req.params.id;

    try {
      if (!mongoose.Types.ObjectId.isValid(taskId)) {
        return res.status(400).json({ message: 'ID inválido.' });
      }

      const task = await Task.findOne({_id: taskId});
      const tasks = await Task.find();

      res.render("index", {task, tasks});
    } catch (error) {
      console.error("Erro ao listar as tarefas:", error);
      return res.status(500).send("Erro ao listar as tarefas.");
    }
  };

  update = async (req, res) => {
    const taskId = req.params.id;

    try {
      if (!mongoose.Types.ObjectId.isValid(taskId)) {
        return res.status(400).json({ message: 'ID inválido.' });
      }

      const task = req.body;
      await Task.updateOne({_id: taskId}, task);
      res.redirect("/");
    } catch (error) {
      console.error("Erro ao atualizar a tarefa:", error);
      return res.status(500).send("Erro ao atualizar a tarefa.");
    }
  };
};

export default TaskController;
