# hybr1d-rest-api
Hybr1d Backend

Please follow the following steps to run API services:
clone the repo
navigate to the cloned repo
npm install
npm start

register: http://localhost:8080/api/auth/register  (post) ---> 
{
    "username": "test-seller-3",
    "password": "123456",
    "role": "seller"
}

login: http://localhost:8080/api/auth/login   (post)--->
{
    "username": "test-seller-3",
    "password": "123456"
}

for this apis need to provide token once you login you will get the token pass the auth-token in headers
get list of sellers: http://localhost:8080/api/buyer/list-of-sellers  (get --> get list of sellers)---> 
{
auth-token: ""
}

http://localhost:8080/api/seller/create-catalog ---> (post --> create catelog by seller)

{
    "product_name": "furniture",
    "price": "88888",
    "sellerId": "62d2d82f4ac3c12826074e65"
}

http://localhost:8080/api/buyer/seller-catalog/seller-id (get ---> get catelog of seller)
{
    "sellerId": "62d2d8284ac3c12826074e5f"
}

http://localhost:8080/api/buyer/create-order/seller-id ---> (post --> create order)
{
    "productId": "62d2d9db6cd0a9c7668c250d",
    "buyerId": "62d2d81b4ac3c12826074e5c",
    "quantity": 10
}
http://localhost:8080/api/seller/orders ---> (get --> list of orders received by seller)
{
    "sellerId": "62d2d8284ac3c12826074e5f"
}
