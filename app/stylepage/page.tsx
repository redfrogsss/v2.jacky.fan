export default function StylePage() {
    return (
        <main className="min-h-screen">
            <div className="container mx-auto">
                <div className="flex flex-col gap-2">
                    <p className="text-xs">text-xs Hello World</p>
                    <p className="text-sm">text-sm Hello World</p>
                    <p className="text-base">text-base Hello World</p>
                    <p className="text-lg">text-lg Hello World</p>
                    <p className="text-xl">text-xl Hello World</p>
                    <p className="text-2xl">text-2xl Hello World</p>
                    <p className="text-3xl">text-3xl Hello World</p>
                    <p className="text-4xl">text-4xl Hello World</p>
                    <p className="text-5xl">text-5xl Hello World</p>
                    <p className="text-6xl">text-6xl Hello World</p>
                    <p className="text-7xl">text-7xl Hello World</p>
                    <p className="text-8xl">text-8xl Hello World</p>
                    <p className="text-9xl">text-9xl Hello World</p>
                </div>

                <div className="flex flex-row gap-2 my-5">
                    <button className="btn">Button</button>
                    <button className="btn btn-neutral">Neutral</button>
                    <button className="btn btn-primary">Primary</button>
                    <button className="btn btn-secondary">Secondary</button>
                    <button className="btn btn-accent">Accent</button>
                    <button className="btn btn-ghost">Ghost</button>
                    <button className="btn btn-link">Link</button>
                </div>
            </div>
        </main>
    );
}