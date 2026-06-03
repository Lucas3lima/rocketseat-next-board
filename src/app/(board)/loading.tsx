import { Skeleton } from '@/components/skeleton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Board - Loading',
}
export default async function BoardLoading() {
  return (
    <div className="max-w-[1620px] w-full mx-auto p-10 flex flex-col gap-8 h-dvh">
      <div className="grid grid-cols-4 gap-5 flex-1 items-stretch">
        <Skeleton className="w-full h-full" />
        <Skeleton className="w-full h-full" />
        <Skeleton className="w-full h-full" />
        <Skeleton className="w-full h-full" />
      </div>
    </div>
  )
}
