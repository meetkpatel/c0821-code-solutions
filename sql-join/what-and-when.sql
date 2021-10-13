select "fi"."releaseYear" as "Releaseyear",
       "cat"."name" as "Category"
  from "films" as "fi"
  join "filmCategory" as "ficat" using ("filmId")
  join "categories" as "cat" using ("categoryId")
  where "fi"."title" = 'Boogie Amelie';
