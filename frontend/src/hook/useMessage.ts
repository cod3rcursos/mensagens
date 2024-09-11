import { useCallback } from 'react'
import { toast } from 'react-toastify'

export default function useMessage() {
    const success = useCallback((message: string) => {
        toast.success(message)
    }, [])

    const error = useCallback((message: string) => {
        toast.error(message)
    }, [])

    const promise = useCallback(async (promise: Promise<any>) => {
        await toast.promise(promise, {
            pending: 'Processando requisição... ⏳',
            success: 'Tudo certo por aqui! 🎉',
            error: {
                render({ data }: any) {
                    if (Array.isArray(data.errors)) {
                        data.errors.forEach((error: any, i: number) => {
                            if (i === 0) return
                            toast.error(error.message)
                        })
                        return data.errors[0].message
                    }
                    return 'Ocorreu um erro inesperado.💥'
                },
            },
        })
    }, [])

    return { success, error, promise }
}
