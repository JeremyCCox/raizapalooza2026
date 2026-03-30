import {ReactNode} from "react";

export default function RaizaButton({action,text,children, className,link}:{action:({...args})=>void,text?:string,children?:ReactNode, className?:string,link?:string}) {


    if(link){
        return (
            <a className={'mx-8 my-2'} href={link} >
                <button onClick={action}
                        className={'w-full text-2xl bg-white border-raiza-green hover:border-raiza-light-green border-4 ' + className}>
                    {children ?
                        children
                        :
                        (text ?
                                text : "No hay resultado"
                        )
                    }
                </button>
            </a>
        )
    }

    return (
        <button onClick={action}
                className={'mx-8 my-2 text-2xl bg-white border-raiza-green hover:border-raiza-light-green border-4 ' + className}>
            {children ?
                children
                :
                (text ?
                        text : "No hay resultado"
                )
            }
        </button>
    )
}