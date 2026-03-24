const app = document.getElementById("app");

const state = {
    choice: null
};

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
        () => btn.style.display = "block"
    );

    btn.onclick = goOptions;
}

// =============================
// OPCIONES
// =============================
function goOptions() {
    render(Screens.options());

    document.querySelectorAll(".btn").forEach(btn => {
        btn.onclick = () => {
            const type = btn.dataset.type;
            state.choice = type;
            goResponse(type);
        };
    });
}

// =============================
// RESPUESTA
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

// =============================
// FINAL
// =============================
function goFinal() {

    let finalMessage = "";
    let buttonText = "Entonces háblame";

    if (state.choice === "observa") {
        finalMessage = "No eres de las que se muestran fácil…\npero cuando conectas, se nota.\n\nme dio curiosidad conocerte sin filtros";
        buttonText = "A ver si es cierto";
    }
    else if (state.choice === "dificil") {
        finalMessage = "Tienes ese punto de misterio…\npero no cualquiera sabe seguirte el ritmo 😏\n\nquiero ver si lo confirmo";
        buttonText = "Compruébalo";
    }
    else {
        finalMessage = "Eres más de sentir el momento…\ny eso cambia todo 🔥\n\nesto en persona tendría más sentido";
        buttonText = "Vamos a verlo";
    }

    render(`
        <div class="card">
            <h2 id="text"></h2>
            <button id="btn" class="btn" style="display:none;">
                ${buttonText}
            </button>
        </div>
    `);

    const text = document.getElementById("text");
    const btn = document.getElementById("btn");

    typeText(text, finalMessage, 35, () => {
        btn.style.display = "block";
    });

    btn.onclick = redirectSmart;
}

function redirectSmart() {

    let message = "";

    if (state.choice === "observa") {
        message = "ok… ahora tengo más contexto 👀";
    }
    else if (state.choice === "dificil") {
        message = "mmm… confirmaste un par de cosas 😏";
    }
    else {
        message = "sabía que ibas a responder así 🔥";
    }

    // Guardamos para usarlo después
    localStorage.setItem("firstMessage", message);

    window.location.href = "https://ig.me/m/julianj.80";
}

// =============================
start();
