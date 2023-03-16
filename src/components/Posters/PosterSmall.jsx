export default function PosterSmall(props) {
    return (
        <>
            <div className="bg-white cursor-pointer hover:scale-105 rounded-3xl">
                <img src={props.img} alt="attack"  className="box w-full h-full object-cover"/>
            </div>
        </>
    )
}