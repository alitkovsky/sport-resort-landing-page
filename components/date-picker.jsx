"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const DatePicker = () => {
   const [date, setDate] = useState(null);

   return (
      <>
         <Popover>
            <PopoverTrigger>
               <Button
                  variant="default"
                  className={cn("bg-white/60 border border-white/50 rounded-xl w-full justify-between text-left font-normal", !date && "text-black")}
               >
                  {date ? format(date, "d MMM") : <span className="text-muted-foreground">Pick a date</span>}
                  <CalendarIcon className="mr-2 h-5 w-5 text-muted-foreground" />
               </Button>
            </PopoverTrigger>
            <PopoverContent className="min-w-[] p-0">
               <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => setDate(newDate)}
                  initialFocus
               />
            </PopoverContent>
         </Popover>
      </>
  );
};

export default DatePicker;