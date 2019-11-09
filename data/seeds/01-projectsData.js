exports.seed = function(knex) {
  return knex('projects').insert([
    {name:'NAME1', description:'DESCRIPTION1', completed:0}, // 1
    {name:'NAME2', description:'DESCRIPTION2', completed:0}, // 2
    {name:'NAME3', description:'DESCRIPTION3', completed:0}, // 3
    {name:'NAME4', description:'DESCRIPTION4', completed:0}, // 4
    {name:'NAME5', description:'DESCRIPTION5', completed:0} // 5
  ]);
};
