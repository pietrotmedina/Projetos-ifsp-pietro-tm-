---

marp: true
theme: default
paginate: true
size: 16:9
color: black

---

<style>
section {
 background-image: linear-gradient(90deg, #89d957, #c9e265); }
</style>

<style scoped>
h1 {
 color: #804441;
 font-size: 80px;
 text-align: center;
 margin: 0; }
h3 {
 color: #3d7a40;
 font-size: 45px;
 text-align: center;
 margin-top: 5px; }
</style>

# Gerenciamento de Processos
### CARIFR1

---

<style scoped>
h1 {
 position: absolute;
 top: 20px;
 left: 0;
 width: 100%;
 text-align: center;
 color: #3d7a40;
 font-size: 80px;
 margin: 0; }
p {
 color: black;
 font-size: 50px;
 text-align: justify;
 line-height: 1.3; }
</style>

# O que é um processo?
Um *processo* é um **programa** em execução, acompanhado dos recursos e das informações necessários à sua execução.

---

# Informações de um processo
- Identificador do processo (PID)
- Estado de execução
- Prioridade
- Recursos utilizados

---

# Escalonamento de processos
1. Identifica os processos prontos
2. Seleciona um processo conforme a política de escalonamento
3. Disponibiliza a CPU ao processo selecionado

---

# Comandos do Windows
- O Windows possui um conjunto de comandos de console integrados
- A documentação descreve os [Comandos do Windows](https://learn.microsoft.com/pt-br/windows-server/administration/windows-commands/windows-commands) que podem ser usados para automatizar tarefas

---

# Estados de um processo
Um processo pode mudar de estado conforme a disponibilidade da CPU e a ocorrência de eventos
![PC](pc.jpg)

---

# Processos no terminal
|**COMANDO**|**FUNÇÃO**|**EXEMPLO**|
|---|---|---|
|**tasklist**|*Listar os processos em execução*|tasklist|
|**tasklist /v**|*Exibir informações detalhadas dos processos*|tasklist /v|
|**tasklist /fi**|*Filtrar processos por um critério*|tasklist /fi "imagename eq chrome.exe"|
|**tasklist /svc**|*Mostrar serviços associados aos processos*|tasklist /svc|
|**start**|*Iniciar um programa*|start notepad|
|**where**|*Localizar o executável de um comando*|where notepad|
|**systeminfo**|*Consultar informações do sistema*|systeminfo|

---

# tasklist
![tasklist](1.png)

---

# tasklist /V
![tasklist /V](2.png)

---

# tasklist /fi
![tasklist /fi](3.png)

---

# tasklist /svc
![tasklist /svc](4.png)

---

# start
![start](5.png)

---

# where
![where](6.png)