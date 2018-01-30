# Ember Data Power Select

Integrate into your Ember Data app without having to implement a `store.query` function in each route.

See [DEMO](https://iliasderos.github.io/ember-data-power-select/)

## Installation

```
ember install ember-data-power-select
```

## Usage

See [ember-power-select](http://ember-power-select.com/docs/how-to-use-it)'s API.
Adds the following parameters :

* `modelName` - model to query when searching with `store.query()`
* `params`(optional) - additional query params to send in each request
* `queryKey`(default: 'search') - this is where the search value is send=t in each request

```
  {{#data-power-select
    modelName='user'
    params=(hash limit=10)
    queryKey='email'
    params=(hash results=10)
    onchange=(action (mut selected))
    selected=selected
    placeholder="Search Users emails..."
    as |user|
  }}
    {{user.email}}
  {{/data-power-select}}
```

