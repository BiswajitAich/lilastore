import BeaceletClient from "./BraceletClient"

const Bracelet = () => {
    return (<BeaceletClient />)
}
export default Bracelet

export function generateMetadata() {
    return {
        title: "Bracelet Collection"
    }
}