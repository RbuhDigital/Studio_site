type ServiceIconProps = {
  kind: "web" | "content" | "design" | "growth";
};

export function ServiceIcon({ kind }: ServiceIconProps) {
  return (
    <span className={`service-icon service-icon--${kind}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}
