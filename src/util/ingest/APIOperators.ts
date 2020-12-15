import axios from 'axios'
import { CardEntity } from 'entities/Card.entity'
import { Any } from 'typeorm'
import { APIResponse } from 'types/interfaces/APIResponse.interface'

const parentURL = `https://mtgjson.com/api/`
const version = `v5/`
const apiURL = parentURL + version

export const getCardSet = (set: string) => {
    return axios
    .get(apiURL + set +'.json')
    .then(res => res.data)
}

export const getSetList = (): Promise<APIResponse> => {
    return axios
    .get(apiURL + "SetList.json")
    .then(res => res.data)
}

export const getDeck = (deck: string) => {
    return axios
    .get(apiURL+ "decks/" + deck + '.json')
    .then(res => res.data)
}

export const getDeckList = () => {
    return axios
    .get(apiURL + "DeckList.json")
    .then(res => res.data)
}

export const getAtomicCards = () => {
    return axios
    .get(apiURL + "AtomicCards.json",
    {
        params: {
            _limit: 100
        }
    })
    .then(res => {
        return res.data
    })
}

export const getCompiledList = () => {
    return axios
    .get(apiURL + "CompiledList.json")
    .then(res => res.data)
}

export const getKeywords = () => {
    return axios
    .get(apiURL + "Keywords.json")
    .then(res => res.data)
}

export const getAllPrintings = (): Promise<APIResponse> => {
    return axios
    .get(apiURL + "AllPrintings.json")
    .then(res => res.data)
}

export const getMeta = () => {
    return axios
    .get(apiURL + "Meta.json",
    {
        params: {
            _limit: 100
        }
    }).then(res => res.data)
}

// list functions