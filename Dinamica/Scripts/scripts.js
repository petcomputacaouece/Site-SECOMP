function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnInscricao");

    btn.addEventListener("click", () => {
        alert("Inscrições encerradas!");
    });
});