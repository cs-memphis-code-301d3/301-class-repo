# User Authentication with Auth0

## Overview

We are going to start this week with authentication! The ability for a user to securly login to an application to store their data is crucial. Think about all the times you have signed up for an app using your facebook or google account. That is done through a process called OAuth. Essientially, the app allows "someone else" (an external identity "provider") to take care of making sure that you are who you say you are.

In this lab, we are going to begin with [front-end React starter code](https://github.com/codefellows/can-of-books-frontend-template){:target="_blank"} and use a service called Auth0 that will handle most of the challenges of working with external identity providers. Your job will be to create a componentized React application where users can sign in via the Auth0 service. This service will give you a jsonwebtoken or JWT.

Once you have that hooked up, you will send that JWT (that essentially says that you are who you say you are) to a back-end. You will have [server-side starter code](https://github.com/codefellows/can-of-books-template-server){:target="_blank"} to use as well. You will use a library call `jsonwebtoken` to open the JWT and it will verify whether it is valid. 

## Process: Professional Pairing Practice

Much of the work you will be doing in the industry will be in pairs. In order to best prepair you for this, you will be working with the same partner all week on this book app project.

Before you begin to even think about your application, take at least 30 minutes to make a team agreement with your partner. This is an essiential step to ensure a peaceful and productive week. You MUST answer the following questions in your agreement and include it in your README's "Collaboration" section:

### Logistical

- What hours will you be available to communicate?
- What platform will you use to communicate (ie. Slack, phone ...)?
- How often will you take breaks?
- What is your plan if you start to fall behind?

### Cooperative

- Make a list of each parson's strengths.
- How can you best utilize these strengths in the development of your application?
- In what areas do you each want to develop greater strength?
- Knowing that every person in your team needs to understand the code, how do you plan to approach the day-to-day development?

### Conflict Resolution

- What will your team do if one person is pulling all the weight while the other person is not contributing?
- What will your team do if one person is taking over the project and not letting the other member contribute?
- How will you approach each other and the challenge of building an application knowing that it is impossible for two people to be at the exact same place in understanding and skill level?

## Feature Tasks

See the Trello board for your feature tasks for today's lab.

## Workflow

- You will be working from two starter code repos for this lab. Use the [front-end template repo](https://github.com/codefellows/can-of-books-frontend-template){:target="_blank"} to make your own repo that contains the starter code for your React app. Use the [server side template repo](https://github.com/codefellows/can-of-books-template-server) to make your another repo that contains the starter code for your express server.
- We will be using the [Trello](https://trello.com/home){:target="_blank"} project management tool for the duration of this project.
- After signing in to your account, go to the [Best Books Task Tracker](https://trello.com/b/qgaCsVVa){:target="_blank"}, open the "... Show Menu" link, click the "... More" link, and then click "Copy Board". Before you create it, be sure to "Change" from Private to "Public" (and click "Yes, Make Board Public") so your instructional team can see your work. Now, click "Create" to add a copy to your personal account.
- This Trello board contains all of the features required to complete each lab assignment.
- In the "...Show Menu" sidebar, click the "Search Cards" link and filter by lab to see the assignment for just the current day.
- Review the user stories and analyze the feature requests and requirements in the lab.
- Within each story, note the acceptance criteria ("Given ... When ... Then...") and the checklist of feature tasks. Be careful to execute tasks in order as they are often dependencies of one another.
- Throughout the lab time, check off tasks as you complete them, and move the story cards through the workflow.

## Documentation

You must have a complete `README.md` for your repository.

_Your `README.md` must include:_

```md
# Project Name

**Author**: Team Member Names Goes Here
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
```

## Time Estimates

For each of the lab features, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

```markdown
Name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
```

Add this information to your README.

## Submission Instructions

1. Complete your Feature Tasks for the lab, according to the Trello cards.
1. Create a PR back to the `main` branch of your repository, showing ALL your work, and merge it cleanly.
1. On Canvas, submit a link to your PR. Add a comment in your Canvas assignment which includes the following:
    - A link to the deployed version of your latest code.
    - A link to your public Trello board.
    - A question within the context of today's lab assignment.
    - An observation about the lab assignment, or related 'Ah-hah!' moment.
    - How long you spent working on this assignment.
