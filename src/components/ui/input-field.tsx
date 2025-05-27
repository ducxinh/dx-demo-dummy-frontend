import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Required } from '@/components/ui/required'
import { Control, FieldValues, Path } from 'react-hook-form'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from './button'

interface InputFieldProps<T extends FieldValues> {
  label: string
  name: Path<T>
  control: Control<T>
  type?: string
  placeholder?: string
  disabled?: boolean
  className?: string
  required?: boolean
}

export const InputField = <T extends FieldValues>({
  label,
  name,
  control,
  type = 'text',
  placeholder,
  disabled = false,
  className,
  required = true,
}: InputFieldProps<T>) => {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className={className}>
          <Label htmlFor={name} className="flex items-center gap-1">
            {label}
            <Required show={required} />
          </Label>
          <FormControl>
            <div className="relative">
              <Input
                id={name}
                type={isPassword ? (showPassword ? 'text' : 'password') : type}
                placeholder={placeholder}
                disabled={disabled}
                aria-invalid={fieldState.error ? 'true' : 'false'}
                {...field}
              />
              {isPassword && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
