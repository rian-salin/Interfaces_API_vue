<script>
    export default{
        name: "Header"
    }
</script>

<template>
    <header>
        <div class="conteiner">
            <button class = "btn-usuario"><i class="bi bi-person-fill"></i>Nome</button>
        
            <button class="btn-home"><router-link class="link" to="/home">Home</router-link></button>
        </div>
    </header>
</template>

<style scoped>
header{
    background-color: var(--secondary-color);
    height: 75px;
    border-bottom-left-radius: 65px; 
    border-bottom-right-radius: 65px; 
    padding: 16px 15px;
}

.btn-usuario{
    background-color: var(--primary-color);
    font-size: 12pt;
    border-radius: 10px;
    align-items: center;  
    padding: 8px 12px;  
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}
.btn-home{
    background-color: var(--primary-color);
    font-size: 12pt;
    border-radius: 10px;
    align-items: center;  
    padding: 8px 12px;  
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;
}

.link{
    text-decoration: none;
    color: var(--secondary-color);
}

.btn-usuario i {
    margin-right: 15px;  
}
 
.btn-usuario:hover {
    scale: 1.1;
    border-radius: 10px;
    background-color: var(--hover-color);
}

.btn-home:hover {
    border-radius: 10px;
    scale: 1.1;
    background-color: var(--hover-color);
}

.conteiner {
    display: flex;
    justify-content: flex-end;  /* Centraliza os botões horizontalmente */
    align-items: center; 
    gap: 18px;
    margin-right: 70px;
  }
</style>
