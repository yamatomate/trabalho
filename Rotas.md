
# Rotas do backend #
caminho das rotas que o pessoal do front-end pode utilizar e seus JSON com exemplo

## IP base ##
porta padrão aberta para comunicação ``:8080`` 
* Server AWs do vinicius: ``18.206.68.106:8080``

## rotas disponiveis ##
IP porta + rota 
rota base :``/home``
apartir da rota base as outras rotas se ramificam.

> obs: aqui há rotas que se ramificam em home
--- 

#### /login ####
tipo: post
faz login de um usuario
exemplo em json:
```
{
	"username": "adm",
	"password": "1234"
}
```
### caminho relacionado a usuario ###
---
rota base: ``home/usuario``
manipulação de usuario e afims

#### /usuario ####
tipo: Post
salva um usuario
exemplo em JSON:
```
{
	?
}
```
### caminho relacionado a clinica ###
rota base: ``home/clinica``
manipulação de clinicas e afims

**/cadastrar**
precisa de token
tipo: post
cadastra clinicas
```
{
	"nome": "<nome da clinica>",
	"descricao": "<descrição da clinica>"
}
```

**/listar**
precisa de token
tipo: get
lista todas as clinicas salvas

**{id}**
precisa de token
tipo: get
lista um clinica baseado no id no banco
```
{
	"id": "<id da clinica que procura>",
	<não sei como funciona token>
}
```
