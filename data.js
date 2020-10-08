const loginSucesso = {
    Email: "user@phptravels.com",
    Password: "demouser",
    url: "https://www.phptravels.net/login"
};
const loginFalha = {
    Email: "user@phptravels.com",
    Password: "senhaerrada",
    url: "https://www.phptravels.net/login"
};
const buscaVoos = {
    partida: "goiânia",
    chegada: "guarulhos",
    classe: "first"
}

module.exports = [loginFalha, loginSucesso, buscaVoos];
