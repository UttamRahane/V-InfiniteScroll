# V-InfiniteScroll

Infinite scroll directive using vue and typescript.

## Usage

```vue
<template>
   <div v-InfiniteScroll="showMore"></div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import InfiniteScroll from '../InfiniteScroll';

@Component({
   directives: { InfiniteScroll },
})
export default class DemoComponent extends Vue {
   showMore(){
    // fetch more records
  }
}
</script>
```
