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
        `INSERT INTO books (title, author_id, category_id, cover_url, description, published_at) VALUES
        ('Moby Dick', 
        1, 
        1, 
        '/book/1/2701-cover.png', 
        'Moby Dick Or, The Whale" by Herman Melville is a novel written in the mid-19th century. The story follows Ishmael, a sailor on a whaling voyage, who seeks adventure and escape from his gloomy life on land.', 
        '1851-10-18'),
        ('Enma',
         2, 
         2, 
         '/book/2/158-cover.png', 
         'The story centers around Emma Woodhouse, a lively and privileged young woman who relishes playing matchmaker among her friends, particularly after her beloved governess, Miss Taylor, marries Mr. Weston.', 
         '1815-12-23'),
        ('Frankenstein', 
        3, 
        3, 
        '/book/3/84-cover.png', 
        'Frankenstein Or, The Modern Prometheus" by Mary Wollstonecraft Shelley is a novel written in the early 19th century.', 
        '1818-1-1'),
        ('Crime and Punishment',
          4,
          4, 
          '/book/4/cover.jpg', 
          'The story delves into the psychological turmoil of its main character, Rodion Raskolnikov, a former student living in extreme poverty in St. Petersburg, as he grapples with morality, guilt, and the nature of crime.', 
          '1866-12-1');
        `
    )
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {};
