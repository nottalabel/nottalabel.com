import React from "react";
import Image from "next/image";

export default function ContentPreview() {
    return (
        <div className="border border-white rounded-sm m-1">
            <Image 
                src="/Jackstreet.png" 
                alt="Blackstreet feat. Michael Jackson" 
                width={150}
                height={150}
            /> 
        </div>
    );
}
