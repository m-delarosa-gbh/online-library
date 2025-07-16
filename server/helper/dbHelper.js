export async function getOrCreateAuthor (pool, author) {
   const result = await pool.query(`SELECT author_id FROM authors WHERE name = $1`, [author]);
    
    if(result.rows.length > 0) {
      return result.rows[0].author_id;

    } else {
       const insertAuthor = await pool.query(
        `INSERT INTO authors (name)
        VALUES ($1)
        RETURNING author_id`,
        [author]
      );
      return insertAuthor.rows[0].author_id
    }
}

export async function getOrCreateCategory (pool, category) {
      const existingCategory = await pool.query(`SELECT category_id FROM categories WHERE name = $1`, [category])

        if(existingCategory.rows.length > 0){
            return existingCategory.rows[0].category_id
        } else {
            const insertCategory = await pool.query(
                `INSERT INTO categories (name)
                VALUES ($1)
                RETURNING category_id`, [category]
            );
            return insertCategory.rows[0].category_id
        }
}