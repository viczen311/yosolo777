document.addEventListener("DOMContentLoaded", () => {

  /* ================= REFERENCIAS ================= */
  const btnLogin = document.getElementById("btnLogin");
  const btnLogout = document.getElementById("btnLogout");

  const modalLogin = document.getElementById("modalLogin");
  const modalRegistro = document.getElementById("modalRegistro");

  const abrirRegistro = document.getElementById("abrirRegistro");
  const cerrarLogin = document.getElementById("cerrarLogin");
  const cerrarRegistro = document.getElementById("cerrarRegistro");

  const btnEntrar = document.getElementById("btnEntrar");
  const btnRegistrar = document.getElementById("btnRegistrar");

  const loginUsuario = document.getElementById("loginUsuario");
  const loginPassword = document.getElementById("loginPassword");
  const regUsuario = document.getElementById("regUsuario");
  const regPassword = document.getElementById("regPassword");

  const inicio = document.getElementById("inicio");
  const banner = document.getElementById("banner");
  const laboratorio = document.getElementById("laboratorio");

  /* ================= DATOS ================= */
  let usuarioGuardado = "";
  let passwordGuardada = "";

  /* ================= HEADER ================= */
  btnLogin.onclick = () => {
    modalLogin.style.display = "flex";
  };

  btnLogout.onclick = () => {
    laboratorio.style.display = "none";
    inicio.style.display = "block";
    banner.style.display = "block";

    btnLogout.style.display = "none";
    btnLogin.style.display = "inline-block";
  };

  /* ================= LOGIN ================= */
  cerrarLogin.onclick = () => {
    modalLogin.style.display = "none";
  };

  btnEntrar.onclick = () => {
    if (
      loginUsuario.value === usuarioGuardado &&
      loginPassword.value === passwordGuardada
    ) {
      modalLogin.style.display = "none";
      inicio.style.display = "none";
      banner.style.display = "none";
      laboratorio.style.display = "block";

      btnLogin.style.display = "none";
      btnLogout.style.display = "inline-block";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  /* ================= REGISTRO ================= */
  abrirRegistro.onclick = () => {
    modalLogin.style.display = "none";
    modalRegistro.style.display = "flex";
  };

  cerrarRegistro.onclick = () => {
    modalRegistro.style.display = "none";
  };

  btnRegistrar.onclick = () => {
    usuarioGuardado = regUsuario.value.trim();
    passwordGuardada = regPassword.value.trim();

    if (!usuarioGuardado || !passwordGuardada) {
      alert("Completa todos los campos");
      return;
    }

    alert("Registro exitoso");
    modalRegistro.style.display = "none";
    modalLogin.style.display = "flex";
  };
});