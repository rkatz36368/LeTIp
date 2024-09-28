
# Le Tip

This project is a tip calculator application built using Vue 2, designed for converting and calculating tips in both USD and EUR currencies, with a seamless conversion to Brazilian Reais (BRL). The app allows users to enter a bill amount, select a tip percentage, and choose the number of people to split the bill with. It also integrates with the Frankfurter API to get real-time conversion rates.


## Features

- Toggle between USD and EUR currencies
- Real-time conversion to BRL using the Frankfurter API.
- Responsive design with a single-column view on mobile.
- Custom sliders for setting tip percentage and number of people.


## API Reference

#### Get Conversion from EUR or USD to BRL

```http
  GET /latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `amount` | `string` | **Required**. Amount of money |
| `fromCurrency` | `string` | **Required**. Original Currency|
| `toCurrency` | `string` | **Required**. Exchange Currency|


## Run Locally

Clone the project

```bash
  git clone https://github.com/rkatz36368/LeTIp.git
```

Go to the project directory

```bash
  cd LeTIp
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
To build the project for production

```bash
  npm run build
```




## Demo

Insert gif or link to demo




## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## License

[MIT](https://choosealicense.com/licenses/mit/)

