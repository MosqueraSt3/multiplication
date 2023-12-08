# Console Application: Multiplication Table Generator

## Overview
This console application allows the creation of multiplication table files based on various parameters such as the table number, file name, destination,
and the option to display the output in the console. The development integrates concepts of Clean Architecture, including use cases, best practices such
as the Adapter pattern, and comprehensive unit testing.

## Key Features
- **Custom Multiplication Table:** Generate tables based on a specified number.
- **File Creation:** Create files with the generated multiplication tables.
- **Destination Selection:** Choose the destination for the generated files.
- **Console Output Option:** Enable viewing the table in the console.

## Development Approach
The implementation of this application adheres to Clean Architecture principles, emphasizing:
- **Use Cases:** Implementing specific functionalities independently of the infrastructure.
- **Adapter Pattern:** Employing adaptable components to integrate diverse functionalities seamlessly.
- **Unit Testing:** Ensuring the reliability of each module through rigorous unit tests.

## Used technology
- Typescript
- Node.js
- rimraf
- yargs
- jest
- supertest

## Instalación
1. Clone this repository: `git clone https://github.com/MosqueraSt3/multiplication.git`
2. Install dependencies: `npm install`

## Uso
1. Execute `npx ts-node ./src/app.ts -b "numberTable"`.
2. (Optional) Add `-s` If you want the output in the console.
3. (Optional) add `-n "nameFile"` If you want a custom name for the file.
4. (Optional) Add `-d "fileDestination"` If you want to change the file destination.


