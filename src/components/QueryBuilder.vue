<template>
<div id="queryBuilder">
    <br/>
    <b-card style="width:98%">
        <h6 slot="header">Periodo</h6>
        <b-card-body>
            <p class="card-text">
                <b-row class="my-1">
                    <b-col sm="4">
                        <label for="fecha-desde">Desde:</label>
                    </b-col>
                    <b-col sm="8">
                        <vue-datepicker-local id="fecha-desde" v-model="fechaDesde" clearable format="MMYYYY" :local="this.pickerLocalData"/>
                    </b-col>
                </b-row>
                <b-row class="my-1">
                    <b-col sm="4">
                        <label for="fecha-hasta">Hasta:</label>
                    </b-col>
                    <b-col sm="8">
                        <vue-datepicker-local id="fecha-hasta" v-model="fechaHasta" clearable format="MMYYYY" :local="this.pickerLocalData"/>
                    </b-col>
                </b-row>
                
            </p>
        </b-card-body>
    </b-card>
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
import VueDatepickerLocal from 'vue-datepicker-local';
import Switches from 'vue-switches';

@Component({
    components: {
        VueDatepickerLocal,
        Switches
    }
})
export default class QueryBuilder extends Vue {
    fechaDesde : Date = new Date();
    fechaHasta : Date = new Date();
    pickerLocalData: object = {
        yearSuffix: '',
        monthsHead: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        months: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
    }
}
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