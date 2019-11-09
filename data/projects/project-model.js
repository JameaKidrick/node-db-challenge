/*
[ ] Build an API with endpoints for:
  - [ ] adding resources.
  - [ ] retrieving a list of resources.
  - [ ] adding projects.
  - [ ] retrieving a list of projects.
  - [ ] adding tasks.
  - [ ] retrieving a list of tasks. **The list of tasks should include the project name and project description**.
- [ ] When returning `project` or `task` information, the `completed` property should be `true` or `false`.
*/

const db = require('../../db_config');

module.exports={
    getProjects,
    getProjectById,
    getResources,
    getTasks,
    getTasksByProjectId,
    addProjects,
    addResources,
    addTasks,
    updateProjects,
    updateTasks,
    deleteProjects,
    deleteTasks
}

/*
retrieving a list of projects

SQL Query:

SELECT * FROM projects;
*/
function getProjects(){
  return db('projects')
    .then(projects => {
      return projects.map(item => {
        return {...item, completed: item.completed ? true : false}
      })
      console.log(projects)
    })
}

/************************************** STRETCH **************************************/
/*
// Add an endpoint for retrieving a `project` by its `id` that returns an object with the structure laid out in the README

SQL Query:

*/
function getProjectById(id){
  return db('projects', {tasks: ['tasks']})
    .select('projects.project_id', 'projects.name', 'projects.description')
    .join('tasks', 'tasks.project_id', '=', 'projects.project_id')
    .where({'projects.project_id': id})
    // .then(project => {
    //   return {...project, task:['tasks.*']}
    // })
}
/************************************** STRETCH **************************************/

/*
retrieving a list of resources

SQL Query:

SELECT * FROM resources;
*/
function getResources(){
  return db('resources')
}

/*
retrieving a list of tasks **The list of tasks should include the project name and project description**

SQL Query:

SELECT projects.name AS 'Project Name', projects.description AS 'Project Description', tasks.description AS 'Task Description', notes AS 'Task Notes', completed AS 'Completed' FROM tasks
JOIN projects ON projects.project_id = tasks.project_id;
*/
function getTasks(){
  return db('tasks')
    .join('projects', 'projects.project_id', '=', 'tasks.project_id')
    .select('projects.name AS project_name', 'projects.description AS project_description', 'tasks.description AS task_description', 'notes AS task_notes', 'tasks.completed')
    .then(tasks => {
      return tasks.map(item => {
        return {...item, completed: item.completed ? true : false}
      })
    })
}

/*
retrieving a list of tasks **The list of tasks should include the project name and project description**

SQL Query:

SELECT projects.name AS 'Project Name', projects.description AS 'Project Description', tasks.description AS 'Task Description', notes AS 'Task Notes', completed AS 'Completed' FROM tasks
JOIN projects ON projects.project_id = tasks.project_id
WHERE projects.project_id = 5;
*/
function getTasksByProjectId(id){
  return db('tasks')
    .join('projects', 'projects.project_id', '=', 'tasks.project_id')
    .select('projects.name AS project_name', 'projects.description AS project_description', 'tasks.description AS task_description', 'notes AS task_notes', 'tasks.completed')
    .where({'tasks.project_id': id})
    .then(tasks => {
      return tasks.map(item => {
        return {...item, completed: item.completed ? true : false}
      })
    })
}

/*
adding projects

SQL Query:

INSERT INTO projects (name, description)
    VALUES ('NAME6', 'DESCRIPTION6');
*/
function addProjects(projectInfo){
  return db('projects')
    .insert(projectInfo)
    .then(newProject => {
      return getProjects()
    })
}

/*
adding resources

SQL Query:

INSERT INTO resources (name, description)
    VALUES ('NAME6', 'DESCRIPTION6');
*/
function addResources(resourceInfo){
  return db('resources')
    .insert(resourceInfo)
    .then(newResource => {
      return getResources()
    })
}

/*
adding tasks

SQL Query:

INSERT INTO tasks (description, notes, project_id)
    VALUES ('DESCRIPTION6', 'NOTES6', 5);
*/
function addTasks(taskInfo, id){
  return db('tasks')
    .insert({...taskInfo, project_id: id})
    .then(getTasks => {
      return getTasksByProjectId(id)
    })
}

/*
project name(required) and description can be updated

SQL Query:

SELECT * FROM projects;
UPDATE projects
    SET name = 'NAME56', description = 'DESCRIPTION56'
    WHERE project_id = 9;
*/
function updateProjects(project_info, id){
  return db('projects')
    .where({'projects.project_id': id})
    .update(project_info)
    .then(getUpdate => {
      return getProjects()
    })
}

/*
task description(required) and notes can be updated

SQL Query:

SELECT * FROM tasks;
UPDATE tasks
    SET description = 'DESCRIPTION56', notes = 'notes56'
    WHERE task_id = 14;
*/
function updateTasks(task_info, id){
  return db('tasks')
    .where({'tasks.task_id': id})
    .update(task_info)
    .then(getUpdate => {
      return getTasks()
    })
}

/*
project can be deleted

SQL Query:

SELECT * FROM projects;
DELETE FROM projects
    WHERE project_id = 8;
*/
function deleteProjects(id){
  return db('projects')
    .where({'projects.project_id': id})
    .del()
    .then(getUpdate => {
      return getProjects()
    })
}

/*
task can be deleted

SQL Query:

SELECT * FROM tasks;
DELETE FROM tasks
    WHERE task_id = 12;
*/
function deleteTasks(id){
  return db('tasks')
    .where({'tasks.task_id': id})
    .del()
    .then(getUpdate => {
      return getTasks()
    })
}