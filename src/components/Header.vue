<template>
    <b-navbar toggleable type="dark" variant="primary">
        <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
        <b-navbar-brand id="brand">Fiscar | Explorador de datos</b-navbar-brand>
        <b-collapse is-nav id="nav_text_collapse">
        <b-navbar-nav>
            <b-nav-item :to="'explorador'">Explorador</b-nav-item>
            <b-nav-item :to="'hipotesis'">Hipotesis</b-nav-item>
        </b-navbar-nav>
        </b-collapse>
        
    </b-navbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Header extends Vue {
}
</script>