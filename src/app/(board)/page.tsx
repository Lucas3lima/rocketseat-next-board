import { ArchiveIcon, MessageCircleIcon, ThumbsUpIcon } from "lucide-react"

import { Section } from "@/components/section"
import { Card } from "@/components/card"
import { Button } from "@/components/button"
export default function Home() {
  return (
    <main className="grid grid-cols-4 gap-5 flex-1 items-stretch">
      <Section.Root>
        {/* header */}
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            Backlog
          </Section.Title>

          <Section.IssueCount>10 issues</Section.IssueCount>
        </Section.Header>

        {/* Content */}
        <Section.Content>
          <Card.Root>
            <Card.Header>
              <Card.Number>ECO-001</Card.Number>
              <Card.Title>Implementar dark mode</Card.Title>
            </Card.Header>
            <Card.Footer>
              <Button>
                <ThumbsUpIcon className="size-3" />
                <span className="text-sm">10</span>
              </Button>

              <Button>
                <MessageCircleIcon className="size-3" />
                <span className="text-sm">10</span>
              </Button>
            </Card.Footer>
          </Card.Root>
        </Section.Content>
      </Section.Root>
    </main>
  )
}
