import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <div className="py-section container">
      <form className="space-y-4">
        <div>
          <Label htmlFor="test">Test</Label>
          <Input required id="test" />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
