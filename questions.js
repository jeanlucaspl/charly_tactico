// ============================================================
// BASE DE DATOS DE PREGUNTAS - CHARLY TÁCTICO
// Formato: cada pregunta tiene texto LaTeX, tema, subtema y nivel
// Niveles: "facil" | "medio" | "dificil"
// ============================================================

const QUESTIONS_DB = {

  // ══════════════════════════════════════════════════════════
  // RAZONAMIENTO MATEMÁTICO
  // ══════════════════════════════════════════════════════════

  sucesiones: [
    // FÁCIL
    {
      id: "suc_f1",
      nivel: "facil",
      tema: "Razonamiento Matemático",
      subtema: "Sucesiones",
      enunciado: "Halle el término que falta en la sucesión: $2, 4, 6, 8, \\_, 12$",
      alternativas: ["A) 9", "B) 10", "C) 11", "D) 7"],
      respuesta: "B"
    },
    {
      id: "suc_f2",
      nivel: "facil",
      tema: "Razonamiento Matemático",
      subtema: "Sucesiones",
      enunciado: "Continúe la serie: $1, 3, 9, 27, \\_$",
      alternativas: ["A) 54", "B) 81", "C) 63", "D) 72"],
      respuesta: "B"
    },
    {
      id: "suc_f3",
      nivel: "facil",
      tema: "Razonamiento Matemático",
      subtema: "Sucesiones",
      enunciado: "¿Cuál es el siguiente número? $5, 10, 15, 20, \\_$",
      alternativas: ["A) 24", "B) 30", "C) 25", "D) 28"],
      respuesta: "C"
    },
    // MEDIO
    {
      id: "suc_m1",
      nivel: "medio",
      tema: "Razonamiento Matemático",
      subtema: "Sucesiones",
      enunciado: "Halle el término faltante: $2, 6, 12, 20, 30, \\_$",
      alternativas: ["A) 40", "B) 42", "C) 44", "D) 38"],
      respuesta: "B"
    },
    {
      id: "suc_m2",
      nivel: "medio",
      tema: "Razonamiento Matemático",
      subtema: "Sucesiones",
      enunciado: "En la sucesión $1, 1, 2, 3, 5, 8, 13, \\_$, el término siguiente es:",
      alternativas: ["A) 18", "B) 19", "C) 21", "D) 20"],
      respuesta: "C"
    },
    {
      id: "suc_m3",
      nivel: "medio",
      tema: "Razonamiento Matemático",
      subtema: "Sucesiones",
      enunciado: "Determine el valor de $x$: $\\quad 3, 7, 13, 21, x, 43$",
      alternativas: ["A) 29", "B) 31", "C) 33", "D) 35"],
      respuesta: "B"
    },
    // DIFÍCIL
    {
      id: "suc_d1",
      nivel: "dificil",
      tema: "Razonamiento Matemático",
      subtema: "Sucesiones",
      enunciado: "Halle el término que falta: $\\dfrac{1}{2},\\; \\dfrac{2}{3},\\; \\dfrac{3}{5},\\; \\dfrac{5}{8},\\; \\_$",
      alternativas: ["A) $\\dfrac{8}{13}$", "B) $\\dfrac{7}{11}$", "C) $\\dfrac{6}{10}$", "D) $\\dfrac{9}{14}$"],
      respuesta: "A"
    },
    {
      id: "suc_d2",
      nivel: "dificil",
      tema: "Razonamiento Matemático",
      subtema: "Sucesiones",
      enunciado: "Si la sucesión cumple $a_n = a_{n-1} + 3n - 1$ y $a_1 = 2$, ¿cuánto vale $a_4$?",
      alternativas: ["A) 30", "B) 28", "C) 32", "D) 26"],
      respuesta: "A"
    },
  ],

  razonamientoLogico: [
    // FÁCIL
    {
      id: "rl_f1",
      nivel: "facil",
      tema: "Razonamiento Matemático",
      subtema: "Razonamiento Lógico",
      enunciado: "Si $p \\Rightarrow q$ es verdadero y $p$ es verdadero, entonces $q$ es:",
      alternativas: ["A) Falso", "B) Verdadero", "C) Indeterminado", "D) Ninguna"],
      respuesta: "B"
    },
    {
      id: "rl_f2",
      nivel: "facil",
      tema: "Razonamiento Matemático",
      subtema: "Razonamiento Lógico",
      enunciado: "Todos los gatos son animales. Firulais es un gato. Por lo tanto:",
      alternativas: ["A) Firulais no es animal", "B) Firulais es animal", "C) Algunos gatos no son animales", "D) Ninguna"],
      respuesta: "B"
    },
    {
      id: "rl_f3",
      nivel: "facil",
      tema: "Razonamiento Matemático",
      subtema: "Razonamiento Lógico",
      enunciado: "La negación de «Todos los policías son honestos» es:",
      alternativas: ["A) Ningún policía es honesto", "B) Algún policía no es honesto", "C) Todos son honestos", "D) Algunos son honestos"],
      respuesta: "B"
    },
    // MEDIO
    {
      id: "rl_m1",
      nivel: "medio",
      tema: "Razonamiento Matemático",
      subtema: "Razonamiento Lógico",
      enunciado: "Si $\\neg p \\vee q$ es falso, entonces podemos afirmar que:",
      alternativas: ["A) $p$ es falso y $q$ es verdadero", "B) $p$ es verdadero y $q$ es falso", "C) Ambos son verdaderos", "D) Ambos son falsos"],
      respuesta: "B"
    },
    {
      id: "rl_m2",
      nivel: "medio",
      tema: "Razonamiento Matemático",
      subtema: "Razonamiento Lógico",
      enunciado: "¿Cuál es el contrarrecíproco de $p \\Rightarrow q$?",
      alternativas: ["A) $q \\Rightarrow p$", "B) $\\neg p \\Rightarrow \\neg q$", "C) $\\neg q \\Rightarrow \\neg p$", "D) $\\neg p \\Rightarrow q$"],
      respuesta: "C"
    },
    {
      id: "rl_m3",
      nivel: "medio",
      tema: "Razonamiento Matemático",
      subtema: "Razonamiento Lógico",
      enunciado: "En un grupo, $A$ y $B$ siempre dicen la verdad, $C$ siempre miente. Si $C$ dice «$A$ es mentiroso», entonces:",
      alternativas: ["A) $A$ miente", "B) $A$ dice la verdad", "C) No se puede saber", "D) $B$ miente"],
      respuesta: "B"
    },
    // DIFÍCIL
    {
      id: "rl_d1",
      nivel: "dificil",
      tema: "Razonamiento Matemático",
      subtema: "Razonamiento Lógico",
      enunciado: "Dado: $[(p \\wedge q) \\Rightarrow r] \\wedge [\\neg r]$, ¿qué se puede concluir?",
      alternativas: ["A) $p \\wedge q$", "B) $\\neg p \\vee \\neg q$", "C) $p \\vee q$", "D) $r$"],
      respuesta: "B"
    },
    {
      id: "rl_d2",
      nivel: "dificil",
      tema: "Razonamiento Matemático",
      subtema: "Razonamiento Lógico",
      enunciado: "¿Cuántas filas de la tabla de verdad hacen verdadera a $(p \\oplus q) \\wedge (q \\Rightarrow r)$, con $p,q,r \\in \\{V,F\\}$?",
      alternativas: ["A) 2", "B) 3", "C) 4", "D) 5"],
      respuesta: "B"
    },
  ],

  planteoEcuaciones: [
    // FÁCIL
    {
      id: "pe_f1",
      nivel: "facil",
      tema: "Razonamiento Matemático",
      subtema: "Planteo de Ecuaciones",
      enunciado: "El doble de un número más $5$ es $17$. ¿Cuál es el número?",
      alternativas: ["A) 5", "B) 6", "C) 7", "D) 8"],
      respuesta: "B"
    },
    {
      id: "pe_f2",
      nivel: "facil",
      tema: "Razonamiento Matemático",
      subtema: "Planteo de Ecuaciones",
      enunciado: "La suma de dos números consecutivos es $37$. ¿Cuál es el mayor?",
      alternativas: ["A) 17", "B) 18", "C) 19", "D) 20"],
      respuesta: "C"
    },
    {
      id: "pe_f3",
      nivel: "facil",
      tema: "Razonamiento Matemático",
      subtema: "Planteo de Ecuaciones",
      enunciado: "Pedro tiene el triple de la edad de Luis. Juntos tienen $40$ años. ¿Cuántos años tiene Luis?",
      alternativas: ["A) 8", "B) 10", "C) 12", "D) 15"],
      respuesta: "B"
    },
    // MEDIO
    {
      id: "pe_m1",
      nivel: "medio",
      tema: "Razonamiento Matemático",
      subtema: "Planteo de Ecuaciones",
      enunciado: "Si a un número se le suma su tercera parte y se le resta $4$, se obtiene $20$. ¿Cuál es el número?",
      alternativas: ["A) 15", "B) 18", "C) 21", "D) 24"],
      respuesta: "B"
    },
    {
      id: "pe_m2",
      nivel: "medio",
      tema: "Razonamiento Matemático",
      subtema: "Planteo de Ecuaciones",
      enunciado: "Un cajón tiene manzanas y naranjas. Hay el doble de manzanas que naranjas. Si en total hay $60$ frutas, ¿cuántas naranjas hay?",
      alternativas: ["A) 15", "B) 20", "C) 25", "D) 30"],
      respuesta: "B"
    },
    {
      id: "pe_m3",
      nivel: "medio",
      tema: "Razonamiento Matemático",
      subtema: "Planteo de Ecuaciones",
      enunciado: "La diferencia entre el cuadrado de un número y $10$ veces dicho número es $24$. ¿Cuál es el número positivo?",
      alternativas: ["A) 10", "B) 12", "C) 14", "D) 16"],
      respuesta: "B"
    },
    // DIFÍCIL
    {
      id: "pe_d1",
      nivel: "dificil",
      tema: "Razonamiento Matemático",
      subtema: "Planteo de Ecuaciones",
      enunciado: "Dos canillas llenan un tanque: la primera en $4\\,h$ y la segunda en $6\\,h$. ¿En cuánto tiempo llenan el tanque juntas?",
      alternativas: ["A) $\\dfrac{12}{5}\\,h$", "B) $2\\,h$", "C) $3\\,h$", "D) $\\dfrac{8}{3}\\,h$"],
      respuesta: "A"
    },
    {
      id: "pe_d2",
      nivel: "dificil",
      tema: "Razonamiento Matemático",
      subtema: "Planteo de Ecuaciones",
      enunciado: "Un tren sale de A a $80\\,km/h$ y otro de B a $60\\,km/h$ en sentido contrario. Si la distancia A–B es $420\\,km$, ¿en cuántas horas se encuentran?",
      alternativas: ["A) 2 h", "B) 3 h", "C) 3,5 h", "D) 4 h"],
      respuesta: "B"
    },
  ],

  fracciones: [
    // FÁCIL
    {
      id: "fr_f1",
      nivel: "facil",
      tema: "Razonamiento Matemático",
      subtema: "Fracciones",
      enunciado: "Calcule: $\\dfrac{1}{2} + \\dfrac{1}{4}$",
      alternativas: ["A) $\\dfrac{1}{3}$", "B) $\\dfrac{3}{4}$", "C) $\\dfrac{2}{6}$", "D) $\\dfrac{1}{6}$"],
      respuesta: "B"
    },
    {
      id: "fr_f2",
      nivel: "facil",
      tema: "Razonamiento Matemático",
      subtema: "Fracciones",
      enunciado: "¿Cuánto es $\\dfrac{3}{5}$ de $25$?",
      alternativas: ["A) 10", "B) 12", "C) 15", "D) 20"],
      respuesta: "C"
    },
    {
      id: "fr_f3",
      nivel: "facil",
      tema: "Razonamiento Matemático",
      subtema: "Fracciones",
      enunciado: "Simplifica: $\\dfrac{12}{18}$",
      alternativas: ["A) $\\dfrac{2}{3}$", "B) $\\dfrac{3}{4}$", "C) $\\dfrac{1}{2}$", "D) $\\dfrac{4}{6}$"],
      respuesta: "A"
    },
    // MEDIO
    {
      id: "fr_m1",
      nivel: "medio",
      tema: "Razonamiento Matemático",
      subtema: "Fracciones",
      enunciado: "Calcule: $\\dfrac{3}{4} \\div \\dfrac{9}{16}$",
      alternativas: ["A) $\\dfrac{4}{3}$", "B) $\\dfrac{3}{4}$", "C) $\\dfrac{27}{64}$", "D) $\\dfrac{16}{12}$"],
      respuesta: "A"
    },
    {
      id: "fr_m2",
      nivel: "medio",
      tema: "Razonamiento Matemático",
      subtema: "Fracciones",
      enunciado: "Si $\\dfrac{2}{3}$ de un número es $18$, ¿cuánto es $\\dfrac{3}{4}$ de dicho número?",
      alternativas: ["A) 18", "B) 20", "C) 24", "D) 27"],
      respuesta: "A"
    },
    {
      id: "fr_m3",
      nivel: "medio",
      tema: "Razonamiento Matemático",
      subtema: "Fracciones",
      enunciado: "Ordene de mayor a menor: $\\dfrac{5}{6},\\; \\dfrac{3}{4},\\; \\dfrac{7}{9}$",
      alternativas: ["A) $\\dfrac{7}{9} > \\dfrac{5}{6} > \\dfrac{3}{4}$", "B) $\\dfrac{5}{6} > \\dfrac{7}{9} > \\dfrac{3}{4}$", "C) $\\dfrac{3}{4} > \\dfrac{5}{6} > \\dfrac{7}{9}$", "D) Todas iguales"],
      respuesta: "B"
    },
    // DIFÍCIL
    {
      id: "fr_d1",
      nivel: "dificil",
      tema: "Razonamiento Matemático",
      subtema: "Fracciones",
      enunciado: "Simplifique: $\\dfrac{\\;\\dfrac{1}{2}+\\dfrac{1}{3}\\;}{\\;\\dfrac{1}{4}-\\dfrac{1}{6}\\;}$",
      alternativas: ["A) $\\dfrac{10}{1}$", "B) $\\dfrac{5}{1}$", "C) $10$", "D) $5$"],
      respuesta: "C"
    },
    {
      id: "fr_d2",
      nivel: "dificil",
      tema: "Razonamiento Matemático",
      subtema: "Fracciones",
      enunciado: "Halle $x$: $\\;\\dfrac{x+1}{3} - \\dfrac{x-1}{4} = \\dfrac{5}{6}$",
      alternativas: ["A) $x = 3$", "B) $x = 5$", "C) $x = 7$", "D) $x = 9$"],
      respuesta: "B"
    },
  ],

  tantoPorCiento: [
    // FÁCIL
    {
      id: "tp_f1",
      nivel: "facil",
      tema: "Razonamiento Matemático",
      subtema: "Tanto por ciento",
      enunciado: "¿Cuánto es el $20\\%$ de $150$?",
      alternativas: ["A) 25", "B) 30", "C) 35", "D) 40"],
      respuesta: "B"
    },
    {
      id: "tp_f2",
      nivel: "facil",
      tema: "Razonamiento Matemático",
      subtema: "Tanto por ciento",
      enunciado: "Un artículo cuesta S/ $80$ y tiene $25\\%$ de descuento. ¿Cuánto se paga?",
      alternativas: ["A) S/ 55", "B) S/ 60", "C) S/ 65", "D) S/ 70"],
      respuesta: "B"
    },
    {
      id: "tp_f3",
      nivel: "facil",
      tema: "Razonamiento Matemático",
      subtema: "Tanto por ciento",
      enunciado: "$15$ es el $\\_ \\%$ de $60$.",
      alternativas: ["A) 20%", "B) 25%", "C) 30%", "D) 15%"],
      respuesta: "B"
    },
    // MEDIO
    {
      id: "tp_m1",
      nivel: "medio",
      tema: "Razonamiento Matemático",
      subtema: "Tanto por ciento",
      enunciado: "El precio de un producto subió $10\\%$ y luego bajó $10\\%$. El precio final respecto al original es:",
      alternativas: ["A) Igual", "B) $1\\%$ menor", "C) $1\\%$ mayor", "D) $2\\%$ menor"],
      respuesta: "B"
    },
    {
      id: "tp_m2",
      nivel: "medio",
      tema: "Razonamiento Matemático",
      subtema: "Tanto por ciento",
      enunciado: "En una prueba de $40$ preguntas, un alumno responde bien el $85\\%$. ¿Cuántas responde bien?",
      alternativas: ["A) 32", "B) 34", "C) 36", "D) 38"],
      respuesta: "B"
    },
    {
      id: "tp_m3",
      nivel: "medio",
      tema: "Razonamiento Matemático",
      subtema: "Tanto por ciento",
      enunciado: "Si después de un aumento del $20\\%$ un sueldo es S/ $2\\,400$, ¿cuánto era antes?",
      alternativas: ["A) S/ 1 800", "B) S/ 2 000", "C) S/ 2 100", "D) S/ 2 200"],
      respuesta: "B"
    },
    // DIFÍCIL
    {
      id: "tp_d1",
      nivel: "dificil",
      tema: "Razonamiento Matemático",
      subtema: "Tanto por ciento",
      enunciado: "Una tienda aplica $30\\%$ de descuento y luego $20\\%$ adicional. ¿Cuál es el descuento total equivalente?",
      alternativas: ["A) $44\\%$", "B) $50\\%$", "C) $46\\%$", "D) $48\\%$"],
      respuesta: "A"
    },
    {
      id: "tp_d2",
      nivel: "dificil",
      tema: "Razonamiento Matemático",
      subtema: "Tanto por ciento",
      enunciado: "Un capital de S/ $5\\,000$ se invierte al $8\\%$ anual compuesto. ¿Cuánto habrá al cabo de 2 años? Use $C_f = C_0(1+r)^n$.",
      alternativas: ["A) S/ 5 700", "B) S/ 5 832", "C) S/ 5 850", "D) S/ 6 000"],
      respuesta: "B"
    },
  ],

  // ══════════════════════════════════════════════════════════
  // MATEMÁTICAS
  // ══════════════════════════════════════════════════════════

  operacionesAlgebraicas: [
    // FÁCIL
    {
      id: "oa_f1",
      nivel: "facil",
      tema: "Matemáticas",
      subtema: "Operaciones Algebraicas",
      enunciado: "Simplifique: $3x + 5x - 2x$",
      alternativas: ["A) $6x$", "B) $7x$", "C) $5x$", "D) $4x$"],
      respuesta: "A"
    },
    {
      id: "oa_f2",
      nivel: "facil",
      tema: "Matemáticas",
      subtema: "Operaciones Algebraicas",
      enunciado: "Expanda: $(x+3)^2$",
      alternativas: ["A) $x^2+9$", "B) $x^2+6x+9$", "C) $x^2+3x+9$", "D) $x^2+6x+6$"],
      respuesta: "B"
    },
    {
      id: "oa_f3",
      nivel: "facil",
      tema: "Matemáticas",
      subtema: "Operaciones Algebraicas",
      enunciado: "Factorice: $x^2 - 9$",
      alternativas: ["A) $(x-3)^2$", "B) $(x+3)(x-3)$", "C) $(x+9)(x-1)$", "D) No factoriza"],
      respuesta: "B"
    },
    // MEDIO
    {
      id: "oa_m1",
      nivel: "medio",
      tema: "Matemáticas",
      subtema: "Operaciones Algebraicas",
      enunciado: "Si $P(x) = 2x^3 - 3x^2 + x - 5$, halle $P(2)$.",
      alternativas: ["A) 1", "B) 3", "C) 5", "D) 7"],
      respuesta: "A"
    },
    {
      id: "oa_m2",
      nivel: "medio",
      tema: "Matemáticas",
      subtema: "Operaciones Algebraicas",
      enunciado: "Simplifique: $\\dfrac{x^2 - 4}{x+2}$, con $x \\neq -2$.",
      alternativas: ["A) $x - 2$", "B) $x + 2$", "C) $x^2 - 2$", "D) $x - 4$"],
      respuesta: "A"
    },
    {
      id: "oa_m3",
      nivel: "medio",
      tema: "Matemáticas",
      subtema: "Operaciones Algebraicas",
      enunciado: "Resuelva: $2x^2 - 5x + 3 = 0$. Las raíces son:",
      alternativas: ["A) $x=1$ y $x=\\dfrac{3}{2}$", "B) $x=2$ y $x=3$", "C) $x=-1$ y $x=-3$", "D) $x=0$ y $x=3$"],
      respuesta: "A"
    },
    // DIFÍCIL
    {
      id: "oa_d1",
      nivel: "dificil",
      tema: "Matemáticas",
      subtema: "Operaciones Algebraicas",
      enunciado: "Si $x + \\dfrac{1}{x} = 3$, halle $x^2 + \\dfrac{1}{x^2}$.",
      alternativas: ["A) 7", "B) 9", "C) 11", "D) 6"],
      respuesta: "A"
    },
    {
      id: "oa_d2",
      nivel: "dificil",
      tema: "Matemáticas",
      subtema: "Operaciones Algebraicas",
      enunciado: "Halle el residuo de dividir $P(x) = x^4 - 2x^3 + x - 1$ entre $(x-1)$.",
      alternativas: ["A) $-1$", "B) $0$", "C) $1$", "D) $-2$"],
      respuesta: "A"
    },
  ],

  sumaAngulosTriangulo: [
    // FÁCIL
    {
      id: "sat_f1",
      nivel: "facil",
      tema: "Matemáticas",
      subtema: "Suma de ángulos en el triángulo",
      enunciado: "En un triángulo, dos ángulos miden $60°$ y $80°$. ¿Cuánto mide el tercero?",
      alternativas: ["A) $30°$", "B) $40°$", "C) $50°$", "D) $60°$"],
      respuesta: "B"
    },
    {
      id: "sat_f2",
      nivel: "facil",
      tema: "Matemáticas",
      subtema: "Suma de ángulos en el triángulo",
      enunciado: "Un triángulo equilátero tiene todos sus ángulos iguales a:",
      alternativas: ["A) $45°$", "B) $60°$", "C) $90°$", "D) $120°$"],
      respuesta: "B"
    },
    {
      id: "sat_f3",
      nivel: "facil",
      tema: "Matemáticas",
      subtema: "Suma de ángulos en el triángulo",
      enunciado: "La suma de los ángulos interiores de cualquier triángulo es:",
      alternativas: ["A) $90°$", "B) $270°$", "C) $360°$", "D) $180°$"],
      respuesta: "D"
    },
    // MEDIO
    {
      id: "sat_m1",
      nivel: "medio",
      tema: "Matemáticas",
      subtema: "Suma de ángulos en el triángulo",
      enunciado: "En un triángulo, los ángulos están en razón $1:2:3$. ¿Cuánto mide el mayor?",
      alternativas: ["A) $60°$", "B) $90°$", "C) $80°$", "D) $120°$"],
      respuesta: "B"
    },
    {
      id: "sat_m2",
      nivel: "medio",
      tema: "Matemáticas",
      subtema: "Suma de ángulos en el triángulo",
      enunciado: "El ángulo exterior de un triángulo mide $110°$. Si uno de los ángulos no adyacentes es $50°$, ¿cuánto mide el otro?",
      alternativas: ["A) $50°$", "B) $60°$", "C) $70°$", "D) $40°$"],
      respuesta: "B"
    },
    {
      id: "sat_m3",
      nivel: "medio",
      tema: "Matemáticas",
      subtema: "Suma de ángulos en el triángulo",
      enunciado: "En el $\\triangle ABC$, $\\angle A = 2\\angle B$ y $\\angle C = \\angle B + 20°$. Halle $\\angle B$.",
      alternativas: ["A) $30°$", "B) $40°$", "C) $50°$", "D) $60°$"],
      respuesta: "B"
    },
    // DIFÍCIL
    {
      id: "sat_d1",
      nivel: "dificil",
      tema: "Matemáticas",
      subtema: "Suma de ángulos en el triángulo",
      enunciado: "En el $\\triangle ABC$, la bisectriz interior desde $A$ divide al lado $BC$ en segmentos $BD = 6$ y $DC = 9$. Si $AB = 8$, halle $AC$.",
      alternativas: ["A) 10", "B) 12", "C) 14", "D) 16"],
      respuesta: "B"
    },
    {
      id: "sat_d2",
      nivel: "dificil",
      tema: "Matemáticas",
      subtema: "Suma de ángulos en el triángulo",
      enunciado: "En un triángulo isósceles, el ángulo del vértice mide $\\alpha$ y la base mide $b$. El ángulo de la base es: $\\beta = \\dfrac{180°-\\alpha}{2}$. Si $\\alpha = 36°$ y $b = 10$, ¿cuánto mide $\\beta$?",
      alternativas: ["A) $72°$", "B) $54°$", "C) $60°$", "D) $36°$"],
      respuesta: "A"
    },
  ],

  teoremaPitagoras: [
    // FÁCIL
    {
      id: "tp2_f1",
      nivel: "facil",
      tema: "Matemáticas",
      subtema: "Teorema de Pitágoras",
      enunciado: "En un triángulo rectángulo con catetos $3$ y $4$, la hipotenusa mide:",
      alternativas: ["A) 6", "B) 7", "C) 5", "D) 8"],
      respuesta: "C"
    },
    {
      id: "tp2_f2",
      nivel: "facil",
      tema: "Matemáticas",
      subtema: "Teorema de Pitágoras",
      enunciado: "Si la hipotenusa es $13$ y un cateto es $5$, el otro cateto mide:",
      alternativas: ["A) 10", "B) 11", "C) 12", "D) 8"],
      respuesta: "C"
    },
    {
      id: "tp2_f3",
      nivel: "facil",
      tema: "Matemáticas",
      subtema: "Teorema de Pitágoras",
      enunciado: "El teorema de Pitágoras establece: $c^2 = a^2 + b^2$, donde $c$ es:",
      alternativas: ["A) Un cateto", "B) La hipotenusa", "C) El perímetro", "D) El área"],
      respuesta: "B"
    },
    // MEDIO
    {
      id: "tp2_m1",
      nivel: "medio",
      tema: "Matemáticas",
      subtema: "Teorema de Pitágoras",
      enunciado: "Una escalera de $10\\,m$ apoya su base a $6\\,m$ del muro. ¿A qué altura llega?",
      alternativas: ["A) $6\\,m$", "B) $7\\,m$", "C) $8\\,m$", "D) $9\\,m$"],
      respuesta: "C"
    },
    {
      id: "tp2_m2",
      nivel: "medio",
      tema: "Matemáticas",
      subtema: "Teorema de Pitágoras",
      enunciado: "¿Forman triángulo rectángulo los lados $7, 24, 25$?",
      alternativas: ["A) No, $7^2+24^2 \\neq 25^2$", "B) Sí, $7^2+24^2 = 25^2$", "C) No se puede saber", "D) Solo si es isósceles"],
      respuesta: "B"
    },
    {
      id: "tp2_m3",
      nivel: "medio",
      tema: "Matemáticas",
      subtema: "Teorema de Pitágoras",
      enunciado: "Halle la diagonal de un cuadrado de lado $5\\,cm$.",
      alternativas: ["A) $5\\sqrt{2}\\,cm$", "B) $10\\,cm$", "C) $5\\sqrt{3}\\,cm$", "D) $25\\,cm$"],
      respuesta: "A"
    },
    // DIFÍCIL
    {
      id: "tp2_d1",
      nivel: "dificil",
      tema: "Matemáticas",
      subtema: "Teorema de Pitágoras",
      enunciado: "En el triángulo rectángulo $ABC$ ($\\angle C = 90°$), la altura $h$ sobre la hipotenusa satisface $h^2 = m \\cdot n$. Si $m = 4$ y $n = 9$, ¿cuánto mide $h$?",
      alternativas: ["A) 5", "B) 6", "C) 7", "D) 8"],
      respuesta: "B"
    },
    {
      id: "tp2_d2",
      nivel: "dificil",
      tema: "Matemáticas",
      subtema: "Teorema de Pitágoras",
      enunciado: "En un rombo de diagonal mayor $24$ y diagonal menor $10$, halle el lado usando el Teorema de Pitágoras.",
      alternativas: ["A) 11", "B) 12", "C) 13", "D) 14"],
      respuesta: "C"
    },
  ],

  funcionesTrigonometricas: [
    // FÁCIL
    {
      id: "ft_f1",
      nivel: "facil",
      tema: "Matemáticas",
      subtema: "Funciones Trigonométricas",
      enunciado: "El valor de $\\sin(30°)$ es:",
      alternativas: ["A) $\\dfrac{\\sqrt{3}}{2}$", "B) $\\dfrac{1}{2}$", "C) $\\dfrac{\\sqrt{2}}{2}$", "D) $1$"],
      respuesta: "B"
    },
    {
      id: "ft_f2",
      nivel: "facil",
      tema: "Matemáticas",
      subtema: "Funciones Trigonométricas",
      enunciado: "¿Cuánto es $\\cos(60°)$?",
      alternativas: ["A) $\\dfrac{\\sqrt{3}}{2}$", "B) $0$", "C) $\\dfrac{1}{2}$", "D) $1$"],
      respuesta: "C"
    },
    {
      id: "ft_f3",
      nivel: "facil",
      tema: "Matemáticas",
      subtema: "Funciones Trigonométricas",
      enunciado: "En un triángulo rectángulo, $\\tan(\\theta) = \\dfrac{\\text{cateto opuesto}}{\\text{cateto adyacente}}$. Si el opuesto es $3$ y el adyacente es $4$, entonces $\\tan(\\theta) =$",
      alternativas: ["A) $\\dfrac{4}{3}$", "B) $\\dfrac{3}{5}$", "C) $\\dfrac{3}{4}$", "D) $\\dfrac{5}{3}$"],
      respuesta: "C"
    },
    // MEDIO
    {
      id: "ft_m1",
      nivel: "medio",
      tema: "Matemáticas",
      subtema: "Funciones Trigonométricas",
      enunciado: "Verifique la identidad: $\\sin^2(\\theta) + \\cos^2(\\theta) = ?$",
      alternativas: ["A) $0$", "B) $2$", "C) $1$", "D) Depende de $\\theta$"],
      respuesta: "C"
    },
    {
      id: "ft_m2",
      nivel: "medio",
      tema: "Matemáticas",
      subtema: "Funciones Trigonométricas",
      enunciado: "Si $\\sin(\\theta) = \\dfrac{4}{5}$ y $\\theta$ está en el primer cuadrante, ¿cuánto es $\\cos(\\theta)$?",
      alternativas: ["A) $\\dfrac{3}{5}$", "B) $\\dfrac{4}{5}$", "C) $\\dfrac{3}{4}$", "D) $\\dfrac{5}{3}$"],
      respuesta: "A"
    },
    {
      id: "ft_m3",
      nivel: "medio",
      tema: "Matemáticas",
      subtema: "Funciones Trigonométricas",
      enunciado: "¿En qué cuadrante es $\\sin(\\theta) < 0$ y $\\cos(\\theta) > 0$?",
      alternativas: ["A) I", "B) II", "C) III", "D) IV"],
      respuesta: "D"
    },
    // DIFÍCIL
    {
      id: "ft_d1",
      nivel: "dificil",
      tema: "Matemáticas",
      subtema: "Funciones Trigonométricas",
      enunciado: "Simplifique: $\\dfrac{\\sin^2\\theta - \\cos^2\\theta}{\\sin\\theta + \\cos\\theta}$",
      alternativas: ["A) $\\sin\\theta + \\cos\\theta$", "B) $\\sin\\theta - \\cos\\theta$", "C) $1$", "D) $\\tan\\theta$"],
      respuesta: "B"
    },
    {
      id: "ft_d2",
      nivel: "dificil",
      tema: "Matemáticas",
      subtema: "Funciones Trigonométricas",
      enunciado: "Resuelva en $[0°, 360°]$: $\\;2\\cos^2\\theta - \\cos\\theta - 1 = 0$",
      alternativas: ["A) $\\theta = 60°$ y $\\theta = 180°$", "B) $\\theta = 60°, 180°, 300°$", "C) $\\theta = 90°$ y $\\theta = 270°$", "D) $\\theta = 0°$ y $\\theta = 180°$"],
      respuesta: "B"
    },
  ]
};

// ── Configuración de subtemas por sección ──────────────────
const CONFIG = {
  razonamientoMatematico: {
    label: "Razonamiento Matemático",
    totalPreguntas: 15,
    subtemas: [
      { key: "sucesiones",          label: "Sucesiones" },
      { key: "razonamientoLogico",  label: "Razonamiento Lógico" },
      { key: "planteoEcuaciones",   label: "Planteo de Ecuaciones" },
      { key: "fracciones",          label: "Fracciones" },
      { key: "tantoPorCiento",      label: "Tanto por ciento" },
    ]
  },
  matematicas: {
    label: "Matemáticas",
    totalPreguntas: 15,
    subtemas: [
      { key: "operacionesAlgebraicas",   label: "Operaciones Algebraicas" },
      { key: "sumaAngulosTriangulo",     label: "Suma de ángulos en el triángulo" },
      { key: "teoremaPitagoras",         label: "Teorema de Pitágoras" },
      { key: "funcionesTrigonometricas", label: "Funciones Trigonométricas" },
    ]
  }
};
