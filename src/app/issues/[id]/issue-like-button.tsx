'use client'

import { LikeButton } from '@/components/like-button'
import { Skeleton } from '@/components/skeleton'
import { getIssueInteractions } from '@/http/get-issue-interactions'
import { useQuery } from '@tanstack/react-query'

interface IssueLikeButtonProps {
  issueId: string
}

export function IssueLikeButton({ issueId }: IssueLikeButtonProps) {
  const { data, isLoading } = useQuery({
    queryKey: ['issue-likes', issueId],
    queryFn: () => getIssueInteractions({ issueIds: [issueId] }),
  })

  if (isLoading) {
    return <Skeleton className="w-16 h-7" />
  }

  const interaction = data?.interactions[0]

  return (
    <LikeButton
      issueId={issueId}
      initalLikes={interaction?.likesCount ?? 0}
      initalLiked={interaction?.isLiked ?? false}
    />
  )
}
