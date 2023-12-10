# Final project

Development project from designing, building, and maintaining both the server-side (back end) and client-side (front end) components of an application. This individual manages the entire software stack, ensuring the integration and functionality of both ends for a complete user experience.

## Table of content

- Technologies used

- Front-end sneak peek

- Authentication & Authorization

- Security Test

- API documentation

- App testing

- Deployment

## Technologies  used

- Typescript

- BE: NodeJs / Express

- FE: React

## Front-end sneak peek



## Back-end Authentication

## Back-end Authorization

##### By Role :

##### By Username :

## Security test

- Front-end :
  
  

- Back-end:
  
  

## Postmant API documentation

- Documentation link:<br>
    https://documenter.getpostman.com/view/29092304/2s9YRGw8Tq
- Set variable {{base_url}} to:<br>
    https://us-central1-milestone3-rpb.cloudfunctions.net/milestone3_rpb

## API End Point

|                                                                   | Endpoint               | Req body                                                                                       | Authorization |
| ----------------------------------------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------- | ------------- |
| Login                                                             | POST /v1/auth/login    | username, password                                                                             | -             |
| Register                                                          | POST /v1/auth/register | username, Email, password                                                                      | -             |
| Get all todolist (admin)<br>Get logged in user's todolist (guest) | GET<br>/v1/todos       | -                                                                                              | by role       |
| Add new todo                                                      | POST<br>/v1/todos      | todo, priority<br/>(status auto set to "in progress"<br/>and dueDate auto set to 2 days ahead) | -             |
| Update todo                                                       | PUT<br>/v1/todos/:id   | todo, status, dueDate                                                                          | by username   |
| Delete todo                                                       | DEL<br>/v1/todos/:id   |                                                                                                | by username   |

## Users for test

- admin

```json
{
"username":"rpb"
"password":"rpb123"
}
```

- guest

```json
{
"username":"rpb2"
"password":"rpb123"
}
```

## Deployment

###### Both BE and FE Deployed to Firebase

- Front-end: https://milestone3-rpb.web.app

- Back-end: https://us-central1-milestone3-rpb.cloudfunctions.net/milestone3_rpb

![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)
