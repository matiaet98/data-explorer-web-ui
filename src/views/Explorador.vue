<template>
<b-row>
    <b-col cols="4">
        <QueryBuilder/>
    </b-col>
    <b-col cols="8">
        <QueryResult/>        
    </b-col>
</b-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import QueryBuilder from '@/components/QueryBuilder.vue';
import QueryResult from '@/components/QueryResult.vue';

@Component({
  components: {
      QueryBuilder,
      QueryResult    
  }
})
export default class Explorador extends Vue {}

</script>