import { useCallback } from 'react'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export default function useAPI() {
    const httpGet = useCallback(async (path: string) => {
        const url = BASE_URL + (path.startsWith('/') ? path : `/${path}`)
        const resp = await fetch(url)

        const data = await resp.json()
        if (!resp.ok) throw data

        return data
    }, [])

    return { httpGet }
}
