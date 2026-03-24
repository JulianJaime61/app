const Screens = {

    intro() {
        return `
        <div class="card">
            <h2 id="text"></h2>
            <button id="btn" class="btn" style="display:none;">Compruébalo</button>
        </div>
        `;
    },

    options() {
        return `
        <div class="card">
            <h2>Cuando alguien te interesa…</h2>

            <button class="btn" data-type="dificil">
                No lo haces tan evidente 😏
            </button>

            <button class="btn" data-type="observa">
                Observas primero 👀
            </button>

            <button class="btn" data-type="directa">
                Te dejas llevar 🔥
            </button>
        </div>
        `;
    }

};