import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from '@/components/ui/card'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='mb-2 text-3xl font-bold'>
          NextJS Starter Template with Shad cn UI
        </h1>
        {/* <div className='flex flex-col'> */}
        <ThemeToggle />
        <br />
        <Button className='mt-4 hover:bg-orange-500' variant='destructive'>
          Shadcn UI button
        </Button>
        {/* </div> */}
        <Card className='mt-6 w-[350px] pl-3 pt-3'>
          <CardTitle className='text-xl'>Shad CN UI Card</CardTitle>
          <CardDescription>Deploy your project easily here</CardDescription>
          <CardContent>
            Here is some content for the Shad cn UI card
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
