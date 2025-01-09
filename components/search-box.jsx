"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin } from "lucide-react";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

import DatePicker from "@/components/date-picker";
import GuestSelect from "@/components/guest-select";

const SearchBox = () => {
  return (
    <motion.div
      className="search-box backdrop-blur-lg flex flex-col w-full max-w-[488px] max-h-max rounded-[20px] p-10"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0}}
    >
      <div className="mb-[20px]">
        <Label htmlFor="destination">Where are you going?</Label>
        <div className="flex relative items-center mb-[1.25rem]">
          <Input placeholder="try Singapore" id="destination" />
          <MapPin size={24} className="absolute right-6 text-muted-foreground" />
        </div>

        <div className="flex flex-col xl:flex-row gap-x-[30px] gap-y-5 xl:gap-y-0">
          <div className="flex flex-col flex-1">
            <Label>Check in</Label>
            <DatePicker />
          </div>

          <div className="flex flex-col flex-1">
            <Label>Check out</Label>
            <DatePicker />
          </div>

        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col flex-1 mb-[1.5rem]">
          <Label>Guests</Label>
          <GuestSelect />
        </div>
        <div className="flex items-center gap-x-3 mb-[1.5rem]">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="font-semibold mb-0">Pay when checking in ?</Label>
        </div>
        <Button size="lg" variant="accent">
          Search Hotel
        </Button>
      </div>
    </motion.div>
  );
};

export default SearchBox;