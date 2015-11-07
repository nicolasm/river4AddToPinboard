# riverAddToPinboard
A [river4][0] NodeJS callback script to add new incoming items to [Pinboard][1].

##Requirements:
- [node-pinboard][2]
- read ["How callbacks work in River4"][3]

##Setup:
- retrieve your API token from your [Pinboard settings][4]. 
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
[1]: https://pinboard.in/u:nicolas
[2]: https://github.com/maxmechanic/node-pinboard
[3]: https://github.com/scripting/river4/wiki/How-callbacks-work-in-River4
[4]: https://pinboard.in/settings/password
