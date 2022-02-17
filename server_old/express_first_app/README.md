# Express use DB  

## version
Node 12.16.1
npm 6.13.7

## Install all dependencies without docker
```
  yarn
```

## With Docker:
```
docker build -t test:1 .      
docker run --rm -p 3000:3000  -d  test:1
```

## Build DataBase into Pgadmin: 

Create table comapany with id and name 


## Postman Test :</br>
	you can add the file app_express.postman_collection.json
	in Postman

*If you using docker you need to put the IP docker instead of localhost(for windows)*
### Get:
	http://localhost:3000/api/members/1 
	http://localhost:3000/api/members/alluser 
### Post:
	http://localhost:3000/api/members/username/