'use client'
import useAPI from '@/hook/useAPI'
import useMessage from '@/hook/useMessage'

export default function Home() {
    const { httpGet } = useAPI()
    const { promise } = useMessage()

    function request(url: string) {
        return async () => {
            promise(httpGet(url))
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <main className="flex gap-5">
                <button onClick={request('/')} className="button bg-green-500">
                    Success
                </button>
                <button onClick={request('/error-500')} className="button bg-red-500">
                    Error 500
                </button>
                <button onClick={request('/error-400')} className="button bg-purple-500">
                    Error 400
                </button>
            </main>
        </div>
    )
}
