# Design-Pattern-JavaScript

###  A pattern is a reusable solution that can be applied to commonly occurring problems in software design

###### Tech Stack -

> ES6
> [Express](http://expressjs.com/),
> JavaScript

> vanila javascript

> Enzyme

> IIFE: Immediately Invoked Function Expression


### Nginx setup:

You need to add below config file by the name test.com in the /etc/nginx/sites-available/ directory. It's required as Authentications won't work on localhost , so we we make nginx proxy server test.com to pxoxy to our local server. Also we need to change etc/hosts file to alias test.com as localhost. [`sudo service nginx restart`](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-14-04-lts)

For mac nginx default location is different - `sudo ln -s /usr/local/etc/nginx/sites-available/test.com /usr/local/etc/nginx/sites-enabled/test.com`. Also in mac dont forget to change default nginx port to 80 , and add `sites-enabled` in HTTP object

```
http {
    include       mime.types;
    include /usr/local/etc/nginx/sites-enabled/*;
    ...
```

Also add `127.0.0.1 test.com` in your /etc/hosts

```
server {
    server_name   test.com;
    root /home/{username}/path-to-repo/build/public;

    access_log /var/log/nginx/test.access.log;
    error_log  /var/log/nginx/test.error.log;
    underscores_in_headers on;
    location /   {
        proxy_pass http://localhost:3000;
    }
}
```


After copying the configuration you need to create a symbolic link with this command in your terminal. Assuming that your config file name is test.com

sudo ln -s /etc/nginx/sites-available/test.com /etc/nginx/sites-enabled/test.com


### Learn More

  * [Getting Started with React.js](http://facebook.github.io/react/)
  * [React.js Questions on StackOverflow](http://stackoverflow.com/questions/tagged/reactjs)
  * [React.js Discussion Board](https://discuss.reactjs.org/)
  * [Redux](http://redux.js.org/docs/introduction/)
  * [Enzyme — JavaScript Testing utilities for React](http://airbnb.io/enzyme/)
flowtype.org/)
  * [The Future of React](https://github.com/reactjs/react-future)
  * [Learn ES6](https://babeljs.io/docs/learn-es6/), [ES6 Features](https://github.com/lukehoban/es6features#readme)
