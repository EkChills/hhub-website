import { cn } from "@/lib/utils";

export default function MaxWidthWrapper({className, children}: {className?: string; children: React.ReactNode}) {
    return (
        <div className={cn("container mx-auto", className)}>
            {children}
        </div>
    )
}