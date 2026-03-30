'use client'
import {useState} from "react";
import InfoCard from "@/app/components/InfoCard";


type ImageDetails = {
    src: string;
    alt: string;
    action?:()=>void;
    actionableText?:string;
}


const images = [
    {
        src:"RP2026_MAIN.png",
        alt:"Raizapalooza main poster",
    },
    {
        src:"RP2026_INFO.png",
        alt:"Raizapalooza main information",
        actions:[
            {
                link:"https://docs.google.com/forms/d/e/1FAIpQLSfoRcM9-74oSiY-hH5MCzUv4IUZA-TqsiBBCyRNO5dabWN5bQ/viewform?usp=dialog",
                actionableText:"RSVP"
            }
        ],
        action:()=>{},
        link:"https://docs.google.com/forms/d/e/1FAIpQLSfoRcM9-74oSiY-hH5MCzUv4IUZA-TqsiBBCyRNO5dabWN5bQ/viewform?usp=dialog",
        actionableText:"RSVP"
    },
    {
        src:"RP2026_TABLES.png",
        alt:"Information about the tables that will be at Raizapalooza",
    },
    {
        src:"RP2026_RETURNING.png",
        alt:"List of the returning Raizapalooza Vendors",
    },
    {
        src:"RP2026_NEW.png",
        alt:"List of new Vendors that will be at Raizapalooza",
        actions: [
            {
                action:()=>{console.log('fuck')},
                actionableText:"Log FUCK"
            },
            {
                link:"jcox.ca",
                actionableText:"Go FUCK"
            }
        ],
        action:()=>{console.log('fuck')},
        actionableText:"Log FUCK"
    },
]

export default function InfoCarousel(){
    const [pos, setPos] = useState<number>(0)
    const [image, setImage ]= useState<ImageDetails>(images[pos])

    const pickNext = (val:number) => {
        const nextPos = pos + val
        if(nextPos === -1 || nextPos === images.length){
            return
        }
        setPos((prev) => prev + val)
        setImage(images[pos+val])
    }

    return (
        <div className={"h-screen grid justify-center items-start"}>
            <InfoCard info={image} stepAction={pickNext}/>
            {/*<div className={"flex border-raiza-green border-4 bg-white"}>*/}
            {/*    <button className={'text-2xl'}>*/}
            {/*        text*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    )
}