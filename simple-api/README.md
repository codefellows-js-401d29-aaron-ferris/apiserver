![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## HTTP and REST
xa
### Author: Erin Trainor

### Links and Resources
* [pull request](https://github.com/401-advanced-javascript-401d29/simple-api/pull/6)
* [Resubmit pull request](https://github.com/401-advanced-javascript-401d29/simple-api/pull/7)
* [front-end](https://codesandbox.io/s/w638oyk7o8)

#### Documentation
* [swagger](./docs/swagger.json)

### Setup

#### Terminal Commands to Manipulate the API
* Categories
  * `/categories`  
    * `GET` - http GET :3000/categories
    * `POST` - echo '{"name":"Footwear", "display_name":"Footwear", "description":"Unusual things to wear on your feet"}' | http POST :3000/categories
    * `POST` - echo '{"name":"Pet", "display_name":"Pet Products", "description":"Strang things your pet will love"}' | http POST :3000/categories
  * `/categories/:id/` 
    * `PUT` - echo '{"name":"Footwear", "display_name":"Shoes", "description":"Unusual thingsto wear on your feet", "_id":"1}' | http PUT :3000/categories/1
    * `DELETE` - http DELETE :3000/categories/1
* Products
  * `/products`  
    * `GET` - http GET :3000/products
    * `POST` - echo '{"name":"Bread Slippers", "display_name":"Loafers", "description":"When you want your feet to look like a loaf of bread", "category":"Footwear"}' | http POST :3000/products
    * `POST` - echo '{"name":"Dog Socks", "display_name":"Paw Grip Socks", "description":"For when you want your dog to be able to run on slick surfaces", "category":"Pet"}' | http POST :3000/products
  * `/products/:id/` 
    * `PUT` - echo '{"name":"Dog Socks", "display_name":"Paw Grip Socks", "description":"For when you want your dog to be able to dance on slick surfaces", "category":"Pet", "_id":2}' | http PUT :3000/products/2
    * `DELETE` - http DELETE :3000/products/2
  #### Start the app
  * run json-server --watch= ./data/db.json from the root then go to the front end to see swagger working.
