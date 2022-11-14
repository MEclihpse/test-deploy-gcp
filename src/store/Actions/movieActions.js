import { toast } from "react-toastify"
import { baseUrl, movieErr, movieFetch, movieLoad, singleMovieFetch } from "../ActionTypes"

export function fetchMovSuc(payload) {
    return {type: movieFetch, payload}
}

export function singleMovFetch(payload) {
    return {type: singleMovieFetch, payload}
}

export function loading(payload) {
    return {type: movieLoad, payload}
}

export function error(payload) {
    return {type: movieErr, payload}
}

export function readMovie() {
    return async (dis, getState) => {
        try {
            dis(loading(true))
            const response = await fetch(`${baseUrl}/movies`)
            dis(fetchMovSuc(await response.json()))
        } catch (err) {
            console.log(err);
            toast.error(`Read Movie Error`)
            dis(error(true))
        } finally {
            dis(loading(false))
        }
    }
}

export function readSingleMovie(id) {
    return async (dis, getState) => {
        return fetch(`${baseUrl}/movies/${id}`)
        .then(res => {
            if (!res.ok) {
             throw {msg: `Fetch Movie Error`}   
            }
            return res.json()
        }) 
        .then(data => {
            dis(singleMovFetch(data))
        })
    }
}