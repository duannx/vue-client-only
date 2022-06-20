# vue-client-only

[![npm](https://img.shields.io/npm/v/vue-client-only.svg)](https://www.npmjs.com/package/vue-client-only)
[![license](https://img.shields.io/github/license/duannx/vue-client-only.svg)]()



## What is vue-client-only?

This component helps you to render a component on the client side only. Only support Vue3

## Installation

```js
npm install --save @duannx/vue-client-only
or
yarn add @duannx/vue-client-only
```

## Usage

```js
import ClientOnly from '@duannx/vue-client-only'

<client-only>
    <some-component></some-component>
    This will be render only in the client
    <template #placeholder>
      This is the placeholder that will be render on SSR
    </template>
</client-only>
```

### Placeholder
Use the `placeholder` slot to render something on SSR
```js
<client-only>
    This will be render only in the client
    <template #placeholder>
      This is the placeholder that will be render on SSR
    </template>
</client-only>
```

### Props
- `is-show`: Boolean. Use this prop to control exactly when the component is rendered on the client. If you don't set this prop, the component will be rendered on the client only when the component is mounted.
```js
<!-- The default slot will be shown only when isShow is set to true -->
<client-only :is-show="isShow">
    This will be render only in the client
    <template #placeholder>
      This is the placeholder that will be render on SSR
    </template>
</client-only>
```

## When to use this component?
- **When a component can not run on the server side**. **Not really.** You can just move the logic that can only run on the browser to the mounted hook. No need to use this component.
- **When you face the error: `Hydration mismatch`.** **NO. Please.** This error is caused by the state of the component in the client is not matching with the state in the server or some [incorrect HTML nesting tags](https://vuejs.org/guide/scaling-up/ssr.html#hydration-mismatch). You need to find the root cause and fix it. You need to find the root cause and fix it. Overuse of this component will eliminate the benefit of SSR.
- **When you want to reduce the server workload.** This component will defer the rendering of the component on the server side. So your server will run faster, have better server response time, and reduce document size that transfer to the client.
- **When you want want to defer the rendering of the component on the client side.** The `is-show` prop will help you. Almost the time, the under-the-fold content is not useful when the page loads. So you can defer the rendering of all under-the-fold content till the page is loaded or the user interacts with the page.
Example, this code delay the rendering of the content till the user click or scroll the page: 
```vue
<script setup>
  import ClientOnly from '@duannx/vue-client-only'
  import { onMounted } from '@vue/runtime-core'
  const isShow = ref(false)
  onMounted(() => {
    ['keydown', 'click', 'touchstart', 'scroll'].forEach((type) => {
      addEventListener(type, () => {
        isShow.value = true
      }, { once: true, capture: true });
    })
  })
</script>
<template>
Some above the fold content ...
<ClientOnly :is-show="isShow">
  <p>This content is loaded after the user input</p>
  <template #placeholder>
    <p>Content placeholder. Click anywhere to show the main content...</p>
  </template>
</ClientOnly>
</template>

```
- 

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of
conduct, and the process for submitting pull requests to us.

## Versioning

**vue-client-only** use [SemVer](http://semver.org/) for versioning.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.
