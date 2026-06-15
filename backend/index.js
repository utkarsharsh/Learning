// let myarr= [
// {
// "orderld": 1,
// "productid": 10,
// 'quantity": 2,
// "orderDate": "2022-01-01"
// },
// {
// "orderld": 2,
// "productid": 20,
// "quantity": 3,
// "orderDate": "2022-01-15"
// },
// {
// "orderld": 3.
// "productld": 10,
// "quantity": 1,
// "orderDate": "2022-02-01"
// }
// ]

myroute(  req , res)
{
   let myid=req.params.id;
   if(!myid) return res.send("please provide id");

   try{
    myid=Number(myid);
     res.send( myarray.filter((e)=>{
   if( e.orderId===myid) return e;
        }) );

   } catch(e){
    return res.send("please provide valid id");
   }    
 
}
 

