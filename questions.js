// =============================================================
// BASE DE DATOS MEGA COMPLETA — CHARLY TÁCTICO
// =============================================================

const QUESTIONS_DB = {

  // ════════════ PRINCIPIANTE (Total: >30 preguntas) ════════════
  operBasicasNeg: [
    { id:"obn1", nivel:"principiante", tema:"Matemáticas", subtema:"Operaciones con negativos", enunciado:"Calcule: $(-3)+(-5)$", alternativas:["A) $-8$","B) $8$","C) $-2$","D) $2$"], respuesta:"A", solucion:"Suma de negativos: $-8$." },
    { id:"obn2", nivel:"principiante", tema:"Matemáticas", subtema:"Operaciones con negativos", enunciado:"Calcule: $(-4)\\times(-6)$", alternativas:["A) $-24$","B) $24$","C) $-10$","D) $10$"], respuesta:"B", solucion:"Menos por menos es más: $24$." },
    { id:"obn3", nivel:"principiante", tema:"Matemáticas", subtema:"Operaciones con negativos", enunciado:"Calcule: $8-(-3)$", alternativas:["A) $5$","B) $11$","C) $-5$","D) $-11$"], respuesta:"B", solucion:"Restar negativo es sumar: $11$." },
    { id:"obn4", nivel:"principiante", tema:"Matemáticas", subtema:"Operaciones con negativos", enunciado:"Calcule: $\\dfrac{-12}{4}$", alternativas:["A) $3$","B) $-3$","C) $-8$","D) $8$"], respuesta:"B", solucion:"Negativo entre positivo: $-3$." },
    { id:"obn5", nivel:"principiante", tema:"Matemáticas", subtema:"Operaciones con negativos", enunciado:"¿Cuánto es $(-2)^3$?", alternativas:["A) $6$","B) $-6$","C) $-8$","D) $8$"], respuesta:"C", solucion:"$(-2)(-2)(-2)=-8$." }
  ],
  fraccionesNeg: [
    { id:"fn1", nivel:"principiante", tema:"Matemáticas", subtema:"Fracciones negativas", enunciado:"Calcule: $\\dfrac{-1}{2}+\\dfrac{-1}{4}$", alternativas:["A) $\\dfrac{-3}{4}$","B) $\\dfrac{3}{4}$","C) $\\dfrac{-1}{6}$","D) $\\dfrac{1}{6}$"], respuesta:"A", solucion:"$\\dfrac{-2-1}{4}=\\dfrac{-3}{4}$." },
    { id:"fn2", nivel:"principiante", tema:"Matemáticas", subtema:"Fracciones negativas", enunciado:"Calcule: $\\dfrac{-2}{3}\\times\\dfrac{3}{4}$", alternativas:["A) $\\dfrac{1}{2}$","B) $\\dfrac{-1}{2}$","C) $\\dfrac{-2}{7}$","D) $\\dfrac{2}{7}$"], respuesta:"B", solucion:"$\\dfrac{-6}{12}=\\dfrac{-1}{2}$." },
    { id:"fn3", nivel:"principiante", tema:"Matemáticas", subtema:"Fracciones negativas", enunciado:"Simplifique: $\\dfrac{-6}{-9}$", alternativas:["A) $\\dfrac{-2}{3}$","B) $\\dfrac{2}{3}$","C) $\\dfrac{3}{2}$","D) $\\dfrac{-3}{2}$"], respuesta:"B", solucion:"Se cancelan signos: $\\dfrac{2}{3}$." },
    { id:"fn4", nivel:"principiante", tema:"Matemáticas", subtema:"Fracciones negativas", enunciado:"Calcule: $\\dfrac{5}{6}-\\dfrac{3}{4}$", alternativas:["A) $\\dfrac{2}{2}$","B) $\\dfrac{1}{12}$","C) $\\dfrac{-1}{12}$","D) $\\dfrac{2}{10}$"], respuesta:"B", solucion:"MCM 12: $\\dfrac{10-9}{12}=\\dfrac{1}{12}$." }
  ],
  factorizacionBasica: [
    { id:"fb1", nivel:"principiante", tema:"Matemáticas", subtema:"Factorización básica", enunciado:"Factorice: $6x^2+9x$", alternativas:["A) $3x(2x+3)$","B) $6x(x+9)$","C) $3(2x^2+9x)$","D) $9x(x+6)$"], respuesta:"A", solucion:"Factor común $3x$." },
    { id:"fb2", nivel:"principiante", tema:"Matemáticas", subtema:"Factorización básica", enunciado:"Factorice: $x^2-25$", alternativas:["A) $(x-5)^2$","B) $(x+5)(x-5)$","C) $(x+25)(x-1)$","D) No factoriza"], respuesta:"B", solucion:"Diferencia de cuadrados." },
    { id:"fb3", nivel:"principiante", tema:"Matemáticas", subtema:"Factorización básica", enunciado:"Factorice: $x^2+5x+6$", alternativas:["A) $(x+2)(x+3)$","B) $(x+1)(x+6)$","C) $(x+5)(x+1)$","D) $(x-2)(x-3)$"], respuesta:"A", solucion:"Suman 5 y multiplican 6." },
    { id:"fb4", nivel:"principiante", tema:"Matemáticas", subtema:"Factorización básica", enunciado:"Factorice: $4a^2-12a$", alternativas:["A) $4(a^2-3a)$","B) $4a(a-3)$","C) $2a(2a-6)$","D) $12a(a-1)$"], respuesta:"B", solucion:"Factor común $4a$." }
  ],
  sumaExpAlg: [
    { id:"sea1", nivel:"principiante", tema:"Matemáticas", subtema:"Suma de expresiones", enunciado:"Simplifique: $5x+3y-2x+y$", alternativas:["A) $3x+4y$","B) $7x+4y$","C) $3x+2y$","D) $7x+2y$"], respuesta:"A", solucion:"$(5x-2x)+(3y+y)=3x+4y$." },
    { id:"sea2", nivel:"principiante", tema:"Matemáticas", subtema:"Suma de expresiones", enunciado:"Calcule: $(3a-2b)+(a+5b)$", alternativas:["A) $4a+3b$","B) $4a-3b$","C) $2a+3b$","D) $2a-3b$"], respuesta:"A", solucion:"$4a+3b$." },
    { id:"sea3", nivel:"principiante", tema:"Matemáticas", subtema:"Suma de expresiones", enunciado:"Reste: $(5x^2+3x)-(2x^2-x)$", alternativas:["A) $3x^2+2x$","B) $3x^2+4x$","C) $7x^2+2x$","D) $3x^2-4x$"], respuesta:"B", solucion:"$5x^2-2x^2+3x+x=3x^2+4x$." },
    { id:"sea4", nivel:"principiante", tema:"Matemáticas", subtema:"Suma de expresiones", enunciado:"Simplifique: $2a^2-3a+a^2+5a-1$", alternativas:["A) $3a^2+2a-1$","B) $3a^2-8a-1$","C) $a^2+2a-1$","D) $3a^2+2a+1$"], respuesta:"A", solucion:"$3a^2+2a-1$." }
  ],
  enunciadosAlg: [
    { id:"ea1", nivel:"principiante", tema:"Raz. Matemático", subtema:"Enunciados a expresiones", enunciado:"«El triple de $n$ disminuido en $7$»:", alternativas:["A) $3n-7$","B) $7-3n$","C) $3(n-7)$","D) $3n+7$"], respuesta:"A", solucion:"$3n-7$." },
    { id:"ea2", nivel:"principiante", tema:"Raz. Matemático", subtema:"Enunciados a expresiones", enunciado:"«Suma de dos números consecutivos»:", alternativas:["A) $2x$","B) $x+(x+2)$","C) $x+(x+1)$","D) $2x+2$"], respuesta:"C", solucion:"$x+(x+1)$." },
    { id:"ea3", nivel:"principiante", tema:"Raz. Matemático", subtema:"Enunciados a expresiones", enunciado:"«Doble del cuadrado de $a$ más $5$»:", alternativas:["A) $2a+5$","B) $2a^2+5$","C) $(2a)^2+5$","D) $2(a+5)^2$"], respuesta:"B", solucion:"$2a^2+5$." },
    { id:"ea4", nivel:"principiante", tema:"Raz. Matemático", subtema:"Enunciados a expresiones", enunciado:"«Cociente de $m$ entre $4$, aumentado en $3$»:", alternativas:["A) $\\dfrac{m+3}{4}$","B) $\\dfrac{m}{4}+3$","C) $\\dfrac{m}{4+3}$","D) $4m+3$"], respuesta:"B", solucion:"$m/4+3$." }
  ],
  mcdMcm: [
    { id:"mm1", nivel:"principiante", tema:"Matemáticas", subtema:"MCD y MCM", enunciado:"MCD de $12$ y $18$.", alternativas:["A) $3$","B) $6$","C) $9$","D) $36$"], respuesta:"B", solucion:"MCD es 6." },
    { id:"mm2", nivel:"principiante", tema:"Matemáticas", subtema:"MCD y MCM", enunciado:"MCM de $4$ y $6$.", alternativas:["A) $2$","B) $12$","C) $24$","D) $10$"], respuesta:"B", solucion:"MCM es 12." },
    { id:"mm3", nivel:"principiante", tema:"Matemáticas", subtema:"MCD y MCM", enunciado:"MCD de $24, 36, 48$:", alternativas:["A) $6$","B) $8$","C) $12$","D) $24$"], respuesta:"C", solucion:"MCD es 12." },
    { id:"mm4", nivel:"principiante", tema:"Matemáticas", subtema:"MCD y MCM", enunciado:"MCM de $3, 4, 5$:", alternativas:["A) $12$","B) $20$","C) $60$","D) $30$"], respuesta:"C", solucion:"Coprimos: $3\\times4\\times5=60$." }
  ],
  decimales: [
    { id:"dec1", nivel:"principiante", tema:"Matemáticas", subtema:"Decimales", enunciado:"Calcule: $3{,}5+1{,}25$", alternativas:["A) $4{,}75$","B) $4{,}65$","C) $5{,}75$","D) $4{,}50$"], respuesta:"A", solucion:"$4{,}75$." },
    { id:"dec2", nivel:"principiante", tema:"Matemáticas", subtema:"Decimales", enunciado:"Calcule: $7{,}2\\times0{,}5$", alternativas:["A) $3{,}6$","B) $36$","C) $0{,}36$","D) $3{,}06$"], respuesta:"A", solucion:"La mitad de 7.2 es 3.6." },
    { id:"dec3", nivel:"principiante", tema:"Matemáticas", subtema:"Decimales", enunciado:"Calcule: $8{,}4\\div0{,}4$", alternativas:["A) $2{,}1$","B) $21$","C) $0{,}21$","D) $3{,}36$"], respuesta:"B", solucion:"$84/4=21$." },
    { id:"dec4", nivel:"principiante", tema:"Matemáticas", subtema:"Decimales", enunciado:"Convierta $\\dfrac{3}{8}$ a decimal.", alternativas:["A) $0{,}38$","B) $0{,}375$","C) $0{,}25$","D) $0{,}333\\ldots$"], respuesta:"B", solucion:"$3\\div8=0{,}375$." }
  ],
  divisibilidad: [
    { id:"div1", nivel:"principiante", tema:"Matemáticas", subtema:"Divisibilidad", enunciado:"Divisible por $3$:", alternativas:["A) $124$","B) $135$","C) $142$","D) $151$"], respuesta:"B", solucion:"$1+3+5=9$." },
    { id:"div2", nivel:"principiante", tema:"Matemáticas", subtema:"Divisibilidad", enunciado:"Divisible por $6$ si es divisible por:", alternativas:["A) $2$ y $4$","B) $3$ y $4$","C) $2$ y $3$","D) Solo por $6$"], respuesta:"C", solucion:"2 y 3." },
    { id:"div3", nivel:"principiante", tema:"Matemáticas", subtema:"Divisibilidad", enunciado:"¿Es $2\\,340$ divisible por $9$?", alternativas:["A) Sí","B) No","C) Solo por $3$","D) Depende"], respuesta:"A", solucion:"Suman 9." },
    { id:"div4", nivel:"principiante", tema:"Matemáticas", subtema:"Divisibilidad", enunciado:"Divisores de $12$:", alternativas:["A) $4$","B) $5$","C) $6$","D) $3$"], respuesta:"C", solucion:"1,2,3,4,6,12." }
  ],
  multExpAlg: [
    { id:"mea1", nivel:"principiante", tema:"Matemáticas", subtema:"Mult. algebraica", enunciado:"Expanda: $2x(3x-5)$", alternativas:["A) $6x^2-10x$","B) $6x-10x$","C) $5x^2-10x$","D) $6x^2+10x$"], respuesta:"A", solucion:"$6x^2-10x$." },
    { id:"mea2", nivel:"principiante", tema:"Matemáticas", subtema:"Mult. algebraica", enunciado:"Expanda: $(x+4)(x-2)$", alternativas:["A) $x^2+2x-8$","B) $x^2-2x-8$","C) $x^2+2x+8$","D) $x^2-8$"], respuesta:"A", solucion:"$x^2+2x-8$." },
    { id:"mea3", nivel:"principiante", tema:"Matemáticas", subtema:"Mult. algebraica", enunciado:"Calcule: $(2a)^2\\cdot3a$", alternativas:["A) $6a^3$","B) $12a^3$","C) $6a^2$","D) $12a^2$"], respuesta:"B", solucion:"$4a^2\\cdot3a=12a^3$." }
  ],
  despejarX: [
    { id:"dx1", nivel:"principiante", tema:"Matemáticas", subtema:"Despejar x", enunciado:"$3x+7=16$", alternativas:["A) $x=2$","B) $x=3$","C) $x=4$","D) $x=5$"], respuesta:"B", solucion:"$3x=9\\Rightarrow x=3$." },
    { id:"dx2", nivel:"principiante", tema:"Matemáticas", subtema:"Despejar x", enunciado:"$2x-5=x+3$", alternativas:["A) $x=6$","B) $x=7$","C) $x=8$","D) $x=9$"], respuesta:"C", solucion:"$x=8$." },
    { id:"dx3", nivel:"principiante", tema:"Matemáticas", subtema:"Despejar x", enunciado:"$x/4=5$", alternativas:["A) $x=9$","B) $x=20$","C) $x=1{,}25$","D) $x=40$"], respuesta:"B", solucion:"$x=20$." },
    { id:"dx4", nivel:"principiante", tema:"Matemáticas", subtema:"Despejar x", enunciado:"$5(x-2)=15$", alternativas:["A) $x=1$","B) $x=3$","C) $x=5$","D) $x=7$"], respuesta:"C", solucion:"$x-2=3\\Rightarrow x=5$." }
  ],
  angulosNotables: [
    { id:"an1", nivel:"principiante", tema:"Matemáticas", subtema:"Ángulos notables", enunciado:"$\\sin(90°)$", alternativas:["A) $0$","B) $1/2$","C) $1$","D) $\\sqrt{2}/2$"], respuesta:"C", solucion:"1" },
    { id:"an2", nivel:"principiante", tema:"Matemáticas", subtema:"Ángulos notables", enunciado:"$\\cos(0°)$", alternativas:["A) $0$","B) $1$","C) $-1$","D) $\\sqrt{3}/2$"], respuesta:"B", solucion:"1" },
    { id:"an3", nivel:"principiante", tema:"Matemáticas", subtema:"Ángulos notables", enunciado:"$\\tan(45°)$", alternativas:["A) $0$","B) $\\sqrt{3}$","C) $1$","D) $1/\\sqrt{2}$"], respuesta:"C", solucion:"1" }
  ],

  // ════════════ RAZONAMIENTO MATEMÁTICO (Min. 4 F, 4 M, 4 D por tema = 20 por nivel) ════════════
  sucesiones: [
    { id:"suc_f1", nivel:"facil", tema:"RM", subtema:"Sucesiones", enunciado:"Halle el faltante: $2,4,6,8,\\_,12$", alternativas:["A) $9$","B) $10$","C) $11$","D) $7$"], respuesta:"B", solucion:"Diferencia $+2$." },
    { id:"suc_f2", nivel:"facil", tema:"RM", subtema:"Sucesiones", enunciado:"Continúe: $1,3,9,27,\\_$", alternativas:["A) $54$","B) $81$","C) $63$","D) $72$"], respuesta:"B", solucion:"Por $3$." },
    { id:"suc_f3", nivel:"facil", tema:"RM", subtema:"Sucesiones", enunciado:"¿Cuál sigue? $5,10,15,20,\\_$", alternativas:["A) $24$","B) $30$","C) $25$","D) $28$"], respuesta:"C", solucion:"Múltiplos de $5$." },
    { id:"suc_f4", nivel:"facil", tema:"RM", subtema:"Sucesiones", enunciado:"Sigue: $10, 8, 6, 4, \\_$", alternativas:["A) $3$","B) $2$","C) $1$","D) $0$"], respuesta:"B", solucion:"Menos $2$." },

    { id:"suc_m1", nivel:"medio", tema:"RM", subtema:"Sucesiones", enunciado:"Halle el faltante: $2,6,12,20,30,\\_$", alternativas:["A) $40$","B) $42$","C) $44$","D) $38$"], respuesta:"B", solucion:"Diferencias $4,6,8,10,12$." },
    { id:"suc_m2", nivel:"medio", tema:"RM", subtema:"Sucesiones", enunciado:"Fibonacci: $1,1,2,3,5,8,13,\\_$", alternativas:["A) $18$","B) $19$","C) $21$","D) $20$"], respuesta:"C", solucion:"Suma anteriores." },
    { id:"suc_m3", nivel:"medio", tema:"RM", subtema:"Sucesiones", enunciado:"Determine $x$: $3,7,13,21,x,43$", alternativas:["A) $29$","B) $31$","C) $33$","D) $35$"], respuesta:"B", solucion:"Diferencias pares." },
    { id:"suc_m4", nivel:"medio", tema:"RM", subtema:"Sucesiones", enunciado:"Sigue: $1, 4, 9, 16, 25, \\_$", alternativas:["A) $30$","B) $36$","C) $40$","D) $32$"], respuesta:"B", solucion:"Cuadrados perfectos." },

    { id:"suc_d1", nivel:"dificil", tema:"RM", subtema:"Sucesiones", enunciado:"Halle: $\\dfrac{1}{2},\\dfrac{2}{3},\\dfrac{3}{5},\\dfrac{5}{8},\\_$", alternativas:["A) $\\dfrac{8}{13}$","B) $\\dfrac{7}{11}$","C) $\\dfrac{6}{10}$","D) $\\dfrac{9}{14}$"], respuesta:"A", solucion:"Fibonacci arriba y abajo." },
    { id:"suc_d2", nivel:"dificil", tema:"RM", subtema:"Sucesiones", enunciado:"$a_n=a_{n-1}+3n-1$, $a_1=2$. ¿$a_4$?", alternativas:["A) $30$","B) $28$","C) $32$","D) $26$"], respuesta:"D", solucion:"$a_2=7, a_3=15, a_4=26$." },
    { id:"suc_d3", nivel:"dificil", tema:"RM", subtema:"Sucesiones", enunciado:"Sigue: $2, 3, 10, 39, \\_$", alternativas:["A) $170$","B) $172$","C) $168$","D) $156$"], respuesta:"B", solucion:"$x \\times n + n^2$ lógica." },
    { id:"suc_d4", nivel:"dificil", tema:"RM", subtema:"Sucesiones", enunciado:"$x, y$ en: $3, 4, 6, 8, 12, 16, x, y$", alternativas:["A) $24, 32$","B) $18, 24$","C) $24, 30$","D) $20, 28$"], respuesta:"A", solucion:"Intercaladas $\\times2$." }
  ],
  razonLogico: [
    { id:"rl_f1", nivel:"facil", tema:"RM", subtema:"Raz. Lógico", enunciado:"$p\\Rightarrow q$ y $p$ son V. ¿$q$?", alternativas:["A) F","B) V","C) Indeterminado","D) N.A."], respuesta:"B", solucion:"Modus Ponens." },
    { id:"rl_f2", nivel:"facil", tema:"RM", subtema:"Raz. Lógico", enunciado:"Todos los gatos son animales. Firulais es gato.", alternativas:["A) No es animal","B) Es animal","C) Indeterminado","D) N.A."], respuesta:"B", solucion:"Silogismo." },
    { id:"rl_f3", nivel:"facil", tema:"RM", subtema:"Raz. Lógico", enunciado:"Negación de «Todos son buenos»:", alternativas:["A) Ninguno es bueno","B) Alguno no es bueno","C) Todos son malos","D) Algunos son buenos"], respuesta:"B", solucion:"Negación universal." },
    { id:"rl_f4", nivel:"facil", tema:"RM", subtema:"Raz. Lógico", enunciado:"Si llueve me mojo. Llueve. Entonces:", alternativas:["A) Me seco","B) Me mojo","C) No pasa nada","D) N.A."], respuesta:"B", solucion:"Lógica directa." },

    { id:"rl_m1", nivel:"medio", tema:"RM", subtema:"Raz. Lógico", enunciado:"$\\neg p\\vee q$ es falso, entonces:", alternativas:["A) $p=F, q=V$","B) $p=V, q=F$","C) Ambos V","D) Ambos F"], respuesta:"B", solucion:"Ambos lados deben ser F." },
    { id:"rl_m2", nivel:"medio", tema:"RM", subtema:"Raz. Lógico", enunciado:"Contrarrecíproco de $p\\Rightarrow q$:", alternativas:["A) $q\\Rightarrow p$","B) $\\neg p\\Rightarrow\\neg q$","C) $\\neg q\\Rightarrow\\neg p$","D) $\\neg p\\Rightarrow q$"], respuesta:"C", solucion:"Propiedad lógica." },
    { id:"rl_m3", nivel:"medio", tema:"RM", subtema:"Raz. Lógico", enunciado:"A y B dicen verdad; C miente. C dice «A miente».", alternativas:["A) A miente","B) A dice verdad","C) Indeterminado","D) B miente"], respuesta:"B", solucion:"Lo que dice C es falso." },
    { id:"rl_m4", nivel:"medio", tema:"RM", subtema:"Raz. Lógico", enunciado:"Si $A\\Rightarrow B$ y $\\neg B$, entonces:", alternativas:["A) $A$","B) $\\neg A$","C) $B$","D) N.A."], respuesta:"B", solucion:"Modus Tollens." },

    { id:"rl_d1", nivel:"dificil", tema:"RM", subtema:"Raz. Lógico", enunciado:"$[(p\\wedge q)\\Rightarrow r]\\wedge\\neg r$. Concluye:", alternativas:["A) $p\\wedge q$","B) $\\neg p\\vee\\neg q$","C) $p\\vee q$","D) $r$"], respuesta:"B", solucion:"Modus Tollens de conjunción." },
    { id:"rl_d2", nivel:"dificil", tema:"RM", subtema:"Raz. Lógico", enunciado:"¿Filas V en $(p\\oplus q)\\wedge(q\\Rightarrow r)$?", alternativas:["A) 2","B) 3","C) 4","D) 5"], respuesta:"B", solucion:"Evaluación de tabla de verdad." },
    { id:"rl_d3", nivel:"dificil", tema:"RM", subtema:"Raz. Lógico", enunciado:"Si $\\neg(p\\Rightarrow q)$ es V. Halle valores:", alternativas:["A) $V,V$","B) $F,V$","C) $V,F$","D) $F,F$"], respuesta:"C", solucion:"Implica que $p\\Rightarrow q$ es F. Solo pasa si $p=V, q=F$." },
    { id:"rl_d4", nivel:"dificil", tema:"RM", subtema:"Raz. Lógico", enunciado:"Equivalente a $p\\Rightarrow(q\\vee r)$:", alternativas:["A) $\\neg p\\vee q\\vee r$","B) $p\\wedge q\\wedge r$","C) $\\neg p\\wedge(q\\vee r)$","D) $p\\vee\\neg q\\vee\\neg r$"], respuesta:"A", solucion:"Ley de implicación." }
  ],
  planteoEcuaciones: [
    { id:"pe_f1", nivel:"facil", tema:"RM", subtema:"Planteo Ecuaciones", enunciado:"Doble de un número más $5$ es $17$. ¿Número?", alternativas:["A) $5$","B) $6$","C) $7$","D) $8$"], respuesta:"B", solucion:"$2x+5=17\\Rightarrow x=6$." },
    { id:"pe_f2", nivel:"facil", tema:"RM", subtema:"Planteo Ecuaciones", enunciado:"Suma de dos consecutivos es $37$. ¿Mayor?", alternativas:["A) $17$","B) $18$","C) $19$","D) $20$"], respuesta:"C", solucion:"$x+(x+1)=37$." },
    { id:"pe_f3", nivel:"facil", tema:"RM", subtema:"Planteo Ecuaciones", enunciado:"Mitad de un número es $14$. ¿Número?", alternativas:["A) $7$","B) $28$","C) $21$","D) $30$"], respuesta:"B", solucion:"$x/2=14$." },
    { id:"pe_f4", nivel:"facil", tema:"RM", subtema:"Planteo Ecuaciones", enunciado:"Número disminuido en $8$ es $12$.", alternativas:["A) $20$","B) $4$","C) $16$","D) $10$"], respuesta:"A", solucion:"$x-8=12$." },

    { id:"pe_m1", nivel:"medio", tema:"RM", subtema:"Planteo Ecuaciones", enunciado:"Tercera parte se suma al número, menos 4 da 20.", alternativas:["A) $15$","B) $18$","C) $21$","D) $24$"], respuesta:"B", solucion:"$x+x/3-4=20$." },
    { id:"pe_m2", nivel:"medio", tema:"RM", subtema:"Planteo Ecuaciones", enunciado:"Cuadrado de $n$ menos $10n$ es $24$. ($n>0$)", alternativas:["A) $10$","B) $12$","C) $14$","D) $16$"], respuesta:"B", solucion:"$n^2-10n-24=0$." },
    { id:"pe_m3", nivel:"medio", tema:"RM", subtema:"Planteo Ecuaciones", enunciado:"Suma de tres pares consecutivos es $48$. ¿Mayor?", alternativas:["A) $14$","B) $16$","C) $18$","D) $20$"], respuesta:"C", solucion:"$x+(x+2)+(x+4)=48$." },
    { id:"pe_m4", nivel:"medio", tema:"RM", subtema:"Planteo Ecuaciones", enunciado:"Ana tiene 20 más que Beto. Juntos 100. ¿Ana?", alternativas:["A) 40","B) 50","C) 60","D) 70"], respuesta:"C", solucion:"Ana=60, Beto=40." },

    { id:"pe_d1", nivel:"dificil", tema:"RM", subtema:"Planteo Ecuaciones", enunciado:"Canillas 4h y 6h. ¿Juntas?", alternativas:["A) $12/5\\,h$","B) $2\\,h$","C) $3\\,h$","D) $8/3\\,h$"], respuesta:"A", solucion:"Tasa $1/4+1/6=5/12$." },
    { id:"pe_d2", nivel:"dificil", tema:"RM", subtema:"Planteo Ecuaciones", enunciado:"Tren A $80\\,km/h$, B $60\\,km/h$, dist $420\\,km$. ¿Horas?", alternativas:["A) 2","B) 3","C) 3.5","D) 4"], respuesta:"B", solucion:"$420/140=3$." },
    { id:"pe_d3", nivel:"dificil", tema:"RM", subtema:"Planteo Ecuaciones", enunciado:"Libros por S/ 120. Si costaran S/ 2 menos, compro 3 más. ¿Cuántos?", alternativas:["A) $10$","B) $12$","C) $15$","D) $18$"], respuesta:"B", solucion:"$xy=120, (x+3)(y-2)=120$." },
    { id:"pe_d4", nivel:"dificil", tema:"RM", subtema:"Planteo Ecuaciones", enunciado:"Café de S/ 8 y S/ 5 para 60kg a S/ 7. ¿Kilos del caro?", alternativas:["A) 30","B) 40","C) 20","D) 50"], respuesta:"B", solucion:"$8x+5(60-x)=420$." }
  ],
  fracciones: [
    { id:"fr_f1", nivel:"facil", tema:"RM", subtema:"Fracciones", enunciado:"Calcule: $1/2+1/4$", alternativas:["A) $1/3$","B) $3/4$","C) $2/6$","D) $1/6$"], respuesta:"B", solucion:"$3/4$." },
    { id:"fr_f2", nivel:"facil", tema:"RM", subtema:"Fracciones", enunciado:"¿$3/5$ de $25$?", alternativas:["A) $10$","B) $12$","C) $15$","D) $20$"], respuesta:"C", solucion:"$15$." },
    { id:"fr_f3", nivel:"facil", tema:"RM", subtema:"Fracciones", enunciado:"Simplifique: $12/18$", alternativas:["A) $2/3$","B) $3/4$","C) $1/2$","D) $4/6$"], respuesta:"A", solucion:"$2/3$." },
    { id:"fr_f4", nivel:"facil", tema:"RM", subtema:"Fracciones", enunciado:"Calcule: $1 - 3/7$", alternativas:["A) $2/7$","B) $3/7$","C) $4/7$","D) $5/7$"], respuesta:"C", solucion:"$4/7$." },

    { id:"fr_m1", nivel:"medio", tema:"RM", subtema:"Fracciones", enunciado:"Calcule: $3/4 \\div 9/16$", alternativas:["A) $4/3$","B) $3/4$","C) $27/64$","D) $1$"], respuesta:"A", solucion:"$3/4 \\times 16/9 = 4/3$." },
    { id:"fr_m2", nivel:"medio", tema:"RM", subtema:"Fracciones", enunciado:"Si $2/3$ de $X$ es $18$, ¿$3/4$ de $X$?", alternativas:["A) $20.25$","B) $20$","C) $24$","D) $27$"], respuesta:"A", solucion:"$X=27$. $3/4(27)=20.25$." },
    { id:"fr_m3", nivel:"medio", tema:"RM", subtema:"Fracciones", enunciado:"Ordene mayor a menor: $5/6, 3/4, 7/9$", alternativas:["A) $7/9 > 5/6 > 3/4$","B) $5/6 > 7/9 > 3/4$","C) $3/4 > 5/6 > 7/9$","D) N.A."], respuesta:"B", solucion:"Común 36." },
    { id:"fr_m4", nivel:"medio", tema:"RM", subtema:"Fracciones", enunciado:"Gasto $1/3$ y luego $1/4$ del resto. Me quedan S/30. ¿Tenía?", alternativas:["A) 50","B) 60","C) 80","D) 100"], respuesta:"B", solucion:"Queda $3/4$ de $2/3$ = $1/2$. Mitad es 30, total 60." },

    { id:"fr_d1", nivel:"dificil", tema:"RM", subtema:"Fracciones", enunciado:"Simplifique: $\\dfrac{1/2+1/3}{1/4-1/6}$", alternativas:["A) $5$","B) $8$","C) $10$","D) $12$"], respuesta:"C", solucion:"$(5/6) / (1/12) = 10$." },
    { id:"fr_d2", nivel:"dificil", tema:"RM", subtema:"Fracciones", enunciado:"Halle $x$: $\\dfrac{x+1}{3}-\\dfrac{x-1}{4}=\\dfrac{5}{6}$", alternativas:["A) $3$","B) $5$","C) $7$","D) $9$"], respuesta:"A", solucion:"MCM 12." },
    { id:"fr_d3", nivel:"dificil", tema:"RM", subtema:"Fracciones", enunciado:"Caño A llena en 3h, B en 4h, desagüe C vacía en 6h. ¿Tiempo juntos?", alternativas:["A) 2.4h","B) 2h","C) 1.5h","D) 3h"], respuesta:"A", solucion:"$1/3 + 1/4 - 1/6 = 5/12$. T=12/5=2.4h." },
    { id:"fr_d4", nivel:"dificil", tema:"RM", subtema:"Fracciones", enunciado:"Una pelota cae desde 54m y rebota $2/3$ de su altura. ¿Altura al 3er rebote?", alternativas:["A) 12m","B) 16m","C) 18m","D) 24m"], respuesta:"B", solucion:"$54 \\times (2/3)^3 = 16$." }
  ],
  tantoPorCiento: [
    { id:"tp_f1", nivel:"facil", tema:"RM", subtema:"Porcentajes", enunciado:"¿$20\\%$ de $150$?", alternativas:["A) $25$","B) $30$","C) $35$","D) $40$"], respuesta:"B", solucion:"$30$." },
    { id:"tp_f2", nivel:"facil", tema:"RM", subtema:"Porcentajes", enunciado:"Artículo S/ 80 con $25\\%$ dscto. ¿Pago?", alternativas:["A) 55","B) 60","C) 65","D) 70"], respuesta:"B", solucion:"$60$." },
    { id:"tp_f3", nivel:"facil", tema:"RM", subtema:"Porcentajes", enunciado:"15 es el $\\_\\%$ de 60.", alternativas:["A) $20\\%$","B) $25\\%$","C) $30\\%$","D) $15\\%$"], respuesta:"B", solucion:"$25\\%$." },
    { id:"tp_f4", nivel:"facil", tema:"RM", subtema:"Porcentajes", enunciado:"¿$50\\%$ de $200$?", alternativas:["A) 50","B) 100","C) 150","D) 80"], respuesta:"B", solucion:"La mitad, 100." },

    { id:"tp_m1", nivel:"medio", tema:"RM", subtema:"Porcentajes", enunciado:"Sube $10\\%$ luego baja $10\\%$. Resultado:", alternativas:["A) Igual","B) $1\\%$ menor","C) $1\\%$ mayor","D) $2\\%$ menor"], respuesta:"B", solucion:"$1.1 \\times 0.9 = 0.99$." },
    { id:"tp_m2", nivel:"medio", tema:"RM", subtema:"Porcentajes", enunciado:"40 preguntas, acierta $85\\%$. ¿Aciertos?", alternativas:["A) 32","B) 34","C) 36","D) 38"], respuesta:"B", solucion:"34." },
    { id:"tp_m3", nivel:"medio", tema:"RM", subtema:"Porcentajes", enunciado:"Tras aumento del $20\\%$, sueldo es 2400. ¿Original?", alternativas:["A) 1800","B) 2000","C) 2100","D) 2200"], respuesta:"B", solucion:"$x(1.2) = 2400$." },
    { id:"tp_m4", nivel:"medio", tema:"RM", subtema:"Porcentajes", enunciado:"Compro a S/40 y vendo a S/50. ¿Porcentaje de ganancia s/costo?", alternativas:["A) $20\\%$","B) $25\\%$","C) $10\\%$","D) $30\\%$"], respuesta:"B", solucion:"Gana 10. $10/40 = 25\\%$." },

    { id:"tp_d1", nivel:"dificil", tema:"RM", subtema:"Porcentajes", enunciado:"Descuento $30\\%$ luego $20\\%$ adicional. ¿Dscto total?", alternativas:["A) $44\\%$","B) $50\\%$","C) $46\\%$","D) $48\\%$"], respuesta:"A", solucion:"$0.7 \\times 0.8 = 0.56$. Descuento 44%." },
    { id:"tp_d2", nivel:"dificil", tema:"RM", subtema:"Porcentajes", enunciado:"S/ 5000 al $8\\%$ compuesto, 2 años.", alternativas:["A) 5700","B) 5832","C) 5850","D) 6000"], respuesta:"B", solucion:"$5000(1.08)^2 = 5832$." },
    { id:"tp_d3", nivel:"dificil", tema:"RM", subtema:"Porcentajes", enunciado:"Área de un cuadrado si su lado aumenta $20\\%$. ¿En qué % aumenta?", alternativas:["A) $20\\%$","B) $40\\%$","C) $44\\%$","D) $400\\%$"], respuesta:"C", solucion:"$1.2^2 = 1.44$. Aumenta 44%." },
    { id:"tp_d4", nivel:"dificil", tema:"RM", subtema:"Porcentajes", enunciado:"En una reunión, $60\\%$ son hombres y el $20\\%$ de mujeres tienen gafas. Si hay 16 mujeres sin gafas, ¿total?", alternativas:["A) 40","B) 50","C) 80","D) 100"], respuesta:"B", solucion:"Mujeres son 40%. 80% de ellas (32% del total) son 16. Total = 50." }
  ],

  // ════════════ MATEMÁTICAS (Min. 4 F, 4 M, 4 D por tema = 16 por nivel) ════════════
  operAlgebraicas: [
    { id:"oa_f1", nivel:"facil", tema:"Mate", subtema:"Álgebra", enunciado:"Simplifique: $3x+5x-2x$", alternativas:["A) $6x$","B) $7x$","C) $5x$","D) $4x$"], respuesta:"A", solucion:"$6x$." },
    { id:"oa_f2", nivel:"facil", tema:"Mate", subtema:"Álgebra", enunciado:"Expanda: $(x+3)^2$", alternativas:["A) $x^2+9$","B) $x^2+6x+9$","C) $x^2+3x+9$","D) $x^2+6x$"], respuesta:"B", solucion:"Binomio cuadrado." },
    { id:"oa_f3", nivel:"facil", tema:"Mate", subtema:"Álgebra", enunciado:"Factorice: $x^2-9$", alternativas:["A) $(x-3)^2$","B) $(x+3)(x-3)$","C) $(x+9)$","D) N.A."], respuesta:"B", solucion:"Diferencia cuadrados." },
    { id:"oa_f4", nivel:"facil", tema:"Mate", subtema:"Álgebra", enunciado:"Resuelva: $5x = 20$", alternativas:["A) $2$","B) $4$","C) $5$","D) $15$"], respuesta:"B", solucion:"$x=4$." },

    { id:"oa_m1", nivel:"medio", tema:"Mate", subtema:"Álgebra", enunciado:"$P(x)=2x^3-3x^2+x-5$. $P(2)$=", alternativas:["A) $1$","B) $3$","C) $5$","D) $7$"], respuesta:"A", solucion:"$16-12+2-5=1$." },
    { id:"oa_m2", nivel:"medio", tema:"Mate", subtema:"Álgebra", enunciado:"Simplifique: $(x^2-4)/(x+2)$", alternativas:["A) $x-2$","B) $x+2$","C) $x^2-2$","D) $x-4$"], respuesta:"A", solucion:"Factorizando diferencia." },
    { id:"oa_m3", nivel:"medio", tema:"Mate", subtema:"Álgebra", enunciado:"Raíces de $2x^2-5x+3=0$:", alternativas:["A) $1, 3/2$","B) $2, 3$","C) $-1, -3$","D) $0, 3$"], respuesta:"A", solucion:"Aspa simple." },
    { id:"oa_m4", nivel:"medio", tema:"Mate", subtema:"Álgebra", enunciado:"$(a+b)^2 - (a-b)^2 =$", alternativas:["A) $2a^2+2b^2$","B) $4ab$","C) $0$","D) $2ab$"], respuesta:"B", solucion:"Identidad de Legendre." },

    { id:"oa_d1", nivel:"dificil", tema:"Mate", subtema:"Álgebra", enunciado:"Si $x+1/x=3$, halle $x^2+1/x^2$.", alternativas:["A) $7$","B) $9$","C) $11$","D) $6$"], respuesta:"A", solucion:"Elevar al cuadrado y restar 2." },
    { id:"oa_d2", nivel:"dificil", tema:"Mate", subtema:"Álgebra", enunciado:"Residuo de $(x^4-2x^3+x-1) / (x-1)$:", alternativas:["A) $-1$","B) $0$","C) $1$","D) $-2$"], respuesta:"A", solucion:"Teorema del Resto P(1)." },
    { id:"oa_d3", nivel:"dificil", tema:"Mate", subtema:"Álgebra", enunciado:"Si $x^y = 2$, calcule $x^{3y} + x^{2y}$", alternativas:["A) $10$","B) $12$","C) $14$","D) $8$"], respuesta:"B", solucion:"$2^3 + 2^2 = 8+4=12$." },
    { id:"oa_d4", nivel:"dificil", tema:"Mate", subtema:"Álgebra", enunciado:"Resuelva sistema: $2x+y=7$, $x-y=2$", alternativas:["A) $x=3,y=1$","B) $x=1,y=3$","C) $x=2,y=3$","D) $x=4,y=-1$"], respuesta:"A", solucion:"Sumando: $3x=9$, $x=3$." }
  ],
  angulosTriangulo: [
    { id:"at_f1", nivel:"facil", tema:"Mate", subtema:"Ángulos", enunciado:"Dos miden 60° y 80°. ¿El 3ro?", alternativas:["A) 30°","B) 40°","C) 50°","D) 60°"], respuesta:"B", solucion:"$180-140=40$." },
    { id:"at_f2", nivel:"facil", tema:"Mate", subtema:"Ángulos", enunciado:"Triángulo equilátero, cada ángulo:", alternativas:["A) 45°","B) 60°","C) 90°","D) 120°"], respuesta:"B", solucion:"$180/3=60$." },
    { id:"at_f3", nivel:"facil", tema:"Mate", subtema:"Ángulos", enunciado:"Suma de interiores:", alternativas:["A) 90°","B) 270°","C) 360°","D) 180°"], respuesta:"D", solucion:"Propiedad." },
    { id:"at_f4", nivel:"facil", tema:"Mate", subtema:"Ángulos", enunciado:"Triángulo rectángulo isósceles, agudos:", alternativas:["A) 30 y 60","B) 45 y 45","C) 50 y 40","D) N.A."], respuesta:"B", solucion:"$90/2=45$." },

    { id:"at_m1", nivel:"medio", tema:"Mate", subtema:"Ángulos", enunciado:"Razón 1:2:3. ¿El mayor?", alternativas:["A) 60°","B) 90°","C) 80°","D) 120°"], respuesta:"B", solucion:"$x+2x+3x=180$, $x=30$. Mayor 90." },
    { id:"at_m2", nivel:"medio", tema:"Mate", subtema:"Ángulos", enunciado:"Exterior=110°. Uno no adyacente=50°. ¿El otro?", alternativas:["A) 50°","B) 60°","C) 70°","D) 40°"], respuesta:"B", solucion:"$110-50=60$." },
    { id:"at_m3", nivel:"medio", tema:"Mate", subtema:"Ángulos", enunciado:"$A=2B$, $C=B+20°$. Halle $B$.", alternativas:["A) 30°","B) 40°","C) 50°","D) 60°"], respuesta:"B", solucion:"$4B+20=180$, $B=40$." },
    { id:"at_m4", nivel:"medio", tema:"Mate", subtema:"Ángulos", enunciado:"En isósceles un ángulo es 100°. ¿Otro?", alternativas:["A) 50°","B) 40°","C) 80°","D) 100°"], respuesta:"B", solucion:"$180-100=80$, entre dos: 40." },

    { id:"at_d1", nivel:"dificil", tema:"Mate", subtema:"Ángulos", enunciado:"Bisectriz de A: $BD=6, DC=9, AB=8$. Halle $AC$.", alternativas:["A) 10","B) 12","C) 14","D) 16"], respuesta:"B", solucion:"$8/AC = 6/9$, $AC=12$." },
    { id:"at_d2", nivel:"dificil", tema:"Mate", subtema:"Ángulos", enunciado:"Isósceles: vértice 36°. ¿Base?", alternativas:["A) 72°","B) 54°","C) 60°","D) 36°"], respuesta:"A", solucion:"$(180-36)/2 = 72$." },
    { id:"at_d3", nivel:"dificil", tema:"Mate", subtema:"Ángulos", enunciado:"Triángulo rectángulo, hipotenusa 10, un ángulo 30°. Cateto opuesto:", alternativas:["A) 5","B) $5\\sqrt{3}$","C) 10","D) $2.5$"], respuesta:"A", solucion:"Seno 30 es 1/2. Cateto es 5." },
    { id:"at_d4", nivel:"dificil", tema:"Mate", subtema:"Ángulos", enunciado:"Incentro de ABC. $A=60$. Ángulo en incentro BIC:", alternativas:["A) 120°","B) 150°","C) 110°","D) 90°"], respuesta:"A", solucion:"$90 + A/2 = 90 + 30 = 120$." }
  ],
  pitagoras: [
    { id:"pit_f1", nivel:"facil", tema:"Mate", subtema:"Pitágoras", enunciado:"Catetos 3 y 4. Hipotenusa:", alternativas:["A) 6","B) 7","C) 5","D) 8"], respuesta:"C", solucion:"5" },
    { id:"pit_f2", nivel:"facil", tema:"Mate", subtema:"Pitágoras", enunciado:"Hipotenusa 13, cateto 5. Cateto:", alternativas:["A) 10","B) 11","C) 12","D) 8"], respuesta:"C", solucion:"12" },
    { id:"pit_f3", nivel:"facil", tema:"Mate", subtema:"Pitágoras", enunciado:"En $c^2=a^2+b^2$, c es:", alternativas:["A) Cateto","B) Hipotenusa","C) Perímetro","D) Área"], respuesta:"B", solucion:"Hipotenusa" },
    { id:"pit_f4", nivel:"facil", tema:"Mate", subtema:"Pitágoras", enunciado:"Catetos 6 y 8. Hipotenusa:", alternativas:["A) 9","B) 10","C) 12","D) 14"], respuesta:"B", solucion:"10" },

    { id:"pit_m1", nivel:"medio", tema:"Mate", subtema:"Pitágoras", enunciado:"Escalera 10m, base 6m. ¿Altura?", alternativas:["A) 6","B) 7","C) 8","D) 9"], respuesta:"C", solucion:"8" },
    { id:"pit_m2", nivel:"medio", tema:"Mate", subtema:"Pitágoras", enunciado:"¿Forman rectángulo 7, 24, 25?", alternativas:["A) No","B) Sí","C) N.S.","D) N.A."], respuesta:"B", solucion:"Sí" },
    { id:"pit_m3", nivel:"medio", tema:"Mate", subtema:"Pitágoras", enunciado:"Diagonal de cuadrado lado 5:", alternativas:["A) $5\\sqrt{2}$","B) 10","C) $5\\sqrt{3}$","D) 25"], respuesta:"A", solucion:"$5\\sqrt{2}$" },
    { id:"pit_m4", nivel:"medio", tema:"Mate", subtema:"Pitágoras", enunciado:"Rectángulo 12 y 5. Diagonal:", alternativas:["A) 15","B) 14","C) 13","D) 17"], respuesta:"C", solucion:"13" },

    { id:"pit_d1", nivel:"dificil", tema:"Mate", subtema:"Pitágoras", enunciado:"$h^2=m\\cdot n$, $m=4, n=9$. $h=$", alternativas:["A) 5","B) 6","C) 7","D) 8"], respuesta:"B", solucion:"$\\sqrt{36}=6$." },
    { id:"pit_d2", nivel:"dificil", tema:"Mate", subtema:"Pitágoras", enunciado:"Rombo diagonales 24 y 10. Lado:", alternativas:["A) 11","B) 12","C) 13","D) 14"], respuesta:"C", solucion:"Semidiagonales 12 y 5. Lado 13." },
    { id:"pit_d3", nivel:"dificil", tema:"Mate", subtema:"Pitágoras", enunciado:"Triángulo isósceles, lados 13, base 10. Área:", alternativas:["A) 65","B) 60","C) 130","D) 50"], respuesta:"B", solucion:"Altura=12. $(10\\times12)/2=60$." },
    { id:"pit_d4", nivel:"dificil", tema:"Mate", subtema:"Pitágoras", enunciado:"Diagonal de cubo arista 4:", alternativas:["A) $4\\sqrt{3}$","B) $4\\sqrt{2}$","C) 8","D) 12"], respuesta:"A", solucion:"$a\\sqrt{3} = 4\\sqrt{3}$." }
  ],
  trigonometria: [
    { id:"tri_f1", nivel:"facil", tema:"Mate", subtema:"Trigonometría", enunciado:"$\\sin(30°)=$", alternativas:["A) $\\sqrt{3}/2$","B) $1/2$","C) $\\sqrt{2}/2$","D) $1$"], respuesta:"B", solucion:"$1/2$" },
    { id:"tri_f2", nivel:"facil", tema:"Mate", subtema:"Trigonometría", enunciado:"$\\cos(60°)=$", alternativas:["A) $\\sqrt{3}/2$","B) $0$","C) $1/2$","D) $1$"], respuesta:"C", solucion:"$1/2$" },
    { id:"tri_f3", nivel:"facil", tema:"Mate", subtema:"Trigonometría", enunciado:"Opuesto=3, Adyacente=4. $\\tan\\theta=$", alternativas:["A) $4/3$","B) $3/5$","C) $3/4$","D) $5/3$"], respuesta:"C", solucion:"$3/4$" },
    { id:"tri_f4", nivel:"facil", tema:"Mate", subtema:"Trigonometría", enunciado:"$\\sin^2 x + \\cos^2 x=$", alternativas:["A) 0","B) 2","C) 1","D) N.A."], respuesta:"C", solucion:"Identidad pitagórica." },

    { id:"tri_m1", nivel:"medio", tema:"Mate", subtema:"Trigonometría", enunciado:"$\\sin\\theta=4/5$ (I cuad). $\\cos\\theta=$", alternativas:["A) $3/5$","B) $4/5$","C) $3/4$","D) $5/3$"], respuesta:"A", solucion:"Pitagórica." },
    { id:"tri_m2", nivel:"medio", tema:"Mate", subtema:"Trigonometría", enunciado:"¿En qué cuadrante $\\sin<0, \\cos>0$?", alternativas:["A) I","B) II","C) III","D) IV"], respuesta:"D", solucion:"IV Cuadrante." },
    { id:"tri_m3", nivel:"medio", tema:"Mate", subtema:"Trigonometría", enunciado:"Si $\\tan\\theta=1$ (I cuad), $\\theta=$", alternativas:["A) 30°","B) 45°","C) 60°","D) 90°"], respuesta:"B", solucion:"45°." },
    { id:"tri_m4", nivel:"medio", tema:"Mate", subtema:"Trigonometría", enunciado:"Calcula $\\sec(60°)$", alternativas:["A) 2","B) 1/2","C) $2\\sqrt{3}/3$","D) 1"], respuesta:"A", solucion:"Inversa de cos(60)." },

    { id:"tri_d1", nivel:"dificil", tema:"Mate", subtema:"Trigonometría", enunciado:"Simplifique: $(\\sin^2\\theta-\\cos^2\\theta)/(\\sin\\theta+\\cos\\theta)$", alternativas:["A) $\\sin+\\cos$","B) $\\sin-\\cos$","C) 1","D) $\\tan$"], respuesta:"B", solucion:"Diferencia de cuadrados." },
    { id:"tri_d2", nivel:"dificil", tema:"Mate", subtema:"Trigonometría", enunciado:"$2\\cos^2\\theta-\\cos\\theta-1=0$. Sol. en [0,360]:", alternativas:["A) 60,180","B) 60,180,300","C) 90,270","D) 0,180"], respuesta:"B", solucion:"Factorizando." },
    { id:"tri_d3", nivel:"dificil", tema:"Mate", subtema:"Trigonometría", enunciado:"En ABC, $a=3, b=4, C=90$. Halle $\\sin A + \\cos A$", alternativas:["A) $7/5$","B) $1$","C) $5/7$","D) $12/5$"], respuesta:"A", solucion:"$3/5 + 4/5 = 7/5$." },
    { id:"tri_d4", nivel:"dificil", tema:"Mate", subtema:"Trigonometría", enunciado:"Si $\\tan x + \\cot x = 3$, halle $\\tan^2 x + \\cot^2 x$", alternativas:["A) 9","B) 7","C) 6","D) 8"], respuesta:"B", solucion:"Elevando al cuadrado y restando 2." }
  ]
};

