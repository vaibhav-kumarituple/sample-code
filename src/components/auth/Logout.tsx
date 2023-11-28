"use client";
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils';
interface LogoutButtonProps {
    className?: string
}



const Logout = (props: LogoutButtonProps) => {
    const router = useRouter();
    const logoutHandler = () => {

        router.push('/api')
    }
    return (
        <Button className={cn('flex ', props.className)} onClick={logoutHandler} >Logout</Button>
    )
}

export default Logout