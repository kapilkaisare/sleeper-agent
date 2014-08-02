sleeper-agent
=============

Wouldn't it be nice to keep your console.logs in your production code but have them show up only when needed? When faced with an issue that can't be reproduced in any environment except the browser of a particular customer, wouldn't it be cool to be able to pull up the developer console, throw a switch, and see the logs come to life?

With sleeper-agent, you can!

Including the sleeper.js file in your page during loading gives you a sleeper object, which lets you use the following console commands:

* sleeper.log()
* sleeper.dir()
* sleeper.error()
* sleeper.warn()

You use these commands the same way you'd use the console object, with one caveat: no messages will show up until you activate the sleeper:

sleeper.on();

This means you can keep your logging commands in your code without worrying about messages appearing in the dev console once you hit production, until you turn the sleeper on. You can turn logging off as well:

sleeper.off();

Work is underway to provide a means of using alternate streaming devices; for example, one that pipes all logs to a server instead of the dev console.