// ════════════ CONFIGURACIÓN DE SECCIONES ════════════
const CONFIG = {
  principiante: {
    label: "Principiante",
    subtemas: [
      { key:"operBasicasNeg", label:"Operaciones con negativos" },
      { key:"fraccionesNeg", label:"Fracciones negativas" },
      { key:"factorizacionBasica", label:"Factorización básica" },
      { key:"sumaExpAlg", label:"Suma de expresiones" },
      { key:"enunciadosAlg", label:"Enunciados" },
      { key:"mcdMcm", label:"MCD y MCM" },
      { key:"decimales", label:"Decimales" },
      { key:"divisibilidad", label:"Divisibilidad" },
      { key:"multExpAlg", label:"Multiplicación" },
      { key:"despejarX", label:"Despejar x" },
      { key:"angulosNotables", label:"Ángulos notables" }
    ]
  },
  razonamientoMatematico: {
    label: "Razonamiento Matemático",
    total: 15,
    subtemas: [
      { key:"sucesiones", label:"Sucesiones" },
      { key:"razonLogico", label:"Razonamiento Lógico" },
      { key:"planteoEcuaciones", label:"Planteo Ecuaciones" },
      { key:"fracciones", label:"Fracciones" },
      { key:"tantoPorCiento", label:"Tanto por ciento" }
    ]
  },
  matematicas: {
    label: "Matemáticas",
    total: 15,
    subtemas: [
      { key:"operAlgebraicas", label:"Álgebra" },
      { key:"angulosTriangulo", label:"Ángulos" },
      { key:"pitagoras", label:"Pitágoras" },
      { key:"trigonometria", label:"Trigonometría" }
    ]
  }
};
