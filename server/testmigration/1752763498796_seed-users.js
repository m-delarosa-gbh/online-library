/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
  pgm.sql(
      `
     INSERT INTO users (name) VALUES 
    ('Gabriel García Márquez'),
    ('Isabel Allende'),
    ('Julio Cortázar');
    
    INSERT INTO posts (userid, body) VALUES 
    (1, 'Como llegar a macondo'),
    (2, 'Como sacar los espiritus de tu casa'),
    (3, 'Como no morir de desamor');
    `
  )
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {};
