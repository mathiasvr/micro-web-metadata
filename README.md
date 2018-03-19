# micro-web-metadata
[![license](https://img.shields.io/:license-MIT-blue.svg)](https://mvr.mit-license.org)

Microservice for retrieving metadata from a URL, based on Open Graph, Twitter Cards and regular HTML.

## usage
```bash
curl 'https://web-metadata.now.sh/?url=https://github.com/mathiasvr/micro-web-metadata'
```

### output
```json
{
  "author": "mathiasvr",
  "date": "2018-03-19T11:00:00.000Z",
  "description": "micro-web-metadata - Microservice for retrieving metadata from a URL",
  "image": "https://avatars2.githubusercontent.com/u/8664776?s=400&v=4",
  "video": null,
  "lang": "en",
  "logo": "https://assets-cdn.github.com/favicon.ico",
  "publisher": "GitHub",
  "title": "mathiasvr/micro-web-metadata",
  "url": "https://github.com/mathiasvr/micro-web-metadata"
}
```

## deployment
Deploy with [now](https://zeit.co/now):
```bash
now mathiasvr/micro-web-metadata
```