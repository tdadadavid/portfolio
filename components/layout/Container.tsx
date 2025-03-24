interface ContainerProps {
    children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <section className="grid grid-rows-[20px_1fr_20px] items-center w-lg justify-center min-h-screen font-[family-name:var(--font-geist-sans)">
            {children}
        </section>
    )
}