<template>
<div id="queryBuilder">
    <br/>
    <SeccionPeriodo />
    <br/>
    <b-card style="width:98%">
        <h6 slot="header">Set de datos</h6>
        <b-card-body>
            <p class="card-text">
                aaab
            </p>
        </b-card-body>
    </b-card>
    <br/>
    <b-card style="width:98%">
        <h6 slot="header">Columnas visualizables</h6>
        <b-card-body>
            <p class="card-text">
                aaab
            </p>
        </b-card-body>
    </b-card>
    <br/>
    <b-card style="width:98%">
        <h6 slot="header">Filtros</h6>
        <b-card-body>
            <p class="card-text">
                aaab
            </p>
        </b-card-body>
    </b-card>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SeccionPeriodo from '@/components/SeccionPeriodo.vue';

@Component({
    components: {
        SeccionPeriodo
    }
})
export default class QueryBuilder extends Vue {}
</script>

<style>
#queryBuilder{
    border-right-style:solid;
    border-color:lightgray;
    border-width:1px;
    height:100vh;
    text-align:center;
}
</style>