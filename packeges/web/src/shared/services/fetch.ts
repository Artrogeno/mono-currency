import { IFetch } from '../interfaces/fetch'

const statusErrors = [301, 400, 401, 500]

const formatHeader = (data?: any) => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  if (data) {
    Object.keys(data).forEach((key: string) => {
      headers.append(key, data[key])
    })
  }

  return headers
}

const formatMethod = (data?: string) => {
  const listMethods = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
  let method = 'GET'

  if (data && listMethods.includes(String(data).toUpperCase())) {
    method = String(data).toUpperCase()
  }

  return method
}

const formatOptions = (opts?: IFetch): IFetch => {
  let options: IFetch = opts || {}

  options.headers = formatHeader(options.headers)
  options.method = formatMethod(options.method)
  if (options.body) {
    options.body = JSON.stringify(options.body)
  }

  return options
}

export const Fetch = (url: string, opts?: IFetch): Promise<any> => {
  const options: IFetch = formatOptions(opts)
  const response = new Promise((resolve: any, reject: any) => {
    fetch(url, options)
      .then(data => {
        let response = data.json()
        if (statusErrors.includes(data.status)) {
          console.log({ responseasasd: response })
          return reject(response)
        }
        resolve(response)
      })
      .catch(error => reject(error))
  })
  return response
}
