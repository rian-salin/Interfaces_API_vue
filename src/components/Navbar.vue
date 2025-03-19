<script>
    export default{
        name: "Navbar"
    }
</script>

<template>
     <nav class="menu-lateral">
        

        
        <ul>
            <li class="item-menu">
                <a href="#">
                <span class="icon"><i class="bi bi-bank"></i></span>
                <span class="txt-link">API</span>
                </a>
                <ul class="submenu">
                    <li><router-link to="/CadastroApi">Cadastro</router-link></li>
                </ul>
            </li>

            <li class="item-menu">
                <a href="#">
                <span class="icon"><i class="bi bi-file-person-fill"></i>  </span>
                <span class="txt-link">Cadastro</span>
                </a>
                <ul class="submenu">
                    <li></li>
                    <li><a href="#">Usuários</a></li>
                </ul>

            </li>
            <li class="item-menu">
                <a href="#">
                <span class="icon"><i class="bi bi-people-fill"></i>
                </span>
                <span class="txt-link">Clientes</span>
                </a>
            </li>
            <li class="item-menu">
                <a href="#">
                <span class="icon"><i class="bi bi-hand-thumbs-up"></i>
                </span>
                <span class="txt-link">Parceiros</span>
                </a>
            </li>
            <li class="item-menu">
                <a href="#">
                <span class="icon"><i class="bi bi-tv"></i></span>
                <span class="txt-link">Anúncios</span>
                </a>
            </li>
            <li class="item-menu">
                <a href="#">
                <span class="icon"><i class="bi bi-gift"></i>
                </span>
                <span class="txt-link">Gifts</span>
                </a>
            </li>
            <li class="item-menu">
                <a href="#">
                <span class="icon"><i class="bi bi-cash-coin"></i>
                </span>
                <span class="txt-link">Financeiro</span>
                </a>
            </li>
            <li class="item-menu">
                <a href="#">
                <span class="icon"><i class="bi bi-file-earmark-medical">
                </i></span>
                <span class="txt-link">Planos</span>
                </a>
            </li>
            <li class="item-menu">
                <a href="#">
                <span class="icon"><i class="bi bi-file-earmark-check">
                </i></span>
                <span class="txt-link">Relatorios</span>
                </a>
            </li>
            <li class="item-menu">
                <a href="#">
                <span class="icon"><i class="bi bi-gear"></i>
                </span>
                <span class="txt-link">Log</span>
                </a>
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
