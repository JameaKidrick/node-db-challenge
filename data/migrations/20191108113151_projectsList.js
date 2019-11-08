
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
      table.increments('project_id');

      table.string('name', 255).notNullable();
      table.string('description', 255);
      table.boolean('completed').notNullable().defaultTo(false);

      table.timestamps(true, true);
    })

    .createTable('resources', table => {
      table.increments('resource_id');

      table.string('name', 255).notNullable();
      table.string('description', 255);

      table.timestamps(true, true);
    })

    .createTable('tasks', table => {
      table.increments('task_id');

      table
        .integer('project_id')
        .unsigned()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

      table.string('description', 255).notNullable();
      table.string('notes', 255);
      table.boolean('completed').notNullable().defaultTo(false);
      table.timestamps(true, true);
    })

    .createTable('project_resources', table => {
      table.increments('project_resources_id');

      table
        .integer('project_id')
        .unsigned()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')

      table
        .integer('resource_id')
        .unsigned()
        .references('resource_id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('project_resources')
};
