# Rotas do backend #
caminho das rotas que o pessoal do front-end pode utilizar e seus JSON com exemplo
## IP base ##
porta ':8080' aberta para comunicação
* Server AWs do vinicius: '18.206.68.106'
## rotas disponiveis ##
IP + porta + rotas
caminho base
'''
18.206.68.106:8080/home
'''
### rota de login ###
tipo: post
desc: faz login
exemplo em json:
'''
{
	"username": "adm",
	"password": "1234"
}
'''
