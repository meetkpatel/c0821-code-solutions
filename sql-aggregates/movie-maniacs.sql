select "cust"."firstName" as "firstName",
       "cust"."lastName" as "lastName",
       sum("pay"."amount") as "TotalPaid"
  from "customers" as "cust"
  join "payments" as "pay" using ("customerId")
 group by "cust"."customerId"
order by "TotalPaid" desc;
