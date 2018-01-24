## Overview

This is a quick introduction to what node is and how we can start very quickly some functionality using that

## What is Node.js?

Following is from the [nodejs.org](https://nodejs.org/en/)

>Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

We would just refer to it as `node` as going forward in this document

## How do you install node?

1. Best way to install node on Mac is using the very popular [homebrew package manager](https://brew.sh/)

    `brew install node`

    OR

2. Just download the node installer from [MacOS installer](https://nodejs.org/en/download/package-manager/#macos)
and follow the instructions on the site

##### Verify node is installed correctly?

1. Launch your favourite terminal and run following

    `node -v`

2. You should see something similar to below

    `v8.9.1`

## Node Package Manager aka npm

This is where all the power is. There are loads of packages which make node even more powerful.
All you do is run following from the command line (via terminal)

Now npm acts as a `registry` that allows developers to share the modules those are reusable.

`npm install <package-name>`

e.g.  
`npm install lodash`  
`node install underscore`

## What are packages/modules?

Packages or Modules are reusable piece of code that can be shared. These modules are generally shared via `npm registry`

You can run modules as below

`> node modules/module1.js`

## Some keywords

Following are some of the key concepts that we would come across all the time
> 
>npm init  
>package.json  
>package-lock.json  
>node_modules folder


## How do you use it?

Usually when JavaScript is run in a browser it is run in a sandbox i.e. it doesn't have access to the file system on the machine or there are other reasons why you can't use that to connect to database etc.

Now that is installed on your machine, you can run local .js files (containing java script code) from it.


### HTTP server in 2 mins

Node comes with built in `http` package that has `request` and `response` objects.
