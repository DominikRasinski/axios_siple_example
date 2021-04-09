# axios_siple_example
> In this project, I used library call Axios, to get photos from HTTP request. This library can replace vanilla FETCH in JavaScript.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Status](#status)
* [Links](#links)
* [Contact](#contact)

## General info
In general AXIOS is a library thanks this we can much faster get HTTP request or APIs requests.
This library is made for programer to make his work faster and easiest.

## Technologies
* JavaScript - EcmasScript 6+
* HTML - version 5.0
* CSS - version 3.0

## Setup
AXIOS is library to JavaScript, we can get theese from this link https://www.npmjs.com/package/axios;

OR

We can also use npm command to install AXIOS library to our project, command looks like:

```
$ npm install axios
```

## Code Examples

### In AXIOS.
```
const url = 'https://dog.ceo/api/breeds/image/random';

function getPhoto() {
    axios.get(url)
        .then(res => {
            image.setAttribute('src', res.data.message)
        })
}

```
This's at all code to get photo from free API from this link https://dog.ceo/api/breeds/image/random.

### Code in vanilla JavaScript without library AXIOS.
```
const url = 'https://dog.ceo/api/breeds/image/random';

function getPhoto(){
    fetch(url)
    .then(res => res.json())
    .then(res => {
        image.setAttribute('src', res.message);
    })
}

```
We can seen in this code, we must to remember take element from API to convert into JSON.object (to do this We must use method 'element.json()').
## Status
Project is: _finished_

## Links

AXIOS - https://www.npmjs.com/package/axios

APIs - all API you can find out here https://github.com/public-apis/public-apis

but if you want to use exactly this API which one I used, here is a link to there https://dog.ceo/dog-api/
## Contact
dox.gmr@gmail.com - feel free to contact me!
