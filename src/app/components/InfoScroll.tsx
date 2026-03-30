'use client'
import InfoCard from "@/app/components/InfoCard";


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
                actionText: "RSVP",
            }
        ],
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
        actions:[
            {
                link:"https://docs.google.com/forms/d/e/1FAIpQLSdnD1kGufkE8Ejgl2jR6yYDaz7_hkcXj-V_8u8JbcneUTK4qA/viewform?usp=dialog",
                actionText: "Villager Signup",
            },
            {
                link:"https://docs.google.com/forms/d/e/1FAIpQLSfSk6EaEF5fJqdmyRO7Scv0moBK304ZLtEsaMD_7LIIt2Lm8A/viewform?usp=dialog",
                actionText: "Vendor Signup",
            }
        ],
    },
]

export default function InfoScroll(){
    return (
        <div className={'grid gap-[16vh] justify-center '}>
            {images.map((image, index) => (
                <InfoCard info={image} key={`${index}-card`} />
            ))}
        </div>
    )
}