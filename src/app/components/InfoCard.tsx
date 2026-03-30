import Image from "next/image";
import RaizaButton from "@/app/components/RaizaButton";
type ImageDetails = {
    src: string;
    alt: string;
    action?:()=>void;
    actionableText?:string;
}
export default function InfoCard({info,stepAction}: { info:ImageDetails,stepAction?:(val:number)=>void }) {


    return (
        <div className={"grid"}>
            <div className={"bg-white flex relative border-raiza-green border-4 items-center"}>
                {stepAction &&
                    <>
                        <RaizaButton text={'Left'} action={() => stepAction(-1)} className={'fixed left-5'}/>
                        <RaizaButton text={'Right'} action={() => stepAction(1)} className={'fixed right-5'}/>
                    </>
                }
                <div className={'h-[55vh] w-[85vw] sm:h-[60vh] sm:w-[80vw] md:w-[55vw] md:h-[65vh] lg:w-[50vw] lg:h-[80vh] '}>
                    <Image loading={'lazy'} alt={info.alt}
                           src={`/infos/${info.src}`} fill />
                </div>
            </div>
            {
                info.action &&
                <RaizaButton text={info.actionableText} action={info.action} />
            }
        </div>
    )
}