select "fi"."releaseYear" as "ReleaseYear",
       "act"."firstName" as "FirstName",
       "act"."lastName" as "LastName"
  from "actors" as "act"
  join "castMembers" as "cast" using ("actorId")
  join "films" as "fi" using ("filmId")
  where "fi"."title" = 'Jersey Sassy';
