import { ArchiveIcon } from "lucide-react"

import { Section } from "@/components/section"
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
              <div>Card 1</div>
              <div>Card 2</div>
              <div>Card 3</div>
              <div>Card 4</div>
            </Section.Content>
          </Section.Root>
        </main>
      </h1>
    </div>
  )
}
