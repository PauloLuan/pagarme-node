## Node Pagarme

About the application:

-   Consumes the payments API of pagarme, following the official [documentation](https://pagar.me/docs/).

## How to run

### Installing NODEJS

You must have to use [nodejs](http://nodejs.org/) version 0.10.x. If you not have node on your machine, just put the following code into your terminal as a root (assuming that you're using Linux), it will install and configure the NodeJS by the [NVM (Node Version Manager)](https://github.com/creationix/nvm)

    # log as sudo
    sudo su

    # update system
    apt-get update && apt-get upgrade -y

    # download and configure Node Version Manager
    wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.20.0/install.sh | bash && \
    source ~/.nvm/nvm.sh && \
    nvm install stable && nvm use stable && nvm alias default stable && \
    node -v

    # updates your ~/.bashrc
    echo -e '\n# NODEJS configs \nexport NODE_ENV=development \nsource ~/.nvm/nvm.sh' >> ~/.bashrc && source ~/.bashrc


### Install Nodemon dependencie as a global app:

    npm install -g nodemon

### Install the project dependencies:

    npm install

### you could run the program by the following ways:

    npm start           # recomended way :)
    node bin/www
    node-debug bin/www  # to debug the application using chrome
    nodemon bin/www     # It is the same as npm start

### Running the tests:

To run the tests, just run mocha (you must start the application in another terminal to test the API).

    ./node_modules/mocha/bin/mocha
