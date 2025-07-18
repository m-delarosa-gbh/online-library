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
      pgm.createTable('users', {
        id: 'id',
        name: { type: 'varchar(1000)', notNull: true },
        createdAt: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp'),
        },
    });
    pgm.createTable('posts', {
        id: 'id',
        userid: {
        type: 'integer',
        notNull: true,
        references: '"users"',
        onDelete: 'CASCADE',
        },
        body: { type: 'text', notNull: true },
        createdAt: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp'),
        },
    });
    pgm.createIndex('posts', 'userid');
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
    pgm.dropTable('posts')
    pgm.dropTable('users');
    
};
