type ContainerProps = {
    children: React.ReactNode;
}


const Container = ({ children }: ContainerProps) => {
    return (
        <div className="mx-auto max-v-7xl">
            {children}
        </div>
    )
}


export default Container;