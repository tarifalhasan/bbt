"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import g2 from "@/public/images/dex_graph_22dfdfd.png";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { LuPlusCircle } from "react-icons/lu";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import TimeChageZone from "@/components/common/TimeChageZone";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  amountToBuy: z.string(),
  cryptocurrency: z.string(),
  frequency: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  sellingPercentageValue: z.number(),
  sellDate: z.date(),
  enableSelling: z.boolean(),
});

const DexCalculator = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cryptocurrency: "BTC",
      frequency: "month",
      sellingPercentageValue: 20,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="bg-card py-4 px-2 xl:px-4 border rounded-base">
      <div className=" pt-4">
        <h2 className="text-center text-lg lg:text-xl xl:text-2xl font-semibold text-[#C3C3C3]">
          Calculator
        </h2>
      </div>
      <div className=" flex items-start flex-col lg:flex-row gap-5 pt-5">
        <Form {...form}>
          <form
            className=" space-y-5 w-full lg:max-w-[253px]"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className=" bg-black/[0.25] text-sm font-semibold px-3 py-2.5">
              BUYING
            </div>

            <FormField
              control={form.control}
              name="amountToBuy"
              render={({ field }) => (
                <FormItem className=" space-y-2">
                  <FormLabel className="text-sm font-semibold">
                    1.Enter amount to buy
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="USD" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cryptocurrency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold">
                    {" "}
                    2.Select cryptocurrency
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="BTC">BTC/USDT</SelectItem>
                      <SelectItem value="ETH">ETH</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="frequency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold">
                    3.Select Frequency
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="month">Month</SelectItem>
                      <SelectItem value="year">Year</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className=" space-y-2">
              <Label className="text-sm font-semibold">
                4.Select start and end date
              </Label>
              <div className=" space-y-3">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                " pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a start date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                " pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a end date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className=" bg-black/[0.25] text-sm font-semibold px-3 py-2.5">
              SELLING
            </div>
            <div className=" space-y-2"></div>
            <FormField
              control={form.control}
              name="sellingPercentageValue"
              render={({ field: { value, onChange } }) => (
                <FormItem className=" space-y-2">
                  <FormLabel className="text-sm font-semibold">
                    5.Set a percentage value {value}%
                  </FormLabel>
                  <FormControl>
                    <Slider
                      min={0}
                      max={100}
                      step={1}
                      defaultValue={[value]}
                      onValueChange={(vals) => {
                        onChange(vals[0]);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className=" space-y-2">
              <Label className="text-sm font-semibold">
                6.Select sell date
              </Label>
              <div className="flex items-center gap-2">
                <FormField
                  control={form.control}
                  name="sellDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                " pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a end date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button>
                  <LuPlusCircle className=" text-primary" size={27} />
                </button>
              </div>
            </div>
            <FormField
              control={form.control}
              name="enableSelling"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      <label
                        htmlFor="terms"
                        className="text-sm  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Enable selling
                      </label>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <div>
              <Button>Calculate</Button>
            </div>
          </form>
        </Form>
        <div className="flex-1 w-full p-4 space-y-4   h-full">
          <div className=" space-y-5 max-w-[424px]">
            <h2 className=" text-sm text-wrap xl:text-base font-extrabold">
              You are buying{" "}
              <span className="text-primary">
                ${form.getValues("amountToBuy")}
              </span>{" "}
              of{" "}
              <span className="text-primary">
                {form.getValues("cryptocurrency")}
              </span>{" "}
              every month, from{" "}
              <span className="text-primary">
                {form.getValues("startDate")
                  ? format(form.getValues("startDate"), "MMMM d, yyyy")
                  : "Pick a start date"}
              </span>{" "}
              to{" "}
              <span className="text-primary">
                {form.getValues("endDate")
                  ? format(form.getValues("endDate"), "MMMM d, yyyy")
                  : "Pick an end date"}
              </span>
              .
            </h2>
            <h2 className=" text-sm text-wrap xl:text-base font-extrabold">
              You are Sell{" "}
              <span className="text-lose">
                {form.getValues("sellingPercentageValue")}%
              </span>{" "}
              of{" "}
              <span className="text-lose">
                {form.getValues("cryptocurrency")}
              </span>{" "}
              on{" "}
              <span className="text-lose">
                {form.getValues("sellDate")
                  ? format(form.getValues("sellDate"), "MMMM d, yyyy")
                  : "August 1, 2023"}
              </span>
            </h2>
            <div>
              <ul className=" border px-4 bg-light_gray rounded-[7px]">
                <li className="flex items-center border-b py-3 justify-between">
                  <span className=" block text-sm font-semibold text-gray">
                    Expected PnL %
                  </span>
                  <span className=" block text-sm font-semibold text-primary">
                    1020.876%
                  </span>
                </li>
                <li className="flex items-center border-b py-3 justify-between">
                  <span className=" block text-sm font-semibold text-gray">
                    Expected PnL (in USD)
                  </span>
                  <span className=" block text-sm font-semibold text-primary">
                    $90,810.50 USD
                  </span>
                </li>
                <li className="flex items-center border-b py-3 justify-between">
                  <span className=" block text-sm font-semibold text-gray">
                    Potential loss (in USD)
                  </span>
                  <span className=" block text-sm font-semibold  text-red-500">
                    $7,823.27 USD
                  </span>
                </li>
                <li className="flex items-center border-b py-3 justify-between">
                  <span className=" block text-sm font-semibold text-gray">
                    Average DCA Price
                  </span>
                  <span className=" block text-sm font-semibold text-white">
                    $90,810.50 USD
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className=" w-full">
            <div className="flex justify-end items-center">
              <button className="text-base font-semibold h-[46px]  px-8 rounded-t-[7px] bg-background">
                Price
              </button>
              <button className="text-base font-semibold h-[46px]  px-8 rounded-t-[7px] bg-primary text-background">
                Chart
              </button>
            </div>
            <div className=" bg-light_gray rounded-base border p-4">
              <div className=" inline-block">
                <TimeChageZone />
              </div>
              <div className=" relative overflow-hidden">
                <Image
                  className=" w-full block mx-auto object-contain"
                  alt="gt"
                  src={g2}
                />
              </div>
            </div>
            <div className=" flex pt-3 justify-end">
              <Button className=" px-5 bg-[#44FF9A] hover:bg-[#44FF9A]/50">
                Execute
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DexCalculator;
