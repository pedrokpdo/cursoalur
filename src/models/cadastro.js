import React from "react";

function validarCPF(cpf) {
    if (cpf.length !== 11) {
        return { valido: false, texto: "CPF deve ter 11 digitos." }
    } else {
        return { valido: true, texto: "" }
    }
}
function validarSenha(senha) {
    if (senha.length < 4 || senha.length > 72 ) {
        return { valido: false, texto: "senha deve ter 4 a 72 digitos" }
    } else {
        return { valido: true, texto: "" }
    }
}

export {validarCPF, validarSenha}