'use client'

import { useRouter } from "next/navigation";


const GoBackButton = () => {
    const router = useRouter();

    return (
        <button className="button" onClick={router.back}>Go Back</button>
    )
}
export default GoBackButton;