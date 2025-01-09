import * as React from "react";
import {
  Select,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const GuestSelect = () => {
  return (
    <>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="How many guests ?" />
        </SelectTrigger>
        <SelectContent className="w-72">
          <SelectGroup>
            <SelectLabel>Guest</SelectLabel>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  )
}

export default GuestSelect;