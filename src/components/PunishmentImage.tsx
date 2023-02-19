import React from "react";
export interface PunishmentImageProps {
    width:number,
    height:number
}

const PunishmentImage:React.FC<PunishmentImageProps> = 
(inputPunishmentImageProps:PunishmentImageProps) => {
return (    <img src='https://picsum.photos/15/15' alt =""/>   );
}

export default PunishmentImage;
