<template>
  <q-toolbar class="bg-green-5 text-white">
    <q-avatar>
      <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
    </q-avatar>

    <q-toolbar-title>Market</q-toolbar-title>

    <q-btn stretch flat to="/products">
      Products
    </q-btn>
    <q-btn stretch flat to="/profile" icon="person"/>
    Products : {{order.size}}
  </q-toolbar>
</template>

<script lang="ts">

import { defineComponent, onBeforeUnmount, ref } from 'vue';
/* eslint-disable */ // @ts-ignore
import {orderService$} from '@tko/market-store'

export default defineComponent({
  setup() {
    const order = ref(new Set());
    const orderSubscription = orderService$.getOrder().subscribe(data => {
      if (data) {
        order.value = data;
      } else {
        order.value = new Set();
      }
    })

    onBeforeUnmount(() => {
      orderSubscription.unsubscribe();
    })

    return {
      order
    }
  }
})

</script>
