
const ListofIndianPlayers = ()=>{
const T20Players=['First Player','Second Player','Third Player'];
const RanjiTrophyPlayers = ['Fourth Player','Fifth Player','Sixth Player'];

const merge = [...T20Players,...RanjiTrophyPlayers];

return(
    <>
     <ul>
            {merge.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
        </ul>
         
    </>
)
}
export default ListofIndianPlayers;