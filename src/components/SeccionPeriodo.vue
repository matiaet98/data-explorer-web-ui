<template>
    <b-card style="width:98%">
        <h6 slot="header">Periodo</h6>
        <b-card-body>
            <p class="card-text">
                <b-row class="my-1">
                    <b-col sm="4">
                        <label for="es-anual">Anual:</label>
                    </b-col>
                    <b-col sm="8">
                        <switches id="es-anual" v-model="periodoAnual" v-on:input="setModoPeriodo" theme="bootstrap" color="primary"></switches>
                    </b-col>
                </b-row>
                <div id="divAnual" v-if="this.periodoAnual">
                    <b-row class="my-1">
                        <b-col sm="4">
                            <label for="fecha-anio">Año:</label>
                        </b-col>
                        <b-col sm="8">
                            <vue-datepicker-local id="fecha-anio" v-model="fechaAnio" v-on:input="setFechaAnio" clearable format="YYYY" :local="this.pickerLocalData"/>
                        </b-col>
                    </b-row>
                </div>
                <div id="divMensual" v-else>
                    <b-row class="my-1">
                        <b-col sm="4">
                            <label for="fecha-desde">Desde:</label>
                        </b-col>
                        <b-col sm="8">
                            <vue-datepicker-local id="fecha-desde" v-model="fechaDesde" v-on:input="setFechaDesde" clearable format="MM/YYYY" :local="this.pickerLocalData"/>
                        </b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col sm="4">
                            <label for="fecha-hasta">Hasta:</label>
                        </b-col>
                        <b-col sm="8">
                            <vue-datepicker-local id="fecha-hasta" v-model="fechaHasta" v-on:input="setFechaHasta" clearable format="MM/YYYY" :local="this.pickerLocalData"/>
                        </b-col>
                    </b-row>
                </div>                
            </p>
        </b-card-body>
    </b-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueDatepickerLocal from 'vue-datepicker-local';
import Switches from 'vue-switches';

@Component({
    components: {
        VueDatepickerLocal,
        Switches
    }
})
export default class SeccionPeriodo extends Vue {
    fechaDesde : Date = null;
    fechaHasta : Date = null;
    fechaAnio : Date = null;
    periodoAnual : boolean = false;    
    readonly pickerLocalData: object = {
        yearSuffix: '',
        monthsHead: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        months: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
    }
    mounted(){
        this.setFechaDesde();
        this.setFechaHasta();
    }

    setFechaDesde(){
        if(this.fechaDesde){
            let mes : Number = this.fechaDesde.getMonth() + 1;
            let anio : Number = this.fechaDesde.getFullYear();
            this.$store.commit('exploracion/setPeriodoDesde',mes.toString()+'/'+anio.toString());
        }
        else{
            this.$store.commit('exploracion/setPeriodoDesde','');
        }
        this.fechaAnio = '';
        this.$store.commit('exploracion/setPeriodoAnio','');
    }

    setFechaHasta(){
        if(this.fechaHasta){
            let mes : Number = this.fechaHasta.getMonth() + 1;
            let anio : Number = this.fechaHasta.getFullYear();
            this.$store.commit('exploracion/setPeriodoHasta',mes.toString()+'/'+anio.toString());
        }
        else{
            this.$store.commit('exploracion/setPeriodoHasta','');
        }
        this.fechaAnio = '';
        this.$store.commit('exploracion/setPeriodoAnio','');
    }

    setFechaAnio(){
        if(this.fechaAnio){
            this.$store.commit('exploracion/setPeriodoAnio',this.fechaAnio.getFullYear().toString());
        }
        else{
            this.$store.commit('exploracion/setPeriodoAnio','');
        }
        this.fechaDesde = '';
        this.fechaHasta = '';
        this.$store.commit('exploracion/setPeriodoDesde','');
        this.$store.commit('exploracion/setPeriodoHasta','');
    }

    setModoPeriodo(){
        if(this.periodoAnual){
            this.setFechaAnio();
        }
        else{
            this.setFechaDesde();
            this.setFechaHasta();
        }
    }
}
</script>