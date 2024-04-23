import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Contato from "../../models/Contato";

type ContatoState = {
    itens: Contato[]
}

const initialState: ContatoState = {
    itens: [
        {
            id: 1,
            nome: "Raul",
            email: "raul@teste.com",
            telefone: 99999999
        }
    ]
}

const contatosSlice = createSlice({
    name: "contatos",
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.itens = [...state.itens.filter((t) => t.id !== action.payload)]
        },
        editar: (state, action: PayloadAction<Contato>) => {
            const indexDoContato = state.itens.findIndex(t => t.id === action.payload.id)
            
            if(indexDoContato >= 0) {
                state.itens[indexDoContato] = action.payload
            }
        },
        cadastrar: (state, action: PayloadAction<Omit<Contato, "id">>) => {
            const contatoJaExiste = state.itens.find(contato => contato.nome.toLowerCase() === action.payload.nome.toLowerCase())
            if(contatoJaExiste) {
                alert("Ja existe esse contato")
            } else {
                const ultimoContato = state.itens[state.itens.length - 1]
                const ContatoNovo = {
                    ...action.payload,
                    id: ultimoContato ? ultimoContato.id + 1 : 1
                } 
                state.itens.push(ContatoNovo)
            }
        }
    }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer