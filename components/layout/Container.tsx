interface ContainerProps {
    children: React.ReactNode;
}

export const Container = ({children}: ContainerProps) => {
    return (
        <section className="w-full max-w-[1020px] items-center justify-center
            min-h-screen font-[family-name:var(--font-geist-sans) mx-auto
            p-4"
        >
            {children}
        </section>
    )
}