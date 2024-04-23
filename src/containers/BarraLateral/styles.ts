import styled from "styled-components";
import { Botao, BotaoVerde, Campo } from "../../styles";
import variaveis from "../../styles/variaveis";

export const Aside = styled.aside`
    padding: 16px;
    background-color: #ccc;
    height: 100vh;
    max-width: 300px;
`

export const Form = styled.form`
    width: 100%;
    font-weight: bold;
    font-size: 14px;
`

export const CampoForm = styled(Campo)`
    margin-bottom: 6px;
`

export const BotaoAdicionar = styled(BotaoVerde)`
    width: 100%;
`
