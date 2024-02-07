/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0BuNevG9Haq
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Form() {
  return (
    <Card className="max-w-2xl mx-auto my-10 p-6 bg-white rounded-xl shadow-md space-y-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Journal Entry</CardTitle>
        <CardDescription className="text-gray-500">Provide details for your daily journal entry.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="date-time">Date and Time</Label>
            <Input className="w-full" id="date-time" type="datetime-local" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input className="w-full" id="title" placeholder="Title of your entry" type="text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mood">Mood</Label>
            <Select>
              <SelectTrigger aria-label="Mood" id="mood">
                <SelectValue placeholder="Select Mood" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="happy">Happy</SelectItem>
                <SelectItem value="sad">Sad</SelectItem>
                <SelectItem value="neutral">Neutral</SelectItem>
                <SelectItem value="excited">Excited</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="workout">Workout</Label>
            <Select>
              <SelectTrigger aria-label="Workout" id="workout">
                <SelectValue placeholder="Did you workout?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="entry-text">Your Entry</Label>
            <Textarea className="w-full h-32" id="entry-text" placeholder="Write your entry here..." />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Submit Entry</Button>
      </CardFooter>
    </Card>
  )
}

