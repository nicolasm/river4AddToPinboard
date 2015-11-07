# riverAddToPinboard
A river4 NodeJS callback script to add new incoming items to Pinboard.

Requirements:
- [node-pinboard](https://github.com/maxmechanic/node-pinboard)
- read ["How callbacks work in River4"](https://github.com/scripting/river4/wiki/How-callbacks-work-in-River4)

Setup:
- add your Pinboard user and token in [river4](https://github.com/scripting/river4) config.json:
{
        "pinboardUser": "user",
        "pinboardToken": "token"
}

- copy the addToPinboard.js in river4/callbacks/addToRiver/.

You're done!
