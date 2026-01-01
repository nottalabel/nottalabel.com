import React from "react";
import Image from "next/image";

export default function ContentPreview() {
    return (
        <div className="border border-white rounded-sm">
            <Image 
                src="/Jackstreet.png" 
                alt="Blackstreet feat. Michael Jackson" 
                width={300}
            /> 
        </div>
    );
}
