select "cat"."name" as "Category",
       count("cast".*) as "TotalFilms"
  from "actors" as "act"
  join "castMembers" as "cast" using ("actorId")
  join "filmCategory" as "ficat" using ("filmId")
  join "categories" as "cat" using ("categoryId")
  where "act"."firstName" = 'Lisa' and "act"."lastName"='Monroe'
 group by "cat"."categoryId";
