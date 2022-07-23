import response from '../utils/response/response'
import flag from '../utils/flag/errorCode'

export const getProvinsiById = async (req, res, next) => {
    try{
        return response.success(`Success get detail user`, res, data)
    }
    catch(err){
        return response.notFound(`Failed to get detail user`, res, err)
    }
}

export const getKecamatanById = async (req, res, next) => {
    try{

        return response.success(`Success get detail user`, res)
    }
    catch(err){
        return response.notFound(`Failed to get detail user`, res, err)
    }
}

export const getKelurahanById = async (req, res, next) => {
    try{
        return response.success(`Success get detail user`, res, data)
    }
    catch(err){
        return response.notFound(`Failed to get detail user`, res, err)
    }
}

export const getKecamatanByKota = async (req, res, next) => {
    try{
        return response.success(`Success get detail user`, res, data)
    }
    catch(err){
        return response.notFound(`Failed to get detail user`, res, err)
    }
}