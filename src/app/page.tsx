import { ArchiveIcon, MessageCircleIcon, ThumbsUpIcon } from "lucide-react"

import { Section } from "@/components/section"
import { Card } from "@/components/card"
export default function Home() {
  return (
    <div>
      <h1 className="max-w-[1620px] w-full mx-auto p-10 flex flex-col gap-8 h-dvh">
        <div>Header</div>

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
                  <button
                    type="button"
                    className="text-navy-100 flex items-center gap-2 rounded-lg px-2.5 py-1 bg-navy-600 cursor-pointer"
                  >
                    <ThumbsUpIcon className="size-3" />
                    <span className="text-sm">10</span>
                  </button>

                  <button
                    type="button"
                    className="text-navy-100 flex items-center gap-2 rounded-lg px-2.5 py-1 bg-navy-600 cursor-pointer"
                  >
                    <MessageCircleIcon className="size-3" />
                    <span className="text-sm">10</span>
                  </button>
                </Card.Footer>
              </Card.Root>
            </Section.Content>
          </Section.Root>
        </main>
      </h1>
    </div>
  )
}
