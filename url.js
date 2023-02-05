
let urlApi =  "https://mingaback-production.up.railway.app/"


if ( process.env.NODE_ENV === "production") {
    urlApi = process.env.REACT_APP_API
}

module.exports = urlApi