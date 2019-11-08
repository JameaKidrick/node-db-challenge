exports.seed = function(knex) {
  return knex('tasks').insert([
    {description:'DESCRIPTION1', notes:'NOTES1', completed:0, project_id:1}, // 1
    {description:'DESCRIPTION2', notes:'NOTES2', completed:0, project_id:2}, // 2
    {description:'DESCRIPTION3', notes:'NOTES3', completed:0, project_id:3}, // 3
    {description:'DESCRIPTION4', notes:'NOTES4', completed:0, project_id:4}, // 4
    {description:'DESCRIPTION5', notes:'NOTES5', completed:0, project_id:5} // 5
  ]);
};
