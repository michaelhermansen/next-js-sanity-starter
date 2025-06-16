import { Button } from "@/components/ui/button";
import { Card, CardContent, CardLink } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <div>
      <div className="py-section container border-b">
        <form className="space-y-4">
          <div>
            <Label htmlFor="test">Test</Label>
            <Input required id="test" />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </div>

      <div className="py-section container border-b">
        <Card clickable>
          <CardContent>
            <CardLink href="/">Hallo</CardLink>
            <p>Test</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
