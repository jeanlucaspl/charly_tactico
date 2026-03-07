window.DB_RM = {
  sucesiones: [
    { nivel:"facil", subtema:"Sucesiones", enunciado:"Halle el faltante: $2,4,6,8,\\_,12$", alternativas:["A) $9$","B) $10$","C) $11$","D) $7$"], respuesta:"B", solucion:"Diferencia $+2$." },
    { nivel:"facil", subtema:"Sucesiones", enunciado:"Continúe: $1,3,9,27,\\_$", alternativas:["A) $54$","B) $81$","C) $63$","D) $72$"], respuesta:"B", solucion:"Por $3$." },
    { nivel:"facil", subtema:"Sucesiones", enunciado:"Sigue: $10, 8, 6, 4, \\_$", alternativas:["A) $3$","B) $2$","C) $1$","D) $0$"], respuesta:"B", solucion:"Menos $2$." },
    { nivel:"medio", subtema:"Sucesiones", enunciado:"Halle el faltante: $2,6,12,20,30,\\_$", alternativas:["A) $40$","B) $42$","C) $44$","D) $38$"], respuesta:"B", solucion:"Diferencias $4,6,8,10,12$." },
    { nivel:"medio", subtema:"Sucesiones", enunciado:"Fibonacci: $1,1,2,3,5,8,13,\\_$", alternativas:["A) $18$","B) $19$","C) $21$","D) $20$"], respuesta:"C", solucion:"Suma anteriores." },
    { nivel:"medio", subtema:"Sucesiones", enunciado:"Sigue: $1, 4, 9, 16, 25, \\_$", alternativas:["A) $30$","B) $36$","C) $40$","D) $32$"], respuesta:"B", solucion:"Cuadrados perfectos." },
    { nivel:"dificil", subtema:"Sucesiones", enunciado:"Halle: $\\dfrac{1}{2},\\dfrac{2}{3},\\dfrac{3}{5},\\dfrac{5}{8},\\_$", alternativas:["A) $\\dfrac{8}{13}$","B) $\\dfrac{7}{11}$","C) $\\dfrac{6}{10}$","D) $\\dfrac{9}{14}$"], respuesta:"A", solucion:"Fibonacci arriba y abajo." },
    { nivel:"dificil", subtema:"Sucesiones", enunciado:"Sigue: $2, 3, 10, 39, \\_$", alternativas:["A) $170$","B) $172$","C) $168$","D) $156$"], respuesta:"B", solucion:"$x \\times n + n^2$ lógica." },
    { nivel:"dificil", subtema:"Sucesiones", enunciado:"$x, y$ en: $3, 4, 6, 8, 12, 16, x, y$", alternativas:["A) $24, 32$","B) $18, 24$","C) $24, 30$","D) $20, 28$"], respuesta:"A", solucion:"Intercaladas $\\times2$." }
  ],
  razonLogico: [
    { nivel:"facil", subtema:"Lógica", enunciado:"$p\\Rightarrow q$ y $p$ son V. ¿$q$?", alternativas:["A) F","B) V","C) Indeterminado","D) N.A."], respuesta:"B", solucion:"Modus Ponens." },
    { nivel:"facil", subtema:"Lógica", enunciado:"Negación de «Todos son buenos»:", alternativas:["A) Ninguno es bueno","B) Alguno no es bueno","C) Todos son malos","D) Algunos son buenos"], respuesta:"B", solucion:"Negación universal." },
    { nivel:"facil", subtema:"Lógica", enunciado:"Todos los gatos son animales. Firulais es gato.", alternativas:["A) No es animal","B) Es animal","C) Indeterminado","D) N.A."], respuesta:"B", solucion:"Silogismo." },
    { nivel:"medio", subtema:"Lógica", enunciado:"$\\neg p\\vee q$ es falso, entonces:", alternativas:["A) $p=F, q=V$","B) $p=V, q=F$","C) Ambos V","D) Ambos F"], respuesta:"B", solucion:"Ambos lados deben ser F." },
    { nivel:"medio", subtema:"Lógica", enunciado:"Contrarrecíproco de $p\\Rightarrow q$:", alternativas:["A) $q\\Rightarrow p$","B) $\\neg p\\Rightarrow\\neg q$","C) $\\neg q\\Rightarrow\\neg p$","D) $\\neg p\\Rightarrow q$"], respuesta:"C", solucion:"Propiedad lógica." },
    { nivel:"medio", subtema:"Lógica", enunciado:"Si $A\\Rightarrow B$ y $\\neg B$, entonces:", alternativas:["A) $A$","B) $\\neg A$","C) $B$","D) N.A."], respuesta:"B", solucion:"Modus Tollens." },
    { nivel:"dificil", subtema:"Lógica", enunciado:"$[(p\\wedge q)\\Rightarrow r]\\wedge\\neg r$. Concluye:", alternativas:["A) $p\\wedge q$","B) $\\neg p\\vee\\neg q$","C) $p\\vee q$","D) $r$"], respuesta:"B", solucion:"Modus Tollens." },
    { nivel:"dificil", subtema:"Lógica", enunciado:"¿Filas V en $(p\\oplus q)\\wedge(q\\Rightarrow r)$?", alternativas:["A) 2","B) 3","C) 4","D) 5"], respuesta:"B", solucion:"Tabla de verdad." },
    { nivel:"dificil", subtema:"Lógica", enunciado:"Equivalente a $p\\Rightarrow(q\\vee r)$:", alternativas:["A) $\\neg p\\vee q\\vee r$","B) $p\\wedge q\\wedge r$","C) $\\neg p\\wedge(q\\vee r)$","D) $p\\vee\\neg q\\vee\\neg r$"], respuesta:"A", solucion:"Ley de implicación." }
  ],
  planteoEcuaciones: [
    { nivel:"facil", subtema:"Ecuaciones", enunciado:"Doble de un número más $5$ es $17$. ¿Número?", alternativas:["A) $5$","B) $6$","C) $7$","D) $8$"], respuesta:"B", solucion:"$2x+5=17\\Rightarrow x=6$." },
    { nivel:"facil", subtema:"Ecuaciones", enunciado:"Suma de dos consecutivos es $37$. ¿Mayor?", alternativas:["A) $17$","B) $18$","C) $19$","D) $20$"], respuesta:"C", solucion:"$x+(x+1)=37$." },
    { nivel:"facil", subtema:"Ecuaciones", enunciado:"Mitad de un número es $14$. ¿Número?", alternativas:["A) $7$","B) $28$","C) $21$","D) $30$"], respuesta:"B", solucion:"$x/2=14$." },
    { nivel:"medio", subtema:"Ecuaciones", enunciado:"Tercera parte se suma al número, menos 4 da 20.", alternativas:["A) $15$","B) $18$","C) $21$","D) $24$"], respuesta:"B", solucion:"$x+x/3-4=20$." },
    { nivel:"medio", subtema:"Ecuaciones", enunciado:"Suma de tres pares consecutivos es $48$. ¿Mayor?", alternativas:["A) $14$","B) $16$","C) $18$","D) $20$"], respuesta:"C", solucion:"$x+(x+2)+(x+4)=48$." },
    { nivel:"medio", subtema:"Ecuaciones", enunciado:"Ana tiene 20 más que Beto. Juntos 100. ¿Ana?", alternativas:["A) 40","B) 50","C) 60","D) 70"], respuesta:"C", solucion:"Ana=60, Beto=40." },
    { nivel:"dificil", subtema:"Ecuaciones", enunciado:"Canillas 4h y 6h. ¿Juntas?", alternativas:["A) $12/5\\,h$","B) $2\\,h$","C) $3\\,h$","D) $8/3\\,h$"], respuesta:"A", solucion:"Tasa $1/4+1/6=5/12$." },
    { nivel:"dificil", subtema:"Ecuaciones", enunciado:"Tren A $80\\,km/h$, B $60\\,km/h$, dist $420\\,km$. ¿Horas?", alternativas:["A) 2","B) 3","C) 3.5","D) 4"], respuesta:"B", solucion:"$420/140=3$." },
    { nivel:"dificil", subtema:"Ecuaciones", enunciado:"Café de S/ 8 y S/ 5 para 60kg a S/ 7. ¿Kilos del caro?", alternativas:["A) 30","B) 40","C) 20","D) 50"], respuesta:"B", solucion:"$8x+5(60-x)=420$." }
  ],
  fracciones: [
    { nivel:"facil", subtema:"Fracciones", enunciado:"¿$3/5$ de $25$?", alternativas:["A) $10$","B) $12$","C) $15$","D) $20$"], respuesta:"C", solucion:"$15$." },
    { nivel:"facil", subtema:"Fracciones", enunciado:"Simplifique: $12/18$", alternativas:["A) $2/3$","B) $3/4$","C) $1/2$","D) $4/6$"], respuesta:"A", solucion:"$2/3$." },
    { nivel:"facil", subtema:"Fracciones", enunciado:"Calcule: $1 - 3/7$", alternativas:["A) $2/7$","B) $3/7$","C) $4/7$","D) $5/7$"], respuesta:"C", solucion:"$4/7$." },
    { nivel:"medio", subtema:"Fracciones", enunciado:"Calcule: $3/4 \\div 9/16$", alternativas:["A) $4/3$","B) $3/4$","C) $27/64$","D) $1$"], respuesta:"A", solucion:"$3/4 \\times 16/9 = 4/3$." },
    { nivel:"medio", subtema:"Fracciones", enunciado:"Ordene mayor a menor: $5/6, 3/4, 7/9$", alternativas:["A) $7/9 > 5/6 > 3/4$","B) $5/6 > 7/9 > 3/4$","C) $3/4 > 5/6 > 7/9$","D) N.A."], respuesta:"B", solucion:"Común 36." },
    { nivel:"medio", subtema:"Fracciones", enunciado:"Gasto $1/3$ y luego $1/4$ del resto. Quedan S/30. ¿Tenía?", alternativas:["A) 50","B) 60","C) 80","D) 100"], respuesta:"B", solucion:"Queda $3/4$ de $2/3$ = $1/2$. Mitad es 30, total 60." },
    { nivel:"dificil", subtema:"Fracciones", enunciado:"Simplifique: $\\dfrac{1/2+1/3}{1/4-1/6}$", alternativas:["A) $5$","B) $8$","C) $10$","D) $12$"], respuesta:"C", solucion:"$(5/6) / (1/12) = 10$." },
    { nivel:"dificil", subtema:"Fracciones", enunciado:"Caño A llena en 3h, B en 4h, desagüe C vacía en 6h. ¿Juntos?", alternativas:["A) 2.4h","B) 2h","C) 1.5h","D) 3h"], respuesta:"A", solucion:"$1/3 + 1/4 - 1/6 = 5/12$. T=12/5=2.4h." },
    { nivel:"dificil", subtema:"Fracciones", enunciado:"Pelota cae de 54m, rebota $2/3$ altura. ¿Altura al 3er rebote?", alternativas:["A) 12m","B) 16m","C) 18m","D) 24m"], respuesta:"B", solucion:"$54 \\times (2/3)^3 = 16$." }
  ],
  tantoPorCiento: [
    { nivel:"facil", subtema:"Porcentajes", enunciado:"¿$20\\%$ de $150$?", alternativas:["A) $25$","B) $30$","C) $35$","D) $40$"], respuesta:"B", solucion:"$30$." },
    { nivel:"facil", subtema:"Porcentajes", enunciado:"Artículo S/ 80 con $25\\%$ dscto. ¿Pago?", alternativas:["A) 55","B) 60","C) 65","D) 70"], respuesta:"B", solucion:"$60$." },
    { nivel:"facil", subtema:"Porcentajes", enunciado:"15 es el $\\_\\%$ de 60.", alternativas:["A) $20\\%$","B) $25\\%$","C) $30\\%$","D) $15\\%$"], respuesta:"B", solucion:"$25\\%$." },
    { nivel:"medio", subtema:"Porcentajes", enunciado:"Sube $10\\%$ luego baja $10\\%$. Resultado:", alternativas:["A) Igual","B) $1\\%$ menor","C) $1\\%$ mayor","D) $2\\%$ menor"], respuesta:"B", solucion:"$1.1 \\times 0.9 = 0.99$." },
    { nivel:"medio", subtema:"Porcentajes", enunciado:"Tras aumento del $20\\%$, sueldo es 2400. ¿Original?", alternativas:["A) 1800","B) 2000","C) 2100","D) 2200"], respuesta:"B", solucion:"$x(1.2) = 2400$." },
    { nivel:"medio", subtema:"Porcentajes", enunciado:"Compro a S/40 y vendo a S/50. ¿% ganancia s/costo?", alternativas:["A) $20\\%$","B) $25\\%$","C) $10\\%$","D) $30\\%$"], respuesta:"B", solucion:"Gana 10. $10/40 = 25\\%$." },
    { nivel:"dificil", subtema:"Porcentajes", enunciado:"Descuento $30\\%$ y $20\\%$ adicional. ¿Dscto total?", alternativas:["A) $44\\%$","B) $50\\%$","C) $46\\%$","D) $48\\%$"], respuesta:"A", solucion:"$0.7 \\times 0.8 = 0.56$. Descuento 44%." },
    { nivel:"dificil", subtema:"Porcentajes", enunciado:"S/ 5000 al $8\\%$ compuesto, 2 años.", alternativas:["A) 5700","B) 5832","C) 5850","D) 6000"], respuesta:"B", solucion:"$5000(1.08)^2 = 5832$." },
    { nivel:"dificil", subtema:"Porcentajes", enunciado:"Área de cuadrado si lado aumenta $20\\%$. ¿% aumenta?", alternativas:["A) $20\\%$","B) $40\\%$","C) $44\\%$","D) $400\\%$"], respuesta:"C", solucion:"$1.2^2 = 1.44$. Aumenta 44%." }
  ]
};
