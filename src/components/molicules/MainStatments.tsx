

interface MainStatmentsProps {
children: React.ReactNode;
}

export function MainStatments({children}:MainStatmentsProps) {
    return (
        <div className='flex flex-col justify-start gap-2'>
        {children}
    </div>    
    )
}