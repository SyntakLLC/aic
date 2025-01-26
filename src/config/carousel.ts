import aicExterior from "@/images/aic-exterior.jpg";
import aicGroup from "@/images/aic-group.jpg";
import { StaticImageData } from "next/image";

export type CarouselImage = {
    src: StaticImageData;
    alt: string;
};

export const carouselImages: CarouselImage[] = [
    {
        src: aicExterior,
        alt: "AIC Exterior",
    },
    {
        src: aicGroup,
        alt: "AIC Group",
    },
];
