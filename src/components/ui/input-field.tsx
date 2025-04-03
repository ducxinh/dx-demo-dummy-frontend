import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Required } from '@/components/ui/required'
import { Control, FieldValues, Path } from 'react-hook-form'

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
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <Label htmlFor={name} className="flex items-center gap-1">
            {label}
            <Required show={required} />
          </Label>
          <FormControl>
            <Input id={name} type={type} placeholder={placeholder} disabled={disabled} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
