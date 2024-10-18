import { ReactNode } from "react"

type ErrorProps = {
    children: ReactNode
}

export default function Error({children} : ErrorProps) {
  return (
    <div className="text-red-600 text-left font-bold text-xl">
        {children}
    </div>
  )
}
