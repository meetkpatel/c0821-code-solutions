select "c"."firstName" as "firstName",
       "c"."firstName" as "lastName",
       "p"."amount" as "amount"
  from "payments" as "p"
  join "customers" as "c" using ("customerId")
  order by "p"."amount" desc
   limit 10;
