import { useDispatch } from "react-redux"
import * as S from "./styles"
import { FormEvent, useState } from "react"
import { cadastrar } from "../../store/reducers/contato"

const BarraLateral = () => {
    const dispatch = useDispatch()

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState(0)

    const cadastraContato = (evento: FormEvent) => {
        evento.preventDefault()
        dispatch(cadastrar({
            nome,
            email,
            telefone
        }))
        setNome("")
        setEmail("")
        setTelefone(0)
    }

    const validaNumero = (num: number): number => {
        if(isNaN(num)){
            return 0
        } else {
            return num
        }
    }

    return (
        <S.Aside>
            <S.Form onSubmit={cadastraContato}>
                <S.CampoForm value={nome} onChange={({target}) => setNome(target.value)} placeholder="Nome do Contato" required/>
                <S.CampoForm value={email} onChange={({target}) => setEmail(target.value)} placeholder="E-mail do Contato" type="email" required/>
                <S.CampoForm value={telefone} onChange={({target}) => setTelefone(validaNumero(parseInt(target.value)))} placeholder="Telefone do Contato" type="tel" required/>
                <S.BotaoAdicionar type="submit">Adicionar</S.BotaoAdicionar>
            </S.Form>
        </S.Aside>
    )
}

export default BarraLateral