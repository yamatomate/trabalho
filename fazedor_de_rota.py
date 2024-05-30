from pathlib import *
dire = Path(".")
pasta = list(dire.glob("**/*.html"))
pasta_organizada = [[],[]]
for x in pasta:
    if (str(x).find("\\") > -1):
        if (str(x).find("imagens") == -1):
            x = str(x).replace("\\", "/")
            pasta_organizada[1].append(x)
    else:
        pasta_organizada[0].append(x)

for x in pasta_organizada[0]:
    print(f"arquivo: {x}")
for x in pasta_organizada[1]:
    print(f"arquivo com pasta: {x}")