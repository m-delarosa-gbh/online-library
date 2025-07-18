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
        ` INSERT INTO formats (book_id, type, url) VALUES 
        (1, 'html', '/book/1/pg2701-images.html'),
        (1, 'text', '/book/1/moviedick.txt'),

        (2, 'html', '/book/2/pg158-images.html'),
        (2, 'text', '/book/2/enma.txt'),

        (3, 'html', '/book/3/pg84-images.html'),
        (3, 'text', '/book/3/frankestein.txt'),

        (4, 'html', '/book/4/pg2554-images.html'),
        (4, 'text', '/book/4/crimeandpunishement.txt');
        `
    )
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {};
