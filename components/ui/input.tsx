import * as React from "react"

import { cn } from "@/lib/utils"
import { IconAlertCircle, IconEye, IconEyeOff } from "@tabler/icons-react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    errors?: string
    setType?: React.Dispatch<React.SetStateAction<string>>
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ errors, setType, id, className, type, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {type !== 'textarea'
          ? 
            <div className="relative">
              <input
                type={type}
                className={cn(
                  "flex h-9 w-full rounded-md border border-input bg-transparent pl-3 pr-10 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                  className
                )}
                ref={ref}
                {...props}
              />
              {id === 'password' && type === 'password' 
                  ? <IconEyeOff className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 cursor-pointer" onClick={()=>setType!('text')}/>
                  : id === 'password' && type === 'text' 
                  && <IconEye className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 cursor-pointer" onClick={()=>setType!('password')} />
              }
            </div>

          : <textarea
              className={cn(
                "flex h-24 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                className
              )}
              // @ts-expect-error this is textarea
              ref={ref}
              {...props}
            />
        }
        
        {errors && 
          <span className="text-red-500 text-xs bg-red-100 rounded-md flex items-center gap-1 w-fit">
            <IconAlertCircle className="h-3 w-3"/>
            {errors}
          </span>
        }
      </div>

    )
  }
)
Input.displayName = "Input"

export { Input }
