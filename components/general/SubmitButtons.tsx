"use client"

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

interface GeneralSubmitButtonProps {
    text: string;
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    icon?: React.ReactNode;
}

export function GeneralSubmitButton({ text, variant, icon }: GeneralSubmitButtonProps) {

    const { pending } = useFormStatus();

    return (
        <Button variant={variant} disabled={pending}>
            {
                pending ? (
                    <>
                        <Loader2 className="size-4 animate-spin" />
                        <span>
                            Submitting...
                        </span>
                    </>
                ) : (
                    <>
                        {icon && <div>{icon}</div>}
                        <span>{text}</span>
                    </>
                )
            }
        </Button>
    )
}