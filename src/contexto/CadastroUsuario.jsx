import { createContext, useState } from "react";


const usuarioInicial = {
    perfil: '',
    interesse: '',
    nomeCompleto: '',
    uf:'',
    cidade: '',
    email:'',
    senha:'',
    senhaConfirmada:''
}

export const CadastroUsuarioContext = createContext({
    usuario: usuarioInicial,
    setPerfil: () => null,
    setInteresse: () => null,
    setNomeCompleto: () => null,
    setUf: () => null,
    setCidade: () => null,
    setEmail: () => null,
    setSenha: () => null,
    setSenhaConfirmada: ()=> null,
})

export const CadastroUsuarioProvider = ({ children }) => {

    const [usuario, setUsuario] = useState(usuarioInicial)

    const setPerfil

    const contexto = {
        usuario
    }

    return (<CadastroUsuarioContext.Provider value={contexto}>
        {children}
    </CadastroUsuarioContext.Provider>)
}