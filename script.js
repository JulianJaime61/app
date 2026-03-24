const app = document.getElementById("app");

// Estado simple (escalable después)
const state = {
    choice: null
};

// Render helper
function render(html) {
    app.innerHTML = html;
}

// =============================
// INICIO
// =============================
function start() {
    render(Screens.intro());

    const text = document.getElementById("text");
    const btn = document.getElementById("btn");

    typeText(
        text,
        "No te conozco…\npero hay algo en ti que no es tan obvio.",
        40,
        () => {
            btn.style.display = "block";
        }
    );

    btn.onclick = goOptions;
}


// Animación
function typeText(element, text, speed = 35, callback) {
    let i = 0;
    element.innerHTML = "";

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            callback();
        }
    }

    typing();
}

// 🖤 Pantalla 1
function pantalla1() {
    app.innerHTML = `
        <div class="fade">
            <h2 id="texto"></h2>
            <button id="btn" style="display:none;" onclick="pantalla2()">Compruébalo</button>
        </div>
    `;

    typeText(
        document.getElementById("texto"),
        "No te conozco…\npero hay algo en ti que no es tan obvio.",
        40,
        () => document.getElementById("btn").style.display = "block"
    );
}

// 🎭 Pantalla 2
function pantalla2() {
    app.innerHTML = `
    <div class="fade">
        <h2>Cuando alguien te interesa de verdad…</h2>

        <button onclick="pantalla3('dificil')">No lo haces tan evidente 😏</button>
        <button onclick="pantalla3('observa')">Observas primero 👀</button>
        <button onclick="pantalla3('directa')">Te dejas llevar 🔥</button>
    </div>
    `;
}

// 🧠 Pantalla 3 PERSONALIZADA
function pantalla3(tipo) {

    let mensaje = "";

    if (tipo === "observa") {
        mensaje = "Ok… eres de las que primero siente el ambiente…\nno cualquiera pasa ese filtro.";
    }
    else if (tipo === "dificil") {
        mensaje = "Interesante… sabes lo que proyectas,\npero no todos saben interpretarlo 😏";
    }
    else {
        mensaje = "Eso no es tan común…\nseguro más de uno se ha sorprendido contigo 🔥";
    }

    app.innerHTML = `
    <div class="fade">
        <h2 id="texto"></h2>
        <button id="btn" style="display:none;" onclick="final()">Continuar</button>
    </div>
    `;

    typeText(
        document.getElementById("texto"),
        mensaje,
        35,
        () => document.getElementById("btn").style.display = "block"
    );
}

// =============================
// RESPUESTA PERSONALIZADA
// =============================
function goResponse(type) {
    let message = "";

    if (type === "observa") {
        message = "Ok… eres de las que primero siente el ambiente…\nno cualquiera pasa ese filtro.";
    }
    else if (type === "dificil") {
        message = "Interesante… sabes lo que proyectas,\npero no todos saben interpretarlo 😏";
    }
    else {
        message = "Eso no es tan común…\nseguro más de uno se ha sorprendido contigo 🔥";
    }

    render(`
        <div class="card">
            <h2 id="text"></h2>
            <button id="btn" class="btn" style="display:none;">Continuar</button>
        </div>
    `);

    const text = document.getElementById("text");
    const btn = document.getElementById("btn");

    typeText(text, message, 35, () => {
        btn.style.display = "block";
    });

    btn.onclick = goFinal;
}

// 🔥 FINAL
function goFinal() {
    render(`
        <div class="card">
            <h2 id="text"></h2>
            <button id="btn" class="btn" style="display:none;">Entonces háblame</button>
        </div>
    `);

    const text = document.getElementById("text");
    const btn = document.getElementById("btn");

    typeText(
        text,
        "Creo que ya entendí algo…\npero no todo se puede ver desde aquí 😏\n\nme dio curiosidad conocerte sin filtro",
        35,
        () => {
            btn.style.display = "block";
        }
    );

    btn.onclick = redirectToIG;
}

// Redirección
function redirectToIG() {
    // ⚠️ CAMBIA ESTO POR TU USUARIO REAL
    const username = "julianj.80";

    window.location.href = `https://instagram.com/${username}`;
}

// Inicio
pantalla1();
