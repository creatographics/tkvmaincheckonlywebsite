import { cn } from '@/lib/utils'

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <img 
            src="/images/logotkv.webp" 
            alt="TKV Creatographics" 
            className={cn('h-10 w-auto', className)}
        />
    )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <img 
            src="/images/logotkv.webp" 
            alt="TKV Creatographics" 
            className={cn('size-8', className)}
        />
    )
}

export const LogoStroke = ({ className }: { className?: string }) => (
    <img 
        src="/images/logotkv.webp" 
        alt="TKV Creatographics" 
        className={cn('size-8', className)}
    />
)
