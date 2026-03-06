# 🎖 Charly Táctico — Generador de Prácticas PNP

Sistema web gratuito para generar prácticas semanales de evaluación para cadetes de la academia.

## 📁 Archivos del proyecto

```
index.html      ← Página principal (interfaz y lógica)
questions.js    ← Base de datos de preguntas en LaTeX
README.md       ← Este archivo
```

## 🚀 Cómo publicar en GitHub Pages (GRATIS)

### Paso 1 — Crear el repositorio
1. Ve a https://github.com y crea una cuenta (si no tienes).
2. Clic en **"New repository"**.
3. Nómbralo, por ejemplo: `charly-tactico`
4. Marca **"Public"** (es necesario para GitHub Pages gratis).
5. Clic en **"Create repository"**.

### Paso 2 — Subir los archivos
1. En el repositorio recién creado, clic en **"uploading an existing file"** o **"Add file → Upload files"**.
2. Arrastra y suelta los tres archivos: `index.html`, `questions.js`, `README.md`.
3. Clic en **"Commit changes"**.

### Paso 3 — Activar GitHub Pages
1. Ve a **Settings** (engranaje) del repositorio.
2. En el menú izquierdo: **Pages**.
3. En **"Branch"** selecciona `main` y carpeta `/root (root)`.
4. Clic en **Save**.
5. Espera 1–2 minutos. Tu sitio estará en:
   `https://TU-USUARIO.github.io/charly-tactico/`

---

## ✏️ Cómo agregar preguntas

Abre `questions.js` y agrega objetos al array del subtema correspondiente:

```javascript
{
  id: "suc_f4",           // ID único (subtema_nivel_numero)
  nivel: "facil",         // "facil" | "medio" | "dificil"
  tema: "Razonamiento Matemático",
  subtema: "Sucesiones",
  enunciado: "Halle el término: $3, 6, 9, \\_$",  // LaTeX con $...$
  alternativas: ["A) 10", "B) 11", "C) 12", "D) 13"],
  respuesta: "C"
}
```

### Guía rápida de LaTeX para las preguntas:
- Fracción: `$\dfrac{a}{b}$`
- Potencia: `$x^2$`
- Subíndice: `$a_n$`
- Raíz: `$\sqrt{x}$`
- Grado: `$90°$`
- Ángulo: `$\angle ABC$`
- Triángulo: `$\triangle ABC$`
- Flecha implica: `$p \Rightarrow q$`
- Negación: `$\neg p$`
- Y lógico: `$p \wedge q$`
- O lógico: `$p \vee q$`

---

## 📞 Soporte
Para agregar más subtemas o modificar la distribución de preguntas, edita la constante `CONFIG` en `questions.js`.
