import { ArchiveIcon, MessageCircleIcon, ThumbsUpIcon } from 'lucide-react'

import { Section } from '@/components/section'
import { Card } from '@/components/card'
import { Button } from '@/components/button'
import type { Metadata } from 'next'
import { listIssues } from '@/http/list-issues'

interface BoardProps {
  searchParams: Promise<{ q?: string }>
}
export const metadata: Metadata = {
  title: 'Board',
}
export default async function Board({ searchParams }: BoardProps) {
  const { q } = await searchParams
  const issues = await listIssues({ search: q })
  return (
    <main className="grid grid-cols-4 gap-5 flex-1 items-stretch">
      <Section.Root>
        {/* header */}
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            Backlog
          </Section.Title>

          <Section.IssueCount>
            {issues.backlog.length} issues
          </Section.IssueCount>
        </Section.Header>

        {/* Backlog Content */}
        <Section.Content>
          {issues.backlog.length === 0 ? (
            <div className="flex items-center justify-center py-8 text-center">
              <p className="text-sm text-navy-300">
                No issues matching your filters
              </p>
            </div>
          ) : (
            issues.backlog.map((issue) => (
              <Card.Root key={issue.id}>
                <Card.Header>
                  <Card.Number>{issue.issueNumber}</Card.Number>
                  <Card.Title>{issue.title}</Card.Title>
                </Card.Header>
                <Card.Footer>
                  <Button>
                    <ThumbsUpIcon className="size-3" />
                    <span className="text-sm">1</span>
                  </Button>

                  <Button>
                    <MessageCircleIcon className="size-3" />
                    <span className="text-sm">{issue.comments}</span>
                  </Button>
                </Card.Footer>
              </Card.Root>
            ))
          )}
        </Section.Content>
      </Section.Root>
      <Section.Root>
        {/* header */}
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            Todo
          </Section.Title>

          <Section.IssueCount>{issues.todo.length} issues</Section.IssueCount>
        </Section.Header>

        {/* Todo Content */}
        <Section.Content>
          {issues.todo.length === 0 ? (
            <div className="flex items-center justify-center py-8 text-center">
              <p className="text-sm text-navy-300">
                No issues matching your filters
              </p>
            </div>
          ) : (
            issues.todo.map((issue) => (
              <Card.Root key={issue.id}>
                <Card.Header>
                  <Card.Number>{issue.issueNumber}</Card.Number>
                  <Card.Title>{issue.title}</Card.Title>
                </Card.Header>
                <Card.Footer>
                  <Button>
                    <ThumbsUpIcon className="size-3" />
                    <span className="text-sm">1</span>
                  </Button>

                  <Button>
                    <MessageCircleIcon className="size-3" />
                    <span className="text-sm">{issue.comments}</span>
                  </Button>
                </Card.Footer>
              </Card.Root>
            ))
          )}
        </Section.Content>
      </Section.Root>
      <Section.Root>
        {/* header */}
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            In Progress
          </Section.Title>

          <Section.IssueCount>
            {issues.in_progress.length} issues
          </Section.IssueCount>
        </Section.Header>

        {/* Todo Content */}
        <Section.Content>
          {issues.in_progress.length === 0 ? (
            <div className="flex items-center justify-center py-8 text-center">
              <p className="text-sm text-navy-300">
                No issues matching your filters
              </p>
            </div>
          ) : (
            issues.in_progress.map((issue) => (
              <Card.Root key={issue.id}>
                <Card.Header>
                  <Card.Number>{issue.issueNumber}</Card.Number>
                  <Card.Title>{issue.title}</Card.Title>
                </Card.Header>
                <Card.Footer>
                  <Button>
                    <ThumbsUpIcon className="size-3" />
                    <span className="text-sm">1</span>
                  </Button>

                  <Button>
                    <MessageCircleIcon className="size-3" />
                    <span className="text-sm">{issue.comments}</span>
                  </Button>
                </Card.Footer>
              </Card.Root>
            ))
          )}
        </Section.Content>
      </Section.Root>
      <Section.Root>
        {/* header */}
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            Done
          </Section.Title>

          <Section.IssueCount>{issues.done.length} issues</Section.IssueCount>
        </Section.Header>

        {/* Todo Content */}
        <Section.Content>
          {issues.done.length === 0 ? (
            <div className="flex items-center justify-center py-8 text-center">
              <p className="text-sm text-navy-300">
                No issues matching your filters
              </p>
            </div>
          ) : (
            issues.done.map((issue) => (
              <Card.Root key={issue.id}>
                <Card.Header>
                  <Card.Number>{issue.issueNumber}</Card.Number>
                  <Card.Title>{issue.title}</Card.Title>
                </Card.Header>
                <Card.Footer>
                  <Button>
                    <ThumbsUpIcon className="size-3" />
                    <span className="text-sm">1</span>
                  </Button>

                  <Button>
                    <MessageCircleIcon className="size-3" />
                    <span className="text-sm">{issue.comments}</span>
                  </Button>
                </Card.Footer>
              </Card.Root>
            ))
          )}
        </Section.Content>
      </Section.Root>
    </main>
  )
}
