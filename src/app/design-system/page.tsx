const colorSwatches = [
  {
    name: "Terracotta",
    swatches: [
      { label: "DEFAULT", className: "bg-terracotta" },
      { label: "light", className: "bg-terracotta-light" },
      { label: "dark", className: "bg-terracotta-dark" },
    ],
  },
  {
    name: "Cream",
    swatches: [
      { label: "DEFAULT", className: "bg-cream border border-cream-border" },
      { label: "card", className: "bg-cream-card border border-cream-border" },
      { label: "border", className: "bg-cream-border" },
    ],
  },
  {
    name: "Coffee",
    swatches: [
      { label: "DEFAULT", className: "bg-coffee" },
      { label: "muted", className: "bg-coffee-muted" },
      { label: "subtle", className: "bg-coffee-subtle" },
    ],
  },
  {
    name: "Leaf",
    swatches: [
      { label: "DEFAULT", className: "bg-leaf" },
      { label: "light", className: "bg-leaf-light" },
    ],
  },
  {
    name: "Sun",
    swatches: [
      { label: "DEFAULT", className: "bg-sun" },
      { label: "light", className: "bg-sun-light" },
    ],
  },
  {
    name: "Berry",
    swatches: [
      { label: "DEFAULT", className: "bg-berry" },
      { label: "light", className: "bg-berry-light" },
    ],
  },
];

export default function DesignSystemPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-12 px-6 py-12">
      <header className="space-y-2">
        <h1 className="text-h1 text-coffee">Lumo Design System</h1>
        <p className="text-body text-coffee-muted">
          Visual verification page — not part of the final product.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-h2 text-coffee">Colors</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {colorSwatches.map((group) => (
            <div key={group.name} className="space-y-3">
              <h3 className="text-h3 text-coffee">{group.name}</h3>
              <div className="flex flex-wrap gap-3">
                {group.swatches.map((swatch) => (
                  <div key={swatch.label} className="space-y-1.5">
                    <div
                      className={`size-16 rounded-md ${swatch.className}`}
                    />
                    <p className="text-caption text-coffee-muted">
                      {swatch.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-h2 text-coffee">Typography</h2>
        <div className="space-y-4 rounded-lg border border-cream-border bg-cream-card p-6">
          <p className="text-h1 text-coffee">Heading 1 — Discover your next workspace</p>
          <p className="text-h2 text-coffee">Heading 2 — Cafes near you</p>
          <p className="text-h3 text-coffee">Heading 3 — Coworking friendly</p>
          <p className="text-body text-coffee">
            Body — Find cafes across Sri Lanka with reliable WiFi, power outlets,
            and a calm atmosphere for focused work.
          </p>
          <p className="text-caption text-coffee-muted">
            Caption — Updated 2 hours ago · Colombo
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-h2 text-coffee">Accent Font</h2>
        <p className="font-accent text-[28px] leading-[1.2] font-semibold text-terracotta">
          Your perfect work spot, just around the corner.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-h2 text-coffee">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            className="rounded-md bg-terracotta px-5 py-2.5 text-body font-medium text-white transition-colors hover:bg-terracotta-dark"
          >
            Find a cafe
          </button>
          <button
            type="button"
            className="rounded-md border-2 border-terracotta bg-transparent px-5 py-2.5 text-body font-medium text-terracotta transition-colors hover:bg-terracotta-light"
          >
            List your cafe
          </button>
        </div>
      </section>
    </main>
  );
}
