<script setup >
    import { ref } from "vue";

    const navbar = ref(
        [
        {
            label:"API",
            icon:"bi bi-bank",
            submenu: [
                {label:"Cadastro",rota:"/CadastroApi"},
                {label:"Cep",rota:"/Cep"},
                {label:"Clima",rota:"/PrevisaoTempo"}
            ]
        },
        {
            label:"Cadastro",
            icon:"bi bi-file-person-fill",
            submenu: [
                {label:"Usuários",rota:"#"},
            ]
        },
        {
            label:"Clientes",
            icon:"bi bi-people-fill",
            submenu: [],
            rota:"#"
        },   
        {
            label:"Parceiros",
            icon:"bi bi-hand-thumbs-up",
            submenu: [],
            rota:"#"
        },   
        {
            label:"Anúncios",
            icon:"bi bi-tv",
            submenu: [],
            rota:"#"
        },   
        {
            label:"Gifts",
            icon:"bi bi-gift",
            submenu: [],
            rota:"#"
        },   
        {
            label:"Financeiro",
            icon:"bi bi-cash-coin",
            submenu: [],
            rota:"#"
        },   
        {
            label:"Planos",
            icon:"bi bi-file-earmark-medical",
            submenu: [] ,
            rota:"#"
        },   
        {
            label:"Relatorios",
            icon:"bi bi-file-earmark-check",
            submenu: [],
            rota:"#" 
        },   
        {
            label:"Logs",
            icon:"bi bi-gear",
            submenu: [],
            rota:"#"
        },   
    ]
);

</script>

<template>
     <nav class="menu-lateral">
                
        <ul>
            <li v-for="(item, index) in navbar" :key="index" class="item-menu">
                <a :href="item.rota">
                <span class="icon"><i :class="item.icon"></i></span>
                <span class="txt-link" >{{ item.label }}</span>
                </a>
                <ul v-if="item.submenu.length > 0" class="submenu">

                    <li v-for="(it,ind) in item.submenu" :key="ind" ><router-link :to="it.rota">{{it.label}}</router-link></li>
                </ul>
            </li>
        </ul>
        
    </nav>
</template>

<style scoped>
nav.menu-lateral{
width: 70px;
height: 100%;  
background-color: var(--secondary-color);
padding: 70px 0 40px 1px;
border-top-right-radius: 30px;
border-bottom-right-radius: 30px;
box-shadow: 1px 0px 0px 1px;

position: fixed;
top: 0;
left: 0;
overflow: hidden;
transition: .3s;
}
nav.menu-lateral:hover{
    width: 200px;
}

ul{
    height: 100%;
    list-style: none;
}

ul li.item-menu{
    transition: .5s;
}

ul li.item-menu:hover{
    background-color: var(--terciary-color);
}

ul li.item-menu a{
    color: var(--primary-color);
    text-decoration: none;
    font-size: 20px;
    padding: 18px 4%;
    display: flex;
    line-height: 25px;
   
}

.txt-link{
    margin-left: 30px;
}

ul li.item-menu a .icon > i{
    font-size: 30px;
    margin-left:50px;
}

nav.menu-lateral .submenu{
    background-color: var(--hover-color);
    padding: 3%;
    display: none; 
}

.item-menu:hover .submenu {
    display: block;
}

.menu-lateral .item-menu .submenu a {
    color: var(--primary-color);
    margin-left: 30px;
}

.menu-lateral .item-menu .submenu a:hover{
    text-decoration:underline
}

.item-menu{
    margin-left:-37px;
}

</style>
