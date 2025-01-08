import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export function CustomerServiceButton() {
  return (
    <a href="https://api.whatsapp.com/send/?phone=628118242224&text&type=phone_number&app_absent=0" className="fixed bottom-10 right-10 z-30">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="fixed bottom-5 md:bottom-10 right-5 md:right-16 p-2 md:p-4 rounded-full border border-neutral-300 bg-green-500 text-white text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
              <IconBrandWhatsapp className="w-7 h-7 md:w-9 md:h-9" />
            </button>
          </TooltipTrigger>
          <TooltipContent className="rounded-xl bg-green-600 text-white">
            <p>Contact Us on WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </a>
  );
}
