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

    pgm.createTable("authors", {
        author_id: {type:"serial", primaryKey:true},
        name: {type: 'varchar(255)'},
    });
    pgm.createTable("categories", {
         category_id: {type:"serial", primaryKey:true},
         name: {type: 'varchar(255)'},
    });
    pgm.createTable("books",{
        book_id: {type:"serial", primaryKey:true},
        title: {type: 'varchar(255)'},
        author_id: {type: 'integer', notNull:true, references: '"authors"(author_id)'},
        category_id: {type: 'integer', notNull:true, references: '"categories"(category_id)'},
        cover_url: {type:'varchar(255)'},
        description: {type: 'varchar(255)'},
        published_at: {type: 'timestamp'}

    });
    
    pgm.createTable("formats", {
        format_id: {type:"serial", primaryKey:true},
        book_id: {type:'integer', references: '"books"(book_id)'},
        type: {type: 'varchar(255)'},
        url: { type: 'varchar(255)'}
    })

    pgm.createIndex('books', 'author_id');
    pgm.createIndex('books', 'category_id');
    pgm.createIndex('formats', 'book_id');
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
    pgm.dropTable("formats");
    pgm.dropTable("books");
    pgm.dropTable("authors");
    pgm.dropTable("categories");
};
