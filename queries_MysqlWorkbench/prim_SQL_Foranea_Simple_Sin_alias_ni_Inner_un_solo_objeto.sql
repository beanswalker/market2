SELECT article.id_article, article.idcategory,
article.code,article.name, article.stock,
article.description, article.image, article.status,
category.name as categoría from store.article, store.category
where article.idcategory = category.idcategory && article.id_article=1