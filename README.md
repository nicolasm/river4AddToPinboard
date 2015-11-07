# riverAddToPinboard
A [river4][0] NodeJS callback script to add new incoming items to Pinboard.

Requirements:
- [node-pinboard][1]
- read ["How callbacks work in River4"][2]

Setup:
- retrieve your API token from your [Pinboard settings][3]. 
- add your Pinboard user and token in [river4][0] config.json:
```javascript
{
    "pinboardUser": "user",
    "pinboardToken": "token"
}
```
- copy the addToPinboard.js in river4/callbacks/addToRiver/.

You're done!

[0]: https://github.com/scripting/river4
[1]: https://github.com/maxmechanic/node-pinboard
[2]: https://github.com/scripting/river4/wiki/How-callbacks-work-in-River4
[3]: https://pinboard.in/settings/password
