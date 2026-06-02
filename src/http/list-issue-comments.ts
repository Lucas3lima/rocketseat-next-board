import { CommentsListResponseSchema } from '@/api/routes/list-issue-comments'
import { setTimeout } from 'node:timers/promises'

interface ListIssueCommentsParams {
  issueId: string
}

export async function listIssueComments({ issueId }: ListIssueCommentsParams) {
  await setTimeout(2000)
  const url = new URL(
    `api/issues/${issueId}/comments`,
    process.env.NEXT_PUBLIC_API_URL,
  )

  const response = await fetch(url)

  const data = await response.json()

  return CommentsListResponseSchema.parse(data)
}
