import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function RSVPForm() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">RSVP</h2>
        <div className="max-w-md mx-auto">
          <form className="grid gap-4">
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" type="email" />
            <Select>
              <SelectTrigger id="guests">
                <SelectValue placeholder="Number of Guests" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
            <Button>Submit RSVP</Button>
          </form>
        </div>
      </div>
    </section>
  )
}