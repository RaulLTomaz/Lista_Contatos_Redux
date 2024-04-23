import { useEffect, useState } from "react"

import ContatoClass from "../../models/Contato"
import { Botao, BotaoVerde, Campo } from "../../styles"
import * as S from "./styles"
import { useDispatch } from "react-redux"
import { editar, remover } from "../../store/reducers/contato"

type Props = ContatoClass

const Contato = ({ nome: nomeOriginal, email: emailOriginal, telefone: telefoneOriginal, id}: Props) => {
    const dispatch = useDispatch()
    const [estaEditando, setEstaEditanto] = useState(false)
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState(0)

    useEffect(() => {
        if (nomeOriginal.length > 0) setNome(nomeOriginal)
    }, [nomeOriginal])

    useEffect(() => {
        if (emailOriginal.length > 0) setEmail(emailOriginal)
    }, [emailOriginal])

    useEffect(() => {
        if (telefoneOriginal > 0) setTelefone(telefoneOriginal)
    }, [telefoneOriginal])

    function cancelarEdicaoNome() {
        setNome(nomeOriginal)
    }

    function cancelarEdicaoEmail() {
        setEmail(emailOriginal)
    }

    function cancelarEdicaoTelefone() {
        setTelefone(telefoneOriginal)
    }

    return (
        <S.Card>
            {estaEditando ?
            (
                <>
                    <S.CampoEditor value={nome} onChange={(e) => setNome(e.target.value)}/>
                    <S.CampoEditor value={email} onChange={(e) => setEmail(e.target.value)} type="email"/>
                    <S.CampoEditor value={telefone} onChange={(e) => setTelefone(parseInt(e.target.value))} type="tel"/>
                    <S.Botoes>
                        <BotaoVerde onClick={() => {
                            dispatch(editar({nome, email, telefone, id}))
                            setEstaEditanto(false)
                        }}>Salvar</BotaoVerde>
                        <S.BotaoVermelho onClick={() => {
                            setEstaEditanto(false)
                            cancelarEdicaoNome()
                            cancelarEdicaoEmail()
                            cancelarEdicaoTelefone()
                        }}>Cancelar</S.BotaoVermelho>
                    </S.Botoes>
                </>
            )
            : (
                <>
                    <label>{nome}</label>
                    <label>{email}</label>
                    <label>{telefone}</label>
                    <S.Botoes>
                        <Botao onClick={() => setEstaEditanto(true)}>Editar</Botao>
                        <S.BotaoVermelho onClick={() => dispatch(remover(id))}>Excluir</S.BotaoVermelho>
                    </S.Botoes>
                </>
            )}
        </S.Card>
    )
}

export default Contato