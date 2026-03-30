import Image from "next/image";
import RaizaButton from "@/app/components/RaizaButton";
import {ImageDetails} from "@/app/types";
export default function InfoCard({info,stepAction}: { info:ImageDetails,stepAction?:(val:number)=>void }) {
    return (
        <div className={"grid"}>
            <div className={"bg-white flex relative border-raiza-green border-4 items-center"}>
                {stepAction &&
                    <>
                        <RaizaButton action={{actionText:"Left",action:()=>stepAction(-1)}}  className={'fixed left-5'}/>
                        <RaizaButton action={{actionText:"Right",action:()=>stepAction(1)}} className={'fixed right-5'}/>
                    </>
                }
                <div className={'h-[55vh] w-[85vw] sm:h-[60vh] sm:w-[80vw] md:w-[55vw] md:h-[65vh] lg:w-[50vw] lg:h-[80vh] relative '}>
                    <Image loading={'lazy'} alt={info.alt}
                           src={`/infos/${info.src}`} fill />
                </div>
            </div>
            {
                info.actions?.map((action,index) => (
                    <RaizaButton action={action} key={`action-${index}`}/>
                ))
            }
        </div>
    )
}