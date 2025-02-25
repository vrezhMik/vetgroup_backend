import Image from "next/image";
import { ImagePropsInterface } from "@/utils/Interfaces";

export default function ImageComponent({ url, alt }: ImagePropsInterface) {
  return <Image src={url} alt={alt} fill />;
}
