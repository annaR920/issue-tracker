import { Text } from '@radix-ui/themes'
import React, { PropsWithChildren, ReactNode } from 'react'

//Note that PropsWithChildren replaces below interface
// interface Props {
//     children: ReactNode
// }

//This is a single place to get the errors 
//so can remove {errors.title && (<Text color="red" as="p"> {errors.title.message} </Text>)}  from NewIssuePage
const ErrorMessage = ({ children }: PropsWithChildren) => {
    if (!children) return null; //if no data then don't try to render.
    return (
        <Text color="red" as="p" >{ children }</Text>
    )
}

export default ErrorMessage