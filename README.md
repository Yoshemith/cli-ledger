# ledgercito

ledgercito is a simple cli implementation of the official [ledger-cli](https://www.ledger-cli.org/3.0/doc/ledger3.html).

## Getting Started

Start by cloning the repository in your computer. By writing the next command in your terminal.
```
git clone https://github.com/Yoshemith/ledgercito.git
```
Then, once the project is on your computer, continue by opening the directory of the project which could be: 
```
/ledgercito-main
```

### Installing

To use *ledgercito cli* you can continue by executing the next commands.
To install all the dependencies of the project:
```
npm install
```
To install *ledgercito cli* globally in your computer.
```
npm install -g
```

### Running the tests

Once the installation is done, we can continue by running the tests:
To print *a single* ledger file.
```
ledgercito -f ./files/Income.ledger print
```
To print *all* the ledger files.
```
ledgercito -f ./files/Index.ledger print
```
Note: The project is still under development, right now only contains the *print* command and the *--file* flag implementation.
