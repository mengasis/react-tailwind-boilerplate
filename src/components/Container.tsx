import type { ReactNode } from "react"

interface Props{
    children: ReactNode
}

function Container(props: Props ){
    return <div className=" bg-emerald-400 min-w-[300px] min-h-[300px] max-w-[800px] rounded-xl">{props.children}</div>
}

export default Container