"use client";

import { useEffect, useState } from "react";

const formatteur = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});

type CurrencyProps = {
    value?: string | number;
}

const Currency = ({ value }: CurrencyProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="font-semibold">
            {formatteur.format(Number(value))}
        </div>
    )
};

export default Currency;