export default function Poster(props) {

    const dimensoes = {
        col:`col-span-${props.w}`,
        start1:`col-start-${props.ws}`,
        end1:`col-end-${props.we}`,
        row:`row-span-${props.h}`,  
        start2:`row-start-${props.hs}`,  
        end2:`row-end-${props.he}`  
    }
    const {col, row, start1, end1 , start2, end2} = dimensoes
    return (
        <>
            <div className={`w-full overflow-hidden ${start1} ${end1} ${start2} ${end2} ${col} ${row} rounded-2xl cursor-pointer hover:scale-105`}>
                <h1 className="text-white absolute m-4 bg-slate-600 px-6 opacity-80 rounded-md">{props.name}</h1> 
                <img src={props.img} className="w-full h-full object-cover object-center"/>
            </div>
        </>
    )
}