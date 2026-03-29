interface ContainerProps {
    children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <section className="mx-auto min-h-screen w-full max-w-[1120px] px-4 pb-12 pt-5 sm:px-6 sm:pt-8 lg:px-8">
            {children}
        </section>
    );
};
