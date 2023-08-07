import Task from '../models/Task.js';
import mongoose from 'mongoose';

let message = "";
  let type = "";
class TaskController {
  create = async (req, res) => {
    const task = req.body;

    if(!task.taskDescription){
      message = 'Preencha a descrição da tarefa';
      type = 'error';

      return res.redirect("/");
    }

    try {
      await Task.create(task);
      message = 'Tarefa criada com sucesso';
      type = 'success';

      return res.redirect("/");
    } catch (error) {
      console.error("Erro ao criar a tarefa:", error);
      return res.status(500).send("Erro ao criar a tarefa.");
    }
  };

  getAll = async (req, res) => {
    try {
      setTimeout(() => {
        message = "";
        type = "";
      }, 2000);

      const tasks = await Task.find();
      return res.render("index", {
        tasks,
        task: null,
        taskDelete: null,
        message,
        type
      });
    } catch (error) {
      console.error("Erro ao listar as tarefas:", error);
      return res.status(500).send("Erro ao listar as tarefas.");
    }
  };

  findById = async (req, res) => {
    const taskId = req.params.id;
    const tasks = await Task.find();

    try {
      if (!mongoose.Types.ObjectId.isValid(taskId)) {
        return res.status(400).json({ message: 'ID inválido.' });
      }

      if (req.params.method == "update") {
        const task = await Task.findOne({_id: taskId});
        res.render("index", { task, taskDelete: null, tasks, message, type });
      } else {
        const taskDelete = await Task.findOne({ _id: taskId });
        res.render("index", { task: null, taskDelete, tasks,  message, type });
      }
    } catch (error) {
      console.error("Erro ao listar as tarefas:", error);
      return res.status(500).send("Erro ao encontrar a tarefa.");
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
      message = 'Tarefa atualizada com sucesso';
      type = 'success';

      res.redirect("/");
    } catch (error) {
      console.error("Erro ao atualizar a tarefa:", error);
      return res.status(500).send("Erro ao exclir a tarefa.");
    }
  };

  deleteTask = async (req, res) => {
    const taskId = req.params.id;

    try {
      await Task.deleteOne({ _id: taskId });
      message = 'Tarefa excluída com sucesso';
      type = 'success';

      res.redirect("/");
    } catch (error) {
      console.error("Erro ao excluir a tarefa:", error);
      return res.status(500).send("Erro ao excluir a tarefa.");
    }
  };

  taskCheck = async (req, res) => {
    const taskId = req.params.id;
    const task = await Task.findOne({_id: taskId});

    try {
      task.check ? task.check = false : task.check = true;

      await Task.updateOne({ _id: taskId }, task);

      res.redirect("/");
    } catch (error) {
      console.error("Erro ao marcar como feito.", error);
      return res.status(500).send("Erro ao marcar como feito.");
    }
  };
};

export default TaskController;
