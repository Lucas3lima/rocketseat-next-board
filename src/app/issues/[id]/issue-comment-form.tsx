'use client'

import { Input } from '@/components/input'
import { Loader2Icon, MessageCirclePlusIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { authClient } from '@/lib/auth-client'

const createCommentSchema = z.object({
  text: z.string().min(1, 'Comment cannot be empty'),
})

type CreateCommentSchema = z.infer<typeof createCommentSchema>

interface IssueCommentFormProps {
  isAuthenticated: boolean
  onCreateComment: (text: string) => Promise<void>
}

export function IssueCommentForm({
  onCreateComment,
  isAuthenticated,
}: IssueCommentFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateCommentSchema>({
    resolver: zodResolver(createCommentSchema),
  })

  async function handleCreateComment(data: CreateCommentSchema) {
    await onCreateComment(data.text)

    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreateComment)}
      className="relative w-full"
    >
      <Input
        className="w-full bg-navy-900 h-11 pr-24 "
        placeholder={
          !isAuthenticated ? 'Sign in to comment' : 'Leave a comment'
        }
        disabled={!isAuthenticated || isSubmitting}
        {...register('text')}
      />
      {errors.text && (
        <span className="text-red-400 text-xs mt-1">{errors.text.message}</span>
      )}
      <button
        type="submit"
        disabled={isSubmitting || !isAuthenticated}
        className="flex items-center gap-2 absolute text-indigo-400 right-3 top-1/2 -translate-y-1/2 cursor-pointer text-xs hover:text-indigo-300 disabled:opacity-50"
      >
        Publish
        {isSubmitting ? (
          <Loader2Icon className="size-3 animate-spin" />
        ) : (
          <MessageCirclePlusIcon className="size-3" />
        )}
      </button>
    </form>
  )
}
