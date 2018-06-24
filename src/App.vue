<template>
  <b-container fluid>
  <b-row>
    <b-col id="headerCol">
      <Header/>
    </b-col>
  </b-row>
    <router-view>
    </router-view>
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
</style>