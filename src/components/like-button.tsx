import { ComponentProps } from 'react'
import { Button } from './button'
import { ThumbsUpIcon } from 'lucide-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toggleLike } from '@/http/toggle-like'
import type { IssueInteractionsResponseSchema } from '@/api/routes/schemas/issue-interactions'
import z from 'zod'

interface LikeButtonProps extends ComponentProps<'button'> {
  issueId: string
  initalLikes: number
  initalLiked?: boolean
}

type IssueInteractionsResponse = z.infer<typeof IssueInteractionsResponseSchema>

export function LikeButton({
  issueId,
  initalLikes,
  initalLiked = false,
  ...props
}: LikeButtonProps) {
  const queryClient = useQueryClient()
  const { mutate: handleToggleLike, isPending } = useMutation({
    mutationFn: () => toggleLike({ issueId }),
    onMutate: async () => {
      const previousData = queryClient.getQueryData<IssueInteractionsResponse>([
        'issue-likes',
        issueId,
      ])

      queryClient.setQueryData<IssueInteractionsResponse>(
        ['issue-likes', issueId],
        (old) => {
          if (!old) return undefined

          return {
            ...old,
            interactions: old.interactions.map((interaction) => {
              if (interaction.issueId === issueId) {
                return {
                  ...interaction,
                  isLiked: !interaction.isLiked,
                  likesCount: interaction.isLiked
                    ? interaction.likesCount - 1
                    : interaction.likesCount + 1,
                }
              }
              return interaction
            }),
          }
        },
      )
      return { previousData }
    },
    onError: async (err, _, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(['issue-likes', issueId], context.previousData)
      }

      return { error: err.message }
    },
  })
  const liked = initalLiked

  return (
    <Button
      data-liked={liked}
      className="data-[liked=true]:bg-indigo-600 data-[liked=true]:hover:bg-indigo-500 data-[liked=true]:text-white"
      aria-label={liked ? 'Unlike' : 'Like'}
      disabled={isPending}
      onClick={() => handleToggleLike()}
      {...props}
    >
      <ThumbsUpIcon className="size-3" />
      <span className="text-sm">{initalLikes}</span>
    </Button>
  )
}
