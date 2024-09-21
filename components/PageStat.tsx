interface PageStatProps{
  pageName: string;
  className?: string;
}

export const PageStat = ({pageName, className}: PageStatProps) => {

  return (
    <div className="fixed hidden md:flex flex-col gap-10 left-[38px] lg:left-[63px] top-0">
      <div className="h-[104px] w-[1px] bg-[#C8CCD8]" />
      <span
      className={`font-medium text-[18px] leading-[24px] tracking-[18px] uppercase text-[#C8CCD8] rotate-90 absolute ${className}`}>
        {pageName}
      </span>
    </div>
  );
};
