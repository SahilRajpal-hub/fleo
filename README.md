Routes -:

1. localhost:5000/api/companySale/createTargetSale --> creates the targetScale block. also updates the parent values on adding new value. it takes just name for the very first block and this type of object {"targetSale": 10,
   "totalSale" : 20,
   "name": "Godawn G1",
   "parent": "6145a1326c4466af16fcd681"}
   for further blocks.
2. localhost:5000/api/companySale/targetSale ---> gets the targetsale by id. Example of request body {
   "saleId":"61459a0ebfc49f9c00bca1de"
   }
3. localhost:5000/api/companySale/targetSalesOfChild ---> it gets all the child of target sale object. it uses breath first search algo of graph.Example of request body {
   "saleId":"61459a0ebfc49f9c00bca1de"
   }

4. localhost:5000/api/companySale/targetSalesOfParent --> it get all the parent of target sale object.Example of request body {
   "saleId":"61459a0ebfc49f9c00bca1de"
   }
