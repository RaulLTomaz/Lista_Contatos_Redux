import { useSelector } from "react-redux"

import Contato from "../../components/Contato"
import { RootReducer } from "../../store"
import { MainContainer } from "../../styles"

const ListaDeContatos = () => {
    const { itens } = useSelector((state: RootReducer) => state.contatos)

    return (
        <MainContainer>
            <ul>
                {itens.map(c => (
                    <li>
                        <Contato nome={c.nome} email={c.email} telefone={c.telefone} id={c.id}/>
                    </li>
                ))}
            </ul>
        </MainContainer>
    )
}

export default ListaDeContatos