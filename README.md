# Currency Conversion API Project v1.0.0

## About The Project
This project implements a simple currency conversion API that allows users to convert one currency to another and format the result according to specified criteria.

## Usage
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jiasyuanchu/ExchangeRate
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

## Getting Started
To use the Currency Conversion API, follow these examples to confirm that your app is running successfully and understand the expected input and output.

1. Start the server
   ```sh
   - MacOS
    npm run start
   - Windows OS
    npm run startWin
   ```

   Ensure that the server is running on http://localhost:3000.

   Open a web browser or use an API testing tool like Postman to send HTTP requests to the API.

2. Check the Currency Conversion Examples

   Example 1: Successful Conversion
   
   - URL: http://localhost:3000/exchange?source=USD&target=JPY&amount=1525
   - Method: GET
   - Expected Response (Success):
   ```sh
    {
        "msg": "success",
        "amount": "$170496.53"
    }
   ```

    Example 2: Invalid Currency or Rate
   
   - URL: http://localhost:3000/exchange?source=EUR&target=GBP&amount=100
   - Method: GET
   - Expected Response (Failure - Invalid Currency or Rate):
   ```sh
    {
    "msg": "Invalid currency or exchange rate"
    } 
   ```

    Example 3: Missing Query Parameters

   - URL: http://localhost:3000/exchange
   - Method: GET
   - Expected Response (Failure - Missing Query Parameters):

      ```sh
      {
      "msg": "Please provide source, target, and amount"
      } 
    ```
    
## Environment
- node: ^v14.16.0,
- nodemon

## Built With
- body-parser: ^1.20.2,
- express: ^4.18.2,
- chai: ^4.3.8,
- chai-http: ^4.4.0,
- mocha: ^10.2.0,

## Contributors
- Chia-Hsuan Chu [https://github.com/jiasyuanchu](https://github.com/jiasyuanchu)

Feel free to customize and expand upon this README as needed for your project.