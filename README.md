# ember-data-power-select

Integrate into your Ember Data-compliant app without having to implement a `store.query` function in each route.

## Installation

```
ember install ember-data-power-select
```

## Usage

See [ember-power-select](http://ember-power-select.com/docs/how-to-use-it)'s API.
Adds `modelName` and `queryArgs`.

```
  {{#data-power-select
    modelName='user'
    queryArgs=(hash limit=10)
    onchange=(action (mut selected))
    as |user|
  }}
    {{user.name}}
  {{/data-power-select}}
```