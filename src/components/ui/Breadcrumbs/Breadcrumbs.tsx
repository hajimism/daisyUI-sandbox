import { FC } from "react"

interface BreadcrumbsProps {
  className?: string
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ children, className }) => {
  return (
    <div className="max-w-xs text-sm breadcrumbs">
      <ul>
        <li>Long text 1</li>
        <li>Long text 2</li>
        <li>Long text 3</li>
        <li>Long text 4</li>
        <li>Long text 5</li>
      </ul>
    </div>
  )
}
