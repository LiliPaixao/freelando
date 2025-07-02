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

export const useCadastroUsuarioContext = () => {
    return useState(CadastroUsuarioContext);
}

export const CadastroUsuarioProvider = ({ children }) => {

    const [usuario, setUsuario] = useState(usuarioInicial)

    const setPerfil = (perfil) => {
        setUsuario(estadoAnterior => {
            return{
                ...estadoAnterior,
                perfil
            }
        })
    }

    const setInteresse = (interesse) => {
        setInteresse(estadoAnterior =>{
            return{
                ...estadoAnterior,
                interesse
            }
        })
    }

    const setNomeCompleto = (nomeCompleto) => {
        setNomeCompleto(estadoAnterior => {
            return {
                ...estadoAnterior,
                nomeCompleto
            }
        })
    }

    const setUf = (uf) => {
        setUf(estadoAnterior => {
            return {
                ...estadoAnterior,
                uf
            }
        })
    }

    const setCidade = (cidade) => {
        setCidade(estadoAnterior => {
            return {
                ...estadoAnterior,
                cidade
            }
        })
    }

    const setEmail = (email) => {
        setEmail(estadoAnterior => {
            return {
                ...estadoAnterior,
                email
            }
        })
    }

    const setSenha = (senha) => {
        setSenha(estadoAnterior => {
            return {
                ...estadoAnterior,
                senha
            }
        })
    }

    const setSenhaConfirmada = (senhaConfirmada) => {
        setSenhaConfirmada(estadoAnterior => {
            return {
                ...estadoAnterior,
                senhaConfirmada
            }
        })
    }

    const contexto = {
        usuario,
        setPerfil,
        setInteresse,
        setNomeCompleto,
        setUf,
        setCidade,
        setEmail,
        setSenha,
        setSenhaConfirmada,
    }

    return (<CadastroUsuarioContext.Provider value={contexto}>
        {children}
    </CadastroUsuarioContext.Provider>)
}