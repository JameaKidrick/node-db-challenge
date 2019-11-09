exports.seed = function(knex) {
  return knex('project_resources').insert([
    {resource_id:1, project_id:1}, // 1
    {resource_id:2, project_id:1}, // 2
    {resource_id:2, project_id:2}, // 3
    {resource_id:2, project_id:3}, // 4
    {resource_id:3, project_id:3}, // 5
    {resource_id:4, project_id:1}, // 6
    {resource_id:4, project_id:4}, // 7
    {resource_id:5, project_id:1}, // 8
    {resource_id:5, project_id:2}, // 9
    {resource_id:5, project_id:4}, // 10
    {resource_id:5, project_id:5}, // 11
  ]);
};
