<template>
  <b-container fluid>
  <b-row>
    <b-col id="headerCol">
      <Header/>
    </b-col>
  </b-row>
    <transition name="page" mode="out-in">
    <router-view/>
    </transition>
</b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({
  components: {
    Header
  }
})
export default class App extends Vue {}

</script>

<style>
#headerCol{
  padding-left:0pt;
  padding-right: 0pt;
}
.page-enter-active, .page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>