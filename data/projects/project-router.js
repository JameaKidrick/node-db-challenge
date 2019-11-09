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
      res.status(200).json(projects)
    })
    .catch(err => {
      res.status(500).json({ error: 'Internal Server Error' })
    })
})

router.get('/projects/:id', (req, res) => {
  projectDB.getProjectById(req.params.id)
    .then(project => {
      res.status(200).json(project)
    })
    // .catch(err => {
    //   res.status(500).json({ error: 'Internal Server Error' })
    // })
})

router.get('/resources', (req, res) => {
  projectDB.getResources()
    .then(resources => {
      res.status(200).json(resources)
    })
    .catch(err => {
      res.status(500).json({ error: 'Internal Server Error' })
    })
})

router.get('/tasks', (req, res) => {
  projectDB.getTasks()
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(err => {
      res.status(500).json({ error: 'Internal Server Error' })
    })
})

router.get('/projects/:id/tasks', (req, res) => {
  projectDB.getTasksByProjectId(req.params.id)
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(err => {
      res.status(500).json({ error: 'Internal Server Error' })
    })
})

router.post('/projects', (req, res) => {
  projectDB.addProjects(req.body)
    .then(newProject => {
      res.status(200).json(newProject)
    })
    .catch(err => {
      res.status(500).json({ error: 'Internal Server Error' })
    })
})

router.post('/resources', (req, res) => {
  projectDB.addResources(req.body)
    .then(newResource => {
      res.status(200).json(newResource)
    })
    .catch(err => {
      res.status(500).json({ error: 'Internal Server Error' })
    })
})

router.post('/projects/:id/tasks', (req, res) => {
  project_id = req.params
  projectDB.addTasks(req.body, req.params.id)
    .then(newtask => {
      res.status(200).json(newtask)
    })
    .catch(err => {
      res.status(500).json({ error: 'Internal Server Error' })
    })
})

router.put('/projects/:id', (req, res) => {
  projectDB.updateProjects(req.body, req.params.id)
    .then(update => {
      res.status(200).json(update)
    })
})

router.put('/tasks/:id', (req, res) => {
  projectDB.updateTasks(req.body, req.params.id)
    .then(update => {
      res.status(200).json(update)
    })
})

router.delete('/projects/:id', (req, res) => {
  projectDB.deleteProjects(req.params.id)
    .then(deleted => {
      res.status(200).json(deleted)
    })
})

router.delete('/tasks/:id', (req, res) => {
  projectDB.deleteTasks(req.params.id)
    .then(deleted => {
      res.status(200).json(deleted)
    })
})

module.exports = router;