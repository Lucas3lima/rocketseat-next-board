import { ComponentProps } from 'react'
import { Button } from './button'
import { ThumbsUpIcon } from 'lucide-react'

interface LikeButtonProps extends ComponentProps<'button'> {
  issueId: string
  initalLikes: number
  initalLiked?: boolean
}

export function LikeButton({
  issueId,
  initalLikes,
  initalLiked = false,
  ...props
}: LikeButtonProps) {
  const liked = initalLiked
  return (
    <Button
      data-liked={liked}
      className="data-[liked=true]:bg-indigo-600 data-[liked=true]:hover:bg-indigo-500 data-[liked=true]:text-white"
      aria-label={liked ? 'Unlike' : 'Like'}
      {...props}
    >
      <ThumbsUpIcon className="size-3" />
      <span className="text-sm">{initalLikes}</span>
    </Button>
  )
}
