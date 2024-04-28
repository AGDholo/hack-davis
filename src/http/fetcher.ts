export const fiappAPI = `${import.meta.env.VITE_APP_BACKEND_URL}`


export const fetcher = (url: RequestInfo | URL, jwt: string) => fetch(`${fiappAPI}${url}`, {
    headers: {
        'Authorization': `Bearer ${jwt}`
    }
}).then(r => r.json())

export const plainFetcher = (url: RequestInfo | URL) => fetch(`${url}`).then(r => r.json())