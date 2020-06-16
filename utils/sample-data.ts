import { Blog } from '../interfaces'

const kanyeIpsum = `I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything.
Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible to get a pure thought out. It’s like a little kid, a little boy, looking at colors, and no one told him what colors are good, before somebody tells you you shouldn’t like pink because that’s for girls, or you’d instantly become a gay two-year-old. Why would anyone pick blue over pink? Pink is obviously a better color. Everyone’s born confident, and everything’s taken away from you
If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.`

/** Dummy user data. */
export const sampleBlogData: Blog[] = [
  { id: 101, name: 'Technical Interview Questions', readingTime: 2, metadata: 'A mental model for answering questions', body: kanyeIpsum },
  { id: 102, name: 'Algorithms' },
  { id: 103, name: 'Learning a new language' },
  { id: 104, name: 'Mental Models' },
]