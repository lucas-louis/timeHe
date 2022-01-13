# timeHe
A clock app, displaying the current and the future events.

## Installation 🛠️

**1) Install Docker**  
Follow this [official guide](https://docs.docker.com/get-docker/) to install Docker.  
If you want to play a little bit with Docker, you can follow this [tutorial](https://docker-curriculum.com) or even our [workshop](https://github.com/PoCInnovation/Workshops/tree/master/software/04.Docker) !

**2) Install timeHe**  
```
# Get the project
git clone git@github.com:lucas-louis/timeHe.git
cd timeHe

# Build timeHe docker image
make build
```

## Configuration 🔧

> ➡️ Go to the ./src/config/AppConfig.ts file

```ts

# To change the name of your app
export const eventName = 'Name of the event';

# To change the sub name of your app
export const eventSubName = 'Sub Name of the event';

# To change the color of the background
export const modalBackgroundColor = '#132b3d';

# To change the color of the title
export const titleColor = '#0da5a0';

```

---

> ➡️ Go to the ./src/config/DataActivities.ts file

```ts

export const activities = [
  {
    name: 'Event #1',
    # If you don't want a description you can leave empty this variable => (description: '',)
    description: 'Description of the event #1',
    # The dates need to keep this format (YYYY-MM-DDTHH:MM:SS)
    startingDate: '2022-01-13T09:00:00',
    endingDate: '2022-01-13T09:15:00',
  },
  {
    name: 'Event #2',
    # If you don't want a description you can leave empty this variable => (description: '',)
    description: 'Description of the event #2',
    # The dates need to keep this format (YYYY-MM-DDTHH:MM:SS)
    startingDate: '2022-01-13T09:15:00',
    endingDate: '2022-01-13T12:00:00',
  },
  # You can add oher events with the same structure as the previous one, just here \/
];

```

## Quickstart ⏩

**Run timeHe 🚀**
```
# Run timhe docker image
make start
```
You can now see your clock app :boom: !

## How ? 🤔

**Technologies 🧑‍💻**
+ [React](https://reactjs.org/docs/getting-started.html)
+ [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
+ [Chakra UI](https://chakra-ui.com)

## Live demo 🔴

🚧 Just [here]() 🚧

## Our PoC team 👌

Developer:  
| [<img src="https://github.com/lucas-louis.png?size=85" width=85><br><sub>Lucas Louis</sub>](https://github.com/lucas-louis) |
| :---: |

> :rocket: Don't hesitate to share this project, and put a star 🌟 on `this` repositories.
