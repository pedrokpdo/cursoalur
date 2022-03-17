import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import React from "react";

function DadosUsuario() {
    return (
        <form>
            <TextField variant="outlined"
                margin="normal"
                fullWidth id="email" label="email" type="email" />
            <TextField variant="outlined"
                margin="normal"
                fullWidth id="senha" label="senha" type="password" />
            <Button variant="contained" color="primary" type="submit">cadastrar</Button>
        </form>
    )
}

export default DadosUsuario;