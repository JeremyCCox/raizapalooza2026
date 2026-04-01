export type ImageDetails = {
    src: string;
    alt: string;
    actions?:InfoButton[];
    action?:()=>void;
    actionableText?:string;
    link?:"https://docs.google.com/forms/d/e/1FAIpQLSfoRcM9-74oSiY-hH5MCzUv4IUZA-TqsiBBCyRNO5dabWN5bQ/viewform?usp=dialog",
}


export type InfoButton = {
    action?:({...args})=>void;
    actionText?:string;
    link?:string,

}