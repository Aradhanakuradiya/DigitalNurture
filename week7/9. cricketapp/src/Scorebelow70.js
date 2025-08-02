
const Scorebelow70 = ({ players }) => {
    return (
        <ul>
            {players
                .filter(item => item.score <= 70)
                .map((item, idx) => (
                    <li key={idx}>{item.name} {item.score}</li>
                ))
            }
        </ul>
    );
};

export default Scorebelow70;
