# Solicitar o preço do produto
preco = float(input("Digite o preço do produto: R$ "))

# Classificar o produto de acordo com o preço
if preco <= 100:
    print("O produto deve ser colocado na prateleira de Baixo Custo.")
elif 101 <= preco <= 500:
    print("O produto deve ser colocado na prateleira de Médio Custo.")
else:
    print("O produto deve ser colocado na prateleira de Alto Custo.")
