import { TextField } from "@material-ui/core";
import React from "react";
import { Button } from "@material-ui/core";
function DadosEntrega() {
    return (
        <form>
            <TextField variant="outlined"
                margin="normal"
                id="cep"
                label="cep"
                type="number" />

            <TextField variant="outlined"
                margin="normal"
                fullWidth
                id="endereço"
                label="Endereço"
                type="text" />

            <TextField variant="outlined"
                margin="normal"

                id="numero"
                label="Numero"
                type="number" />

            <TextField variant="outlined"
                margin="normal"

                id="estado"
                label="Estado"
                type="text" />

            <TextField variant="outlined"
                margin="normal"

                id="cidade"
                label="Cidade"
                type="text" />

            <Button fullWidth variant="contained" color="primary" type="submit">Finalizar Cadastro</Button>

        </form>
    )
}

export default DadosEntrega;