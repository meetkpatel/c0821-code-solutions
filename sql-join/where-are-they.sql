select "add"."line1" as "Line 1",
       "ct"."name" as "City",
       "add"."district" as "District",
       "con"."name" as "country"
  from "cities" as "ct"
  join "addresses" as "add" using ("cityId")
  join "countries" as "con" using ("countryId");
