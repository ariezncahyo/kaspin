import response from '../utils/response/response'
import flag from '../utils/flag/errorCode'
import { Curl } from 'node-libcurl'
import querystring from 'node:querystring'

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
        const curl = new Curl()
        curl.setOpt(Curl.option.URL, "https://reqres.in/api/users")
        curl.setOpt(Curl.option.POST, true);
        curl.setOpt(
            Curl.option.POSTFIELDS,
            querystring.stringify({
                name: "section",
                job: "webdev",
            })
        )

        curl.on("end", function (statusCode, data, headers) {
            console.log(data)
            this.close()
        })
       
        curl.perform()

        return response.success(`success`, res)
    }
    catch(err){
        console.log(err)
        return response.notFound(`Failed`, res, err)
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