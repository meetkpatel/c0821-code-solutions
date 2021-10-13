select "con"."name" as "Countries",
       count("ct".*) as "totalCity"
  from "cities" as "ct"
  join "countries" as "con" using ("countryId")
 group by "con"."countryId";
