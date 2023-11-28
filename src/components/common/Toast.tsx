import React from 'react'
import { useToast } from '../ui/use-toast'

const Toast = () => {
    const { toast } = useToast()

    const successToast = (message: string) => {
        toast({
            variant: "success",
            description: `${message}`,
        })
    }
    const failureToast = (message: string) => {
        toast({
            variant: "destructive",
            description: `${message}`,
        })
    }
    return { successToast, failureToast }
}

export default Toast