'use client'

import { useState } from "react"
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

export default function QueryProvider({children}: {children: React.ReactNode}){
  const [queryClient] = useState(()=> new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
      {children}
    </QueryClientProvider>
  )
}