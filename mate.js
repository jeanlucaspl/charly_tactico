window.DB_MATE = {
  operAlgebraicas: [
    { nivel:"facil", subtema:"Álgebra", enunciado:"Simplifique: $3x+5x-2x$", alternativas:["A) $6x$","B) $7x$","C) $5x$","D) $4x$"], respuesta:"A", solucion:"$6x$." },
    { nivel:"facil", subtema:"Álgebra", enunciado:"Resuelva: $5x = 20$", alternativas:["A) $2$","B) $4$","C) $5$","D) $15$"], respuesta:"B", solucion:"$x=4$." },
    { nivel:"facil", subtema:"Álgebra", enunciado:"Expanda: $(x+3)^2$", alternativas:["A) $x^2+9$","B) $x^2+6x+9$","C) $x^2+3x+9$","D) $x^2+6x$"], respuesta:"B", solucion:"Binomio al cuadrado." },
    { nivel:"medio", subtema:"Álgebra", enunciado:"Simplifique: $(x^2-4)/(x+2)$", alternativas:["A) $x-2$","B) $x+2$","C) $x^2-2$","D) $x-4$"], respuesta:"A", solucion:"Factorizando diferencia." },
    { nivel:"medio", subtema:"Álgebra", enunciado:"Raíces de $x^2-5x+6=0$:", alternativas:["A) $1, 6$","B) $2, 3$","C) $-2, -3$","D) $0, 6$"], respuesta:"B", solucion:"Aspa simple." },
    { nivel:"medio", subtema:"Álgebra", enunciado:"$P(x)=2x^3-3x^2+x-5$. $P(2)$=", alternativas:["A) $1$","B) $3$","C) $5$","D) $7$"], respuesta:"A", solucion:"$16-12+2-5=1$." },
    { nivel:"dificil", subtema:"Álgebra", enunciado:"Residuo de $(x^4-2x^3+x-1) / (x-1)$:", alternativas:["A) $-1$","B) $0$","C) $1$","D) $-2$"], respuesta:"A", solucion:"Teorema del Resto P(1)." },
    { nivel:"dificil", subtema:"Álgebra", enunciado:"Sistema: $2x+y=7$, $x-y=2$", alternativas:["A) $x=3,y=1$","B) $x=1,y=3$","C) $x=2,y=3$","D) $x=4,y=-1$"], respuesta:"A", solucion:"Sumando ecuaciones: $3x=9$." },
    { nivel:"dificil", subtema:"Álgebra", enunciado:"Si $x+1/x=3$, halle $x^2+1/x^2$.", alternativas:["A) $7$","B) $9$","C) $11$","D) $6$"], respuesta:"A", solucion:"Elevar al cuadrado y restar 2." }
  ],
  angulosTriangulo: [
    { nivel:"facil", subtema:"Ángulos", enunciado:"Dos miden 60° y 80°. ¿El 3ro?", alternativas:["A) 30°","B) 40°","C) 50°","D) 60°"], respuesta:"B", solucion:"$180-140=40$." },
    { nivel:"facil", subtema:"Ángulos", enunciado:"Suma de interiores:", alternativas:["A) 90°","B) 270°","C) 360°","D) 180°"], respuesta:"D", solucion:"Propiedad fundamental." },
    { nivel:"facil", subtema:"Ángulos", enunciado:"Triángulo equilátero, cada ángulo:", alternativas:["A) 45°","B) 60°","C) 90°","D) 120°"], respuesta:"B", solucion:"$180/3=60$." },
    { nivel:"medio", subtema:"Ángulos", enunciado:"Exterior=110°. Uno no adyacente=50°. ¿El otro?", alternativas:["A) 50°","B) 60°","C) 70°","D) 40°"], respuesta:"B", solucion:"$110-50=60$." },
    { nivel:"medio", subtema:"Ángulos", enunciado:"En isósceles un ángulo es 100°. ¿Otro?", alternativas:["A) 50°","B) 40°","C) 80°","D) 100°"], respuesta:"B", solucion:"$180-100=80$, entre dos: 40." },
    { nivel:"medio", subtema:"Ángulos", enunciado:"Razón 1:2:3. ¿El mayor?", alternativas:["A) 60°","B) 90°","C) 80°","D) 120°"], respuesta:"B", solucion:"$x+2x+3x=180$, $x=30$. Mayor 90." },
    { nivel:"dificil", subtema:"Ángulos", enunciado:"Isósceles: vértice 36°. ¿Base?", alternativas:["A) 72°","B) 54°","C) 60°","D) 36°"], respuesta:"A", solucion:"$(180-36)/2 = 72$." },
    { nivel:"dificil", subtema:"Ángulos", enunciado:"T. rectángulo, hipotenusa 10, ángulo 30°. Opuesto:", alternativas:["A) 5","B) $5\\sqrt{3}$","C) 10","D) $2.5$"], respuesta:"A", solucion:"Seno 30 es 1/2. Cateto es 5." },
    { nivel:"dificil", subtema:"Ángulos", enunciado:"Incentro de ABC. $A=60$. Ángulo en incentro BIC:", alternativas:["A) 120°","B) 150°","C) 110°","D) 90°"], respuesta:"A", solucion:"$90 + A/2 = 90 + 30 = 120$." }
  ],
  pitagoras: [
    { nivel:"facil", subtema:"Pitágoras", enunciado:"Catetos 3 y 4. Hipotenusa:", alternativas:["A) 6","B) 7","C) 5","D) 8"], respuesta:"C", solucion:"5" },
    { nivel:"facil", subtema:"Pitágoras", enunciado:"Hipotenusa 13, cateto 5. Cateto:", alternativas:["A) 10","B) 11","C) 12","D) 8"], respuesta:"C", solucion:"12" },
    { nivel:"facil", subtema:"Pitágoras", enunciado:"Catetos 6 y 8. Hipotenusa:", alternativas:["A) 9","B) 10","C) 12","D) 14"], respuesta:"B", solucion:"10" },
    { nivel:"medio", subtema:"Pitágoras", enunciado:"Escalera 10m, base 6m. ¿Altura?", alternativas:["A) 6","B) 7","C) 8","D) 9"], respuesta:"C", solucion:"8" },
    { nivel:"medio", subtema:"Pitágoras", enunciado:"Diagonal de cuadrado lado 5:", alternativas:["A) $5\\sqrt{2}$","B) 10","C) $5\\sqrt{3}$","D) 25"], respuesta:"A", solucion:"$5\\sqrt{2}$" },
    { nivel:"medio", subtema:"Pitágoras", enunciado:"Rectángulo 12 y 5. Diagonal:", alternativas:["A) 15","B) 14","C) 13","D) 17"], respuesta:"C", solucion:"13" },
    { nivel:"dificil", subtema:"Pitágoras", enunciado:"$h^2=m\\cdot n$, $m=4, n=9$. $h=$", alternativas:["A) 5","B) 6","C) 7","D) 8"], respuesta:"B", solucion:"$\\sqrt{36}=6$." },
    { nivel:"dificil", subtema:"Pitágoras", enunciado:"Triángulo isósceles, lados 13, base 10. Área:", alternativas:["A) 65","B) 60","C) 130","D) 50"], respuesta:"B", solucion:"Altura=12. $(10\\times12)/2=60$." },
    { nivel:"dificil", subtema:"Pitágoras", enunciado:"Diagonal de cubo arista 4:", alternativas:["A) $4\\sqrt{3}$","B) $4\\sqrt{2}$","C) 8","D) 12"], respuesta:"A", solucion:"$a\\sqrt{3} = 4\\sqrt{3}$." }
  ],
  trigonometria: [
    { nivel:"facil", subtema:"Trigonometría", enunciado:"$\\sin(30°)=$", alternativas:["A) $\\sqrt{3}/2$","B) $1/2$","C) $\\sqrt{2}/2$","D) $1$"], respuesta:"B", solucion:"$1/2$" },
    { nivel:"facil", subtema:"Trigonometría", enunciado:"Opuesto=3, Adyacente=4. $\\tan\\theta=$", alternativas:["A) $4/3$","B) $3/5$","C) $3/4$","D) $5/3$"], respuesta:"C", solucion:"$3/4$" },
    { nivel:"facil", subtema:"Trigonometría", enunciado:"$\\sin^2 x + \\cos^2 x=$", alternativas:["A) 0","B) 2","C) 1","D) N.A."], respuesta:"C", solucion:"Identidad pitagórica." },
    { nivel:"medio", subtema:"Trigonometría", enunciado:"$\\sin\\theta=4/5$ (I cuad). $\\cos\\theta=$", alternativas:["A) $3/5$","B) $4/5$","C) $3/4$","D) $5/3$"], respuesta:"A", solucion:"Pitagórica." },
    { nivel:"medio", subtema:"Trigonometría", enunciado:"¿En qué cuadrante $\\sin<0, \\cos>0$?", alternativas:["A) I","B) II","C) III","D) IV"], respuesta:"D", solucion:"IV Cuadrante." },
    { nivel:"medio", subtema:"Trigonometría", enunciado:"Si $\\tan\\theta=1$ (I cuad), $\\theta=$", alternativas:["A) 30°","B) 45°","C) 60°","D) 90°"], respuesta:"B", solucion:"45°." },
    { nivel:"dificil", subtema:"Trigonometría", enunciado:"Simplifique: $(\\sin^2\\theta-\\cos^2\\theta)/(\\sin\\theta+\\cos\\theta)$", alternativas:["A) $\\sin+\\cos$","B) $\\sin-\\cos$","C) 1","D) $\\tan$"], respuesta:"B", solucion:"Diferencia de cuadrados." },
    { nivel:"dificil", subtema:"Trigonometría", enunciado:"En ABC, $a=3, b=4, C=90$. Halle $\\sin A + \\cos A$", alternativas:["A) $7/5$","B) $1$","C) $5/7$","D) $12/5$"], respuesta:"A", solucion:"$3/5 + 4/5 = 7/5$." },
    { nivel:"dificil", subtema:"Trigonometría", enunciado:"$2\\cos^2\\theta-\\cos\\theta-1=0$. Sol. en [0,360]:", alternativas:["A) 60,180","B) 60,180,300","C) 90,270","D) 0,180"], respuesta:"B", solucion:"Factorizando." }
  ]
};
