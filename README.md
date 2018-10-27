# Things to do

This is a demo app created by scaryguy.

## Requirements

Build the UI for a grouped task list with task dependencies

- Build a task list UI in React using included design and SVG assets
- The top level should show a list of task groups w/ # of tasks inside
- Clicking a group should display the list of all tasks for that group
- Tasks remain locked until all dependent tasks are complete
- Clicking a task should mark it as complete or incomplete, unless the task is locked
- Keep it simple and focus on building well-designed React components. Don't worry about talking to an API, tests, or state management libraries
- Use the data below to populate the UI

Task Payload to Use for UI:

```json
[
  {
    "id": 1,
    "group": "Purchases",
    "task": "Go to the bank",
    "dependencyIds": [],
    "completedAt": null
  },
  {
    "id": 2,
    "group": "Purchases",
    "task": "Buy hammer",
    "dependencyIds": [1],
    "completedAt": null
  },
  {
    "id": 3,
    "group": "Purchases",
    "task": "Buy wood",
    "dependencyIds": [1],
    "completedAt": null
  },
  {
    "id": 4,
    "group": "Purchases",
    "task": "Buy nails",
    "dependencyIds": [1],
    "completedAt": null
  },
  {
    "id": 5,
    "group": "Purchases",
    "task": "Buy paint",
    "dependencyIds": [1],
    "completedAt": null
  },
  {
    "id": 6,
    "group": "Build Airplane",
    "task": "Hammer nails into wood",
    "dependencyIds": [2, 3, 4],
    "completedAt": null
  },
  {
    "id": 7,
    "group": "Build Airplane",
    "task": "Paint wings",
    "dependencyIds": [5, 6],
    "completedAt": null
  },
  {
    "id": 8,
    "group": "Build Airplane",
    "task": "Have a snack",
    "dependencyIds": [],
    "completedAt": null
  }
]
```
