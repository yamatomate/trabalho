from pathlib import *
dire = Path(".")
pasta = list(dire.glob("**/*.html"))
pasta_organizada = [[],[]]
for x in pasta:
    if (str(x).find("\\") > -1):
        if (str(x).find("imagens") == -1):
            x = str(x).replace("\\", "/")
            nome = x.split("/")[1].replace(".html", "").replace("_"," ")
            pasta_organizada[1].append([nome ,"/"+ x])
    else:
        nome = str(x).replace(".html", "").replace("_", " ")
        x =  "/"+ str(x)
        pasta_organizada[0].append([nome, x])

for x in pasta_organizada[0]:
    print(f"{x},")
for x in pasta_organizada[1]:
    print(f"{x},")

## python é o negocio mais idiota que eu ja vi, obs: acabei de fazer um algorito que printa
## uma lista com nome e o caminho para eu usar na var "sites" com ["nome", "caminho"]