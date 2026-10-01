n1 = int(input("Informe um numero: "))
n2 = int(input("Informe outro numero: "))
op = input("Informe a operação (+, -, *, /): ")

if op in ["+", "-", "*", "/"]:
    if op == "+":
        res = n1 + n2         
    elif op == "-":
        res = n1 - n2 
    elif op == "*":
        res = n1 * n2 
    elif op == "/":
        res = n1 / n2 
    print(f"{n1} {op} {n2} = {res}")
else:
    print("Operação inválida")
    
