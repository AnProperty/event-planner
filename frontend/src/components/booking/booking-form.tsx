/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Form,
  FormControl,
  FormDescription,
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { MessageSquare, Send } from "lucide-react";

// Form validation schema
const bookingFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  location: z.string().min(1, "Please enter the event location"),
  eventType: z.string().min(1, "Please select an event type"),
  details: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

export function BookingForm() {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      eventType: "",
      details: "",
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Booking form data:", data);

      toast.success("Booking request submitted!", {
        description: `We'll contact you soon to discuss your ${data.eventType} event.`,
      });

      form.reset();
    } catch (error) {
      toast.error("Something went wrong!", {
        description: "Please try again later or contact us directly.",
      });
    }
  };

  const eventTypes = [
    "Concert",
    "Corporate Event",
    "Wedding",
    "Birthday Party",
    "Festival",
    "Conference",
    "Club Night",
    "Private Party",
    "Other",
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-300 font-medium">
                Full Name <span className="text-red-400">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your full name"
                  className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 hover:bg-black/70 focus:border-primary transition-all h-12"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300 font-medium">
                  Phone Number <span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="+1 (555) 123-4567"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 hover:bg-black/70 focus:border-primary transition-all h-12"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300 font-medium">
                  Email Address <span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 hover:bg-black/70 focus:border-primary transition-all h-12"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="eventType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300 font-medium">
                  Event Type <span className="text-red-400">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full bg-black/50 border-white/20 text-white hover:bg-black/70 transition-colors h-12">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-gray-900 border-white/20 text-white">
                    {eventTypes.map((type) => (
                      <SelectItem
                        key={type}
                        value={type}
                        className="hover:bg-primary/20 focus:bg-primary/20"
                      >
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300 font-medium">
                  Event Location <span className="text-red-400">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Venue or address"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 hover:bg-black/70 focus:border-primary transition-all h-12"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-300 font-medium">
                Additional Details
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your vision, date preferences, guest count, budget range, special requirements, preferred vendors, decorations, entertainment needs, or any other details that will help us create your perfect event..."
                  className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 hover:bg-black/70 focus:border-primary transition-all resize-none min-h-[120px]"
                  {...field}
                />
              </FormControl>

              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="pt-4"
        >
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-black font-semibold transition-all duration-300 h-14 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {form.formState.isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                <span>Submitting Request...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Send className="h-5 w-5" />
                <span>Submit Booking Request</span>
              </div>
            )}
          </Button>
        </motion.div>
      </form>
    </Form>
  );
}
