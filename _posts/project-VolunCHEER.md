---
layout: default
title: "VolunCHEER"
tags: projects
---

# VolunCHEER

:link: https://github.com/gcivil-nyu-org/INET-Monday-Spring2023-Team-2


## What is VolunCHEER?
VolunCHEER is an application with advanced professional job board features like LinkedIn and Glassdoor yet built explicitly for NYC Volunteers. VolunCHEER would provide a way for organizations and volunteers to connect, communicate, as well as highlight their accomplishments all on one platform.

***

[![Python Version](https://img.shields.io/badge/python-3.7-brightgreen.svg)](https://python.org)
[![Django Version](https://img.shields.io/badge/django-3.2.8-brightgreen.svg)](https://djangoproject.com)

## Build and Test Status

### Main

![Main Status](https://github.com/gcivil-nyu-org/INET-Monday-Spring2023-Team-2/actions/workflows/presubmit.yml/badge.svg?branch=main)
![Coverage Status](https://coveralls.io/repos/github/gcivil-nyu-org/INET-Monday-Spring2023-Team-2/badge.svg?branch=main)

### Develop

![Develop Status](https://github.com/gcivil-nyu-org/INET-Monday-Spring2023-Team-2/actions/workflows/presubmit.yml/badge.svg?branch=develop)
![Coverage Status](https://coveralls.io/repos/github/gcivil-nyu-org/INET-Monday-Spring2023-Team-2/badge.svg?branch=develop)




## Wiki

# High-Level Context Diagram
![Context Diagram Template (5)](https://user-images.githubusercontent.com/43869961/218537520-a7429a6d-98a1-4dca-abdb-60dc3e4e40be.jpg)



# Sequence Diagram


## Register

```mermaid
sequenceDiagram
    actor User
    participant RP as Registration Page
    participant LP as Login Page
    participant DS as Django Server
    participant DB as Database
    
    User ->> RP: Enter details
    activate RP
    RP -->> RP: Validation
    activate DS
    RP ->> DS: Submit details
    DS -->> DS: Validation
    DS ->> DB: Check if user exists
    activate DB
    alt user exists
    		DB ->> DS: Yes
        DS ->> RP: ERROR: User already exists
        RP -->> RP: Redirect to Register page
    else user doesn't exist
        DB ->> DS: No
        DS ->> DB: Add user
        DB ->> DS: User added
        deactivate DB
        DS ->> RP: Register success
        deactivate DS
        RP ->> LP: Redirect to Login page
    end
		deactivate RP
		
```


## Login

```mermaid
sequenceDiagram
    actor User
    participant LP as Login Page
    participant PP as Profile Page
    participant DS as Django Server
    participant DB as Database
    User ->> PP: Click login
    activate PP
    PP ->> LP: Redirect to Login page
    deactivate PP
    User ->> LP: Enter details
    activate LP
    LP -->> LP: Validation
    activate DS
    LP ->> DS: Submit details
    DS -->> DS: Validation
    DS ->> DB: Check if user exists
    activate DB
    alt user exists
    		DB ->> DS: Yes
        DS ->> LP: ERROR: User already exists
    else user doesn't exist
        DB ->> DS: No
        deactivate DB
        DS ->> LP: Login success
        deactivate DS
        
        deactivate LP
        LP ->> PP: Redirect to Job Board page
    end
		
```



## Reset Password

```mermaid
sequenceDiagram
    actor User
    participant LP as Login Page
    participant DS as Django Server
    participant DB as Database

    User ->> LP: Reset password
    activate LP
    User ->> LP: Re-enter email address
    LP -->> LP: Validation
    LP ->> DS: Submit address
    activate DS
    DS -->> DS: Validation
    DS ->> DB: Check if email exists
    activate DB
    alt email doesn't exists
    		DB ->> DS: No
        DS ->> LP: ERROR: Email doesn't exists
    else email exist
        DB ->> DS: Yes
        
        DS ->> User: Send reset email
        User ->> DS: New password
        DS -->> DS: Validation
        DS ->> DB: Update password
        deactivate DB
        DS ->> LP: Login success
        deactivate DS
        
        deactivate LP
    end
		
```





## Profile Page

```mermaid
sequenceDiagram
    actor User
    participant PP as Profile Page
    participant JB as Job Board
    participant DS as Django Server
    participant DB as Database
    User ->> JB: Click profile
    activate JB
    JB ->> DS: Submit user key
    activate DS
    DS ->> DB: Check if user exists
    activate DB
    alt user exists
    		DB ->> DS: User info
    		DS ->> PP: Display userinfo
    		deactivate JB
    		activate PP
        PP ->> User: View user info
    else user doesn't exist
        DB ->> DS: 404 Error
        DS ->> JB: 404 Error
    end
    
    User ->> PP: Update info
    PP -->> PP: Validate
    PP ->> DS: Validated user info
    DS ->> DB: Update info in database
    DB ->> DS: ACK
    deactivate DB
    DS ->> PP: Display updated user info
    deactivate DS
    PP ->> User: View updated user info
    deactivate PP
    
    

```



## Job Board

```mermaid
sequenceDiagram
    actor Org as Organization
    participant CB as Chatbox
    participant JB as Job Board
    participant DS as Django Server
    participant DB as Database
    actor Vol as Volunteer
    
    note over Org, Vol: Organization post a job
    Org ->> JB: Enter job details
    activate JB
    JB -->> JB: Validation
    JB ->> DS: Submit details
    activate DS
    DS -->> DS: Validation
    DS ->> DB: Add job to database
    activate DB
    DS ->> DB: Query volunteers with similar background
    DB ->> DS: Volunteer dataset
    deactivate DB
    DS ->> JB: Show recommended volunteers
    deactivate DS
    Org ->> JB: Make connection
    JB ->> CB: Create chatroom with volunteers
    activate CB
    Org -->> CB: Chat with volunteers
    Vol -->> CB: Chat with organization
    deactivate CB
    
    note over Org, Vol: Volunteer job searching
    Vol ->> JB: Search job
    JB ->> DS: Submit job filters
    activate DS
    DS -->> DS: Validation
    DS ->> DB: Submit job filters
    activate DB
    DB ->> DS: Search results
    DS ->> JB: Display results
    
    Vol ->> JB: Select job
    JB ->> CB: Create chatroom with organizaition
    activate CB
    Vol -->> CB: Chat with organization
    Org -->> CB: Hire volunteer
    Vol -->> CB: Confirm
    CB ->> DS: Volunteer key, job key tuple
    deactivate CB
    DS ->> DB: Update DB
    deactivate DB
    DS ->> Org: Notify organization
    deactivate DS
    Org -->> Vol: Follow ups
    
    
    
    
		deactivate JB
		
```



# Deployment Diagram

![Profile Management Deployment UML Diagram](https://user-images.githubusercontent.com/42898661/219963893-9ec98cf3-e185-4d00-93c2-b90d99f24e83.jpeg)

