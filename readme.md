# File Uploader

A simple file uploader built with StencilJS

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

Clone the project

```
git clone https://github.com/cogoo/file-uploader.git
```

Install dependencies

```
npm i
```

Rename `.env.example.js` to `.env.js` and replace `<YOUR_GCS_BUCKET_NAME>` with your cloud storage bucket name

```
const env = {
  GCS_BUCKET: '<YOUR_GCS_BUCKET_NAME>',
};
```

To run this project:

```bash
npm start
```

To build the app for production, run:

```bash
npm run build
```

To run the unit tests once, run:

```
npm test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```

## Built With

* [StencilJS](https://stenciljs.com/) - The JS framework used

## Authors

* **Colin Ogoo** - *Initial work* - [cogoo](https://github.com/cogoo)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
