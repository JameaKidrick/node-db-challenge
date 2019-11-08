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

const express = require('express');
const projectDB = require('./project-model');
const router = express.Router();

router.get('/projects', (req, res) => {
  projectDB.getProjects()
    .then(projects => {
      // console.log(projects)
      res.status(200).json(projects)
    })
})

router.get('/resources', (req, res) => {
  projectDB.getResources()
    .then(resources => {
      res.status(200).json(resources)
    })
})

router.get('/tasks', (req, res) => {
  projectDB.getTasks()
    .then(tasks => {
      res.status(200).json(tasks)
    })
})

router.get('/projects/:id/tasks', (req, res) => {
  projectDB.getTasksByProjectId(req.params.id)
    .then(tasks => {
      res.status(200).json(tasks)
    })
})

router.post('/projects', (req, res) => {
  projectDB.addProjects(req.body)
    .then(newProject => {
      res.status(200).json(newProject)
    })
})

router.post('/resources', (req, res) => {
  projectDB.addResources(req.body)
    .then(newResource => {
      res.status(200).json(newResource)
    })
})

router.post('/projects/:id/tasks', (req, res) => {
  project_id = req.params
  projectDB.addTasks(req.body, req.params.id)
    .then(newtask => {
      res.status(200).json(newtask)
    })
})

module.exports = router;