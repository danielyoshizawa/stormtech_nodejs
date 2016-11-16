To Run this application first you have to install NodeJs, just follow the instructions on https://nodejs.org/en/.

After the NodeJs installation go to the root folder of this project, ./nodejs and run the following

    - npm install

This will install all dependencies on your local machine and to run the server run the following command

    - DEBUG=myapp:* npm start

To test the API you can use Postman Rest Client,

https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm

Using the following API and sending a Json with the list of books.

This will sort the books using the parameters provide on the url

    - http://127.0.0.1:3000/books/sort

Parameters
    - title = asc OR desc
    - author = asc OR desc
    - year = asc OR desc

Example

    - http://127.0.0.1:3000/books/sort?year=asc&author=desc

You just have to pass the parameters that you want to sort and in the order that you want, ?year=asc&title=desc will
produce a different output as ?title=desc&year=asc

If none or a wrong parameter is passed the service will not sort the wrong parameter or not sort at all.

Those are shortcuts to sortByTitle and sortByAuthor

http://127.0.0.1:3000/books/sortByTitle

http://127.0.0.1:3000/books/sortByAuthor


The Json must have this format to work

{
"books": [
    {
        "title": "title",
        "author": "author",
        "year": "year"
    }
]
}

The following is the Json provide on the assessment

{
"books": [
    {
        "title": "Java How To Program",
        "author": "Deitel & Deitel",
        "year": "2007"
    },
    {
        "title": "Patterns of Enterprise Application Architecture",
        "author": "Martin Fowler",
        "year": "2002"
    },
    {
        "title": "Head First Design Patterns",
        "author": "Elisabeth Freeman",
        "year": "2004"
    },
    {
        "title": "Internet & World Wide Web: How to Program",
        "author": "Deitel & Deitel",
        "year": "2007"
    }
]
}