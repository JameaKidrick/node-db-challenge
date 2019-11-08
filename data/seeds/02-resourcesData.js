exports.seed = function(knex) {
  return knex('resources').insert([
    {name:'NAME1', description:'DESCRIPTION1'}, // 1
    {name:'NAME2', description:'DESCRIPTION2'}, // 2
    {name:'NAME3', description:'DESCRIPTION3'}, // 3
    {name:'NAME4', description:'DESCRIPTION4'}, // 4
    {name:'NAME5', description:'DESCRIPTION5'} // 5
  ]);
};
