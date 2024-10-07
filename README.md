
# Le Tip

This project is a tip calculator application built using Vue 2, designed for converting and calculating tips in both USD and EUR currencies, with a seamless conversion to Brazilian Reais (BRL). The app allows users to enter a bill amount, select a tip percentage, and choose the number of people to split the bill with. It also integrates with the Frankfurter API to get real-time conversion rates.


## Features

- Toggle between USD and EUR currencies
- Real-time conversion to BRL using the Frankfurter API.
- Responsive design with a single-column view on mobile.
- Custom sliders for setting tip percentage and number of people.

## Structure
- Vite + vue2
- Service Layer
- Vue Router
- Components



## API Reference

#### Get Conversion from EUR or USD to BRL

```
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

You can see the project here: https://letip.surge.sh/

## Screenshots

![App Screenshot](/screenshots/leTip_Fullscreen.png)

## Screenshots Mobile
![App Screenshot](/screenshots/letTipCell1.png)
![App Screenshot](/screenshots/letTipCell2.png)

## Board Usado no Projeto

https://trello.com/invite/b/66ef164ad7696b3ef177b326/ATTI0f2fbed3e19db3f08c6c63686c1e29ce7A8AA9CA/assesment

## License

[MIT](https://choosealicense.com/licenses/mit/)

