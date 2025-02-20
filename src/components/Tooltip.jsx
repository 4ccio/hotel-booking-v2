import {
  Tooltip,
  // TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip";

const TooltipWrapper = ({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  delayDuration,
  skipDelayDuration,
  ...props
}) => {
  return (
    <TooltipProvider
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
    >
      <Tooltip
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
        disableHoverableContent={false}
      >
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent {...props}>
          {content}
          {/* <TooltipArrow className="fill-background" /> */}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipWrapper;
