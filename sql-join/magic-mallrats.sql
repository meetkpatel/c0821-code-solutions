select "cust"."firstName" as "firstName",
       "cust"."lastName" as "LastName"
  from "films" as "fi"
  join "inventory" as "inven" using ("filmId")
  join "rentals" as "rent" using ("inventoryId")
  join "customers" as "cust" using ("customerId")
  where "fi"."title" = 'Magic Mallrats';
