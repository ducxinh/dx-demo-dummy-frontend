// import pluralizeLib from 'pluralize'

// export function pluralize(word: string): string {
//   if (!word) return word
//   return pluralizeLib.plural(word.toLowerCase())
// }

export function toKebabCase(str: string): string {
  return (
    str
      // Insert hyphen between lower and upper case letters
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      // Convert to lowercase
      .toLowerCase()
  )
}
