import logo from "../../assets/pipeflow-logo.png";

/** Logo oficial do PipeFlow CRM: símbolo original (sem distorção) + nome do produto. */
export function Logo({ tone = "dark", size = "md" }: { tone?: "light" | "dark"; size?: "md" | "lg" }) {
  const symbol = size === "lg" ? "h-11 w-11" : "h-9 w-9";
  return (
    <span className="inline-flex items-center gap-2.5">
      <img src={logo} alt="" width={180} height={180} className={`${symbol} shrink-0 object-contain`} />
      <span className={`font-display font-extrabold tracking-tight ${size === "lg" ? "text-xl" : "text-lg"} ${tone === "dark" ? "text-white" : "text-navy-900"}`}>
        PipeFlow CRM
      </span>
    </span>
  );
}
