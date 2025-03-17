<script>
    export default{
        name: "Header"
    }
</script>

<template>
    <header>
        <div class="conteiner">
            <button class = "usuario"><i class="bi bi-person-fill"></i>Nome</button>
        
            <button class="exit"><i class="bi bi-box-arrow-right"></i></button>
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

.usuario{
    background-color: white;
    border-radius: 20px;
    font-size: 12pt;
    align-items: center;  
    padding: 10px 15px;  
    border: none;
    cursor: pointer;
  
}
.exit{
    background-color: white;
    border-radius: 20px;
    font-size: 12pt;
    align-items: center;  
    padding: 10px 15px;  
    border: none;
    cursor: pointer;
}

.usuario i {
    margin-right: 15px;  
  }
 

.exit:hover, .usuario:hover{
    transform: scale(1.1);;
    color: darkcyan;
}

.conteiner {
    display: flex;
    justify-content: flex-end;  /* Centraliza os botões horizontalmente */
    align-items: center; 
    gap: 18px;
    margin-right: 70px;
  }
</style>
