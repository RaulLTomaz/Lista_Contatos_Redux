import styled from "styled-components";
import { Botao, Campo } from "../../styles";
import variaveis from "../../styles/variaveis";

export const Card = styled.div`
    background-color: #fcfcfc;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 16px;
    margin-bottom: 32px;
    border-radius: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;

    label {
        font-weight: bold;
    }
`

export const CampoEditor = styled(Campo)`
    width: 95%;
`

export const Botoes = styled.div`
    display: flex;
    justify-content: end;
`

export const BotaoVermelho = styled(Botao)`
    background-color: ${variaveis.vermelho}
`