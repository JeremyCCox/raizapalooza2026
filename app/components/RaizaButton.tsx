import {ReactNode} from "react";
import {InfoButton} from "@/app/types";

export default function RaizaButton({action,children, className}:{action:InfoButton,children?:ReactNode, className?:string}) {


    if(action.link){
        return (
            <a className={'mx-8 my-2'} href={action.link} >
                <button
                        className={'w-full text-2xl bg-white border-raiza-green hover:border-raiza-light-green border-4 ' + className}>
                    {children ?
                        children
                        :
                        (action.actionText ?
                                action.actionText : "No hay resultado"
                        )
                    }
                </button>
            </a>
        )
    }

    return (
        <button onClick={action.action}
                className={'mx-8 my-2 text-2xl bg-white border-raiza-green hover:border-raiza-light-green border-4 ' + className}>
            {children ?
                children
                :
                (action.actionText ?
                        action.actionText : "No hay resultado"
                )
            }
        </button>
    )
}