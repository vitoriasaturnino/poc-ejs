import Task from '../models/Task.js';

class TaskController {
  create = async (req, res) => {
    const task = req.body;

    if(!task.task){
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
      return res.render("index", { tasks });
    } catch (error) {
      console.error("Erro ao listar as tarefas:", error);
      return res.status(500).send("Erro ao listar as tarefas.");
    }
  };
};

export default TaskController;
