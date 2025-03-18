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
    background-color: rgb(122, 122, 122);
    height: 70px;
    border-bottom-left-radius: 65px; 
    border-bottom-right-radius: 65px; 
    padding: 15px 15px;
}

.btn-usuario{
    background-color: white;
    border-radius: 20px;
    font-size: 12pt;
    align-items: center;  
    padding: 10px 15px;  
    border: none;
    cursor: pointer;
  
}
.btn-home{
    background-color: white;
    border-radius: 20px;
    font-size: 12pt;
    align-items: center;  
    padding: 10px 15px;  
    border: none;
    cursor: pointer;
    text-decoration: none;
}

.link{
    text-decoration: none;
    color: black;
}

.btn-usuario i {
    margin-right: 15px;  
}
 
.btn-usuario:hover {
    transform: scale(1.1);
}

.btn-home:hover {
    transform: scale(1.1);
}

.conteiner {
    display: flex;
    justify-content: flex-end;  /* Centraliza os botões horizontalmente */
    align-items: center; 
    gap: 18px;
    margin-right: 70px;
  }
</style>
