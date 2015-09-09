# 26-getting-started-with-react-titanium
This week on codexcasts, we look at React-Titanium. We even see it run on Android


To run this code:
```
$ npm install
$ti build --platform=...
```

you might need to do this also:
Configuring Titaniumifier

As we said before you’re going to be able to use require() as you’d expect to do in Node.js, and for this we’re going to use Titaniumifier.

As an extra bonus you will be able to use almost every package that you can find on npm! Yay!

Inside you app root directory execute:

npm install --save-dev titaniumifier
This command will download and install the titaniumifier package, saving it into you package.json inside the devDependencies.

Once it is installed you can run its installer by running:

$(npm bin)/install-titaniumifier-plugin
…and add --no-simulate if everything is correctly in place:

$(npm bin)/install-titaniumifier-plugin --no-simulate


