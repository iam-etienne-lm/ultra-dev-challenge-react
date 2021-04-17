# ultradevchallengereact

### react micro blogging front JS&CO 17/04
---

#### Quick Project startup
in **container**  
- `docker-compose up --build`
- `curl -X localhost:3000`
or **locally**  
- `npm start`

#### Summary
This is a micro-bloggin frontend written in React inspired by Twitter

#### Features
- [x] is container friendly
- [x] serves localhost:3000
- [x] has a CI pipeline on Gitlab
- [ ] has style
- [ ] send chat message
- [ ] read chat message
- [ ] search hashtag
- [ ] login/logout
- [ ] create account
- [ ] responsive
- [ ] night mode styling switch
- [ ] has some fancy auth
- [ ] has some sort of connectivity
- [ ] has some testing capability
- [ ] has some quality capabilities (linting/coding-style)

#### Workflow
1. stackblitz - swyg remote IDE & dev
1. vscode - local IDE
1. docker-compose test dependancies
1. gitlab - ci
1. github - delivery

##### WIP - branding
name: curaraChat c"C
hashtag: antennas(up) "

Pitch: CucaraChat, communicate with the swarm !

##### Milestones:
1. Devops
    1.1. container
    1.1. CI
    1.1. remote IDE
1. Template
    1.1. app
    1.1. title
    1.1. messageboard
    1.1. textinput
1. Style
    1.1. root doc var
    1.1. components

##### UI v1
_____________________________________  
|       Title / followed #          |  
|-----------------------------------|  
|                                   |  
|       MessageBoard                |  
|           Where you read all your |  
|           Followed #              |  
|                                   |  
|-----------------------------------|  
|       Input box                   |  
|           you can enter # as well |
|       Settings                    |  
_____________________________________  

##### UX v1
1. User is not logged so all activity is visible
1. User logs in so only subscribed # can be seen
1. USer post on a new #
1. New hashtag is suscribed
1. [Script] mock activity with time delay on multiple #