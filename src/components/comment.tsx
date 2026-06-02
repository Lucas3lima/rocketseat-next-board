import Link from 'next/link'
import type { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

interface CommentRootProps extends ComponentProps<'div'> {}

function CommentRoot({ className, ...props }: CommentRootProps) {
  return (
    <div className={twMerge('flex items-start gap-2', className)} {...props} />
  )
}

interface CommentAvatarProps extends ComponentProps<'img'> {}
function CommentAvatar({ className, ...props }: CommentAvatarProps) {
  return (
    // biome-ignore lint/performance/noImgElement: Github image is already optimized
    <img
      className={twMerge('size-8 rounded-full', className)}
      {...props}
      alt="Comment avatar"
    />
  )
}

interface CommentContentProps extends ComponentProps<'div'> {}
function CommentContent({ className, ...props }: CommentContentProps) {
  return (
    <div
      className={twMerge(
        'flex-1 px-3 py-2.5 bg-navy-700 rounded-lg border-[0.5px] border-navy-600 flex flex-col gap-1',
        className,
      )}
      {...props}
    />
  )
}

interface CommentHeaderProps extends ComponentProps<'div'> {}
function CommentHeader({ className, ...props }: CommentHeaderProps) {
  return (
    <div
      className={twMerge('flex items-baseline gap-1', className)}
      {...props}
    />
  )
}

interface CommentAuthorProps extends ComponentProps<'span'> {}
function CommentAuthor({ className, ...props }: CommentAuthorProps) {
  return (
    <span className={twMerge('text-sm font-medium', className)} {...props} />
  )
}

interface CommentTimeProps extends ComponentProps<'span'> {}
function CommentTime({ className, ...props }: CommentTimeProps) {
  return (
    <span className={twMerge('text-xs text-navy-200', className)} {...props} />
  )
}

interface CommentTextProps extends ComponentProps<'p'> {}
function CommentText({ className, ...props }: CommentTextProps) {
  return (
    <p
      className={twMerge('text-sm text-navy-100 leading-relaxed', className)}
      {...props}
    />
  )
}

export const Comment = {
  Root: CommentRoot,
  Avatar: CommentAvatar,
  Content: CommentContent,
  Header: CommentHeader,
  Time: CommentTime,
  Author: CommentAuthor,
  Text: CommentText,
}
